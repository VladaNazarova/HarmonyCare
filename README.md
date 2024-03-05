## Harmony Care Medical Center Project || Сайт медицинского центра Harmony Care
### Запуск: в папках server/src, client/src
```
npm i
npm start
```
![316f569f-6746-4db0-b13c-538b1b5f17c1](https://github.com/VladaNazarova/HarmonyCare/assets/141823453/61980198-7bc1-4945-9c95-c99f060bd242)
![e161db25-311f-4a79-a2dd-42a2696d8f87](https://github.com/VladaNazarova/HarmonyCare/assets/141823453/83154817-6846-4feb-86de-9541c523e9fa)
### Функционал 
- регистрация и аутентификация пользователей
- интеграция с внешними API: Stripe, Google Maps, Multer, Nodemailer, NewsApi
- разграничение доступов к материалам сайта на основе ролей - администратора, пациента, врача
- администратор может зарегистрировать нового врача в системе
- в своем личном кабинете врач может вести пациентов
- реализован функционал записи на прием (для пациента)
  
![134a56c3-b32c-47d9-94f6-0d7f8f6a7f0e](https://github.com/VladaNazarova/HarmonyCare/assets/141823453/dcfaf8ab-bd8e-48b1-a526-a43ee1191f0f)
![7738c17e-da21-4774-8c2b-924eba754a95](https://github.com/VladaNazarova/HarmonyCare/assets/141823453/61c51db3-ba21-4de5-8867-8ce5df681b37)
### Планы
- рефакторинг кода
- деплой проекта
- реализация регистрации и аутентификации на JWT
- реализация отправки плана лечения на почту пациента в формате PDF
