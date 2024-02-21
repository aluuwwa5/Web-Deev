export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Электрогриль Delonghi MultiGrill CGH 1030D',
    image : 'https://resources.cdn-kaspi.kz/img/m/p/h41/h50/63775335186462.jpg?format=gallery-medium',
    price: 158432,
    rating: 4.8,
    description: 'тип: гриль; тип установки: настольный; мощность: 2000.0 Вт; материал рабочей поверхности: металл; регулировка температуры: Да;цвет: серебристый,черный',
    link: 'https://kaspi.kz/shop/p/elektrogril-delonghi-multigrill-cgh-1030d-12600018/?c=750000000'
  },
  {
    id: 2,
    name: 'Увлажнитель воздуха Deerma Mi Deerma F600 белый',
    image : 'https://resources.cdn-kaspi.kz/img/m/p/h59/h3f/63821352140830.jpg?format=gallery-medium',
    price: 638803,
    rating : 5,
    description: 'назначение прибора: увлажнение воздуха; обслуживаемая площадь: 40.0 кв.м; управление: электронное; тип увлажнителя: ультразвуковой; цвет: белый',
    link: 'https://kaspi.kz/shop/p/uvlazhnitel-vozduha-deerma-mi-deerma-f600-belyi-100101463/?c=750000000'
  },
  {
    id: 3,
    name: 'Sony PlayStation 5',
    image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/hf2/66015013568542/sony-playstation-5-god-of-war-ragnarok-107674130-1.jpg',
    price: 638803,
    rating : 4.5,
    description: 'Stunning Games - Marvel at incredible graphics and experience new PS5 features. Breathtaking Immersion - Discover a deeper gaming experience with support for haptic feedback, adaptive triggers, and 3D Audio technology.',
    link: 'https://kaspi.kz/shop/p/sony-playstation-5-god-of-war-ragnar-k-107674130/?c=750000000#!/item'
  },
  {
    id: 4,
    name: 'Дрон DJI Mini 3 Pro + DJI RC',
    image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h15/h04/52064013287454/dji-mini-3-pro-belyj-105597357-1.jpg',
    price: 595380,
    rating : 4.7,
    description: 'Квадрокоптер DJI Mini 3 Pro – миниатюрный, но мощный квадрокоптер для съемки с воздуха в высоком разрешении 3840×2160 в формате 4К. У этой модели усовершенствованный внешний вид и более надежная конструкция для создания невероятных видео материалов. Время полета этого устройства увеличено за счет использования больших винтов и системы обнаружения препятствий. Усовершенствованный подвес предоставляет более широкий охват для проведения съемки. Кроме того, с этим дроном вы сможете вести вертикальную съемку, выводя создание видео материалов на новый уровень.',
    link: 'https://kaspi.kz/shop/p/dji-mini-3-pro-belyi-dji-rc-105597357/?c=750000000#!/item'
  },
  {
    id: 5,
    name: 'Наушники Apple AirPods Pro 2nd generation with Wireless MagSafe Charging Case белый',
    image : 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
    price: 155000,
    rating : 4.1,
    description: 'тип: наушники; вид: внутриканальные; подключение: беспроводное; тип акустического оформления: закрытые; тип крепления: без крепления; система активного шумоподавления: Да; микрофон: Да',
    link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000'
  },
  {
    id: 6,
    name: 'Умная колонка Яндекс Станция Лайт фиолетовый',
    image : 'https://resources.cdn-kaspi.kz/img/m/p/h9f/hfc/64362954719262.jpg?format=gallery-medium',
    price: 29000,
    rating : 5,
    description: 'суммарная мощность: 5.0 Вт; управление умным домом: Да; голосовой помощник: Алиса; поддерживаемый язык: русский; поддержка Wi-Fi: Да;  поддержка Bluetooth: Да',
    link: 'https://kaspi.kz/shop/p/jandeks-stantsija-lait-fioletovyi-101870266/?c=750000000'
  },
  {
    id: 7,
    name: 'Камера Sony FDR-AX53B черный',
    image : 'https://resources.cdn-kaspi.kz/img/m/p/h91/h1e/63761203822622.jpg?format=gallery-medium',
    price: 445000,
    rating : 4.4,
    description: 'поддержка видео высокого разрешения: UHD 4K; матрица: 8.29 Мпикс; нтерфейсы: Wi-Fi ,USB-интерфейс, HDMI-выход, NF;запись на карту памяти: Да',
    link: 'https://kaspi.kz/shop/p/sony-fdr-ax53b-chernyi-2300225/?c=750000000' 
  },
  {
    id: 8,
    name: 'Массажер TCM Mini Gun ручной перкуссионный',
    image : 'https://resources.cdn-kaspi.kz/img/m/p/h05/h5a/84992805175326.jpg?format=gallery-medium',
    price: 12405,
    rating : 5,
    description: 'Массажер TCM Mini Gun имеет компактный дизайн и легкий вес, что делает его удобным для использования дома, в офисе или в дороге. Он легко помещается в кейс, который идет в подарок, и не занимает много места в вашей сумке или рюкзаке. С помощью нескольких режимов работы и настроек скорости, вы можете настроить массажер на любой уровень интенсивности, чтобы получить максимальную пользу для вашего тела.',
    link: 'https://kaspi.kz/shop/p/tcm-mini-gun-ruchnoi-perkussionnyi-108358999/?c=750000000'
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/