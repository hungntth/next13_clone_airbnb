import React from "react";
import Heading from "../Heading";
import Input from "../Input";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface BodyDescriptionProps {
  isLoading: boolean | undefined,
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

export default function BodyDescription({ isLoading, register, errors }: BodyDescriptionProps) {
  return (
    <div className="flex flex-col gap-8">
      <Heading
        title="How would you describe your place?"
        subtitle="Short and sweet works best!"
      />
      <Input
        id="title"
        label="Title"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <hr />
      <Input
        id="description"
        label="Description"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );
}
