/**
 * Скрипт для объединения отдельных JSON файлов от Decap CMS в массивы
 *
 * Decap CMS создаёт отдельные файлы для каждой записи:
 * - data/news-1.json
 * - data/news-2.json
 *
 * Этот скрипт объединяет их в массивы:
 * - data/news.json (массив всех новостей)
 *
 * Запускается автоматически перед сборкой сайта (prebuild)
 */

const fs = require('fs')
const path = require('path')

const dataDir = path.join(__dirname, '../data')

/**
 * Объединить файлы по паттерну в один массив
 * @param {string} pattern - Паттерн имени файла (например: 'news-')
 * @param {string} outputFile - Выходной файл (например: 'news.json')
 */
function mergeJSONFiles(pattern, outputFile) {
  try {
    // Получить все файлы в папке data
    const files = fs.readdirSync(dataDir)

    // Найти файлы по паттерну
    const matchingFiles = files.filter(f =>
      f.startsWith(pattern) &&
      f.endsWith('.json') &&
      f !== outputFile // Не включать сам выходной файл
    )

    if (matchingFiles.length === 0) {
      console.log(`⚠️  No files found matching pattern: ${pattern}*.json`)
      // Если файлов нет, но есть старый массив - оставить его
      const outputPath = path.join(dataDir, outputFile)
      if (!fs.existsSync(outputPath)) {
        // Создать пустой массив
        fs.writeFileSync(outputPath, JSON.stringify([], null, 2))
        console.log(`✅ Created empty ${outputFile}`)
      }
      return
    }

    // Прочитать и распарсить все файлы
    const items = matchingFiles.map(filename => {
      const filePath = path.join(dataDir, filename)
      const content = fs.readFileSync(filePath, 'utf-8')
      try {
        return JSON.parse(content)
      } catch (error) {
        console.error(`❌ Error parsing ${filename}:`, error.message)
        return null
      }
    }).filter(item => item !== null) // Удалить невалидные файлы

    // Сортировать по ID (если есть)
    items.sort((a, b) => {
      const idA = parseInt(a.id) || 0
      const idB = parseInt(b.id) || 0
      return idA - idB
    })

    // Записать объединённый массив
    const outputPath = path.join(dataDir, outputFile)
    fs.writeFileSync(outputPath, JSON.stringify(items, null, 2))

    console.log(`✅ Merged ${matchingFiles.length} files into ${outputFile}`)
  } catch (error) {
    console.error(`❌ Error merging ${pattern}:`, error.message)
    process.exit(1)
  }
}

/**
 * Основная функция
 */
function main() {
  console.log('🔄 Merging CMS JSON files...\n')

  // Проверить существование папки data
  if (!fs.existsSync(dataDir)) {
    console.error('❌ Data directory not found:', dataDir)
    process.exit(1)
  }

  // Объединить файлы для каждого типа контента
  mergeJSONFiles('news-', 'news.json')
  mergeJSONFiles('project-', 'projects.json')
  mergeJSONFiles('vacancy-', 'vacancies.json')
  mergeJSONFiles('tender-', 'tenders.json')

  console.log('\n✅ All JSON files merged successfully!')
}

// Запустить скрипт
main()
