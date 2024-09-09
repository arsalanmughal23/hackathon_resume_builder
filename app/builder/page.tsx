import PersonalInfo from "../components/builder/PersonalInfo";

export default function Home() {
  return (
    <div className="md:flex gap-4 justify-around p-4 md:p-20 font-[family-name:var(--font-geist-sans)]">

      {/* FORM_PERSONAL_INFO */}
      <div className="md:w-5/6">
        <PersonalInfo/>
      </div>

    </div>
  );
}