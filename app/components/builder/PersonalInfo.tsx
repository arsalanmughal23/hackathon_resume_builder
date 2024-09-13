"use client";

import { EnvelopeIcon, LinkIcon, MapPinIcon, PhoneIcon, UserIcon } from "@heroicons/react/16/solid";
import InputText from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import InputGroup from "@/app/components/partial/InputGroup";
import SimpleCard, { SimpleCardStyleEnum } from "../partial/SimpleCard";
import { store, updatePersonalInfoData } from "@/app/store";
import PersonalInfoDataType from "@/app/interfaces/PersonalInfo";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PersonalInfo() 
{
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    const [username, setUsername] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [contact, setContact] = useState<string | null>(null);
    const [address, setAddress] = useState<string | null>(null);
    const [linkedIn, setLinkedIn] = useState<string | null>(null);
    const [portfolio, setPortfolio] = useState<string | null>(null);

    const handleOnChangeUsername: (username: string) => void = (username) => setUsername(username);
    const handleOnChangeEmail: (email: string) => void = (email) => setEmail(email);
    const handleOnChangeContact: (contact: string) => void = (contact) => setContact(contact);
    const handleOnChangeAddress: (address: string) => void = (address) => setAddress(address);
    const handleOnChangeLinkedIn: (linkedIn: string) => void = (linkedIn) => setLinkedIn(linkedIn);
    const handleOnChangePortfolio: (portfolio: string) => void = (portfolio) => setPortfolio(portfolio);

    useEffect(()=>{
        setIsMounted(true);
    }, [])

    const handleOnSubmit:() => void = async() => {
        if(!isMounted) return;

        const personalInfo:PersonalInfoDataType = { username, email, contact, address, linkedIn, portfolio }
        store.dispatch(updatePersonalInfoData(personalInfo));
        router.push('/resume');
    };


    return (
        <div className="grid gap-6">

            {/* PERSONAL_INFORMATION */}
            <SimpleCard
                className="personalInfo"
                header={<h2 className="text-2xl">Personal Information</h2>}
                footer={
                    <Button 
                        type="button"
                        onClick={()=>handleOnSubmit()}
                        />
                }
                style={SimpleCardStyleEnum.STYLE2}
            >
                <div className="grid grid-rows-3 md:grid-cols-2 grid-cols-flow gap-4">
                    {/* INPUT_USERNAME */}
                    <InputGroup
                        error="Invalid Username"
                        icon={ <UserIcon className="w-5 h-5 text-primary"/> }>

                        <InputText
                            name="username"
                            placeholder="Username"
                            className="pl-9"
                            onChange={handleOnChangeUsername}
                            value={username || ''}/>
                    </InputGroup>

                    {/* INPUT_EMAIL */}
                    <InputGroup
                        error="Invalid Email"
                        icon={ <EnvelopeIcon className="w-5 h-5 text-primary"/> }>

                        <InputText
                            name="email"
                            type="email"
                            placeholder="Email"
                            className="pl-9"
                            onChange={handleOnChangeEmail}
                            value={email || ''}/>
                    </InputGroup>

                    {/* INPUT_PHONE */}
                    <InputGroup
                        // error="Invalid Contact"
                        icon={ <PhoneIcon className="w-5 h-5 text-primary"/> }>

                        <InputText
                            name="contact"
                            placeholder="Contact"
                            className="pl-9"
                            onChange={handleOnChangeContact}
                            value={contact || ''}/>
                    </InputGroup>

                    {/* INPUT_ADDRESS */}
                    <InputGroup
                        // error="Invalid Address"
                        icon={ <MapPinIcon className="w-5 h-5 text-primary"/> }>

                        <InputText
                            name="address"
                            placeholder="Address"
                            className="pl-9"
                            onChange={handleOnChangeAddress}
                            value={address || ''}/>
                    </InputGroup>

                    {/* INPUT_LINKEDIN */}
                    <InputGroup
                        // error="Invalid Link"
                        icon={ <LinkIcon className="w-5 h-5 text-primary"/> }>

                        <InputText
                            name="linkedin"
                            placeholder="Linked In"
                            className="pl-9"
                            onChange={handleOnChangeLinkedIn}
                            value={linkedIn || ''}/>
                    </InputGroup>

                    {/* INPUT_PORTFOLIO */}
                    <InputGroup
                        // error="Invalid Link"
                        icon={ <LinkIcon className="w-5 h-5 text-primary"/> }>

                        <InputText
                            name="protfolio"
                            placeholder="Portfolio"
                            className="pl-9"
                            onChange={handleOnChangePortfolio}
                            value={portfolio || ''}/>
                    </InputGroup>
                </div>
            </SimpleCard>
        </div>        
    )
}