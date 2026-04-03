import { useState } from "react";

export const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return { formData, setFormData, handleChange };
};