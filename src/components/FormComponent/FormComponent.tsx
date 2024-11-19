"use client"; 

import React, { useState } from 'react';
import styles from './FormComponent.module.css'; 

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.submitTitle}>Submit</div>

      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.inputField}
            placeholder="Name"
            required
          />
        </div>
      </div>

      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.inputField}
            placeholder="Email"
            required
          />
        </div>
      </div>

      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={styles.inputField}
            placeholder="Phone Number"
            required
          />
        </div>
      </div>

      <div className={styles.descriptionContainer}>
        <div className={styles.inputWrapper}>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={styles.inputField}
            placeholder="Description"
            required
          />
        </div>
      </div>

      <button type="submit" className={styles.submitButton}>
        <div className={styles.submitButtonText}>Submit</div>
      </button>
    </form>
  );
};

export default FormComponent;
