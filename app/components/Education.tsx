import moment, { isDate } from "moment"

export type EducationDataType =   {
    degree: string,
    institute: string,
    from: Date,
    to?: Date | 'Present'
}

export default function Education({
    data
}:{
    data:EducationDataType
}) {
    return (
        <li className="listItem">
            <div className="flex justify-between font-bold">
                <div>{ data.degree }</div>
                <div className="text-primary flex gap-2">
                    { moment(data.from).format('MMM YYYY') } 
                    <span>-</span>
                    { isDate(data.to) ? moment(data.to)?.format('MMM YYYY') : data.to }
                </div>
            </div>
            <div className="text-primary font-bold">{ data.institute }</div>
        </li>
    )
}