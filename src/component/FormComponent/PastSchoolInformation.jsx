import React, { useState,useEffect } from "react";
import "./PastSchoolInformation.css";

const PastSchoolInformation = ({onDataChange}) => {
  const [formData, setFormData] = useState({
    srn: "",
    previousSchoolName: "",
    dateOfJoining: "",
    dateOfLeaving: "",
    gradeOrPercentage: "",
    transferCertificate: null,
    resultImage: null,
  });



  // Update parent component whenever formData changes
  useEffect(() => {
    onDataChange(formData);
  }, [formData, onDataChange]);

  
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };



  return (
    <div className="past-school-info-container">
      <h2>Past School Information</h2>
      <form className="past-school-info-form">
        {/* Student Registration Number */}
        <div className="form-group">
          <label>Student Registration Number (SRN):</label>
          <input
            type="text"
            name="srn"
            value={formData.srn}
            onChange={handleChange}
            placeholder="Enter SRN (if available)"
          />
        </div>

        {/* Name of Previous School */}
        <div className="form-group">
          <label>Name of Previous School:</label>
          <input
            type="text"
            name="previousSchoolName"
            value={formData.previousSchoolName}
            onChange={handleChange}
            placeholder="Enter School Name"
            required
          />
        </div>

        {/* Date of Joining */}
        <div className="form-group">
          <label>Date of Joining:</label>
          <input
            type="date"
            name="dateOfJoining"
            value={formData.dateOfJoining}
            onChange={handleChange}
            required
          />
        </div>

        {/* Date of Leaving */}
        <div className="form-group">
          <label>Date of Leaving:</label>
          <input
            type="date"
            name="dateOfLeaving"
            value={formData.dateOfLeaving}
            onChange={handleChange}
            required
          />
        </div>

        {/* Grade or Percentage */}
        <div className="form-group">
          <label>Percentage / Grade:</label>
          <input
            type="text"
            name="gradeOrPercentage"
            value={formData.gradeOrPercentage}
            onChange={handleChange}
            placeholder="Enter % or Grade"
            required
          />
        </div>

        {/* Transfer Certificate Upload */}
        <div className="form-group">
          <label>Upload Transfer Certificate:</label>
          <input
            type="file"
            name="transferCertificate"
            onChange={handleChange}
            accept="image/*, .pdf"
            required
          />
        </div>

        {/* Result Image Upload */}
        <div className="form-group">
          <label>Upload Result Image:</label>
          <input
            type="file"
            name="resultImage"
            onChange={handleChange}
            accept="image/*"
            required
          />
        </div>

        
      </form>
    </div>
  );
};

export default PastSchoolInformation;
