import { useState } from 'react';
import { useForm } from 'react-hook-form';
import React from 'react';

const FormSwipe: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const formTypes = ["Private", 'Home Care', 'NDIS'];
  const [type, setType] = useState<string>("");
  const {handleSubmit} = useForm();
  const [typeValidation, setTypeValidation] = useState(true)
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    streetAddress: '',

    //Referral Information
    referralFirstName: '',
    referralLastName: '',
    referralCompany: '',
    referralPhone: '',
    referralEmail: '',
    referralRelationship: '',
    referralGender: '',
    referralDob: '',
    reasonForReferral: '',
    referralSource: '',
  });

  const [ndisForm, setNdisForm] = useState({
    ndisNumber: '',
    planStartDate: '',
    planEndDate: '',
    fundsAvailable: '',
    fundsManaged: '',
    emailInvoices: '',
  });

  const [homeCareForm, setHomeCareForm] = useState({
    hcpOrganisation: '',
    hcpPhone: '',
    emailInvoice: '',
    caseName: '',
    caseEmail: '',
    casePhone: '',
  });

  const inputClasses = "w-full p-3 rounded-lg bg-bgcolour border border-gray-300 focus:outline-none focus:border-textcolour placeholder-black";
  const labelClasses = "block text-sm font-semibold mb-2 text-textcolour";
  const errorClasses = "text-red-500 text-sm mt-1";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNdisInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNdisForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleHomeCareInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setHomeCareForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormTypeSelect = (formType: string) => {
    setType(formType)
  }

  const validateStep = () => {
    switch(currentStep) {
      case 1:
        if (!type) {
          setTypeValidation(false)
          return false;
        }
        break;
      case 2:
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.streetAddress || !formData.gender || !formData.dob) {
          alert("Please fill in all required fields");
          return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          alert("Please enter a valid email address");
          return false;
        }
        break;
      case 3:
        if (!formData.referralFirstName || !formData.referralLastName || !formData.referralCompany || !formData.referralPhone || !formData.referralEmail || !formData.reasonForReferral) {
          alert("Please fill in all required fields");
          return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.referralEmail)) {
          alert("Please enter a valid referral email address");
          return false;
        }
        break;
      case 4:
        if (type === "NDIS") {
          if (!ndisForm.ndisNumber || !ndisForm.planStartDate || !ndisForm.planEndDate || !ndisForm.fundsAvailable || !ndisForm.fundsManaged || !ndisForm.emailInvoices) {
            alert("Please fill in all required NDIS fields");
            return false;
          }
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ndisForm.emailInvoices)) {
            alert("Please enter a valid invoice email address");
            return false;
          }
        } else if (type === "Home Care") {
          if (!homeCareForm.hcpOrganisation || !homeCareForm.hcpPhone || !homeCareForm.emailInvoice || !homeCareForm.caseName || !homeCareForm.caseEmail || !homeCareForm.casePhone) {
            alert("Please fill in all required Home Care fields");
            return false;
          }
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(homeCareForm.emailInvoice)) {
            alert("Please enter a valid invoice email address");
            return false;
          }
        }
        break;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const onSubmit = () => {
    if (validateStep()) {
      console.log({
        ...formData,
        ...(type === 'NDIS' ? ndisForm : {}),
        ...(type === 'Home Care' ? homeCareForm : {})
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl">
        {/* Progress Bar */}
        <div className="mb-8">
            <div className="flex justify-between mb-2">
                {['Type of Form', 'Personal Information', 'Referral Information', 'Additional Information', 'Feedback', 'Review'].map((step, index) => (
                    <div key={index} className="flex flex-col items-center w-1/6">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 
                            ${currentStep > index + 1 ? 'bg-[#FFB9A3]' : currentStep === index + 1 ? 'bg-[#FFD0C1]' : 'bg-gray-300'}`}>
                            {currentStep > index + 1 ? (
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            ) : (
                                <span className="text-white">{index + 1}</span>
                            )}
                        </div>
                        <span className="sm:text-xs text-center text-xxs">{step}</span>
                    </div>
                ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                    className="bg-[#FFB9A3] h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${(currentStep / 6) * 100}%` }}
                ></div>
            </div>
        </div>

        {/* Multi-step Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Step 1: Form Type Selection */}
            {currentStep === 1 && (
            <div className="w-full flex items-center justify-center flex-col">
                <h2 className="text-xl">
                    What Type Of Referral Are You Making?
                </h2>
                <div className="grid grid-cols-3 gap-12 py-12">
                    {formTypes.map((formType, index) => (
                        <button 
                            key={index}
                            type="button"
                            onClick={() => handleFormTypeSelect(formType)}
                            className={`px-4 py-2 rounded text-black hover:bg-[#FFE7DF] 
                                ${type === formType ? 'rounded bg-[#FFA787]' : 'bg-[#FFD0C1]'}`}
                        >
                            {formType}
                        </button>
                    ))}
                </div>
                {!typeValidation && <p className={errorClasses}>Please select a form type</p>}
            </div>
            )}

            {/* Step 2: Personal Details */}
            {currentStep === 2 && (
            <div className="w-full">
                <h2 className="text-xl text-center mb-8">
                    Personal Details
                </h2>
                <div className="space-y-6">
                    <div>
                        <label className={labelClasses}>First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className={`${inputClasses} ${!formData.firstName && 'border-red-500'}`}
                            required
                        />
                        {!formData.firstName && <p className={errorClasses}>First name is required</p>}
                    </div>
                    <div>
                        <label className={labelClasses}>Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className={`${inputClasses} ${!formData.lastName && 'border-red-500'}`}
                            required
                        />
                        {!formData.lastName && <p className={errorClasses}>Last name is required</p>}
                    </div>
                    <div>
                        <label className={labelClasses}>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`${inputClasses} ${(!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) && 'border-red-500'}`}
                            required
                        />
                        {(!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) && 
                          <p className={errorClasses}>Please enter a valid email address</p>}
                    </div>
                    <div>
                        <label className={labelClasses}>Contact Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`${inputClasses} ${!formData.phone && 'border-red-500'}`}
                            required
                        />
                        {!formData.phone && <p className={errorClasses}>Phone number is required</p>}
                    </div>
                    <div>
                        <label className={labelClasses}>Address</label>
                        <input
                            type="text"
                            name="streetAddress"
                            value={formData.streetAddress}
                            onChange={handleInputChange}
                            className={`${inputClasses} ${!formData.streetAddress && 'border-red-500'}`}
                            required
                        />
                        {!formData.streetAddress && <p className={errorClasses}>Address is required</p>}
                    </div>
                    <div>
                        <label className={labelClasses}>Gender</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            className={`${inputClasses} ${!formData.gender && 'border-red-500'}`}
                            required
                        >
                            <option value="">Select gender...</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            <option value="prefer-not-to-say">Prefer not to say</option>
                        </select>
                        {!formData.gender && <p className={errorClasses}>Please select a gender</p>}
                    </div>
                    <div>
                        <label className={labelClasses}>Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleInputChange}
                            className={`${inputClasses} ${!formData.dob && 'border-red-500'}`}
                            required
                        />
                        {!formData.dob && <p className={errorClasses}>Date of birth is required</p>}
                    </div>
                </div>
            </div>
            )}

            {/* Step 3: Referral Information */}
            {currentStep === 3 && (
            <div>
                <h2 className="text-2xl font-bold mb-4">Referral Information</h2>
                <div className="space-y-4">
                    <div>
                        <label className={labelClasses}>Referral First Name</label>
                        <input
                            type="text"
                            name="referralFirstName"
                            value={formData.referralFirstName}
                            onChange={handleInputChange}
                            className={`${inputClasses} ${!formData.referralFirstName && 'border-red-500'}`}
                            required
                        />
                        {!formData.referralFirstName && <p className={errorClasses}>Referrer first name is required</p>}
                    </div>
                    <div>
                        <label className={labelClasses}>Referral Last Name</label>
                        <input
                            type="text"
                            name="referralLastName"
                            value={formData.referralLastName}
                            onChange={handleInputChange}
                            className={`${inputClasses} ${!formData.referralLastName && 'border-red-500'}`}
                            required
                        />
                        {!formData.referralLastName && <p className={errorClasses}>Referrer last name is required</p>}
                    </div>
                    <div>
                        <label className={labelClasses}>Company</label>
                        <input
                            type="text"
                            name="referralCompany"
                            value={formData.referralCompany}
                            onChange={handleInputChange}
                            className={`${inputClasses} ${!formData.referralCompany && 'border-red-500'}`}
                            required
                        />
                        {!formData.referralCompany && <p className={errorClasses}>Company is required</p>}
                    </div>
                    <div>
                        <label className={labelClasses}>Phone</label>
                        <input
                            type="tel"
                            name="referralPhone"
                            value={formData.referralPhone}
                            onChange={handleInputChange}
                            className={`${inputClasses} ${!formData.referralPhone && 'border-red-500'}`}
                            required
                        />
                        {!formData.referralPhone && <p className={errorClasses}>Phone number is required</p>}
                    </div>
                    <div>
                        <label className={labelClasses}>Email</label>
                        <input
                            type="email"
                            name="referralEmail"
                            value={formData.referralEmail}
                            onChange={handleInputChange}
                            className={`${inputClasses} ${(!formData.referralEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.referralEmail)) && 'border-red-500'}`}
                            required
                        />
                        {(!formData.referralEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.referralEmail)) && 
                          <p className={errorClasses}>Please enter a valid email address</p>}
                    </div>
                    <div>
                        <label className={labelClasses}>Reason for Referral/Details of Condition</label>
                        <textarea
                            name="reasonForReferral"
                            value={formData.reasonForReferral}
                            onChange={handleInputChange}
                            className={`${inputClasses} ${!formData.reasonForReferral && 'border-red-500'}`}
                            rows={4}
                            required
                        />
                        {!formData.reasonForReferral && <p className={errorClasses}>Reason for referral is required</p>}
                    </div>
                </div>
            </div>

            )}

            {/* Step 4: Additional Information - Private */}
            {currentStep === 4 && type === "Private" && (
                <div>
                    <h2 className="text-2xl font-bold mb-4">Supporting Information</h2>
                    <div>
                        <label className={labelClasses}>Supporting documentation eg. scans, medical history (optional)</label>
                        <input
                            type="file"
                            name="supportingDocs"
                            onChange={handleInputChange}
                            className={inputClasses}
                            multiple
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        />
                    </div>
                </div>
            )}

            {/* Step 4: Additional Information - NDIS */}
            {currentStep === 4 && type === "NDIS" && (
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold mb-4">NDIS Information</h2>
                    <div>
                        <label className={labelClasses}>NDIS Number</label>
                        <input
                            type="text"
                            name="ndisNumber"
                            value={ndisForm.ndisNumber}
                            onChange={handleNdisInputChange}
                            className={`${inputClasses} ${!ndisForm.ndisNumber && 'border-red-500'}`}
                            required
                        />
                        {!ndisForm.ndisNumber && <p className={errorClasses}>NDIS number is required</p>}
                    </div>
                    <div>
                        <label className={labelClasses}>Plan Start Date</label>
                        <input
                            type="date"
                            name="planStartDate"
                            value={ndisForm.planStartDate}
                            onChange={handleNdisInputChange}
                            className={`${inputClasses} ${!ndisForm.planStartDate && 'border-red-500'}`}
                            required
                        />
                        {!ndisForm.planStartDate && <p className={errorClasses}>Plan start date is required</p>}
                    </div>
                    <div>
                        <label className={labelClasses}>Plan End Date</label>
                        <input
                            type="date"
                            name="planEndDate"
                            value={ndisForm.planEndDate}
                            onChange={handleNdisInputChange}
                            className={`${inputClasses} ${!ndisForm.planEndDate && 'border-red-500'}`}
                            required
                        />
                        {!ndisForm.planEndDate && <p className={errorClasses}>Plan end date is required</p>}
                    </div>
                    <div>
                        <label className={labelClasses}>Funds Available</label>
                        <input
                            type="number"
                            name="fundsAvailable"
                            value={ndisForm.fundsAvailable}
                            onChange={handleNdisInputChange}
                            className={`${inputClasses} ${!ndisForm.fundsAvailable && 'border-red-500'}`}
                            required
                        />
                        {!ndisForm.fundsAvailable && <p className={errorClasses}>Available funds is required</p>}
                    </div>
                    <div>
                        <label className={labelClasses}>How are your funds managed?</label>
                        <select
                            name="fundsManaged"
                            value={ndisForm.fundsManaged}
                            onChange={handleNdisInputChange}
                            className={`${inputClasses} ${!ndisForm.fundsManaged && 'border-red-500'}`}
                            required
                        >
                            <option value="">Select an option</option>
                            <option value="self">Self Managed</option>
                            <option value="plan">Plan Managed</option>
                            <option value="ndia">NDIA Managed</option>
                        </select>
                        {!ndisForm.fundsManaged && <p className={errorClasses}>Please select how funds are managed</p>}
                    </div>
                    <div>
                        <label className={labelClasses}>Email for Invoices</label>
                        <input
                            type="email"
                            name="emailInvoices"
                            value={ndisForm.emailInvoices}
                            onChange={handleNdisInputChange}
                            className={`${inputClasses} ${(!ndisForm.emailInvoices || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ndisForm.emailInvoices)) && 'border-red-500'}`}
                            required
                        />
                        {(!ndisForm.emailInvoices || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ndisForm.emailInvoices)) && 
                          <p className={errorClasses}>Please enter a valid email address</p>}
                    </div>
                    <div>
                        <label className={labelClasses}>Supporting documentation eg. scans, medical history (optional)</label>
                        <input
                            type="file"
                            name="supportingDocs"
                            onChange={handleInputChange}
                            className={inputClasses}
                            multiple
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        />
                    </div>
                </div>
            )}

            {/* Step 4: Additional Information - Home Care */}
            {currentStep === 4 && type === 'Home Care' && (
                <div>
                    <h2 className="text-2xl font-bold mb-4">Home Care Package Details</h2>
                    <div className="space-y-4">
                        <div>
                            <label className={labelClasses}>Home Care Package Organisation</label>
                            <input
                                type="text"
                                name="hcpOrganisation"
                                value={homeCareForm.hcpOrganisation}
                                onChange={handleHomeCareInputChange}
                                className={`${inputClasses} ${!homeCareForm.hcpOrganisation && 'border-red-500'}`}
                                required
                            />
                            {!homeCareForm.hcpOrganisation && <p className={errorClasses}>Organisation name is required</p>}
                        </div>
                        <div>
                            <label className={labelClasses}>Home Care Package Phone Number</label>
                            <input
                                type="tel"
                                name="hcpPhone"
                                value={homeCareForm.hcpPhone}
                                onChange={handleHomeCareInputChange}
                                className={`${inputClasses} ${!homeCareForm.hcpPhone && 'border-red-500'}`}
                                required
                            />
                            {!homeCareForm.hcpPhone && <p className={errorClasses}>Phone number is required</p>}
                        </div>
                        <div>
                            <label className={labelClasses}>Email for Invoices</label>
                            <input
                                type="email"
                                name="emailInvoice"
                                value={homeCareForm.emailInvoice}
                                onChange={handleHomeCareInputChange}
                                className={`${inputClasses} ${(!homeCareForm.emailInvoice || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(homeCareForm.emailInvoice)) && 'border-red-500'}`}
                                required
                            />
                            {(!homeCareForm.emailInvoice || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(homeCareForm.emailInvoice)) && 
                              <p className={errorClasses}>Please enter a valid email address</p>}
                        </div>
                        <div>
                            <label className={labelClasses}>Case Manager Name</label>
                            <input
                                type="text"
                                name="caseName"
                                value={homeCareForm.caseName}
                                onChange={handleHomeCareInputChange}
                                className={`${inputClasses} ${!homeCareForm.caseName && 'border-red-500'}`}
                                required
                            />
                            {!homeCareForm.caseName && <p className={errorClasses}>Case manager name is required</p>}
                        </div>
                        <div>
                            <label className={labelClasses}>Case Manager Email</label>
                            <input
                                type="email"
                                name="caseEmail"
                                value={homeCareForm.caseEmail}
                                onChange={handleHomeCareInputChange}
                                className={`${inputClasses} ${(!homeCareForm.caseEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(homeCareForm.caseEmail)) && 'border-red-500'}`}
                                required
                            />
                            {(!homeCareForm.caseEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(homeCareForm.caseEmail)) && 
                              <p className={errorClasses}>Please enter a valid email address</p>}
                        </div>
                        <div>
                            <label className={labelClasses}>Case Manager Phone</label>
                            <input
                                type="tel"
                                name="casePhone"
                                value={homeCareForm.casePhone}
                                onChange={handleHomeCareInputChange}
                                className={`${inputClasses} ${!homeCareForm.casePhone && 'border-red-500'}`}
                                required
                            />
                            {!homeCareForm.casePhone && <p className={errorClasses}>Case manager phone is required</p>}
                        </div>
                        <div>
                            <label className={labelClasses}>Supporting documentation eg. scans, medical history (optional)</label>
                            <input
                                type="file"
                                name="supportingDocs"
                                onChange={handleInputChange}
                                className={inputClasses}
                                multiple
                                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Step 5: Feedback */}
            {currentStep === 5 && (
                <div className="w-full">
                    <h2 className="text-xl text-center mb-8">
                        How Did You Hear About Us?
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <textarea
                                name="referralSource"
                                value={formData.referralSource}
                                onChange={handleInputChange}
                                className={`${inputClasses} ${!formData.referralSource && 'border-red-500'}`}
                                rows={4}
                                required
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Step 6: Review */}
            {currentStep === 6 && (
                <div className="w-full">
                    <h2 className="text-xl text-center mb-8">
                        Review your Information
                    </h2>
                    <div className="space-y-6 font-semibold">
                        <h3>Personal Information</h3>
                        <div className = "grid grid-cols-[2fr_5fr]">
                            <label className={labelClasses}>First Name:</label>
                            <span>{formData.firstName}</span>

                            <label className={labelClasses}>Last Name:</label>
                            <span>{formData.lastName}</span>

                            <label className={labelClasses}>Email:</label>
                            <span>{formData.email}</span>

                            <label className={labelClasses}>Phone Number:</label>
                            <span>{formData.phone}</span>

                            <label className={labelClasses}>Date of Birth:</label>
                            <span>{formData.dob}</span>

                            <label className={labelClasses}>Gender:</label>
                            <span>{formData.gender}</span>

                            <label className={labelClasses}>Address:</label>
                            <span>{formData.streetAddress}</span>
                        </div>
                    </div>

                    <div className="space-y-6 font-semibold my-10">
                        <h3>Referral Information</h3>
                        <div className = "grid grid-cols-[2fr_5fr]">
                            <label className={labelClasses}>First Name:</label>
                            <span>{formData.referralFirstName}</span>

                            <label className={labelClasses}>Last Name:</label>
                            <span>{formData.referralLastName}</span>

                            <label className={labelClasses}>Referral Company:</label>
                            <span>{formData.referralCompany}</span>

                            <label className={labelClasses}>Phone Number:</label>
                            <span>{formData.referralPhone}</span>

                            <label className={labelClasses}>Email:</label>
                            <span>{formData.referralEmail}</span>

                            <label className={labelClasses}>Reason for Referral:</label>
                            <span>{formData.reasonForReferral}</span>

                            <label className={labelClasses}>Referral Source:</label>
                            <span>{formData.referralSource}</span>
                        </div>
                    </div>

                    {type === 'Home Care' && (
                        <div className="space-y-6 font-semibold my-10">
                            <h3>Home Care Package Details</h3>
                            <div className = "grid grid-cols-[2fr_5fr]">
                                <label className={labelClasses}>HCP Organisation:</label>
                                <span>{homeCareForm.hcpOrganisation}</span>

                                <label className={labelClasses}>HCP Telephone:</label>
                                <span>{homeCareForm.hcpPhone}</span>

                                <label className={labelClasses}>Email for Invoices:</label>
                                <span>{homeCareForm.emailInvoice}</span>

                                <label className={labelClasses}>Case Manager Name:</label>
                                <span>{homeCareForm.caseName}</span>

                                <label className={labelClasses}>Case Manager Email:</label>
                                <span>{homeCareForm.caseEmail}</span>

                                <label className={labelClasses}>Case Manager Phone:</label>
                                <span>{homeCareForm.casePhone}</span>
                            </div>
                        </div>
                    )}

                    {type === 'NDIS' && (
                        <div className="space-y-6 font-semibold my-10">
                            <h3>NDIS Details</h3>
                            <div className = "grid grid-cols-[2fr_5fr]">
                                <label className={labelClasses}>NDIS Number:</label>
                                <span>{ndisForm.ndisNumber}</span>

                                <label className={labelClasses}>Plan Start Date:</label>
                                <span>{ndisForm.planStartDate}</span>

                                <label className={labelClasses}>Plan End Date:</label>
                                <span>{ndisForm.planEndDate}</span>

                                <label className={labelClasses}>Funds Available:</label>
                                <span>{ndisForm.fundsAvailable}</span>

                                <label className={labelClasses}>Funds Managed:</label>
                                <span>{ndisForm.fundsManaged}</span>

                                <label className={labelClasses}>Email for Invoices:</label>
                                <span>{ndisForm.emailInvoices}</span>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Navigation Buttons */}
            <div className = "flex justify-end gap-2">
                {currentStep > 1 && (
                    <button type="button" onClick={prevStep} className="bg-[#FFD0C1] text-black px-4 py-2 rounded mt-4">
                        Previous
                    </button>
                )}
                {currentStep <= 5 ? (
                    <button 
                        type="button" 
                        onClick={nextStep} 
                        className="bg-[#FFB9A3] text-black px-4 py-2 rounded mt-4"
                    >
                        Next
                    </button>
                ) : (
                    <button
                        type="submit"
                        className="bg-[#FFB9A3] text-black px-4 py-2 rounded mt-4"
                    >
                        Submit
                    </button>
                )}
            </div>
        </form>
    </div>
  );
};

export default FormSwipe;