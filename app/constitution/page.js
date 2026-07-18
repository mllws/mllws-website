import PageBanner from "@/components/PageBanner";

export const metadata = {
  title: "MLLWS Constitution",
  description: "Constitution and By-Laws of the Mother Language Lovers of the World Society",
};

export default function ConstitutionPage() {
  return (
    <div>
      <PageBanner title="Constitution and By-Laws" crumb="Constitution & By-Laws" />

      <section className="mx-auto max-w-4xl px-4 py-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Mother Language Lovers of the World Society
        </p>
        <p className="mt-4 text-gray-700">
          A committee has been formed to review and amend the current MLLWS
          Constitution to improve governance and address procedural concerns.
          The amendments are expected to be presented by the first week of
          December 2024.
        </p>
      </section>
    </div>
  );
}
