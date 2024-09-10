"use client"

import { EnvelopeIcon, GlobeAltIcon, LinkIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import Rating from "./Rating";
import PersonalInfoDataType from "../interfaces/PersonalInfo";
import { store } from "@/app/store";

export default function Sidebar() 
{
    let appData = store.getState();
    let { personalInfo } : {
        personalInfo:PersonalInfoDataType
    } = appData;

    store.subscribe(() => {
        appData = store.getState();
        personalInfo = appData?.personalInfo;
    });

    return (
        <>
            {/* USER_NAME */}
            <div className="userName bg-primary text-light h-32 flex justify-center items-center rounded">
                <h2 className="text-2xl">{ personalInfo?.username }</h2>
            </div>

            {/* PERSONAL_DETAILS */}
            <div className="personalDetails p-4 pt-6">
                <h2 className="text-2xl border-b-2">Personal Detail</h2>
                <ul className="detailList grid gap-2 mt-3">
                    <li className="listItem email flex flex-wrap gap-2">
                        <EnvelopeIcon className="h-6 w-6 text-pri-500"/>
                        <Link href={`mailto:${ personalInfo?.email }`}>
                            { personalInfo?.email }
                        </Link>
                    </li>
                    <li className="listItem phone flex flex-wrap gap-2">
                        <PhoneIcon className="h-6 w-6 text-pri-500"/>
                        <Link href={`tel:${ personalInfo?.contact }`}>
                            { personalInfo?.contact }
                        </Link>
                    </li>
                    <li className="listItem address flex flex-wrap gap-2">
                        <MapPinIcon className="h-6 w-6 text-pri-500"/>
                        <Link href={"#"}>
                            { personalInfo?.address }
                        </Link>
                    </li>
                    <li className="listItem linkedin flex flex-wrap gap-2">
                        <LinkIcon className="h-6 w-6 text-pri-500"/>
                        <Link href={ personalInfo?.linkedIn ?? "#" }>
                            { [...personalInfo?.linkedIn?.split('/') ?? []].pop() }
                        </Link>
                    </li>
                    <li className="listItem portfolio flex flex-wrap gap-2">
                        <GlobeAltIcon className="h-6 w-6 text-pri-500"/>
                        <Link href={ personalInfo?.portfolio ?? "#" }>
                            { [...personalInfo?.portfolio?.split('/') ?? []].pop() }
                        </Link>
                    </li>
                </ul>
            </div>

            {/* HARD_SKILLS */}
            <div className="hardSkills p-4 pt-6">
                <h2 className="text-2xl border-b-2">Hard Skills</h2>
                <ul className="detailList grid gap-2 mt-3">
                    <li className="listItem email flex flex-wrap gap-2 justify-between">
                        <p>NodeJs</p>
                        <Rating rating={5}/>
                    </li>
                    <li className="listItem phone flex flex-wrap gap-2 justify-between">
                        <p>Typescript</p>
                        <Rating rating={5}/>
                    </li>
                    <li className="listItem address flex flex-wrap gap-2 justify-between">
                        <p>ReactJs</p>
                        <Rating rating={7}/>
                    </li>
                    <li className="listItem linkedin flex flex-wrap gap-2 justify-between">
                        <p>NextJs</p>
                        <Rating rating={2}/>
                    </li>
                    <li className="listItem linkedin flex flex-wrap gap-2 justify-between">
                        <p>MongoDB</p>
                        <Rating rating={6}/>
                    </li>
                    <li className="listItem linkedin flex flex-wrap gap-2 justify-between">
                        <p>MySql</p>
                        <Rating rating={9}/>
                    </li>
                    <li className="listItem linkedin flex flex-wrap gap-2 justify-between">
                        <p>PHP (Laravel)</p>
                        <Rating rating={9}/>
                    </li>
                </ul>
            </div>

            {/* SOFT_SKILLS */}
            <div className="softSkills p-4 pt-6">
                <h2 className="text-2xl border-b-2">Soft Skills</h2>
                <ul className="detailList grid gap-2 mt-3">
                    <li className="listItem phone flex flex-wrap gap-2 justify-between">
                        <p>Leadership</p>
                        <Rating rating={8}/>
                    </li>
                    <li className="listItem address flex flex-wrap gap-2 justify-between">
                        <p>Team Lead</p>
                        <Rating rating={6}/>
                    </li>
                    <li className="listItem linkedin flex flex-wrap gap-2 justify-between">
                        <p>Problem Solving</p>
                        <Rating rating={9}/>
                    </li>
                    <li className="listItem linkedin flex flex-wrap gap-2 justify-between">
                        <p>Plaining</p>
                        <Rating rating={4}/>
                    </li>
                    <li className="listItem linkedin flex flex-wrap gap-2 justify-between">
                        <p>Management</p>
                        <Rating rating={4}/>
                    </li>
                </ul>
            </div>
        </>
    );
}