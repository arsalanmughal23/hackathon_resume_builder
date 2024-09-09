import { EnvelopeIcon, LinkIcon, MapPinIcon, PhoneIcon, UserIcon } from "@heroicons/react/16/solid";
import InputText from "@/app/components/ui/Input";
import Button from "@/app/components/ui/Button";

export default function PersonalInfo() 
{
    return (
        <div className="form personalInfo grid gap-4 drop-shadow-2xl bg-white p-4">
          
          <div className="head border-b-2">
            <h2 className="text-2xl">Personal Information</h2>
          </div>

          <div className="body py-2">

            <div className="grid grid-rows-3 grid-cols-2 gap-2">
              {/* INPUT_USERNAME */}
              <div>
                <label className="relative block">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <UserIcon className="w-5 h-5 text-primary"/>
                  </span>

                  <InputText
                    name="username"
                    placeholder="Username"
                    className="pl-9"
                  />
                </label>
              </div>

              {/* INPUT_EMAIL */}
              <div>          
                <label className="relative block">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <EnvelopeIcon className="w-5 h-5 text-primary"/>
                  </span>

                  <InputText
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="pl-9"
                  />

                </label>
              </div>

              {/* INPUT_PHONE */}
              <div>
                <label className="relative block">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <PhoneIcon className="w-5 h-5 text-primary"/>
                  </span>

                  <InputText
                    name="contact"
                    placeholder="Contact"
                    className="pl-9"
                  />

                </label>
              </div>

              {/* INPUT_ADDRESS */}
              <div>          
                <label className="relative block">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <MapPinIcon className="w-5 h-5 text-primary"/>
                  </span>

                  <InputText
                    name="address"
                    placeholder="Address"
                    className="pl-9"
                  />

                </label>
              </div>

              {/* INPUT_LINKEDIN */}
              <div>
                <label className="relative block">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <LinkIcon className="w-5 h-5 text-primary"/>
                  </span>

                  <InputText
                    name="linkedin"
                    placeholder="Linked In"
                    className="pl-9"
                  />

                </label>
              </div>

              {/* INPUT_PORTFOLIO */}
              <div>
                <label className="relative block">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <LinkIcon className="w-5 h-5 text-primary"/>
                  </span>

                  <InputText
                    name="protfolio"
                    placeholder="Portfolio"
                    className="pl-9"
                  />

                </label>
              </div>

            </div>

          </div>

          <div className="foot border-t-2 pt-2">
            <Button type="button"/>
          </div>

        </div>
    )
}