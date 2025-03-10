import React, { useState } from 'react';

interface TrainerFormProps {
  onValidationChange: (isValid: boolean) => void;
}

const TrainerForm: React.FC<TrainerFormProps> = ({ onValidationChange }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');

  const validateName = (name: string) => /^[a-zA-Z]{2,12}$/.test(name);

  const handleInputChange = (
    setter: React.Dispatch<React.SetStateAction<string>>,
    value: string
  ) => {
    setter(value);
    const isValid = validateName(firstName) && validateName(lastName);
    onValidationChange(isValid);

    if (!validateName(value)) {
      setError(
        'Name and surname must be between 2 and 12 characters long and contain only letters.'
      );
    } else {
      setError('');
    }
  };

  return (
    <div className="p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-center mb-2">Trainer Info</h2>
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={e => handleInputChange(setFirstName, e.target.value)}
          className="border p-2 rounded w-1/2"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={e => handleInputChange(setLastName, e.target.value)}
          className="border p-2 rounded w-1/2"
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default TrainerForm;
