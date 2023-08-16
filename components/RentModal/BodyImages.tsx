import React from "react";
import Heading from "../Heading";
import ImageUpload from "../ImageUpload";

interface BodyImagesProps {
  setCustomValue: (id: string, value: any) => void;
  imageSrc: string;
}

export default function BodyImages({
  setCustomValue,
  imageSrc,
}: BodyImagesProps) {
  return (
    <div className="flex flex-col gap-8">
      <Heading
        title="Add a photo of your place"
        subtitle="Show guests what your place looks like!"
      />
      <ImageUpload
        onChange={(value) => setCustomValue("imageSrc", value)}
        value={imageSrc}
      />
    </div>
  );
}
