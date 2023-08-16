import React from "react";
import Heading from "../Heading";
import Input from "../Input";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface BodyPriceProps {
  isLoading: boolean | undefined,
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

export default function BodyPrice({errors, isLoading, register}: BodyPriceProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-8">
        <Heading
          title="Now, set your price"
          subtitle="How much do you charge per night?"
        />
        <Input
          id="price"
          label="Price"
          formatPrice
          type="number"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    </div>
  );
}
