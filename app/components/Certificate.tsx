import moment, { isDate } from "moment"

export type CertificateDataType = {
    title: string,
    orgnization: string,
    date: Date
}

export default function Certificate({
    data
}:{
    data:CertificateDataType
}) {
    return (
        <li className="listItem">
            <div className="flex justify-between font-bold">
                <div>{ data.title }</div>
                <div className="text-primary flex gap-2">
                    { moment(data.date).format('MMM YYYY') }
                </div>
            </div>
            <div className="text-primary font-bold">{ data.orgnization }</div>
        </li>
    )
}