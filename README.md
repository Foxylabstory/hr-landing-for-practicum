# hr-landing-for-practicum
HR-лендинг для компании “Яндекс Практикум”

## Правила наименования веток для фич
header/feature

## Запуск проекта
Перед запуском, единожды, сделай установку npm i
npm run dev - запуск проекта в режиме разработки
npm run build - собирает проект для публикации
npm run deploy - выгружает на GH-pages
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
if (Couldn't find remote ref refs/heads/gh-pages) {
   npx gh-pages-clean
  } else {
    npm run deploy
  }

## Настройка поддерживаемых браузеров
Смотри файл babel.config.js

## Используемые технологии:

- **HTML5**
  - Семантические тэги
  - Валидная разметка
- **CSS**
  - Адаптивный сайт под все возможные экраны (контрольные точки и промежуточные состояния)
  - Построение сеток с помощью flex и/или grid
  - Позиционирование сложных элементов
  - Работа с Popup
- **БЭМ**
  - Все классы названы в соответствии с БЭМ
  - Создана файловая структура по модели nested, все блоки разбиты по отдельным папкам, элементы и модификаторы находятся в папках блоков по собственным разделам
- **JS**
  - 

## Материалы:
**Figma**
- [Ссылка на макет в Figma](https://www.figma.com/file/R6jglaWZLJRABfIzW2Sxsv/HR-landing-page?node-id=0%3A1&t=lEfGSt6qx1URs7C8-1)

Проект подогнан к макету с использованием Pixel Perfect

### Планы по доработке
вынести стили в переменные, для комфортного управления

### Инфа, котороя может помочь
Ссылки на картинки в JavaScript
Пусть в index.js есть ссылки на локальные картинки в виде строк:
const whoIsTheGoat = [
  { name: 'Michael Jordan', image: './images/jordan.jpg' },
  { name: 'Lebron James', link: './images/james.jpg' },
  { name: 'Kobe Bryant', link: './images/bryant.jpg' },
]; 
Мы используем этот массив объектов, чтобы создать DOM-элементы и затем добавить их на страницу.
Текущей записи недостаточно: «Вебпак» изменяет имена файлов при сборке, поэтому пути к картинкам будут неправильными. Об этом мы расскажем подробнее чуть позже. Проблему легко решить, если отдать работу с такими картинками «Вебпаку». Чтобы это сделать, импортируем каждое изображение в JS-файл:
// теперь картинки можно импортировать,
// вебпак добавит в переменные правильные пути
import jordanImage from './images/jordan.jpg';
import jamesImage from './images/james.jpg';
import bryantImage from './images/bryant.jpg';
const whoIsTheGoat = [
  // меняем исходные пути на переменные
  { name: 'Michael Jordan', image: jordanImage },
  { name: 'Lebron James', link: jamesImage },
  { name: 'Kobe Bryant', link: bryantImage },
]; 
Сперва импорт картинок в JS может казаться странным. В чистом JS такое работать не будет, но теперь за все импорты в нашем проекте отвечает «Вебпак». Есть и второй способ работать с такими изображениями:
// теперь картинки можно импортировать,
// вебпак добавит в переменные правильные пути
const jordanImage = new URL('./images/jordan.jpg', import.meta.url);
const jamesImage = new URL('./images/james.jpg', import.meta.url);
const bryantImage = new URL('./images/bryant.jpg', import.meta.url)

const whoIsTheGoat = [
  // меняем исходные пути на переменные
  { name: 'Michael Jordan', image: jordanImage },
  { name: 'Lebron James', link: jamesImage },
  { name: 'Kobe Bryant', link: bryantImage },
]; 
Этот способ отличается от первого только тем, что работает и без запуска «Вебпака». Свойство import.meta.url — служебный параметр, указывающий на адрес файла. 

Научим «Вебпак» динамически заменять пути в HTML-файле. С этим поможет HtmlWebpackPlugin: он умеет корректно подставлять правильные пути файлов. Для этого потребуется изменить привычный путь до изображения на такой:
<img src="<%=require('./images/logo.png')%>" alt="Логотип"> 
Вставки вида <% %> — синтаксис шаблона lodash

Изначально «Вебпак» умеет работать с CSS динамически, заменяя путь до изображений или шрифтов на корректный. Другими словами, в CSS вы можете работать с изображениями или шрифтами по-старому: просто указывать относительный путь до шрифта или изображения
