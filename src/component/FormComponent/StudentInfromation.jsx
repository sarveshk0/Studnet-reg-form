import React, { useState, useEffect } from "react";
import "./StudentInformation.css";

const StudentInformation = ({ onDataChange }) => {
  const [formData, setFormData] = useState({
    classOfAdmission: "",
    stream: "",
    nameTitle: "Mr",
    name: "",
    dob: "",
    gender: "",
    aadharNumber: "",
    placeOfBirth: {
      country: "",
      state: "",
      district: "",
      tehsil: "",
      cityOrVillage: "",
    },
    email: "",
    mobileNo: "",
    nationality: "",
    domicileOfHaryana: "",
  });

  // Update parent component whenever formData changes
  useEffect(() => {
    onDataChange(formData);
  }, [formData, onDataChange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePlaceChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      placeOfBirth: {
        ...prevData.placeOfBirth,
        [name]: value,
      },
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  //   // You can also send the data to the parent here if needed
  // };

  return (
    <div className="form-container">
      <h2>Student Information</h2>
      <form className="form">
        <div className="form-group">
          <label>Class of Admission:</label>
          <input
            type="text"
            name="classOfAdmission"
            placeholder="Class Name"
            value={formData.classOfAdmission}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Stream:</label>
          <select name="stream" value={formData.stream} onChange={handleChange}>
            <option value="">Select Stream(for class 11th and 12th)</option>
            <option value="arts">Arts</option>
            <option value="commerce">Commerce</option>
            <option value="science">Science</option>
          </select>
        </div>

        <div className="form-group">
          <label>Name:</label>
          <select name="nameTitle" value={formData.nameTitle} onChange={handleChange}>
            <option value="Mr">Mr</option>
            <option value="Miss">Miss</option>
            <option value="Mrs">Mrs</option>
          </select>
          <input
            type="text"
            name="name"
            placeholder="Enter full name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Date of Birth:</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="form-group">
          <label>Aadhar Number:</label>
          <input
            type="text"
            name="aadharNumber"
            placeholder="Enter Aadhar Number"
            value={formData.aadharNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form border p-4">
          <h1 className="text-2xl">Place of Birth</h1>
          <div className="form-group">
            <label>Country:</label>
            <input
              type="text"
              name="country"
              placeholder="Enter Country"
              value={formData.placeOfBirth.country}
              onChange={handlePlaceChange}
            />
          </div>
          <div className="form-group">
            <label>State:</label>
            <input
              type="text"
              name="state"
              placeholder="Enter State"
              value={formData.placeOfBirth.state}
              onChange={handlePlaceChange}
            />
          </div>
          <div className="form-group">
            <label>District:</label>
            <input
              type="text"
              name="district"
              placeholder="Enter District"
              value={formData.placeOfBirth.district}
              onChange={handlePlaceChange}
            />
          </div>
          <div className="form-group">
            <label>Tehsil:</label>
            <input
              type="text"
              name="tehsil"
              placeholder="Enter Tehsil"
              value={formData.placeOfBirth.tehsil}
              onChange={handlePlaceChange}
            />
          </div>
          <div className="form-group">
            <label>City or Village:</label>
            <input
              type="text"
              name="cityOrVillage"
              placeholder="Enter City or Village"
              value={formData.placeOfBirth.cityOrVillage}
              onChange={handlePlaceChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Mobile No:</label>
          <input
            type="tel"
            name="mobileNo"
            placeholder="Enter Mobile Number"
            value={formData.mobileNo}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Nationality:</label>
          <input
            type="text"
            name="nationality"
            placeholder="Enter Nationality"
            value={formData.nationality}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Domicile of Haryana:</label>
          <select name="domicileOfHaryana" value={formData.domicileOfHaryana} onChange={handleChange}>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        
      </form>
    </div>
  );
};

export default StudentInformation;
