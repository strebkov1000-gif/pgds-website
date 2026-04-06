# 🚀 Инструкция по деплою на Timeweb Cloud

## Шаг 1: Подготовка проекта (уже сделано ✅)

Ваш проект уже готов к деплою:
- ✅ Security Headers настроены
- ✅ Админ-панель защищена паролем
- ✅ .gitignore создан
- ✅ Git инициализирован

---

## Шаг 2: Создание сервера на Timeweb

### 2.1 Войдите в панель Timeweb
1. Зайдите на https://timeweb.cloud/
2. Войдите в личный кабинет

### 2.2 Создайте облачный сервер (VDS/VPS)
1. В панели управления выберите **"Облачные серверы"** → **"Создать сервер"**
2. Выберите конфигурацию:
   - **ОС:** Ubuntu 22.04 LTS
   - **CPU:** 1 vCPU (достаточно для старта)
   - **RAM:** 1 GB (минимум для Next.js)
   - **SSD:** 10 GB
   - **Стоимость:** ~100-150₽/месяц

3. Выберите дата-центр: **Москва** (для лучшей скорости в РФ)

4. **SSH ключ или пароль:**
   - Создайте пароль для root пользователя
   - Или добавьте SSH ключ (безопаснее)

5. Нажмите **"Создать сервер"**

6. **Сохраните данные:**
   - IP адрес сервера (например: `123.45.67.89`)
   - Пароль root

---

## Шаг 3: Подключение к серверу

### Вариант 1: Через Timeweb терминал (проще)
1. В панели Timeweb откройте ваш сервер
2. Нажмите **"Консоль"** → откроется терминал в браузере
3. Войдите как `root`

### Вариант 2: Через SSH (Windows)
```bash
# Открыть PowerShell или CMD
ssh root@123.45.67.89
# Введите пароль
```

---

## Шаг 4: Настройка сервера

Скопируйте и выполните команды по очереди:

### 4.1 Обновить систему
```bash
apt update && apt upgrade -y
```

### 4.2 Установить Node.js 20
```bash
# Добавить репозиторий Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -

# Установить Node.js
apt install -y nodejs

# Проверить версию
node -v  # Должно быть v20.x.x
npm -v   # Должно быть 10.x.x
```

### 4.3 Установить Git
```bash
apt install -y git
```

### 4.4 Установить PM2 (для управления процессом)
```bash
npm install -g pm2
```

### 4.5 Установить Nginx (веб-сервер)
```bash
apt install -y nginx
systemctl start nginx
systemctl enable nginx
```

---

## Шаг 5: Загрузка проекта на сервер

### Вариант А: Через Git (рекомендуется)

**На вашем компьютере:**

1. Создайте репозиторий на GitHub:
   - Зайдите на https://github.com/new
   - Название: `pgds-website`
   - Private или Public (рекомендую Private)
   - Создайте репозиторий

2. Загрузите код:
```bash
cd C:\Users\qtosh1\pgds-website

# Добавьте удалённый репозиторий (замените YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/pgds-website.git

# Загрузите код
git branch -M main
git push -u origin main
```

**На сервере Timeweb:**

```bash
# Перейти в домашнюю директорию
cd /home

# Клонировать репозиторий
git clone https://github.com/YOUR-USERNAME/pgds-website.git
cd pgds-website
```

### Вариант Б: Через FileZilla (если нет GitHub)

1. Скачайте FileZilla: https://filezilla.ru/get/
2. Подключитесь к серверу:
   - Хост: `sftp://123.45.67.89`
   - Имя: `root`
   - Пароль: ваш пароль
   - Порт: `22`
3. Загрузите всю папку `pgds-website` в `/home/pgds-website`

---

## Шаг 6: Установка зависимостей и сборка

**На сервере:**

```bash
cd /home/pgds-website

# Установить зависимости
npm install

# Создать production сборку
npm run build

# Проверить что сборка прошла успешно
ls -la .next
```

---

## Шаг 7: Настройка переменных окружения

```bash
# Создать файл с переменными
nano .env.production

# Добавить в файл:
NODE_ENV=production
ADMIN_PASSWORD=ваш-секретный-пароль

# Сохранить: Ctrl+O, Enter, Ctrl+X
```

---

## Шаг 8: Запуск приложения с PM2

```bash
# Запустить приложение
pm2 start npm --name "pgds-website" -- start

# Настроить автозапуск при перезагрузке сервера
pm2 startup
pm2 save

# Проверить статус
pm2 status
pm2 logs pgds-website
```

---

## Шаг 9: Настройка Nginx (прокси-сервер)

```bash
# Создать конфигурацию Nginx
nano /etc/nginx/sites-available/pgds-website
```

**Вставьте в файл:**

```nginx
server {
    listen 80;
    server_name 123.45.67.89;  # Замените на ваш IP или домен

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

**Сохраните:** `Ctrl+O`, `Enter`, `Ctrl+X`

**Активируйте конфигурацию:**

```bash
# Создать символическую ссылку
ln -s /etc/nginx/sites-available/pgds-website /etc/nginx/sites-enabled/

# Удалить дефолтную конфигурацию
rm /etc/nginx/sites-enabled/default

# Проверить конфигурацию
nginx -t

# Перезапустить Nginx
systemctl restart nginx
```

---

## Шаг 10: Проверка работы сайта

Откройте в браузере:
```
http://123.45.67.89
```

Вы должны увидеть ваш сайт! 🎉

---

## Шаг 11: Настройка домена (опционально)

### 11.1 Купить домен
- Можно на Timeweb, REG.RU, или другом регистраторе
- Например: `pgds-company.ru`

### 11.2 Привязать домен к серверу

**В панели управления доменом:**

Добавьте A-запись:
```
Тип: A
Имя: @
Значение: 123.45.67.89 (IP вашего сервера)
TTL: 3600
```

Добавьте A-запись для www:
```
Тип: A
Имя: www
Значение: 123.45.67.89
TTL: 3600
```

### 11.3 Обновить Nginx конфигурацию

```bash
nano /etc/nginx/sites-available/pgds-website
```

Измените строку:
```nginx
server_name pgds-company.ru www.pgds-company.ru;
```

Перезапустите Nginx:
```bash
nginx -t
systemctl restart nginx
```

---

## Шаг 12: Установка SSL сертификата (HTTPS)

```bash
# Установить Certbot
apt install -y certbot python3-certbot-nginx

# Получить бесплатный SSL сертификат
certbot --nginx -d pgds-company.ru -d www.pgds-company.ru

# Ответьте на вопросы:
# Email: ваш-email@example.com
# Согласиться с условиями: Y
# Перенаправлять HTTP на HTTPS: 2 (Yes)

# Настроить автообновление сертификата
certbot renew --dry-run
```

Готово! Теперь сайт доступен по HTTPS: `https://pgds-company.ru` 🔒

---

## 📋 Полезные команды

### Управление PM2
```bash
pm2 status                    # Статус приложения
pm2 logs pgds-website         # Логи приложения
pm2 restart pgds-website      # Перезапустить
pm2 stop pgds-website         # Остановить
pm2 start pgds-website        # Запустить
```

### Обновление сайта после изменений
```bash
cd /home/pgds-website

# Получить изменения из Git
git pull

# Установить новые зависимости (если есть)
npm install

# Пересобрать проект
npm run build

# Перезапустить приложение
pm2 restart pgds-website
```

### Проверка Nginx
```bash
nginx -t                      # Проверить конфигурацию
systemctl status nginx        # Статус Nginx
systemctl restart nginx       # Перезапустить
journalctl -u nginx -f        # Логи Nginx
```

### Проверка портов
```bash
netstat -tulpn | grep :3000   # Проверить порт 3000
netstat -tulpn | grep :80     # Проверить порт 80
```

---

## 🛡️ Безопасность

### Настроить файрвол
```bash
# Разрешить SSH, HTTP, HTTPS
ufw allow 22/tcp
ufw allow 80/tcp
ufw allow 443/tcp
ufw enable

# Проверить статус
ufw status
```

### Отключить вход по паролю (опционально, после настройки SSH ключа)
```bash
nano /etc/ssh/sshd_config

# Найти и изменить:
PasswordAuthentication no

# Перезапустить SSH
systemctl restart sshd
```

---

## 🆘 Решение проблем

### Сайт не открывается
```bash
# Проверить работает ли приложение
pm2 status
pm2 logs pgds-website

# Проверить работает ли Nginx
systemctl status nginx
curl http://localhost:3000
```

### Ошибка "Cannot GET /"
```bash
# Убедиться что сборка прошла успешно
cd /home/pgds-website
npm run build

# Перезапустить
pm2 restart pgds-website
```

### Ошибка сборки "Out of memory"
```bash
# Увеличить swap (виртуальную память)
fallocate -l 2G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile

# Добавить в автозагрузку
echo '/swapfile none swap sw 0 0' >> /etc/fstab
```

---

## 📊 Мониторинг

### Установка мониторинга (опционально)
```bash
# Установить htop для мониторинга ресурсов
apt install -y htop

# Запустить
htop
```

### Проверка использования ресурсов
```bash
free -h      # Память
df -h        # Диск
top          # Процессы
```

---

## 🎉 Готово!

Ваш сайт теперь:
- ✅ Работает 24/7 на Timeweb
- ✅ Защищён Security Headers
- ✅ Имеет SSL сертификат (HTTPS)
- ✅ Доступен из любой точки мира
- ✅ Админ-панель защищена паролем

**URL сайта:**
- Без домена: `http://123.45.67.89`
- С доменом: `https://pgds-company.ru`

**Админ-панель:**
- `https://pgds-company.ru/admin`
- Пароль: тот что вы указали в `ADMIN_PASSWORD`

---

## 📞 Поддержка Timeweb

Если возникнут проблемы:
- Техподдержка: https://timeweb.cloud/support
- Телефон: 8 800 700-06-08
- Email: support@timeweb.ru

**Успешного деплоя! 🚀**
