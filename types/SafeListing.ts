import { Listing } from "@prisma/client";

type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};

export default SafeListing;
