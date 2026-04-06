# GitHub Actions Workflows

Этот проект использует GitHub Actions для автоматического деплоя.

## Файлы

### `deploy-timeweb.yml`
Автоматический деплой на Timeweb хостинг через FTP.

**Когда запускается:**
- При push в ветку `master`
- Вручную через GitHub Actions UI

**Требует GitHub Secrets:**
- `FTP_SERVER` - FTP сервер (vh434.timeweb.ru)
- `FTP_USERNAME` - FTP логин (ca225020)
- `FTP_PASSWORD` - FTP пароль

**Что делает:**
1. Устанавливает зависимости
2. Собирает статический сайт (`npm run build`)
3. Загружает файлы из `./out/` на Timeweb через FTP

### `deploy-netlify.yml.example`
Альтернативный workflow для деплоя на Netlify.

**Использование:**
1. Переименовать в `deploy-netlify.yml`
2. Отключить `deploy-timeweb.yml` (удалить или переименовать)
3. Настроить Netlify secrets

## Настройка

См. подробную инструкцию в `/CMS-SETUP.md`
