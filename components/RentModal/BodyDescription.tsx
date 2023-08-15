import React from "react";
import Heading from "../Heading";

export default function BodyDescription() {
  return (
    <div className="flex flex-col gap-8">
      <Heading
        title="How would you describe your place?"
        subtitle="Short and sweet works best!"
      />
    </div>
  );
}
