import {Appliances} from './app/shared/models/Appliances';
import { Tag } from './app/shared/models/Tag';

export const sample_appliances: Appliances[] = [
  {
    id: '1',
    name: 'Блендер',
    price: 10,
    favorite: false,
    origins: ['italy'],
    stars: 4.5,
    imageUrl: 'assets/appliances-1.png',
  },
  {
    id: '2',
    name: 'Посудомоечная машина',
    price: 20,
    favorite: true,
    origins: ['china'],
    stars: 4.7,
    imageUrl: 'assets/appliances-2.png',
  },
  {
    id: '3',
    name: 'Микроволновка',
    price: 5,
    favorite: false,
    origins: ['germany', 'us'],
    stars: 3.5,
    imageUrl: 'assets/appliances-3.png',
  },
  {
    id: '4',
    name: 'Электро духлвка',
    price: 2,
    favorite: true,
    origins: ['belgium', 'france'],
    stars: 3.3,
    imageUrl: 'assets/appliances-4.png',
  },
  {
    id: '5',
    name: 'холодильник',
    price: 11,
    favorite: false,
    origins: ['india', 'asia'],
    stars: 3.0,
    imageUrl: 'assets/appliances-5.png',
  },
  {
    id: '6',
    name: 'Миксер',
    price: 9,
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/appliances-6.png',
  },
  {
    id: '7',
    name: 'Стиральная машина',
    price: 9,
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/appliances-7.png',
  },
]

export const sample_tags:Tag[] = [

]
