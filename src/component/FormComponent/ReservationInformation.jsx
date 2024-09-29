import React, { useState, useEffect } from "react";

const ReservationInformation = ({ onDataChange }) => {
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

  useEffect(() => {
    onDataChange(formData);
  }, [formData, onDataChange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Reservation Information</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Religion */}
        <div className="form-group">
          <label className="block font-semibold mb-1">Religion:</label>
          <select
            name="religion"
            value={formData.religion}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
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
          <label className="block font-semibold mb-1">Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
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

        {/* Caste and Certificate Info (if reserved) */}
        {formData.category !== "general" && (
          <>
            <div className="form-group">
              <label className="block font-semibold mb-1">Caste:</label>
              <input
                type="text"
                name="caste"
                value={formData.caste}
                onChange={handleChange}
                placeholder="Enter Caste"
                required
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
              />
            </div>

            <div className="form-group">
              <label className="block font-semibold mb-1">Certificate Number:</label>
              <input
                type="text"
                name="reservedCertNo"
                value={formData.reservedCertNo}
                onChange={handleChange}
                placeholder="Enter Certificate No."
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
              />
            </div>

            <div className="form-group">
              <label className="block font-semibold mb-1">Issuing Authority:</label>
              <input
                type="text"
                name="issuingAuthority"
                value={formData.issuingAuthority}
                onChange={handleChange}
                placeholder="Enter Issuing Authority"
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
              />
            </div>

            <div className="form-group">
              <label className="block font-semibold mb-1">Issue Date:</label>
              <input
                type="date"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
              />
            </div>
          </>
        )}

        {/* Physically Handicapped */}
        <div className="form-group">
          <label className="block font-semibold mb-1">Physically Handicapped:</label>
          <select
            name="isPhysicallyHandicapped"
            value={formData.isPhysicallyHandicapped}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        {/* Physical Disability Details (if yes) */}
        {formData.isPhysicallyHandicapped === "yes" && (
          <>
            <div className="form-group">
              <label className="block font-semibold mb-1">Disability Type:</label>
              <select
                name="physicalDisabilityType"
                value={formData.physicalDisabilityType}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
              >
                <option value="">Select Disability Type</option>
                <option value="blindness">Blindness</option>
                <option value="low_vision">Low Vision</option>
                <option value="hearing_disability">Hearing Disability</option>
                <option value="speech_disability">Speech Disability</option>
                <option value="loco_motor_disability">Loco Motor Disability</option>
              </select>
            </div>

            <div className="form-group">
              <label className="block font-semibold mb-1">Percentage:</label>
              <input
                type="text"
                name="physicalDisabilityPercentage"
                value={formData.physicalDisabilityPercentage}
                onChange={handleChange}
                placeholder="Enter Percentage"
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
              />
            </div>
          </>
        )}

        {/* Mentally Challenged */}
        <div className="form-group">
          <label className="block font-semibold mb-1">Mentally Challenged:</label>
          <select
            name="isMentallyChallenged"
            value={formData.isMentallyChallenged}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>
        </div>

        {/* Mental Disability Details (if yes) */}
        {formData.isMentallyChallenged === "yes" && (
          <>
            <div className="form-group">
              <label className="block font-semibold mb-1">Mental Disability Type:</label>
              <select
                name="mentalDisabilityType"
                value={formData.mentalDisabilityType}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
              >
                <option value="">Select Mental Disability Type</option>
                <option value="mental_retardation">Mental Retardation</option>
                <option value="learning_disability">Learning Disability</option>
                <option value="cerebral_palsy">Cerebral Palsy</option>
                <option value="autism">Autism</option>
              </select>
            </div>

            <div className="form-group">
              <label className="block font-semibold mb-1">Percentage:</label>
              <input
                type="text"
                name="mentalDisabilityPercentage"
                value={formData.mentalDisabilityPercentage}
                onChange={handleChange}
                placeholder="Enter Percentage"
                className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
              />
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default ReservationInformation;
