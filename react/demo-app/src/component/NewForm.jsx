import React, { useEffect } from "react";
import { useState } from "react";

function NewForm() {
  const [formData, setFormData] = useState({
    username: "",
    city: "",
    state: "",
    hobby: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleFormData = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmit(true);
  };

  const validate = (data) => {
    const errors = {};

    if (!data.username) {
      errors.username = "Username is mandatory";
    }
    if (!data.city) {
      errors.city = "City is mandatory";
    }
    if (!data.state) {
      errors.state = "State is mandatory";
    }
    if (!data.hobby) {
      errors.hobby = "Hobby is mandatory";
    }

    return errors;
  };

  useEffect(() => {
    if (isSubmit) {
      console.log(formData);
      setFormData({
        username: "",
        city: "",
        state: "",
        hobby: "",
      });
    }
  }, [isSubmit]);

  return (
    <div>
      <h1>Form Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleFormData}
          />
          <p style={{ color: "red" }}>{formErrors.username}</p>
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleFormData}
          />
          <p style={{ color: "red" }}>{formErrors.city}</p>
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleFormData}
          />
          <p style={{ color: "red" }}>{formErrors.state}</p>
        </div>
        <div>
          <label htmlFor="hobby">Hobby</label>
          <select name="hobby" onChange={handleFormData} value={formData.hobby}>
            <option value="">Select</option>
            <option value="reading">Reading </option>
            <option value="writing">Writing</option>
            <option value="dancing">Dancing</option>
          </select>
          <p style={{ color: "red" }}>{formErrors.hobby}</p>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewForm;
