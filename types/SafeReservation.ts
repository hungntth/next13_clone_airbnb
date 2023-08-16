import { Reservation } from "@prisma/client";
import SafeListing from "./SafeListing";

type SafeReservation = Omit<
  Reservation,
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListing;
};

export default SafeReservation;
