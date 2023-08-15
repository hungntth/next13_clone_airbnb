"use client";
import useCountries from "@/hooks/useCountries";
import React from "react";
import Select from "react-select";
import CountrySelectItem from "./CountrySelectItem";

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}

const CLASS_NAME = {
  control: () => "p-3 border-2",
  input: () => "text-lg",
  option: () => "text-lg",
};

export default function CountrySelect({ value, onChange }: CountrySelectProps) {
  const { getAll } = useCountries();
  return (
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <CountrySelectItem option={option} />
        )}
        classNames={CLASS_NAME}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "#ffe4e6",
          },
        })}
      ></Select>
    </div>
  );
}
