import { GoogleMapsEmbed } from "@next/third-parties/google";

export default function Page() {
  // This is a server component by default so we can call the environment variable directly
  const apiKey = process.env.GOOGLE_API_KEY || "nokey";
  const defaultLocation = {
    lat: 38.047766754902185,
    lng: 23.773458895895416,
  };
  return (
    <div className="max-w-sm">
      <GoogleMapsEmbed
        apiKey={apiKey}
        mode="place"
        height={600}
        center={`${defaultLocation.lat}, ${defaultLocation.lng}`}
        allowfullscreen={true}
        // this property means that the map will stretch the width of the parent container (in this case max-w-xl)
        style="width:100%"
        loading="lazy"
        zoom="15"
        q="Χαραυγής 26, Ηράκλειο 141 21, Ελλάδα"
      />
    </div>
  );
}
