import React, { useState } from 'react';
import Btn from '../components/common components/Btn';

const AddAffiliate = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    sponsor: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Select Country',
    agreeToTerms: false,
  });

  const countries = [
    'Select Country',
    'Country 1',
    'Country 2',
    'Country 3',
    // Add more countries as needed
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="glass-container w-full p-6 max-w-md text-white mx-auto rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Add Affiliate</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-x-3">
        <div className="mb-4">
          <label htmlFor="name" className="block font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 glass-container border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block font-semibold">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-3 glass-container py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        </div>
        <div className="flex gap-x-3">

        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 glass-container border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sponsor" className="block font-semibold">
            Sponsor
          </label>
          <input
            type="text"
            id="sponsor"
            name="sponsor"
            value={formData.sponsor}
            onChange={handleChange}
            className="w-full px-3 py-2 glass-container border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        </div>
        <div className="flex gap-x-3">

        <div className="mb-4">
          <label htmlFor="password" className="block font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full glass-container px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block font-semibold">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-3 py-2 glass-container border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        </div>
        <div className="flex gap-x-3">

        <div className="mb-4">
          <label htmlFor="address" className="block font-semibold">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 glass-container border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block font-semibold">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-3 py-2 glass-container border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        </div>
        <div className="flex gap-x-3">

        <div className="mb-4">
          <label htmlFor="postalCode" className="block font-semibold">
            Postal Code
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="w-full px-3 glass-container py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block font-semibold">
            Choose Country
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-3 py-2 glass-container border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          >
            {countries.map((country, index) => (
              <option key={index} className='glass-container text-black' value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        </div>
        <div className="mb-4">
          <label htmlFor="agreeToTerms" className="flex items-center">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="mr-2 glass-container"
            />
            I agree with the terms of use
          </label>
        </div>
        <div className="flex justify-center">

        <Btn title="Sign Up" />
        </div>
      </form>
    </div>
  );
};

export default AddAffiliate;
