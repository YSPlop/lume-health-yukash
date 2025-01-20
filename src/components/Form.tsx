import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
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

const Form = () => {
  const [file, setFile] = useState<File | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Handle form submission here
    console.log(data, file);
  };

  return (
    <div className="pt-12 md:pt-24">
      <div className="max-w-4xl mx-auto p-6 bg-cardcolour rounded-3xl shadow-sm mb-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-body font-semibold mb-4">NDIS Referral Form</h1>
          <p className="text-gray-600">
            Please complete this NDIS referral form to get your participant on the path to receiving excellent care.
          </p>
          <p className="text-gray-600 mt-4">
            We endeavour to respond to all enquires and referrals within one business day.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Participant Details Section */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Participant First Name</label>
              <input
                {...register("participantFirstName", { required: true })}
                className="w-full p-3 rounded-lg bg-bgcolour border border-gray-300 focus:outline-none focus:border-textcolour"
              />
              {errors.participantFirstName && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Participant Last Name</label>
              <input
                {...register("participantLastName", { required: true })}
                className="w-full p-3 rounded-lg bg-bgcolour border border-gray-300 focus:outline-none focus:border-textcolour"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Gender</label>
              <select
                {...register("gender", { required: true })}
                className="w-full p-3 rounded-lg bg-bgcolour border border-gray-300 focus:outline-none focus:border-textcolour"
              >
                <option value="">Please select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Date of Birth</label>
              <input
                type="date"
                {...register("dateOfBirth", { required: true })}
                className="w-full p-3 rounded-lg bg-bgcolour border border-gray-300 focus:outline-none focus:border-textcolour"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Participant Phone Number</label>
              <input
                type="tel"
                {...register("participantPhone", { required: true })}
                className="w-full p-3 rounded-lg bg-bgcolour border border-gray-300 focus:outline-none focus:border-textcolour"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Participant Email</label>
              <input
                type="email"
                {...register("participantEmail", { required: true, pattern: /^\S+@\S+$/i })}
                className="w-full p-3 rounded-lg bg-bgcolour border border-gray-300 focus:outline-none focus:border-textcolour"
              />
            </div>
          </div>

          {/* Additional Fields */}
          <div>
            <label className="block text-sm font-semibold mb-2">Reason for Referral</label>
            <textarea
              {...register("referralReason", { required: true })}
              className="w-full p-3 rounded-lg bg-bgcolour border border-gray-300 focus:outline-none focus:border-textcolour h-32"
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-semibold mb-2">Supporting Documentation (optional)</label>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="w-full p-3 rounded-lg bg-bgcolour border border-gray-300 focus:outline-none focus:border-textcolour"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            />
            <p className="text-sm text-gray-500 mt-1">Max file size: 15MB</p>
          </div>

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
