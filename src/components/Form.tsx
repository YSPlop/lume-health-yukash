import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  formType: 'private' | 'ndis';
  participantFirstName: string;
  participantLastName: string;
  gender: string;
  dateOfBirth: string;
  participantPhone: string;
  participantEmail: string;
  participantAddress: string;
  livingArrangements: string;
  referralReason: string;
  primaryDisability: string;
  emergencyContact: string;
  emergencyContactAuthority: string;
  referrerFirstName: string;
  referrerLastName: string;
  referrerCompany: string;
  referrerPhone: string;
  referrerEmail: string;
  referrerRelationship: string;
  ndisNumber: string;
  planDates: string;
  availableFunds: string;
  fundsManagement: string;
  invoiceEmail: string;
  referralSource: string;
  additionalComments: string;
}

const inputClasses = "w-full p-3 rounded-lg bg-bgcolour border border-gray-300 focus:outline-none focus:border-textcolour";
const labelClasses = "block text-sm font-semibold mb-2";

const FormField = ({ label, error, children }: { label: string; error?: boolean; children: React.ReactNode }) => (
  <div>
    <label className={labelClasses}>{label}</label>
    {children}
    {error && <span className="text-red-500 text-sm">This field is required</span>}
  </div>
);

const Form = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm<FormData>({
    defaultValues: {
      formType: 'private'
    }
  });

  const currentFormType = watch('formType');

  const handleFormTypeChange = (type: 'private' | 'ndis') => {
    setValue('formType', type);
    setIsOpen(false);
  };

  const onSubmit = async (data: FormData) => {
    // Handle form submission here
    console.log(data, file);
  };

  const formTypeButton = (type: 'private' | 'ndis', label: string) => (
    <button
      type="button"
      onClick={() => handleFormTypeChange(type)}
      className={`w-full px-4 py-2 text-left hover:bg-gray-50 hover:rounded-2xl transition-colors duration-200 ${
        currentFormType === type ? 'font-semibold bg-gray-50' : ''
      }`}
    >
      {label}
    </button>
  );

  const formTypeText = currentFormType === 'ndis' ? 'NDIS Referral Form' : 'Private Referral Form';
  const formDescription = currentFormType === 'ndis' 
    ? 'Please complete this NDIS referral form to get your participant on the path to receiving excellent care.'
    : 'Please complete this private referral form to begin your journey with us.';

  return (
    <div className="pt-12 md:pt-24">
      <div className="max-w-4xl mx-auto p-6 bg-cardcolour rounded-3xl shadow-sm mb-12">
        <div className="mb-8 relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full p-3 pl-4 pr-10 rounded-lg bg-bgcolour border border-gray-300 hover:border-textcolour focus:border-textcolour hover:bg-gray-50 transition-all duration-200 text-left font-semibold flex justify-between items-center"
          >
            <span>{formTypeText}</span>
            <svg 
              className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isOpen && (
            <div className="absolute z-10 mt-2 w-full rounded-lg bg-bgcolour border border-gray-300 shadow-lg">
              <div>
                {formTypeButton('private', 'Private Referral Form')}
                {formTypeButton('ndis', 'NDIS Referral Form')}
              </div>
            </div>
          )}
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-body font-semibold mb-4">{formTypeText}</h1>
          <p className="text-gray-600">{formDescription}</p>
          <p className="text-gray-600 mt-4">
            We endeavour to respond to all enquires and referrals within one business day.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Participant Details Section */}
          <div className="grid md:grid-cols-2 gap-6">
            <FormField label="Participant First Name" error={!!errors.participantFirstName}>
              <input {...register("participantFirstName", { required: true })} className={inputClasses} />
            </FormField>

            <FormField label="Participant Last Name">
              <input {...register("participantLastName", { required: true })} className={inputClasses} />
            </FormField>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FormField label="Gender">
              <select {...register("gender", { required: true })} className={inputClasses}>
                <option value="">Please select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </FormField>

            <FormField label="Date of Birth">
              <input type="date" {...register("dateOfBirth", { required: true })} className={inputClasses} />
            </FormField>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FormField label="Participant Phone Number">
              <input type="tel" {...register("participantPhone", { required: true })} className={inputClasses} />
            </FormField>

            <FormField label="Participant Email">
              <input 
                type="email" 
                {...register("participantEmail", { required: true, pattern: /^\S+@\S+$/i })} 
                className={inputClasses} 
              />
            </FormField>
          </div>

          <FormField label="Reason for Referral">
            <textarea {...register("referralReason", { required: true })} className={`${inputClasses} h-32`} />
          </FormField>

          {/* Conditional NDIS-specific fields */}
          {currentFormType === 'ndis' && (
            <>
              <div className="grid md:grid-cols-2 gap-6">
                <FormField label="NDIS Number">
                  <input {...register("ndisNumber", { required: true })} className={inputClasses} />
                </FormField>
                <FormField label="Plan Dates">
                  <input {...register("planDates", { required: true })} className={inputClasses} />
                </FormField>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <FormField label="Available Funds">
                  <input {...register("availableFunds", { required: true })} className={inputClasses} />
                </FormField>
                <FormField label="Funds Management">
                  <select {...register("fundsManagement", { required: true })} className={inputClasses}>
                    <option value="">Please select</option>
                    <option value="self-managed">Self Managed</option>
                    <option value="plan-managed">Plan Managed</option>
                    <option value="ndia-managed">NDIA Managed</option>
                  </select>
                </FormField>
              </div>
            </>
          )}

          {/* File Upload */}
          <FormField label="Supporting Documentation (optional)">
            <input
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className={inputClasses}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            />
            <p className="text-sm text-gray-500 mt-1">Max file size: 15MB</p>
          </FormField>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-cardcolour text-black rounded-full hover:bg-accentcolour transition-colors border border-textcolour"
            >
              Submit Referral
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
