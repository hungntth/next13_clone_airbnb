import Container from '@/components/Container'
import Heading from '@/components/Heading'
import ListingCard from '@/components/ListingCard'
import SafeListing from '@/types/SafeListing'
import SafeUser from '@/types/SafeUser'
import React from 'react'

interface FavoritesClientProps {
    listings: SafeListing[],
    currentUser?: SafeUser | null,
  }

export default function FavoritesClient({listings, currentUser}: FavoritesClientProps) {
  return (
    <Container>
      <Heading
        title="Favorites"
        subtitle="List of places you favorited!"
      />
      <div 
        className="
          mt-10
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4
          xl:grid-cols-5
          2xl:grid-cols-6
          gap-8
        "
      >
        {listings.map((listing: any) => (
          <ListingCard
            currentUser={currentUser}
            key={listing.id}
            data={listing}
          />
        ))}
      </div>
    </Container>
  )
}
