import moment, { isDate } from "moment"

export type WorkExperienceDataType = {
    position: string,
    startAt: Date,
    endAt?: Date | 'Present',
    company: string,
    keyResponsibilities?: string[],
    description?: string
}

export default function WorkExperience({
    data
}:{
    data:WorkExperienceDataType
}) {
    return (
        <li className="listItem">
            <div className="flex justify-between font-bold">
                <div>{ data.position }</div>
                <div className="text-primary flex gap-2">
                    { moment(data.startAt).format('MMM YYYY') } 
                    <span>-</span>
                    { isDate(data.endAt) ? moment(data.endAt)?.format('MMM YYYY') : data.endAt }
                </div>
            </div>
            <div className="text-primary font-bold">{ data.company }</div>
            <ul className="list-disc list-inside">
                { 
                    data?.keyResponsibilities && (
                        data?.keyResponsibilities?.map((responsibility:string, key:number) => {
                            return (<li key={key}>{ responsibility }</li>);
                        })
                    )
                }
            </ul>
            { data.description && <p className="mt-2 p-2 bg-gray-50 border">{ data.description }</p> }
        </li>
    )
}