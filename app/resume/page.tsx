import Certificate, { CertificateDataType } from "../components/Certificate";
import Education, { EducationDataType } from "../components/Education";
import WorkExperience, { WorkExperienceDataType } from "../components/WorkExperience";

export type SummaryDataType = string;
const summaryData:SummaryDataType = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iste commodi quia et. Ex quae soluta libero incidunt quos, odio eligendi rerum consectetur in, magni eos error tenetur voluptate corporis?'

const workExperienceListData:WorkExperienceDataType[] = [
  {
    position: "Web Developer",
    startAt: new Date('2018-04-10'),
    endAt: new Date('2020-02-10'),
    company: "Digital Graphics",
    keyResponsibilities: [
      "Lorem ipsum dolor consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    ],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iste commodi quia et. Ex quae soluta libero incidunt quos, odio eligendi rerum consectetur in, magni eos error tenetur voluptate corporis?",
  },
  {
    position: "Associate Software Engineer",
    startAt: new Date('2020-02-10'),
    endAt: new Date('2022-08-10'),
    company: "Native Brains",
    keyResponsibilities: [
      "Lorem ipsum dolor consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    ]
  }
];

const educationListData:EducationDataType[] = [
  {
    degree: "Metric Science",
    institute: "The Gracefull Grammar High School",
    from: new Date('2014'),
    to: new Date('2016')
  },
  {
    degree: "ACCP (Pro)",
    institute: "Aptech",
    from: new Date('2018'),
    to: new Date('2020')
  }
];

const certificateListData:CertificateDataType[] = [
  {
    title: "Matric Science",
    orgnization: "Sindh Matric Board",
    date: new Date('2014')
  }
];

export type MainPageData = {
  summaryData: SummaryDataType,
  workExperienceListData: WorkExperienceDataType[],
  educationListData: EducationDataType[],
  certificateListData: CertificateDataType[]
}

const mainPageData: MainPageData = {
  summaryData,
  workExperienceListData,
  educationListData,
  certificateListData
}

export default function Home() {
  return (
    <div className="grid gap-6 p-4 pt-6">

      {/* SUMMARY */}
      <div className="summary">
        <h2 className="text-2xl border-b-2">Summary</h2>
        <p className="pt-2">{ summaryData }</p>
      </div>

      {/* WORK_EXPERIENCE */}
      <div className="workExperience">
        <h2 className="text-2xl border-b-2 mb-2">Work Experience</h2>
        <ul className="experienceList grid gap-4 pt-2">
          {
            workExperienceListData && workExperienceListData.map((workExperience:WorkExperienceDataType, key:number) => {
              return (
                <WorkExperience 
                  key={key}
                  data={workExperience} 
                />
              );
            })
          }
        </ul>
      </div>
      
      {/* EDUCATION */}
      <div className="education">
        <h2 className="text-2xl border-b-2 mb-2">Education</h2>
        <ul className="educationList grid gap-4 pt-2">
          {
            educationListData && educationListData.map((education:EducationDataType, key:number) => {
              return (
                <Education
                  key={key}
                  data={education} 
                />
              );
            })
          }
        </ul>
      </div>

      {/* CERTIFICATION / AWARD */}
      <div className="workExperience">
        <h2 className="text-2xl border-b-2 mb-2">Certification</h2>
        <ul className="experienceList grid gap-4">
          {
            certificateListData && certificateListData.map((certificate:CertificateDataType, key:number) => {
              return (
                <Certificate
                  key={key}
                  data={certificate} 
                />
              );
            })
          }
        </ul>
      </div>

    </div>
  );
}