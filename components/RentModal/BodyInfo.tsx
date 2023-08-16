import React from "react";
import Heading from "../Heading";
import Counter from "../Counter/Counter";

interface BodyInfoProps {
  setCustomValue: (id: string, value: any) => void;
  roomCount: number;
  bathroomCount: number;
  guestCount: number;
}

export default function BodyInfo({
  setCustomValue,
  roomCount,
  bathroomCount,
  guestCount,
}: BodyInfoProps) {
  return (
    <div className="flex flex-col gap-8">
      <Heading
        title="Share some basics about your place"
        subtitle="What amenitis do you have?"
      />
      <Counter
        title="Guests"
        subtitle="How many guests do you allow?"
        onChange={(value) => setCustomValue("guestCount", value)}
        value={guestCount}
      />
      <hr />
      <Counter
        onChange={(value) => setCustomValue("roomCount", value)}
        value={roomCount}
        title="Rooms"
        subtitle="How many rooms do you have?"
      />
      <hr />
      <Counter
        onChange={(value) => setCustomValue("bathroomCount", value)}
        value={bathroomCount}
        title="Bathrooms"
        subtitle="How many bathrooms do you have?"
      />
    </div>
  );
}
