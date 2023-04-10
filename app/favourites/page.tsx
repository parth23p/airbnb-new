import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import EmptyState from "@/app/components/EmptyState";
import getFavouriteListings from "../actions/getFavouriteListings";
import FavouritesClient from "./FavouritesClient";


interface IParams{
    listingId?:string;
}

const ListingPage=async()=>{
    const listings = await getFavouriteListings();
    const currentUser=await getCurrentUser();

    if(listings.length==0){
        return(
            <EmptyState
                title="No favourites found !"
                subtitle="Looks like you have no favourite listings"
            />
        )
    }

    return(
        <FavouritesClient 
            listings={listings}
            currentUser={currentUser}
        />
    )

}

export default ListingPage;