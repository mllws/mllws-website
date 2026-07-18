import PageBanner from "@/components/PageBanner";
import { contactInfo } from "@/lib/data";

export const metadata = {
  title: "Contact MLLWS",
  description:
    "If you are in the middle of something and you don't want to miss that important call to preserve your mother language that could be the start of an exciting new journey",
};

export default function ContactPage() {
  return (
    <div>
      <PageBanner title="Contact us" crumb="Contact Us" />

      <section className="mx-auto max-w-3xl px-4 py-14">
        <h2 className="text-2xl font-bold text-brand-dark">Contact information</h2>
        <p className="mt-3 text-gray-700">
          If you are in the middle of something and you don&apos;t want to
          miss that important call that could be the start of an exciting
          new journey.
        </p>

        <dl className="mt-8 divide-y divide-gray-100 rounded-lg border border-gray-100 bg-white shadow-sm">
          <div className="grid grid-cols-1 gap-1 p-4 sm:grid-cols-[140px_1fr]">
            <dt className="font-semibold text-brand-dark">Address</dt>
            <dd className="text-gray-700">
              #10-7875 122 Street
              <br />
              Surrey, British Columbia
              <br />
              V3W 0Y8
              <br />
              Canada
            </dd>
          </div>
          <div className="grid grid-cols-1 gap-1 p-4 sm:grid-cols-[140px_1fr]">
            <dt className="font-semibold text-brand-dark">Email</dt>
            <dd>
              <a href={`mailto:${contactInfo.email}`} className="text-brand hover:underline">
                {contactInfo.email}
              </a>
            </dd>
          </div>
          <div className="grid grid-cols-1 gap-1 p-4 sm:grid-cols-[140px_1fr]">
            <dt className="font-semibold text-brand-dark">Phone</dt>
            <dd>
              <a href={contactInfo.phoneHref} className="text-brand hover:underline">
                {contactInfo.phone}
              </a>
            </dd>
          </div>
          {contactInfo.social.map((s) => (
            <div key={s.label} className="grid grid-cols-1 gap-1 p-4 sm:grid-cols-[140px_1fr]">
              <dt className="font-semibold text-brand-dark">{s.label}</dt>
              <dd>
                <a href={s.href} target="_blank" rel="noreferrer" className="text-brand hover:underline">
                  {s.handle}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
