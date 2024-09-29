import React, { useState,useEffect } from "react";
import "./ReservationInformation.css";

const ReservationInformation = ({onDataChange}) => {
  const [formData, setFormData] = useState({
    religion: "",
    category: "",
    caste: "",
    reservedCertNo: "",
    issuingAuthority: "",
    issueDate: "",
    isPhysicallyHandicapped: "no",
    physicalDisabilityType: "",
    physicalDisabilityPercentage: "",
    isMentallyChallenged: "no",
    mentalDisabilityType: "",
    mentalDisabilityPercentage: "",
  });


  // Update parent component whenever formData changes
  useEffect(() => {
    onDataChange(formData);
  }, [formData, onDataChange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  

  return (
    <div className="reservation-info-container">
      <h2>Reservation Information</h2>
      <form  className="reservation-info-form">
        {/* Religion */}
        <div className="form-group">
          <label>Religion:</label>
          <select
            name="religion"
            value={formData.religion}
            onChange={handleChange}
            required
          >
            <option value="">Select Religion</option>
            <option value="hindu">Hindu</option>
            <option value="muslim">Muslim</option>
            <option value="christian">Christian</option>
            <option value="jain">Jain</option>
            <option value="sikh">Sikh</option>
            <option value="parsi">Parsi</option>
            <option value="buddhist">Buddhist</option>
          </select>
        </div>

        {/* Category */}
        <div className="form-group">
          <label>Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="general">General</option>
            <option value="sc">SC</option>
            <option value="st">ST</option>
            <option value="sbc">SBC</option>
            <option value="bc-a">BC-A</option>
            <option value="bc-b">BC-B</option>
          </select>
        </div>

        {/* Caste (if reserved category) */}
        {formData.category !== "general" && (
          <>
            <div className="form-group">
              <label>Caste:</label>
              <input
                type="text"
                name="caste"
                value={formData.caste}
                onChange={handleChange}
                placeholder="Enter Caste"
                required={formData.category !== "general"}
              />
            </div>

            <div className="form-group">
              <label>Certificate Number:</label>
              <input
                type="text"
                name="reservedCertNo"
                value={formData.reservedCertNo}
                onChange={handleChange}
                placeholder="Enter Certificate No."
              />
            </div>

            <div className="form-group">
              <label>Issuing Authority:</label>
              <input
                type="text"
                name="issuingAuthority"
                value={formData.issuingAuthority}
                onChange={handleChange}
                placeholder="Enter Issuing Authority"
              />
            </div>

            <div className="form-group">
              <label>Issue Date:</label>
              <input
                type="date"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleChange}
              />
            </div>
          </>
        )}

        {/* Physically Handicapped */}
        <div className="form-group">
          <label>Physically Handicapped:</label>
          <select
            name="isPhysicallyHandicapped"
            value={formData.isPhysicallyHandicapped}
            onChange={handleChange}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        {/* Physical Disability Details (if yes) */}
        {formData.isPhysicallyHandicapped === "yes" && (
          <>
            <div className="form-group">
              <label>Disability Type:</label>
              <select
                name="physicalDisabilityType"
                value={formData.physicalDisabilityType}
                onChange={handleChange}
                required
              >
                <option value="">Select Disability Type</option>
                <option value="blindness">Blindness</option>
                <option value="low_vision">Low Vision</option>
                <option value="hearing_disability">Hearing Disability</option>
                <option value="speech_disability">Speech Disability</option>
                <option value="loco_motor_disability">
                  Loco Motor Disability
                </option>
              </select>
            </div>

            <div className="form-group">
              <label>Percentage:</label>
              <input
                type="text"
                name="physicalDisabilityPercentage"
                value={formData.physicalDisabilityPercentage}
                onChange={handleChange}
                placeholder="Enter Percentage"
              />
            </div>
          </>
        )}

        {/* Mentally Challenged */}
        <div className="form-group">
          <label>Mentally Challenged:</label>
          <select
            name="isMentallyChallenged"
            value={formData.isMentallyChallenged}
            onChange={handleChange}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        {/* Mental Challenge Details (if yes) */}
        {formData.isMentallyChallenged === "yes" && (
          <>
            <div className="form-group">
              <label>Mental Disability Type:</label>
              <select
                name="mentalDisabilityType"
                value={formData.mentalDisabilityType}
                onChange={handleChange}
                required
              >
                <option value="">Select Mental Disability Type</option>
                <option value="mental_retardation">Mental Retardation</option>
                <option value="learning_disability">Learning Disability</option>
                <option value="cerebral_palsy">Cerebral Palsy</option>
                <option value="austin">Austin</option>
              </select>
            </div>

            <div className="form-group">
              <label>Percentage:</label>
              <input
                type="text"
                name="mentalDisabilityPercentage"
                value={formData.mentalDisabilityPercentage}
                onChange={handleChange}
                placeholder="Enter Percentage"
              />
            </div>
          </>
        )}

       
      </form>
    </div>
  );
};

export default ReservationInformation;
