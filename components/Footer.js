import Image from "next/image";
import Link from "next/link";
import { sponsors, recentPosts } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-brand-dark text-gray-200">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white">
            Mother Language Lovers of the World Society
          </h2>
          <p className="mt-1 text-sm uppercase tracking-widest text-accent">
            Our language is our identity
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          {sponsors.map((s) => (
            <div
              key={s.name}
              className="flex h-16 w-28 items-center justify-center rounded bg-white p-2"
              title={s.name}
            >
              <Image
                src={s.src}
                alt={s.name}
                width={110}
                height={50}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-white">About Us</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-300">
              Mother Language Lovers of the World Society is a non-profit organization
              which bring together various linguistic and cultural origins to celebrate
              their heritage and enrich multiculturalism and intercultural harmony. We
              also promote the International Mother Language Day (Feb 21) to build
              national as well as community-level capacity for inclusive education and
              multilingualism as envisioned by the UNESCO.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Recent Posts</h3>
            <ul className="mt-3 space-y-3">
              {recentPosts.map((post) => (
                <li key={post.title} className="border-b border-white/10 pb-3 text-sm">
                  <Link href="#" className="font-medium text-gray-100 hover:text-accent">
                    {post.title}
                  </Link>
                  <div className="mt-1 text-xs text-gray-400">
                    {post.date} / {post.comments} comments
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-center text-xs leading-relaxed text-gray-400">
          Mother Language Lovers of the World Society (MLLWS) acknowledges that it is
          situated on the unceded traditional territories of the xʷməθkʷəy̓əm (Musqueam
          Indian Band), Sḵwx̱wú7mesh (Squamish Nation), and səlilwətaɬ (Tsleil-Waututh
          Nation).
        </p>

        <p className="mt-4 text-center text-xs text-gray-500">
          Copyright © {year} by Mother Language Lovers of the World Society | All
          rights reserved
        </p>
      </div>
    </footer>
  );
}
