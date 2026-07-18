import PageBanner from "@/components/PageBanner";
import { recommendationLetters, gviewUrl } from "@/lib/data";

export const metadata = {
  title: "MLLWS Recomendations",
  description:
    "Several school boards in British Columbia recognizes the need to assist students being aware of their mother languages and upholding their heritage for future generations; this includes Surrey, Vancouver, Richmond, Langley etc.",
};

export default function RecommendationPage() {
  return (
    <div>
      <PageBanner title="Recomendation" crumb="Recomendation" />

      <section className="mx-auto max-w-4xl space-y-10 px-4 py-14">
        {recommendationLetters.map((letter) => (
          <div key={letter.title}>
            <h2 className="text-xl font-bold text-brand-dark">{letter.title}</h2>
            <div className="mt-4 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
              <iframe
                title={letter.title}
                src={gviewUrl(letter.pdf)}
                className="h-[500px] w-full"
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
