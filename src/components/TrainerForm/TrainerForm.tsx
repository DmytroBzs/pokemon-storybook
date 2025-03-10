import React from 'react';
import { useForm } from 'react-hook-form';

interface TrainerFormProps {
  onValidationChange: (isValid: boolean) => void;
}

interface TrainerFormValues {
  firstName: string;
  lastName: string;
}

const TrainerForm: React.FC<TrainerFormProps> = ({ onValidationChange }) => {
  const {
    register,

    formState: { errors, isValid },
  } = useForm<TrainerFormValues>({
    mode: 'onChange',
  });

  React.useEffect(() => {
    onValidationChange(isValid);
  }, [isValid, onValidationChange]);

  return (
    <div className="p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-center mb-2">Trainer Info</h2>
      <form className="flex gap-4">
        <div className="flex flex-col w-1/2">
          <input
            type="text"
            placeholder="First Name"
            {...register('firstName', {
              required: 'First name is required',
              minLength: { value: 2, message: 'Minimum 2 characters' },
              maxLength: { value: 12, message: 'Maximum 12 characters' },
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'Only letters allowed',
              },
            })}
            className="border p-2 rounded"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div className="flex flex-col w-1/2">
          <input
            type="text"
            placeholder="Last Name"
            {...register('lastName', {
              required: 'Last name is required',
              minLength: { value: 2, message: 'Minimum 2 characters' },
              maxLength: { value: 12, message: 'Maximum 12 characters' },
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: 'Only letters allowed',
              },
            })}
            className="border p-2 rounded"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default TrainerForm;
