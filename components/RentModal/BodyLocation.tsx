import CountrySelect from "../CountrySelect";
import { CountrySelectValue } from "../CountrySelect/CountrySelect";
import Heading from "../Heading";
import Map from "../Map";

interface BodyLocationProps {
  onChange: (value: CountrySelectValue) => void;
  value: CountrySelectValue | undefined;
}

export default function BodyLocation({ onChange, value }: BodyLocationProps) {
  return (
    <div className="flex flex-col gap-8">
      <Heading
        title="Where is your place located?"
        subtitle="Help guests find you!"
      />
      <CountrySelect onChange={onChange} value={value} />
      <Map center={value?.latlng} />
    </div>
  );
}
