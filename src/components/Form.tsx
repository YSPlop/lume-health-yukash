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

const inputClasses = "w-full p-3 rounded-lg bg-white/75 md:bg-bgcolour border border-gray-300 focus:outline-none focus:border-textcolour";
const labelClasses = "block text-sm font-semibold mb-2 md:text-gray-800 text-gray-900";

const FormField = ({ label, error, children }: { label: string; error?: boolean; children: React.ReactNode }) => (
  <div>
    <label className={labelClasses}>{label}</label>
    {children}
    {error && <span className="text-red-500 text-sm">This field is required</span>}
  </div>
);

const FormTypeButton = ({ 
  selected, 
  onClick, 
  children 
}: { 
  selected: boolean; 
  onClick: () => void; 
  children: React.ReactNode;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`
      w-full p-3 rounded-lg border transition-all duration-200
      ${selected 
        ? 'bg-cardcolour border-textcolour font-semibold' 
        : 'bg-white/75 border-gray-300 hover:border-textcolour'
      }
    `}
  >
    {children}
  </button>
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

  return (
    <div className="pt-12 md:pt-24">
      <div className="max-w-4xl mx-auto p-4 md:p-6 md:bg-cardcolour md:rounded-3xl md:shadow-sm mb-12">
        <div className="grid grid-cols-2 gap-4 mb-8">
          <FormTypeButton 
            selected={currentFormType === 'private'} 
            onClick={() => handleFormTypeChange('private')}
          >
            Private Referral
          </FormTypeButton>
          <FormTypeButton 
            selected={currentFormType === 'ndis'} 
            onClick={() => handleFormTypeChange('ndis')}
          >
            NDIS Referral
          </FormTypeButton>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-body font-semibold mb-4 text-gray-900">
            {currentFormType === 'ndis' ? 'NDIS Referral Form' : 'Private Referral Form'}
          </h1>
          <p className="text-gray-800 md:text-gray-600">
            {currentFormType === 'ndis' 
              ? 'Please complete this NDIS referral form to get your participant on the path to receiving excellent care.'
              : 'Please complete this private referral form to begin your journey with us.'}
          </p>
          <p className="text-gray-800 md:text-gray-600 mt-4">
            We endeavour to respond to all enquires and referrals within one business day.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-8 md:space-y-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-6">
              <FormField label="Participant First Name" error={!!errors.participantFirstName}>
                <input {...register("participantFirstName", { required: true })} className={inputClasses} />
              </FormField>

              <FormField label="Participant Last Name">
                <input {...register("participantLastName", { required: true })} className={inputClasses} />
              </FormField>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-6">
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

            <div className="grid md:grid-cols-2 gap-8 md:gap-6">
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

            {currentFormType === 'ndis' && (
              <>
                <div className="grid md:grid-cols-2 gap-8 md:gap-6">
                  <FormField label="NDIS Number">
                    <input {...register("ndisNumber", { required: true })} className={inputClasses} />
                  </FormField>
                  <FormField label="Plan Dates">
                    <input {...register("planDates", { required: true })} className={inputClasses} />
                  </FormField>
                </div>
                <div className="grid md:grid-cols-2 gap-8 md:gap-6">
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

            <FormField label="Supporting Documentation (optional)">
              <input
                type="file"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className={inputClasses}
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              />
              <p className="text-sm text-gray-500 mt-1">Max file size: 15MB</p>
            </FormField>
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-cardcolour text-black rounded-full hover:bg-accentcolour transition-colors border border-textcolour"
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
