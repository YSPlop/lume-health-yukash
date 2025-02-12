"use client"
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import styles from '@/styles/formswipe.module.css';

const FormSwipe: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const formTypes = ["Private", 'Home Care Package', 'NDIS'];
  const serviceType = ["Occupational Therapy", 'Physiotherapy', 'Both'];
  const [service, setService] = useState<string>("");
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
    ndisEmailInvoice: '',
  });

  const [homeCareForm, setHomeCareForm] = useState({
    hcpOrganisation: '',
    hcpPhone: '',
    hcpEmailInvoice: '',
    caseName: '',
    caseEmail: '',
    casePhone: '',
  });

  const searchParams = useSearchParams();
  const typeFromParams = searchParams.get('type');
  
  useEffect(() => {
    if (typeFromParams === 'ndis') {
      setType('NDIS');
      setCurrentStep(2);
    } else if (typeFromParams === 'private') {
      setType('Private');
      setCurrentStep(2);
    }
  }, [typeFromParams]);

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
    setCurrentStep(prev => prev + 1)
  }

  const handleServiceTypeSelect = (serviceType: string) => {
    setService(serviceType)
    setCurrentStep(prev => prev + 1)
  }

  const validateStep = () => {
    switch(currentStep) {
      case 1:
        if (!type) {
          setTypeValidation(false)
          return false;
        }
        break;
      case 3:
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.streetAddress || !formData.gender || !formData.dob) {
          alert("Please fill in all required fields");
          return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          alert("Please enter a valid email address");
          return false;
        }
        break;
      case 4:
        if (type === "NDIS") {
          if (!ndisForm.ndisNumber || !ndisForm.planStartDate || !ndisForm.planEndDate || !ndisForm.ndisEmailInvoice) {
            alert("Please fill in all required NDIS fields");
            return false;
          }
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ndisForm.ndisEmailInvoice)) {
            alert("Please enter a valid invoice email address");
            return false;
          }
        } else if (type === "Home Care Package") {
          if (!homeCareForm.hcpOrganisation || !homeCareForm.hcpPhone || !homeCareForm.hcpEmailInvoice || !homeCareForm.caseName || !homeCareForm.caseEmail || !homeCareForm.casePhone) {
            alert("Please fill in all required Home Care fields");
            return false;
          }
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(homeCareForm.hcpEmailInvoice)) {
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

  const onSubmit = async () => {
    if (validateStep()) {
        try {
            const res = await fetch("/api/sheets", {
                method: "POST", 
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    valueInputOption: "USER_ENTERED",
                    type: type,
                    serviceType: service,
                    fullName: formData.firstName.concat(" ", (formData.lastName)),
                    referralFullName: formData.referralFirstName.concat(" ", (formData.referralLastName)),
                    ...formData,
                    ...(type === "NDIS" ? ndisForm : {}),
                    ...(type === "Home Care Package" ? homeCareForm : {}),
                }),
            })
            const data = await res.json(); // Convert response to JSON
            console.log("Server response:", data);
        }
        catch (error) {
            console.error("Error submitting data:", error);
        }
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-cardcolour rounded-xl">
        {/* Progress Bar */}
        <div className="mb-8">
            <div className="flex justify-between mb-2">
                {['Form', 'Service', 'Personal Information', 'Additional Information','Referral Information', 'Feedback', 'Review'].map((step, index) => (
                    <div 
                        key={index} 
                        className={`flex flex-col items-center w-1/6 ${index + 1 < currentStep ? 'cursor-pointer' : ''}`}
                        onClick={() => index + 1 < currentStep && setCurrentStep(index + 1)}
                    >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 
                            ${currentStep > index + 1 ? 'bg-[#FFB9A3]' : currentStep === index + 1 ? 'bg-bgcolour' : 'bg-gray-300'}`}>
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
                    className="bg-bgcolour h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${(currentStep / 7) * 100}%` }}
                ></div>
            </div>
        </div>

        {/* Multi-step Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Step 1: Form Type Selection */}
            {currentStep === 1 && (
            <div className="w-full flex items-center justify-center flex-col">
                <h2 className="text-xl font-heading">
                    What Type Of Referral Are You Making?
                </h2>
                <div className="grid sm:grid-cols-3 grid-rows-3 sm:gap-12 gap-4 py-12">
                    {formTypes.map((formType, index) => (
                        <button 
                            key={index}
                            type="button"
                            onClick={() => handleFormTypeSelect(formType)}
                            className={`px-4 py-2 rounded text-black hover:bg-[#FFA787] 
                                ${type === formType ? 'rounded bg-[#FFA787]' : 'bg-bgcolour'}`}
                        >
                            {formType}
                        </button>
                    ))}
                </div>
                {!typeValidation && <p className={errorClasses}>Please select a form type</p>}
            </div>
            )}

            {/* Step 2: Type of Service */}
            {currentStep === 2 && (
            <div className="w-full flex items-center justify-center flex-col">
                <h2 className="text-xl">
                    Type of Service
                </h2>
                <div className="grid sm:grid-cols-3 grid-rows-3 sm:gap-12 gap-4 py-12">
                    {serviceType.map((serviceType, index) => (
                        <button 
                            key={index}
                            type="button"
                            onClick={() => handleServiceTypeSelect(serviceType)}
                            className={`px-4 py-2 rounded text-black hover:bg-[#FFA787] 
                                ${service === serviceType ? 'rounded bg-[#FFA787]' : 'bg-bgcolour'}`}
                        >
                            {serviceType}
                        </button>
                    ))}
                </div>
            </div>
            )}

            {/* Step 3: Personal Details */}
            {currentStep === 3 && (
            <div className="w-full">
                <h2 className="text-2xl font-heading font-bold mb-4">
                    Personal Details
                </h2>
                <div className="space-y-4">
                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className={styles.input}
                            placeholder=" "
                        />
                        <label htmlFor="firstName" className={styles.label}>
                            First Name
                        </label>
                    </div>
                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className={styles.input}
                            placeholder=" "
                        />
                        <label htmlFor="lastName" className={styles.label}>
                            Last Name
                        </label>
                    </div>
                    <div className={styles.inputContainer}>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={styles.input}
                            placeholder=" "
                        />
                        <label htmlFor="email" className={styles.label}>
                            Email
                        </label>
                    </div>
                    <div className={styles.inputContainer}>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={styles.input}
                            placeholder=" "
                        />
                        <label htmlFor="phone" className={styles.label}>
                            Contact Number
                        </label>
                    </div>
                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            name="streetAddress"
                            value={formData.streetAddress}
                            onChange={handleInputChange}
                            className={styles.input}
                            placeholder=" "
                        />
                        <label htmlFor="streetAddress" className={styles.label}>
                            Address
                        </label>
                    </div>
                    <div className={styles.inputContainer}>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            className={styles.input}
                        >
                            <option value="">Select gender...</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            <option value="prefer-not-to-say">Prefer not to say</option>
                        </select>
                        <label htmlFor="gender" className={styles.label}>
                            Gender
                        </label>
                    </div>
                    <div className={styles.inputContainer}>
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleInputChange}
                            className={styles.input}
                            placeholder=" "
                        />
                        <label htmlFor="dob" className={styles.label}>
                            Date of Birth
                        </label>
                    </div>
                </div>
            </div>
            )}

            {/* Step 4: Referral Information */}
            {currentStep === 5 && (
            <div>
                <h2 className="text-2xl font-heading font-bold mb-4">Referral Information</h2>
                <div className="space-y-4">
                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            name="referralFirstName"
                            value={formData.referralFirstName}
                            onChange={handleInputChange}
                            className={styles.input}
                            placeholder=" "
                        />
                        <label htmlFor="referralFirstName" className={styles.label}>
                            Referral First Name
                        </label>
                    </div>
                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            name="referralLastName"
                            value={formData.referralLastName}
                            onChange={handleInputChange}
                            className={styles.input}
                            placeholder=" "
                        />
                        <label htmlFor="referralLastName" className={styles.label}>
                            Referral Last Name
                        </label>
                    </div>
                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            name="referralCompany"
                            value={formData.referralCompany}
                            onChange={handleInputChange}
                            className={styles.input}
                            placeholder=" "
                        />
                        <label htmlFor="referralCompany" className={styles.label}>
                            Company
                        </label>
                    </div>
                    <div className={styles.inputContainer}>
                        <input
                            type="tel"
                            name="referralPhone"
                            value={formData.referralPhone}
                            onChange={handleInputChange}
                            className={styles.input}
                            placeholder=" "
                        />
                        <label htmlFor="referralPhone" className={styles.label}>
                            Phone
                        </label>
                    </div>
                    <div className={styles.inputContainer}>
                        <input
                            type="email"
                            name="referralEmail"
                            value={formData.referralEmail}
                            onChange={handleInputChange}
                            className={styles.input}
                            placeholder=" "
                        />
                        <label htmlFor="referralEmail" className={styles.label}>
                            Email
                        </label>
                    </div>
                    <div className={styles.inputContainer}>
                        <textarea
                            name="reasonForReferral"
                            value={formData.reasonForReferral}
                            onChange={handleInputChange}
                            className={styles.textarea}
                            placeholder=" "
                        />
                        <label htmlFor="reasonForReferral" className={styles.textareaLabel}>
                            Reason for Referral/Details of Condition
                        </label>
                    </div>
                </div>
            </div>
            )}

            {/* Step 4: NDIS Information */}
            {currentStep === 4 && type === "NDIS" && (
                <div>
                    <h2 className="text-2xl font-heading font-bold mb-4">NDIS Information</h2>
                    <div className="space-y-4">
                        <div className={styles.inputContainer}>
                            <input
                                type="text"
                                name="ndisNumber"
                                value={ndisForm.ndisNumber}
                                onChange={handleNdisInputChange}
                                className={styles.input}
                                placeholder=" "
                            />
                            <label htmlFor="ndisNumber" className={styles.label}>
                                NDIS Number
                            </label>
                        </div>
                        <div className={styles.inputContainer}>
                            <input
                                type="date"
                                name="planStartDate"
                                value={ndisForm.planStartDate}
                                onChange={handleNdisInputChange}
                                className={styles.input}
                                placeholder=" "
                            />
                            <label htmlFor="planStartDate" className={styles.label}>
                                Plan Start Date
                            </label>
                        </div>
                        <div className={styles.inputContainer}>
                            <input
                                type="date"
                                name="planEndDate"
                                value={ndisForm.planEndDate}
                                onChange={handleNdisInputChange}
                                className={styles.input}
                                placeholder=" "
                            />
                            <label htmlFor="planEndDate" className={styles.label}>
                                Plan End Date
                            </label>
                        </div>
                        <div className={styles.inputContainer}>
                            <input
                                type="number"
                                name="fundsAvailable"
                                value={ndisForm.fundsAvailable}
                                onChange={handleNdisInputChange}
                                className={styles.input}
                                placeholder=" "
                            />
                            <label htmlFor="fundsAvailable" className={styles.label}>
                                Funds Available
                            </label>
                        </div>
                        <div className={styles.inputContainer}>
                            <select
                                name="fundsManaged"
                                value={ndisForm.fundsManaged}
                                onChange={handleNdisInputChange}
                                className={styles.input}
                            >
                                <option value="">Select an option</option>
                                <option value="self">Self Managed</option>
                                <option value="plan">Plan Managed</option>
                                <option value="ndia">NDIA Managed</option>
                            </select>
                            <label htmlFor="fundsManaged" className={styles.label}>
                                How are your funds managed?
                            </label>
                        </div>
                        <div className={styles.inputContainer}>
                            <input
                                type="email"
                                name="ndisEmailInvoice"
                                value={ndisForm.ndisEmailInvoice}
                                onChange={handleNdisInputChange}
                                className={styles.input}
                                placeholder=" "
                            />
                            <label htmlFor="ndisEmailInvoice" className={styles.label}>
                                Email for Invoices
                            </label>
                        </div>
                    </div>
                </div>
            )}

            {/* Step 4: Home Care Package Details */}
            {currentStep === 4 && type === 'Home Care Package' && (
                <div>
                    <h2 className="text-2xl font-heading font-bold mb-4">Home Care Package Details</h2>
                    <div className="space-y-4">
                        <div className={styles.inputContainer}>
                            <input
                                type="text"
                                name="hcpOrganisation"
                                value={homeCareForm.hcpOrganisation}
                                onChange={handleHomeCareInputChange}
                                className={styles.input}
                                placeholder=" "
                            />
                            <label htmlFor="hcpOrganisation" className={styles.label}>
                                Home Care Package Organisation
                            </label>
                        </div>
                        <div className={styles.inputContainer}>
                            <input
                                type="tel"
                                name="hcpPhone"
                                value={homeCareForm.hcpPhone}
                                onChange={handleHomeCareInputChange}
                                className={styles.input}
                                placeholder=" "
                            />
                            <label htmlFor="hcpPhone" className={styles.label}>
                                Home Care Package Phone Number
                            </label>
                        </div>
                        <div className={styles.inputContainer}>
                            <input
                                type="email"
                                name="hcpEmailInvoice"
                                value={homeCareForm.hcpEmailInvoice}
                                onChange={handleHomeCareInputChange}
                                className={styles.input}
                                placeholder=" "
                            />
                            <label htmlFor="hcpEmailInvoice" className={styles.label}>
                                Email for Invoices
                            </label>
                        </div>
                        <div className={styles.inputContainer}>
                            <input
                                type="text"
                                name="caseName"
                                value={homeCareForm.caseName}
                                onChange={handleHomeCareInputChange}
                                className={styles.input}
                                placeholder=" "
                            />
                            <label htmlFor="caseName" className={styles.label}>
                                Case Manager Name
                            </label>
                        </div>
                        <div className={styles.inputContainer}>
                            <input
                                type="email"
                                name="caseEmail"
                                value={homeCareForm.caseEmail}
                                onChange={handleHomeCareInputChange}
                                className={styles.input}
                                placeholder=" "
                            />
                            <label htmlFor="caseEmail" className={styles.label}>
                                Case Manager Email
                            </label>
                        </div>
                        <div className={styles.inputContainer}>
                            <input
                                type="tel"
                                name="casePhone"
                                value={homeCareForm.casePhone}
                                onChange={handleHomeCareInputChange}
                                className={styles.input}
                                placeholder=" "
                            />
                            <label htmlFor="casePhone" className={styles.label}>
                                Case Manager Phone
                            </label>
                        </div>
                    </div>
                </div>
            )}

            {/* Step 5: Feedback */}
            {currentStep === 6 && (
                <div className="w-full">
                    <h2 className="text-2xl font-heading font-bold mb-4">
                        How Did You Hear About Us?
                    </h2>
                    <div className="space-y-4">
                        <div className={styles.inputContainer}>
                            <textarea
                                name="referralSource"
                                value={formData.referralSource}
                                onChange={handleInputChange}
                                className={styles.textarea}
                                placeholder=" "
                            />
                            <label htmlFor="referralSource" className={styles.textareaLabel}>
                                Referral Source
                            </label>
                        </div>
                    </div>
                </div>
            )}

            {/* Step 6: Review */}
            {currentStep === 7 && (
                <div className="w-full">
                    <h2 className="text-xl font-heading text-center mb-8">
                        Review your Information
                    </h2>
                    <div className="space-y-6 font-semibold my-10">
                        <h3 className="font-heading">Service</h3>
                        <div className = "grid grid-cols-[2fr_5fr]">
                            <label className={styles.summaryLabel}>Type of Service:</label>
                            <span>{service}</span>
                        </div>
                    </div>
                    <div className="space-y-6 font-semibold ">
                        <h3 className="font-heading">Personal Information</h3>
                        <div className = "grid grid-cols-[2fr_5fr]">
                            <label className={styles.summaryLabel}>First Name:</label>
                            <span>{formData.firstName}</span>

                            <label className={styles.summaryLabel}>Last Name:</label>
                            <span>{formData.lastName}</span>

                            <label className={styles.summaryLabel}>Email:</label>
                            <span>{formData.email}</span>

                            <label className={styles.summaryLabel}>Phone Number:</label>
                            <span>{formData.phone}</span>

                            <label className={styles.summaryLabel}>Date of Birth:</label>
                            <span>{formData.dob}</span>

                            <label className={styles.summaryLabel}>Gender:</label>
                            <span>{formData.gender}</span>

                            <label className={styles.summaryLabel}>Address:</label>
                            <span>{formData.streetAddress}</span>
                        </div>
                    </div>

                    <div className="space-y-6 font-semibold my-10">
                        <h3 className="font-heading">Referral Information</h3>
                        <div className = "grid grid-cols-[2fr_5fr]">
                            <label className={styles.summaryLabel}>First Name:</label>
                            {formData.referralFirstName ? (
                                <span>{formData.referralFirstName}</span>
                            ) : (
                                <span className = "italic">Not Entered</span>
                            )
                            }

                            <label className={styles.summaryLabel}>Last Name:</label>
                            {formData.referralLastName ? (
                                <span>{formData.referralLastName}</span>
                            ) : (
                                <span className = "italic">Not Entered</span>
                            )
                            }

                            <label className={styles.summaryLabel}>Referral Company:</label>
                            {formData.referralCompany ? (
                                <span>{formData.referralCompany}</span>
                            ) : (
                                <span className = "italic">Not Entered</span>
                            )
                            }

                            <label className={styles.summaryLabel}>Phone Number:</label>
                            {formData.referralPhone ? (
                                <span>{formData.referralPhone}</span>
                            ) : (
                                <span className = "italic">Not Entered</span>
                            )
                            }

                            <label className={styles.summaryLabel}>Email:</label>
                            {formData.referralEmail ? (
                                <span>{formData.referralEmail}</span>
                            ) : (
                                <span className = "italic">Not Entered</span>
                            )
                            }

                            <label className={styles.summaryLabel}>Reason for Referral:</label>
                            {formData.reasonForReferral ? (
                                <span>{formData.reasonForReferral}</span>
                            ) : (
                                <span className = "italic">Not Entered</span>
                            )
                            }

                            <label className={styles.summaryLabel}>Referral Source:</label>
                            {formData.referralSource ? (
                                <span>{formData.referralSource}</span>
                            ) : (
                                <span className = "italic">Not Entered</span>
                            )
                            }
                        </div>
                    </div>

                    {type === 'Home Care Package' && (
                        <div className="space-y-6 font-semibold my-10">
                            <h3 className="font-heading">Home Care Package Details</h3>
                            <div className = "grid grid-cols-[2fr_5fr]">
                                <label className={styles.summaryLabel}>HCP Organisation:</label>
                                <span>{homeCareForm.hcpOrganisation}</span>

                                <label className={styles.summaryLabel}>HCP Telephone:</label>
                                <span>{homeCareForm.hcpPhone}</span>

                                <label className={styles.summaryLabel}>Email for Invoices:</label>
                                <span>{homeCareForm.hcpEmailInvoice}</span>

                                <label className={styles.summaryLabel}>Case Manager Name:</label>
                                <span>{homeCareForm.caseName}</span>

                                <label className={styles.summaryLabel}>Case Manager Email:</label>
                                <span>{homeCareForm.caseEmail}</span>

                                <label className={styles.summaryLabel}>Case Manager Phone:</label>
                                <span>{homeCareForm.casePhone}</span>
                            </div>
                        </div>
                    )}

                    {type === 'NDIS' && (
                        <div className="space-y-6 font-semibold my-10">
                            <h3 className="font-heading">NDIS Details</h3>
                            <div className = "grid grid-cols-[2fr_5fr]">
                                <label className={styles.summaryLabel}>NDIS Number:</label>
                                <span>{ndisForm.ndisNumber}</span>

                                <label className={styles.summaryLabel}>Plan Start Date:</label>
                                <span>{ndisForm.planStartDate}</span>

                                <label className={styles.summaryLabel}>Plan End Date:</label>
                                <span>{ndisForm.planEndDate}</span>

                                <label className={styles.summaryLabel}>Funds Available:</label>
                                {ndisForm.fundsAvailable ? (
                                    <span>{ndisForm.fundsAvailable}</span>
                                ) : (
                                    <span className = "italic">Not Entered</span>
                                )
                                }

                                <label className={styles.summaryLabel}>Funds Managed:</label>
                                {ndisForm.fundsManaged ? (
                                    <span>{ndisForm.fundsManaged}</span>
                                ) : (
                                    <span className = "italic">Not Entered</span>
                                )
                                }

                                <label className={styles.summaryLabel}>Email for Invoices:</label>
                                <span>{ndisForm.ndisEmailInvoice}</span>
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
                {(currentStep <= 6 && currentStep > 2) && (
                    <button 
                        type="button" 
                        onClick={nextStep} 
                        className="bg-[#FFB9A3] text-black px-4 py-2 rounded mt-4"
                    >
                        Next
                    </button>
                )}
                {currentStep === 7 && (
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