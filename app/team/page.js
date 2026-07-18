import PageBanner from "@/components/PageBanner";
import PersonCard from "@/components/PersonCard";
import { directors, chapters, advisors } from "@/lib/data";

export const metadata = {
  title: "Directors MLLWS",
  description:
    "Board of Directors / Global Policy Board of Mother Language Lovers of the World Society for 2019 – 2021.",
};

export default function TeamPage() {
  return (
    <div>
      <PageBanner title="Our Team" crumb="Board of Directors" />

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold text-brand-dark">Board of Directors</h2>
        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {directors.map((d) => (
            <PersonCard key={d.name} {...d} />
          ))}
        </div>

        <h2 className="mt-14 text-2xl font-bold text-brand-dark">Chapters</h2>
        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {chapters.map((d) => (
            <PersonCard key={d.name} {...d} />
          ))}
        </div>

        <h2 className="mt-14 text-2xl font-bold text-brand-dark">Advisors</h2>
        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {advisors.map((d) => (
            <PersonCard key={d.name} {...d} />
          ))}
        </div>
      </section>
    </div>
  );
}
