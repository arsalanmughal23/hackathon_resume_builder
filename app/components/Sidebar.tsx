import { EnvelopeIcon, LinkIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import Rating from "./Rating";

export default function Sidebar() 
{
    return (
        <>        
            {/* USER_NAME */}
            <div className="userName bg-primary text-light h-32 flex justify-center items-center rounded">
                <h2 className="text-2xl">Arsalan</h2>
            </div>

            {/* PERSONAL_DETAILS */}
            <div className="personalDetails p-4 pt-6">
                <h2 className="text-2xl border-b-2">Personal Detail</h2>
                <ul className="detailList grid gap-2 mt-3">
                    <li className="listItem email flex flex-wrap gap-2">
                        <EnvelopeIcon className="h-6 w-6 text-pri-500"/>
                        <Link href={"mailto:arsalanmughal@gmail.com"}>
                            arsalanmughal@gmail.com
                        </Link>
                    </li>
                    <li className="listItem phone flex flex-wrap gap-2">
                        <PhoneIcon className="h-6 w-6 text-pri-500"/>
                        <Link href={"tel:+923152929408"}>
                            +92 3152929408
                        </Link>
                    </li>
                    <li className="listItem address flex flex-wrap gap-2">
                        <MapPinIcon className="h-6 w-6 text-pri-500"/>
                        <Link href={"#"}>
                            Karachi, Pakistan
                        </Link>
                    </li>
                    <li className="listItem linkedin flex flex-wrap gap-2">
                        <LinkIcon className="h-6 w-6 text-pri-500"/>
                        <Link href={"https://www.linkedin.com/in/arsalan-mughal-671a8a179"}>
                            arsalan-mughal-671a8a179
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