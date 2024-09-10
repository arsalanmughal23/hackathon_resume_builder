import dynamic from "next/dynamic";

export default function Home() {
  const PersonalInfo = dynamic(() => import('@/app/components/builder/PersonalInfo'), { ssr: false });

  return (
    <div className="md:flex gap-4 justify-around p-4 md:p-20 font-[family-name:var(--font-geist-sans)]">

      {/* FORM_PERSONAL_INFO */}
      <div className="md:w-5/6">
        <PersonalInfo/>
      </div>

    </div>
  );
}