import { EnvelopeIcon, LinkIcon, MapPinIcon, PhoneIcon, UserIcon } from "@heroicons/react/16/solid";
import InputText from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";
import InputGroup from "@/app/components/partial/InputGroup";
import SimpleCard from "../partial/SimpleCard";

export default function PersonalInfo() 
{
    return (
        <div className="grid gap-6">

            {/* PERSONAL_INFORMATION */}
            <SimpleCard
                className="personalInfo"
                header={<h2 className="text-2xl">Personal Information</h2>}
                footer={<Button type="button"/>}
            >
                <div className="grid grid-rows-3 md:grid-cols-2 grid-cols-flow gap-4">
                    {/* INPUT_USERNAME */}
                    <InputGroup
                        error="Invalid Username"
                        icon={ <UserIcon className="w-5 h-5 text-primary"/> }>

                        <InputText
                            name="username"
                            placeholder="Username"
                            className="pl-9"/>
                    </InputGroup>

                    {/* INPUT_EMAIL */}
                    <InputGroup
                        error="Invalid Email"
                        icon={ <EnvelopeIcon className="w-5 h-5 text-primary"/> }>

                        <InputText
                            name="email"
                            type="email"
                            placeholder="Email"
                            className="pl-9"/>
                    </InputGroup>

                    {/* INPUT_PHONE */}
                    <InputGroup
                        // error="Invalid Contact"
                        icon={ <PhoneIcon className="w-5 h-5 text-primary"/> }>

                        <InputText
                            name="contact"
                            placeholder="Contact"
                            className="pl-9"/>
                    </InputGroup>

                    {/* INPUT_ADDRESS */}
                    <InputGroup
                        // error="Invalid Address"
                        icon={ <MapPinIcon className="w-5 h-5 text-primary"/> }>

                        <InputText
                            name="address"
                            placeholder="Address"
                            className="pl-9"/>
                    </InputGroup>

                    {/* INPUT_LINKEDIN */}
                    <InputGroup
                        // error="Invalid Link"
                        icon={ <LinkIcon className="w-5 h-5 text-primary"/> }>

                        <InputText
                            name="linkedin"
                            placeholder="Linked In"
                            className="pl-9"/>
                    </InputGroup>

                    {/* INPUT_PORTFOLIO */}
                    <InputGroup
                        // error="Invalid Link"
                        icon={ <LinkIcon className="w-5 h-5 text-primary"/> }>

                        <InputText
                            name="protfolio"
                            placeholder="Portfolio"
                            className="pl-9"/>
                    </InputGroup>
                </div>
            </SimpleCard>
        </div>        
    )
}