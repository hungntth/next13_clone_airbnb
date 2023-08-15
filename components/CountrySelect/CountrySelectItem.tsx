
export default function CountrySelectItem({option}: any) {
  return (
    <div
      className="
          flex flex-row items-center gap-3"
    >
      <div>{option.flag}</div>
      <div>
        {option.label},
        <span className="text-neutral-500 ml-1">{option.region}</span>
      </div>
    </div>
  );
}
