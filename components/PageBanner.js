export default function PageBanner({ title, crumb }) {
  return (
    <div className="bg-brand text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-1 text-sm text-white/80">Home / {crumb || title}</p>
      </div>
    </div>
  );
}
