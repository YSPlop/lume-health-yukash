import { ServiceData } from "@/utils/sheets";

export const emailTo = (valuesAll: ServiceData): string => {
    let emailContent: string = `
        <p><strong>Service Type:</strong> ${valuesAll.serviceType}</p>
        <p><strong>Full Name:</strong> ${valuesAll.fullName}</p>
        <p><strong>Email Address:</strong> ${valuesAll.email}</p>
        <p><strong>Phone Number:</strong> ${valuesAll.phone}</p>
        <p><strong>Gender:</strong> ${valuesAll.gender}</p>
        <p><strong>Date of Birth:</strong> ${valuesAll.dob}</p>
        <p><strong>Street Address:</strong> ${valuesAll.streetAddress}</p>
        <p><strong>Referral Full Name:</strong> ${valuesAll.referralFullName ? valuesAll.referralFullName : "Not provided"}</p>
        <p><strong>Referral Company:</strong> ${valuesAll.referralCompany ? valuesAll.referralCompany : "Not provided"}</p>
        <p><strong>Referral Phone:</strong> ${valuesAll.referralPhone ? valuesAll.referralPhone : "Not provided"}</p>
        <p><strong>Referral Email:</strong> ${valuesAll.referralEmail ? valuesAll.referralEmail : "Not provided"}</p>
        <p><strong>Reason for Referral:</strong> ${valuesAll.reasonForReferral ? valuesAll.reasonForReferral : "Not provided"}</p>
        <p><strong>Referral Source:</strong> ${valuesAll.referralSource ? valuesAll.referralSource : "Not provided"}</p>`;

    if (valuesAll.type === "NDIS") {
        emailContent += `
            <p><strong>NDIS Number:</strong> ${valuesAll.ndisNumber}</p>
            <p><strong>Plan Start Date:</strong> ${valuesAll.planStartDate}</p>
            <p><strong>Plan End Date:</strong> ${valuesAll.planEndDate}</p>
            <p><strong>Funds Available:</strong> ${valuesAll.fundsAvailable ? valuesAll.fundsAvailable : "Not provided"}</p>
            <p><strong>Funds Managed:</strong> ${valuesAll.fundsManaged}</p>
            <p><strong>NDIS Email Invoice:</strong> ${valuesAll.ndisEmailInvoice}</p> `;
    } else if (valuesAll.type === "Home Care Package") {
        emailContent += `
            <p><strong>HCP Organisation:</strong> ${valuesAll.hcpOrganisation}</p>
            <p><strong>HCP Phone:</strong> ${valuesAll.hcpPhone}</p>
            <p><strong>Case Name:</strong> ${valuesAll.caseName}</p>
            <p><strong>Case Email:</strong> ${valuesAll.caseEmail}</p>
            <p><strong>Case Phone:</strong> ${valuesAll.casePhone}</p>
            <p><strong>HCP Email Invoice:</strong> ${valuesAll.hcpEmailInvoice}</p>`;
    }
    return emailContent
}