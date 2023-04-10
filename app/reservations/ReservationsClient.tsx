'use client';
import React,{useState,useCallback} from 'react';
import { SafeReservation, SafeUser } from '../types';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Heading from '../components/Heading';
import Container from '../components/Container';
import ListingCard from '../components/listings/ListingCard';
import { set } from 'date-fns';


interface ReservationsClient{
    reservations:SafeReservation[];
    currentUser:SafeUser|null;
}

const ReservationsClient:React.FC<ReservationsClient>=({
    reservations,
    currentUser
})=> {
    const router=useRouter();
    const [deletingId,setDeletingId]=useState('');

    const onCancel=useCallback((id:string)=>{
        setDeletingId(id);

        axios.delete(`/api/reservations/${id}`)
        .then(()=>{
            toast.success("Reservation canceleed");
            router.refresh();
        })
        .catch(()=>{
            toast.error('Something went wrong !');
        })
        .finally(()=>{
            setDeletingId('');
        })
    },[router])
  return (
    <Container>
        <Heading
            title="Reservations"
            subtitle="Bookings on your properties"
        />
        <div
            className='
            mt-10
            grid
            grid-col-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-4
            2xl:grid-cols-5
            gap-8'
        >
            {reservations.map((reservation)=>(
                <ListingCard
                    key={reservation.id}
                    data={reservation.listing}
                    reservation={reservation}
                    actionId={reservation.id}
                    onAction={onCancel}
                    disabled={deletingId==reservation.id}
                    actionLabel='Cancel guest reservation'
                    currentUser={currentUser}
                />
            ))}
        </div>
    </Container>
  )
}

export default ReservationsClient;