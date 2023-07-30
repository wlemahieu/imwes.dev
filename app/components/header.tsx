import ExternalLinks from "./externalLinks";
import InternalLinks from "./internalLinks";

export default function Header() {
  return (
    <div className="flex flex-col border-b-4 border-grey bg-cyan-600 p-6">
      <h1 className="text-3xl font-bold text-white mx-auto mb-2">
        Wesley LeMahieu
      </h1>
      <ExternalLinks />
      <InternalLinks />
    </div>
  );
}
