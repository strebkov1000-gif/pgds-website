# 🚀 Инструкция по деплою сайта ПГДС

## ✅ Что сделано для безопасности:

1. **Security Headers** - защита от XSS, clickjacking, MIME sniffing
2. **Админ-панель защищена паролем** - HTTP Basic Auth
3. **`.gitignore`** - исключены чувствительные файлы
4. **Нет уязвимостей** в зависимостях (проверено npm audit)

---

## 📋 Способ 1: Деплой на Vercel (РЕКОМЕНДУЕТСЯ)

**Преимущества:**
- ✅ Бесплатный хостинг
- ✅ Автоматический HTTPS
- ✅ Быстрый CDN по всему миру
- ✅ Автоматические обновления при push в GitHub
- ✅ Идеально подходит для Next.js

### Шаг 1: Создать репозиторий на GitHub

1. Зайдите на https://github.com/new
2. Создайте новый репозиторий (например, `pgds-website`)
3. **НЕ** ставьте галочки "Add README" или ".gitignore"

### Шаг 2: Загрузить код на GitHub

Выполните команды:

```bash
cd C:\Users\qtosh1\pgds-website

# Добавить удалённый репозиторий (замените YOUR-USERNAME и REPO-NAME)
git remote add origin https://github.com/YOUR-USERNAME/pgds-website.git

# Загрузить код
git branch -M main
git push -u origin main
```

### Шаг 3: Деплой на Vercel

1. Зайдите на https://vercel.com/signup
2. Войдите через GitHub
3. Нажмите **"New Project"**
4. Выберите репозиторий `pgds-website`
5. **ВАЖНО:** Добавьте переменную окружения:
   - Name: `ADMIN_PASSWORD`
   - Value: `ваш-секретный-пароль` (замените на свой!)
6. Нажмите **"Deploy"**

**Готово!** Через 2-3 минуты получите ссылку типа: `https://pgds-website.vercel.app`

---

## 📋 Способ 2: Быстрый показ через туннель (без GitHub)

Если нужно показать сайт **прямо сейчас** без регистрации:

```bash
# Установить localtunnel
npm install -g localtunnel

# Запустить dev сервер (если не запущен)
cd C:\Users\qtosh1\pgds-website
npm run dev

# В ДРУГОМ терминале создать туннель
npx localtunnel --port 3000
```

Получите публичную ссылку типа: `https://random-name.loca.lt`

⚠️ **Внимание:** Эта ссылка временная и будет работать только пока запущен ваш компьютер!

---

## 🔐 Безопасность админ-панели

### Доступ к админ-панели:

После деплоя админ-панель доступна по адресу: `https://ваш-сайт.com/admin`

При первом входе браузер запросит:
- **Логин:** любой (например, `admin`)
- **Пароль:** тот, что вы указали в `ADMIN_PASSWORD` (по умолчанию: `pgds2024`)

### Изменить пароль:

**На Vercel:**
1. Зайдите в проект → Settings → Environment Variables
2. Измените значение `ADMIN_PASSWORD`
3. Нажмите "Save"
4. Сделайте Redeploy

**Локально (.env.local):**
1. Создайте файл `.env.local` в корне проекта
2. Добавьте: `ADMIN_PASSWORD=ваш-новый-пароль`
3. Перезапустите сервер

---

## 🛡️ Что защищает ваш сайт:

### Security Headers:
- **X-Frame-Options** - защита от clickjacking (встраивание сайта в iframe)
- **X-Content-Type-Options** - защита от MIME sniffing
- **X-XSS-Protection** - защита от XSS атак
- **Strict-Transport-Security** - принудительное использование HTTPS
- **Referrer-Policy** - контроль передачи referrer
- **Permissions-Policy** - блокировка доступа к камере/микрофону

### Админ-панель:
- HTTP Basic Authentication
- Пароль хранится в переменных окружения (не в коде!)

### Git:
- `.gitignore` исключает node_modules, .env, .next
- Секреты не попадут в репозиторий

---

## 📝 Чек-лист перед показом заказчику:

- [ ] Обновить контактные данные в `data/content.json` (заменить `+7 (XXX) XXX-XX-XX`)
- [ ] Добавить реальный логотип в `public/images/logo.png` (опционально)
- [ ] Проверить все страницы сайта
- [ ] Изменить дефолтный пароль админ-панели (`ADMIN_PASSWORD`)
- [ ] Убедиться что сайт открывается по HTTPS
- [ ] Протестировать на мобильных устройствах

---

## 🔧 Обновление сайта после деплоя:

```bash
# 1. Внесите изменения в код
# 2. Сохраните изменения в Git
git add .
git commit -m "Описание изменений"
git push

# Vercel автоматически пересоберёт и задеплоит сайт!
```

---

## 🆘 Проблемы и решения:

### Ошибка: "Git push requires a password"
Используйте Personal Access Token вместо пароля:
1. GitHub → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Используйте token как пароль при git push

### Ошибка: "Module not found"
```bash
npm install
npm run build
```

### Админ-панель не запрашивает пароль
Проверьте что `middleware.ts` загружен на сервер.

---

## 📞 Контакты для поддержки:

После деплоя сайт будет доступен 24/7 с автоматическим HTTPS и защитой от атак.

**Успешного деплоя! 🚀**
