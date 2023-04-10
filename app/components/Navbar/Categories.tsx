'use client';
import React from 'react';
import Container from '../Container';
import {TbBeach } from 'react-icons/tb';
import {GiWindmill,GiIsland, GiBoatFishing, GiCastle, GiForestCamp, GiCaveEntrance, GiCactus, GiBarn} from 'react-icons/gi';
import {MdOutlineVilla} from 'react-icons/md';
import {FaSkiing} from 'react-icons/fa';
import {BsSnow} from 'react-icons/bs';
import {IoDiamond} from 'react-icons/io5';
import {TbMountain,TbPool} from 'react-icons/tb';


import CategoryBox from '../CategoryBox';
import { usePathname, useSearchParams } from 'next/navigation';

// const icons=[
//     TbBeach,
//     GiWindmill,
//     MdOutlineVilla,
// ]
export const categories=[
    {
        label:'Beach',
        icon: TbBeach,
        description:'This property is close to the beach!'
    },
    {
        label:'Windmills',
        icon: GiWindmill,
        description:'This property has Windmills!'
    },
    {
        label:'Modern',
        icon: MdOutlineVilla,
        description:'This property is Modern!'
    },
    {
        label:'Mountains',
        icon: TbMountain,
        description:'This property is in Countryside!'
    },
    {
        label:'Pools',
        icon: TbPool,
        description:'This property has a Pool!'
    },
    {
        label:'Islands',
        icon: GiIsland,
        description:'This property is on an Island!'
    },
    {
        label:'Lake',
        icon: GiBoatFishing,
        description:'This property is close to a Lake!'
    },
    {
        label:'Skiing',
        icon: FaSkiing,
        description:'This property has Skiing activities!'
    },
    {
        label:'Castles',
        icon: GiCastle,
        description:'This property is in a Castle!'
    },
    {
        label:'Camping',
        icon: GiForestCamp,
        description:'This property has Camping activities!'
    },
    {
        label:'Arctic',
        icon: BsSnow,
        description:'This property has Snow!'
    },
    {
        label:'Cave',
        icon: GiCaveEntrance,
        description:'This property is in a Cave!'
    },
    {
        label:'Desert',
        icon: GiCactus,
        description:'This property is in the Desert!'
    },
    {
        label:'Barns',
        icon: GiBarn,
        description:'This property is in the Barn!'
    },
    {
        label:'Lux',
        icon: IoDiamond,
        description:'This property is Luxurious!'
    },
]

const Categories=()=> {
    const params=useSearchParams();
    const category=params?.get('category');
    const pathname=usePathname();

    const isMainPage=(pathname==='/');

    if(!isMainPage){return null;}

  return (
    <Container>
        <div 
            className='
            pt-4
            flex
            flex-row
            items-center
            justify-between
            overflow-x-auto'
        >
            {categories.map((item)=>(
                <CategoryBox 
                    key={item.label}
                    label={item.label}
                    selected={category===item.label}
                    icon={item.icon}
                />
                ))
            }
        </div>
    </Container>
    
  )
}

export default Categories;