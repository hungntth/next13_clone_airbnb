import React from "react";
import Heading from "../Heading";
import categories from "@/constants/categories";
import CategoryInput from "../CategoryInput";
import { FieldValues, UseFormSetValue } from "react-hook-form";

interface BodyRentModalProps {
  setValue: UseFormSetValue<FieldValues>;
  category: string | null | undefined;
  setCustomValue: (id: string, value: any) => void;
}

export default function BodyRentModal({
  setCustomValue,
  setValue,
  category,
}: BodyRentModalProps) {
  return (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of these best describes your place?"
        subtitle="Pick a category"
      />
      <div
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={(category) => setCustomValue("category", category)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
