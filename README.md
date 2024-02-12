# Сборка gulp, pug, sass
## С использованием модулей ES6

**Моя собственная сборка**, сделана не на common модулях, а **на модулях ECMAScript 6**.  
Сделано так,  в силу того, что многие пакеты (в первую очередь те, которые регулярно обновляются),  
как раз используют именно поддержку этих модулей.  
То есть - **модули именно импортируются с помощью import,  
а не используется require**.  
Соответственно **все таски**, которые находятся в **/tasks/**,  
**а также "главный" gulpfile.mjs имеют расширение .mjs, а не js**.  

### Установка / запуск
В принципе, все как обычно: должны быть установлены глобально **npm** и **gulp**.    
Далее, установка стандартно:  
**npm install**

Запускается все с помощью команды  
**gulp watcher**  

### Рабочие таски

После этого все изменения в pug файлах, в файлах scss, в файлах картинок регистрируются и:
1. Файлы **.pug** трансформируются в **.html** и объединяются в единый **index.html**, который размещается в **/public/**.  
Объединение (порядок последовательности) происходит  
согласно инструкциям **include** в **/src/index.pug** и в файлах **.pug** в компонентах в **/src/components/**.
2. Файлы **.scss** трансформируются в **.css**, минифицируются  и объединяются в единый **style.min.css**,  
который также размещается в **/public/**.
3. Файлы картинок: 
    *  Все, кроме svg (**.jpg, .jpeg, .png, .gif,** etc) - надо размещать в **/src/images/**,  
	 далее они немного сжимаются (практически без потери качества - настройки можно менять в соответствующих тасках), 
	 конвертируются в **.webp**,  далее копируются в **/public/images/**,  
	соответственно в файлах **.scss** в директивах **url** надо указывать **/public/images/** и т.д.  
	**Но есть нюанс!** Зависит от используемого редактора / IDE - в случае использования, например, **pycharm professional** -  
	пути будут несколько иные -
	точно не вспомню, но на локалке вроде надо от корня проекта плясать.
    * файлы **.svg** размещаются в **/src/images/svg/**,  копируются в **/public/images/svg/**, 
 также есть спрайт **/public/images/svg/stack/sprite.svg**,  но мне не очень понравилось использовать его,  
	возможно требуются какие-то донастройки.
4.  **.js** - пока так: единый файл (помимо сторонних библиотек) размещается в **/src/index.js** он минифицируется и копируется в **/public/index.min.js**
5.  с шрифтами вообще не замарачивался, в тестовом примере (тестовом сайтике) использованы google-fonts, при особом желании - вся нужная инфа легко гуглится.

### Как работать с production

При размещении где-то в продакшен все пути с **/public/images/**, **/public/fonts/**  
(или иными в зависимости от IDE см. выше) и т.д.  
должны быть заменены на пути без /public/,  
то есть перед копированием в продакшен результирующих **index.html, style.min.css** -  
необходимо чуть-чуть поработать ручками.  
Это на примере лендинга c простой структурой.  

### Интеграция в cms

Сборку в принципе можно каким-то образом интегрировать в некоторые CMS на php -  
особо этим не интересовался, но вроде где-то используются какие-то решения,  
краем глаза видел что-то про wordpress, bitrix.  

В случае коммерческой заинтересованности - думаю - все вполне решаемо.  
Сам работал с wp, bitrix, etc. В opencart - свой неплохой шаблонизатор.   
Вряд ли буду связываться с joomla, modx,  
если wp перегружен всякими elementoramи (конструкторами) - тоже не мой вариант.  
Кстати, Bitrix - тоже не поклонник, но в принципе - все обсуждаемо.

Про **python** - в **django** свой отличный шаблонизатор,  
но, наверно, надо смотреть на конкретику, может и могут появиться какие-то варианты.  
***Про какие-то другие фреймворки / варианты связки с python -  
загодя сказать ничего не могу, 
однако отнесусь к таким потребностям / возможностям / вариантам с интересом.***  
  
В случае коммерческого интереса можно будет сделать собственную админ-панель, 
то есть она будет разработана в соответствии с конкретными запросами и необходимостью.  
Об этом подробней ниже.

### Если нужен несжатый css
 
Если нужен не минифицированный css - надо запускать   
**gulp watcher_expand**  
Тогда в **/public/** сначала появится и будет при изменениях стилей обновляться файл **style.expanded.css**,  
соответственно он и должен  прописан в **/src/index.pug**.  
Он будет не минифицирован, но если нужно так, чтобы, например, все медиа-запросы были в одном месте -  
необходимо настроить таск **/tasks/style_expanded.mjs**.
Все необходимые пакеты для этого есть, ну или их можно легко установить.  
Про то как это делается, тоже легко можно нагуглить.

### Используемые редакторы / IDE 

В **pycharm professional**, несмотря на наличие встроенного **emmet**, до сих пор(!) -  
а про эту проблему в саппорт **jetbrains** писали несколько лет назад - нет поддержки pug, 
поэтому после того, как я с этим столкнулся, я стал использовать **VSС**.  

С другой стороны, кроме этого досадного недоразумения и того факта,  
что pycharm довольно-таки требователен к ресурсам -  
на моем сравнительно древнем ноуте с 10ГБ оперативы и ICore5  
иногда pycharm professional вылетает вместе с chrome,
все же - это очень крутая IDE!  
**Но конкретно здесь отсутствие поддержки pug в emmet - критично**.  

С **VSC** - были какие-то "тормоза" при использовании глобальных констант в sass, 
возможно что-то я сам недонастроил в своем VSC.

### Компонентный подход / возможности доработки
Здесь есть типа тестовый сайтик, соответственно -  
можно посмотреть как это все работает на конкретном примере.  

То есть, после клонирования, установки зависимостей, запуска gulp,  
чтобы запустить тестовый сайт,  
надо открыть файл **/public/index.html** в IDE / редакторе,  
если это, например, VSC то здесь это можно проделать c помощью **open live server**.  

Компоненты в **/src/components/**: каждый компонент, на данный момент - это файлы **pug** + **scss**.  
Однако, компонент может включать в себя дочерние компоненты, тогда файлов **pug** будет больше,  
соответственно может быть больше и файлов **scss**, 
однако в тестовом примере есть только дочерние **.pug**.

Сайтик недопиленный, однако показано как, например, можно работать с **миксинами**.  
**Pug** - отличная штука для лендингов (особенно многоэкранных),  
возможно он также подойдет для сайтов с небольшим количеством страниц.  
  
Вообще говоря, он очень удобен для сайтов, где не требуется какого-то сложного интерактива  
(имеется в виду - такого взаимодействия с пользователем, когда он не влияет на конечные данные,
но, например, фильтрация данных - вполне реализуема и тут)
в обратном случае нужно использовать фреймворки типа react, vue и т.д.  

В тестовом примере не используется никаких хранилищ данных и их обработки,  
однако при интересе, желании, необходимости можно сделать какую-то админку,  
прикрутить базу данных как **SQL** (например, **postgres**), так и **NOSQL** (например, **Mongo**).  
Также можно, например, получать/обрабатывать данные посредством **json**,  
использовать интерфейс **REST API** или **graphql** и т.д.  
Все вполне реализуемо.

***Мне кажется, эту сборку можно развить и использовать для каких-то дашбордов, интерфейсов с графиками,  
сложной анимацией, статистической информацией и т.д.  
По крайней мере, лично я с большим интересом отнесусь именно к таким предложениям.***

#### Мой стек и немного обо мне:
C мной можно связаться, например, в tg:
**@danilovmaster2110**,  
или написать на почту  
**danilovmaster2110@gmail.com**

Помимо **js**, и всего того, что связано с этой сборкой:  
* **python (django; math: numpy, pandas, seaborn, matplotlib, etc; selenium, etc )**;
* **R**;
* немного **дискретная математика**, **теория графов**, **статистика**, совсем немного **теория вероятностей**.  
* любая верстка: c использованием **html**, **latex**, **tex**, **markdown**, etc,  
	то есть: веб-приложения, сайты, техническая документация, электронные книги (**pdf**, **epub**, **fb2**, etc).
* <https://stepik.org/users/328839531/certificates> - мои сертификаты 
Сейчас осваиваю нейронные сети

#### P.S.
В Guthub нет возможности донатирования для разработчиков из РФ,  
так что можно донатить, например через vk :)), там я:  
**https://vk.com/danilovmaster2110**


