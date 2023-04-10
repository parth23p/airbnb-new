'use client';
import useSearchModal from '@/app/hooks/useSearchModal';
import dynamic from 'next/dynamic';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback, useMemo, useState } from 'react';
import { Range } from 'react-date-range';
import qs from 'query-string';
import {BiSearch} from 'react-icons/bi';
import { CountrySelectValue } from '../inputs/CountrySelect';
import { differenceInDays, formatISO } from 'date-fns';
import useCountries from '@/app/hooks/useCountries';

// enum STEPS{
//   Location = 0,
//   DATE = 1,
//   INFO = 2
// }

const Search=({})=> {
  const router=useRouter();
  const params=useSearchParams();
  const searchModal=useSearchModal();
  const {getByValue}=useCountries();
  const locationValue=params?.get('locationValue');
  const startDate=params?.get('startDate');
  const endDate=params?.get('endDate');
  const guestCount=params?.get('guestCount');

  const locationLabel=useMemo(()=>{
    if(locationValue){
      return getByValue(locationValue as string)?.label; 
    }

    return 'Anywhere';
  },[getByValue,locationValue]);

  const durationLabel=useMemo(()=>{
    if(startDate && endDate){
      const start=new Date(startDate as string);
      const end=new Date(endDate as string);
      let diff=differenceInDays(end,start);

      if(diff==0){
        diff=1;
      }

      return `${diff} Days`;
    }
    return 'Any Week';
  },[startDate,endDate]);

  const guestLabel=useMemo(()=>{
    if(guestCount){
      return `${guestCount} Guests`;
    }
    return "Add Guests";
  },[guestCount]);
//   const [location,setLocation]=useState<CountrySelectValue>();
//   const [step,setStep]=useState(STEPS.Location)
//   const [roomCount,setRoomCount]=useState(1);
//   const [guestCount,setGuestCount]=useState(1);
//   const [bathroomCount,setBathroomCount]=useState(1);
//   const [dateRange,setDateRange]=useState<Range>({
//     startDate:new Date(),
//     endDate:new Date(),
//     key:'selection'
//   });

//   const Map=useMemo(()=>dynamic(()=>import('../Map'),{
//     ssr:false,
//   }),[location]);

//   const onBack=useCallback(()=>{
//     setStep((value)=>value-1)
//   },[]);

//   const onNext=useCallback(()=>{
//     setStep((value)=>value+1)
//   },[]);

//   const onSubmit=useCallback(async()=>{
//     if(step!= STEPS.INFO){
//       return onNext();
//     }

//     let currentQuery={};

//     if(params){
//       currentQuery=qs.parse(params.toString());
//     }

//     const updatedQuery:any={
//       ...currentQuery,
//       locationValue:location?.value,
//       guestCount,
//       roomCount,
//       bathroomCount
//     };

//     if(dateRange.startDate){
//       updatedQuery.startDate=formatISO(dateRange.startDate);
//     }

//     if(dateRange.endDate){
//       updatedQuery.endDate=formatISO(dateRange.endDate);
//     }

//     const url=qs.stringifyUrl({
//       url:'/',
//       query:updatedQuery
//     },{skipNull:true});

//     setStep(STEPS.Location);
//     searchModal.onClose();
//     router.push(url);
//   },[step,searchModal,location,router,roomCount,bathroomCount,guestCount,dateRange,onNext,params]);

  return (
    <div
     onClick={searchModal.onOpen}
     className='border-[1px] 
                w-full 
                md:w-auto 
                py-2 
                rounded-full
                shadow-sm
                hover:shadow-md
                transition
                cursor-pointer
    '>
      <div
        className='
        flex
        flex-row
        items-center
        justify-between
        '
      >
        <div 
        className='
        text-sm
        font-semibold
        px-6
        '>
          {locationLabel}
        </div>
        <div
        className='
        hidden
        sm:block
        text-sm
        font-semibold
        px-6
        border-x-[1px]
        flex-1
        text-center
        '
        >
          {durationLabel}
        </div>

        <div
          className='text-sm
          pl-6
          pr-2
          text-gra-600
          flex
          flex-row
          items-center
          gap-3'
        >
          <div className='hidden sm:block'>{guestLabel}</div>
          <div 
            className='
            p-2
            bg-rose-600
            rounded-full
            text-white
            '
          >
          <BiSearch size={18} />

          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Search;