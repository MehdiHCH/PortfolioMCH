const countryNames = {
  ma: "Morocco",
  us: "United States",
  fr: "France",
  au: "Australia",
  nz: "New Zealand",
  hr: "Croatia",
};

export const CountryFlags = ({ countries = [] }) => (
  <span className="inline-flex shrink-0 items-center gap-1.5">
    {countries.map((code) => (
      <img
        key={code}
        src={`${import.meta.env.BASE_URL}flags/${code}.svg`}
        alt={`${countryNames[code] || code} flag`}
        title={countryNames[code] || code}
        width="24"
        height="18"
        loading="lazy"
        className="inline-block rounded-sm"
        style={{ width: "24px", height: "18px", objectFit: "cover" }}
      />
    ))}
  </span>
);
