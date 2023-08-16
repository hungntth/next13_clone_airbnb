"use client";
import React, { useMemo, useState } from "react";
import Modal from "../Modal";
import useRentModal from "@/hooks/useRentModal";
import { useRouter, useSearchParams } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import BodyRentModal from "./BodyRentModal";
import BodyLocation from "./BodyLocation";
import BodyInfo from "./BodyInfo";
import BodyImages from "./BodyImages";
import BodyDescription from "./BodyDescription";
import BodyPrice from "./BodyPrice";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

export default function RentModal() {
  const router = useRouter();

  const rentModal = useRentModal();

  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(STEPS.CATEGORY);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: "",
      price: 1,
      title: "",
      description: "",
    },
  });

  const category = watch("category");
  const location = watch("location");
  const guestCount = watch("guestCount");
  const roomCount = watch("roomCount");
  const bathroomCount = watch("bathroomCount");
  const imageSrc = watch("imageSrc");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return "Create";
    }

    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }

    return "Back";
  }, [step]);

  let bodyContent = (
    <BodyRentModal
      setValue={setValue}
      category={category}
      setCustomValue={setCustomValue}
    />
  );

  switch (step) {
    case STEPS.LOCATION:
      bodyContent = (
        <BodyLocation
          onChange={(value) => setCustomValue("location", value)}
          value={location}
        />
      );
      break;
    case STEPS.INFO:
      bodyContent = (
        <BodyInfo
          setCustomValue={setCustomValue}
          guestCount={guestCount}
          bathroomCount={bathroomCount}
          roomCount={roomCount}
        />
      );
      break;
    case STEPS.IMAGES:
      bodyContent = (
        <BodyImages setCustomValue={setCustomValue} imageSrc={imageSrc} />
      );
      break;
    case STEPS.DESCRIPTION:
      bodyContent = (
        <BodyDescription
          isLoading={isLoading}
          register={register}
          errors={errors}
        />
      );
      break;
    case STEPS.PRICE:
      bodyContent = (
        <BodyPrice isLoading={isLoading} register={register} errors={errors} />
      );
      break;
    default:
      break;
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.PRICE) {
      return onNext();
    }

    setIsLoading(true);

    axios
      .post("/api/listings", data)
      .then(() => {
        toast.success("Listing created!");
        router.refresh();
        reset();
        setStep(STEPS.CATEGORY);
        rentModal.onClose();
      })
      .catch(() => {
        toast.error("Something went wrong.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Modal
      disabled={isLoading}
      isOpen={rentModal.isOpen}
      title="Airbnb your home!"
      actionLabel={actionLabel}
      onSubmit={handleSubmit(onSubmit)}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      onClose={rentModal.onClose}
      body={bodyContent}
    />
  );
}
