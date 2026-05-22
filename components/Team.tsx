import Link from "next/link";
import { Award, BriefcaseBusiness, GraduationCap, ArrowDown } from "lucide-react";
import { teamMembers } from "@/lib/data";

function Avatar({ name, featured = false }: { name: string; featured?: boolean }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
  return (
    <div
      className={[
        "rounded-2xl bg-accent/10 flex items-center justify-center",
        featured ? "h-28 w-24 sm:h-36 sm:w-28" : "h-20 w-[4.5rem] sm:h-24 sm:w-20",
      ].join(" ")}
    >
      <span className={`font-bold text-accent ${featured ? "text-3xl" : "text-xl"}`}>
        {initials}
      </span>
    </div>
  );
}

function SmallMemberCard({ member }: { member: (typeof teamMembers)[number] }) {
  return (
    <article className="mx-auto flex w-full max-w-[17rem] flex-col items-center px-5 pb-6 pt-8 text-center bg-surface border border-blue-100 rounded-2xl shadow-sm">
      <div className="mb-4">
        <Avatar name={member.name} />
      </div>
      <h3 className="text-base font-bold text-primary leading-snug">{member.name}</h3>
      <p className="mt-1 text-sm text-accent font-medium">{member.role}</p>
      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-400">
        {member.department}
      </p>
    </article>
  );
}

function FeaturedMemberCard({ member }: { member: (typeof teamMembers)[number] }) {
  return (
    <article className="mx-auto w-full max-w-[30rem] px-6 pb-8 pt-12 text-center sm:px-8 bg-surface border border-blue-100 rounded-3xl shadow-md">
      <div className="mx-auto mb-5 w-fit">
        <Avatar name={member.name} featured />
      </div>
      <p className="mb-3 text-xs uppercase tracking-[0.4em] text-accent font-semibold">
        Leadership
      </p>
      <h3 className="text-3xl font-bold text-primary sm:text-4xl">{member.name}</h3>
      <p className="mt-2 text-base text-accent font-medium">{member.role}</p>
      <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600">
        {member.specialization}
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-gray-600">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5">
          <BriefcaseBusiness size={14} className="text-accent" />
          {member.experience}+ years
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5">
          <GraduationCap size={14} className="text-accent" />
          {member.degrees.length} degrees
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5">
          <Award size={14} className="text-accent" />
          {member.licenses.length} credentials
        </span>
      </div>

      <Link
        href="#all-team"
        className="mt-8 inline-flex items-center justify-center border border-accent text-accent px-6 py-3 text-sm font-semibold rounded-xl transition-colors hover:bg-accent hover:text-white"
      >
        Meet the full team
      </Link>
    </article>
  );
}

function SupportingMemberCard({ member }: { member: (typeof teamMembers)[number] }) {
  return (
    <article className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <Avatar name={member.name} />
        <div>
          <h3 className="text-base font-bold text-primary leading-snug">{member.name}</h3>
          <p className="mt-1 text-sm text-accent font-medium">{member.role}</p>
          <p className="mt-3 text-xs leading-6 text-gray-500">{member.specialization}</p>
        </div>
      </div>
    </article>
  );
}

export default function Team() {
  const featuredMember = teamMembers[0];
  const sideMembers = teamMembers.slice(1, 5);
  const leftMembers = sideMembers.slice(0, 2);
  const rightMembers = sideMembers.slice(2, 4);
  const supportingMembers = teamMembers.slice(5);

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Our People
          </p>
          <h2 className="text-4xl font-bold text-primary sm:text-5xl">Our Team</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Experienced auditors, accountants, and advisors working together to give
            clients practical financial clarity.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,30rem)_minmax(0,1fr)] lg:items-center">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {leftMembers.map((member) => (
              <SmallMemberCard key={member.name} member={member} />
            ))}
          </div>

          {featuredMember ? <FeaturedMemberCard member={featuredMember} /> : null}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {rightMembers.map((member) => (
              <SmallMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="#all-team"
            className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-blue-100 bg-surface text-primary shadow-sm transition-transform hover:translate-y-1"
            aria-label="Scroll to all team members"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/60">
              <ArrowDown size={18} className="text-accent" />
            </span>
          </Link>
        </div>

        {supportingMembers.length > 0 && (
          <div id="all-team" className="mt-20">
            <div className="mb-8 text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-accent font-semibold mb-3">
                Wider Practice
              </p>
              <h3 className="text-3xl font-bold text-primary">
                More specialists behind the work
              </h3>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {supportingMembers.map((member) => (
                <SupportingMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
