import getListingById from "@/actions/getListingById";
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import React from "react";
import ListingClient from "./ListingClient";
import getCurrentUser from "@/actions/getCurrentUser";
import getReservations from "@/actions/getReservations";

interface IPrams {
  listingId?: string;
}

export default async function ListingPage({ params }: { params: IPrams }) {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }
  return (
    <ClientOnly>
      <ListingClient
        listing={listing}
        reservations={reservations}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
}
