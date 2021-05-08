import { ChangeEvent, useState } from "react";

export const useForm = <T extends object>(initialState: T) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return {
    formValues,
    handleInputChange,
    ...formValues,
  };
};
