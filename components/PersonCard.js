import Image from "next/image";

export default function PersonCard({ name, title, photo, email }) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition hover:shadow-md">
      <div className="aspect-square w-full overflow-hidden bg-gray-100">
        <Image
          src={photo}
          alt={title}
          width={300}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4 text-center">
        <p className="font-semibold text-brand-dark">{name}</p>
        <p className="mt-1 text-sm text-gray-500">{title}</p>
        {email && (
          <a
            href={`mailto:${email}`}
            className="mt-2 inline-block text-xs text-brand hover:underline"
          >
            {email}
          </a>
        )}
      </div>
    </div>
  );
}
