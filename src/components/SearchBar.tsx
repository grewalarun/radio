interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="sticky top-0 z-10 border-b p-4">
      <input
        type="text"
        placeholder="Search radio stations, languages..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-gray-300 px-4 py-3
                   focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    </div>
  );
}
