# 🛠️ Инструкция по настройке CMS для разработчика

Эта инструкция описывает процесс настройки Decap CMS + Git Gateway для передачи сайта заказчику.

---

## 📋 Что было сделано

✅ **Установлен Decap CMS**
- `/public/admin/index.html` - интерфейс админ-панели
- `/public/admin/config.yml` - конфигурация с русским интерфейсом

✅ **Настроены коллекции контента:**
- Новости
- Проекты
- Вакансии
- Тендеры
- Основная информация о компании

✅ **Создан GitHub Actions workflow:**
- `.github/workflows/deploy-timeweb.yml` - автодеплой на Timeweb через FTP
- `.github/workflows/deploy-netlify.yml.example` - альтернатива для Netlify

✅ **Документация для заказчика:**
- `ИНСТРУКЦИЯ-ДЛЯ-ЗАКАЗЧИКА.md` - подробная инструкция на русском

---

## 🚀 Настройка (Вариант A: Timeweb + Netlify Identity)

Этот вариант позволяет:
- Использовать оплаченный хостинг Timeweb для сайта
- Использовать Netlify только для аутентификации (бесплатно)
- Автоматический деплой через FTP

### Шаг 1: Создать GitHub репозиторий

```bash
cd c:\Users\qtosh1\pgds-website

# Инициализация (уже сделано)
git init
git add .
git commit -m "Initial commit with Decap CMS"

# Создать репозиторий на GitHub.com
# Затем:
git remote add origin https://github.com/YOUR-USERNAME/pgds-website.git
git branch -M master
git push -u origin master
```

### Шаг 2: Настроить Netlify

1. Зайти на https://netlify.com и войти через GitHub
2. **New site from Git** → выбрать репозиторий `pgds-website`
3. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
4. **Deploy site** (первый деплой)

### Шаг 3: Включить Netlify Identity

1. В Netlify dashboard → ваш сайт
2. **Site settings** → **Identity**
3. **Enable Identity**
4. **Settings and usage:**
   - **Registration preferences:** Invite only (чтобы только вы добавляли пользователей)
   - **External providers:** Отключить (или оставить GitHub если нужно)
   - **Enable Git Gateway**

### Шаг 4: Включить Git Gateway

1. **Identity** → **Services** → **Git Gateway**
2. **Enable Git Gateway**
3. Выбрать роль: **Users with access to the site**

### Шаг 5: Настроить GitHub Secrets для FTP

1. В GitHub репозитории → **Settings** → **Secrets and variables** → **Actions**
2. Создать три секрета:

**FTP_SERVER:**
```
vh434.timeweb.ru
```

**FTP_USERNAME:**
```
ca225020
```

**FTP_PASSWORD:**
```
[пароль от FTP Timeweb]
```

### Шаг 6: Добавить Netlify Identity Widget на сайт

Добавить в `/app/layout.tsx` перед закрывающим `</body>`:

```tsx
{/* Netlify Identity Widget */}
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
```

### Шаг 7: Пригласить заказчика

1. В Netlify → **Identity** → **Invite users**
2. Ввести email заказчика
3. Заказчик получит письмо с приглашением
4. Он должен:
   - Перейти по ссылке
   - Создать пароль
   - Готово!

### Шаг 8: Проверка работы

1. Заказчик открывает: `https://ca225020.tw1.ru/admin` (или ваш домен на Netlify)
2. Нажимает "Войти"
3. Вводит email + пароль
4. Редактирует контент
5. Нажимает "Опубликовать"
6. Через 5-10 минут изменения появляются на сайте Timeweb

---

## 🚀 Настройка (Вариант B: Только Netlify - ПРОЩЕ)

Этот вариант рекомендуется, если нет привязки к Timeweb.

### Отличия от Варианта A:

1. Сайт хостится на Netlify (не Timeweb)
2. Не нужен GitHub Actions для FTP
3. Автоматический деплой встроен
4. Быстрее и проще настройка

### Настройка:

1-4. **Те же шаги** что и в Варианте A
5. **Удалить** `.github/workflows/deploy-timeweb.yml` (не нужен)
6. **Готово!** Netlify автоматически деплоит при каждом изменении

**Преимущества:**
- Бесплатно (до 100 GB трафика)
- HTTPS автоматически
- Глобальный CDN
- Быстрее чем Timeweb

---

## 🔧 Настройка домена

### Если используете Netlify:

1. Netlify → **Domain settings**
2. **Add custom domain** → ввести домен заказчика
3. Настроить DNS записи (Netlify покажет инструкции)

### Если используете Timeweb:

Домен уже настроен на Timeweb, ничего делать не нужно.

---

## 🧪 Тестирование

### Локальное тестирование Decap CMS:

```bash
# Установить Decap CMS Proxy Server
npm install -g decap-server

# Запустить
npx decap-server

# В другом терминале
npm run dev

# Открыть http://localhost:3000/admin
```

**ВАЖНО:** В `config.yml` добавить:
```yaml
local_backend: true
```

---

## 📝 Структура JSON файлов

### Проблема с Decap CMS и массивами JSON

Decap CMS сохраняет **каждую запись** как **отдельный файл**. Но наш сайт ожидает **массивы в одном файле** (например `news.json` с массивом новостей).

### Решение: Используем коллекции-файлы

Текущая конфигурация уже настроена правильно:

```yaml
collections:
  - name: "news"
    folder: "data"      # Папка для файлов
    format: "json"      # Формат файлов
    create: true        # Можно создавать новые
```

**Но есть проблема:** Decap CMS создаст файлы:
- `data/news-1.json`
- `data/news-2.json`
- `data/news-3.json`

А сайт ожидает:
- `data/news.json` (массив)

### Варианты решения:

#### Вариант 1: Изменить код сайта (рекомендуется)

Изменить импорты в компонентах:

```typescript
// Было:
import newsData from '@/data/news.json'

// Станет:
import { getAllNews } from '@/lib/cms'

// Создать /lib/cms.ts
export async function getAllNews() {
  const files = await fs.readdir('data')
  const newsFiles = files.filter(f => f.startsWith('news-'))
  const news = await Promise.all(
    newsFiles.map(f => import(`@/data/${f}`))
  )
  return news
}
```

#### Вариант 2: Build-time скрипт объединения

Создать скрипт `scripts/merge-json.js`:

```javascript
const fs = require('fs')
const path = require('path')

// Объединить все news-*.json в news.json
const dataDir = path.join(__dirname, '../data')
const files = fs.readdirSync(dataDir)

const newsFiles = files.filter(f => f.startsWith('news-') && f.endsWith('.json'))
const news = newsFiles.map(f => {
  return JSON.parse(fs.readFileSync(path.join(dataDir, f), 'utf-8'))
})

fs.writeFileSync(
  path.join(dataDir, 'news.json'),
  JSON.stringify(news, null, 2)
)
```

Добавить в `package.json`:
```json
"scripts": {
  "prebuild": "node scripts/merge-json.js",
  "build": "next build"
}
```

#### Вариант 3: Использовать файловую коллекцию (САМЫЙ ПРОСТОЙ)

**Я уже настроил это!** Для основного контента (`content.json`) используется файловая коллекция:

```yaml
collections:
  - name: "content"
    files:
      - file: "data/content.json"
```

Это редактирует один файл напрямую.

**Для news/projects/vacancies/tenders:**

Можно использовать GitHub Actions для объединения после каждого коммита:

```yaml
# В .github/workflows/deploy-timeweb.yml
# Добавить перед сборкой:
- name: Merge JSON files
  run: node scripts/merge-json.js
```

---

## 🔐 Безопасность

### Что настроено:

✅ Netlify Identity - OAuth аутентификация
✅ Invite-only регистрация
✅ Git Gateway - доступ через Netlify (без прямого доступа к GitHub)

### Что НЕ нужно давать заказчику:

❌ Доступ к GitHub репозиторию
❌ FTP пароли
❌ Доступ к Netlify dashboard (опционально)

Заказчику нужен только:
✅ URL админ-панели: `https://ваш-сайт.ru/admin`
✅ Email + пароль для входа

---

## 📊 Мониторинг и логи

### Проверить статус деплоя:

**GitHub Actions:**
- Репозиторий → **Actions** → видны все деплои

**Netlify:**
- Dashboard → **Deploys** → история деплоев

### Если деплой упал:

1. Проверить логи в GitHub Actions
2. Частые проблемы:
   - FTP пароль неверный
   - Build failed (ошибка в коде)
   - JSON невалидный

---

## 🆘 Частые проблемы

### "Error: Unable to access identity settings"

**Причина:** Git Gateway не включен
**Решение:** Netlify → Identity → Services → Enable Git Gateway

### "Authentication error" при входе

**Причина:** Пользователь не приглашён
**Решение:** Netlify → Identity → Invite user

### Изменения не появляются на сайте

**Причина:** GitHub Actions не запустился или упал
**Решение:** GitHub → Actions → проверить последний workflow

### "FTP connection failed"

**Причина:** Неверные FTP credentials
**Решение:** Проверить GitHub Secrets (FTP_SERVER, FTP_USERNAME, FTP_PASSWORD)

---

## 📚 Полезные ссылки

- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Netlify Identity](https://docs.netlify.com/visitor-access/identity/)
- [Git Gateway](https://docs.netlify.com/visitor-access/git-gateway/)
- [GitHub Actions](https://docs.github.com/en/actions)

---

## ✅ Чек-лист передачи заказчику

Перед передачей проекта заказчику:

- [ ] GitHub репозиторий создан и код загружен
- [ ] Netlify сайт задеплоен
- [ ] Netlify Identity включен и настроен
- [ ] Git Gateway включен
- [ ] Заказчик приглашён через Netlify Identity
- [ ] GitHub Secrets настроены (FTP credentials)
- [ ] Первый деплой через GitHub Actions успешен
- [ ] Протестировано добавление/редактирование контента
- [ ] Проверено что изменения попадают на Timeweb (или Netlify)
- [ ] Инструкция отправлена заказчику
- [ ] Проведено обучение заказчика (или записано видео)

---

## 📞 Контакты

Если у заказчика возникнут проблемы, он может обратиться к вам:

**Ваш Email:** [укажите]
**Ваш Телефон:** [укажите]

---

**Успешного деплоя! 🚀**

*Версия: 1.0*
*Дата: Апрель 2026*
