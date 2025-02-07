export type ServiceType = "Occupational Therapy" | "Physiotherapy" | "Both"

export interface BaseData {
    appointmentDate: string,
    serviceType: ServiceType,
    fullName: string,
    email: string, 
    phone: string, 
    gender: string, 
    dob: string, 
    streetAddress: string,
    referralFullName: string,
    referralCompany: string, 
    referralPhone: string, 
    referralEmail: string, 
    reasonForReferral: string, 
    referralSource: string,
}

export interface Private extends BaseData{
    type:"Private",
}

export interface NDIS extends BaseData {
    type: "NDIS",
    ndisNumber: string,
    planStartDate: string, 
    planEndDate: string, 
    fundsAvailable?: number,
    fundsManaged: string,
    ndisEmailInvoice: string,
}

export interface HCP extends BaseData {
    type: "Home Care Package"
    hcpOrganisation: string,
    hcpPhone: string, 
    caseName: string, 
    caseEmail: string,
    casePhone: string,
    hcpEmailInvoice: string,
}

export type ServiceData = NDIS | HCP | Private;

export const formatRowData = (data: ServiceData): Record<string, string> => {
    const now = new Date();
    const currentDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    const baseData: BaseData = {
        appointmentDate: currentDate,
        serviceType: data.serviceType,
        fullName: data.fullName,
        email: data.email, 
        phone: data.phone, 
        gender: data.gender, 
        dob: data.dob, 
        streetAddress: data.streetAddress,
        referralFullName: data.referralFullName,
        referralCompany: data.referralCompany, 
        referralPhone: data.referralPhone, 
        referralEmail: data.referralEmail, 
        reasonForReferral: data.reasonForReferral, 
        referralSource: data.referralSource,
    }

    if (data.type === "NDIS"){
        return {
            ...baseData,
            type:data.type,
            ndisNumber: data.ndisNumber,
            planStartDate: data.planStartDate, 
            planEndDate: data.planEndDate, 
            fundsAvailable:  data.fundsAvailable ? data.fundsAvailable.toString() : "",
            fundsManaged: data.fundsManaged,
            ndisEmailInvoice: data.ndisEmailInvoice,
        }
    }
    else if (data.type === "Home Care Package"){
        return {
            ...baseData,
            type:data.type,
            hcpOrganisation: data.hcpOrganisation,
            hcpPhone: data.hcpPhone, 
            caseName: data.caseName, 
            caseEmail: data.caseEmail,
            casePhone: data.casePhone,
            hcpEmailInvoice: data.hcpEmailInvoice,
        }
    }
    
    return {
        ...baseData,
        type:data.type,
    }
}

export const formatForSheet = (data: ServiceData): string[] => {
    const columnOrder: string[] = [
        "appointmentDate",
        "serviceType",
        "fullName",
        "email",
        "phone",
        "dob",
        "gender",
        "streetAddress",
        "referralFullName",
        "referralCompany",
        "referralPhone",
        "referralEmail",
        "reasonForReferral",
        "referralSource",
    ];

    let extendedColumns: string[] = [];

    if (data.type === "NDIS") {
        extendedColumns = [
            "ndisNumber",
            "planStartDate",
            "planEndDate",
            "fundsAvailable",
            "fundsManaged",
            "ndisEmailInvoice"
        ];
    }

    if (data.type === "Home Care Package") {
        extendedColumns = [
            "hcpOrganisation",
            "hcpPhone",
            "caseName",
            "caseEmail",
            "casePhone",
            "hcpEmailInvoice",
        ];
    }

    const formattedData = formatRowData(data);
    return [...columnOrder, ...extendedColumns].map((key) => formattedData[key] || "");
};
