import React, { useState,useEffect } from "react";
import "./StudentBankAccountInformation.css";

const StudentBankAccountInformation = ({onDataChange}) => {
  const [formData, setFormData] = useState({
    accountHolderName: "",
    jointAccountHolderName: "",
    relationWithStudent: "",
    accountNumber: "",
    ifscCode: "",
    bankName: "",
    branchCode: "",
  });


  // Update parent component whenever formData changes
  useEffect(() => {
    onDataChange(formData);
  }, [formData, onDataChange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };



  return (
    <div className="bank-account-info-container">
      <h2>Student Bank Account Information</h2>
      <form className="bank-account-info-form">
        {/* Account Holder Name */}
        <div className="form-group">
          <label>Account Holder Name:</label>
          <input
            type="text"
            name="accountHolderName"
            value={formData.accountHolderName}
            onChange={handleChange}
            placeholder="Enter Account Holder Name"
            required
          />
        </div>

        {/* Joint Account Holder Name */}
        <div className="form-group">
          <label>Joint Account Holder Name (if any):</label>
          <input
            type="text"
            name="jointAccountHolderName"
            value={formData.jointAccountHolderName}
            onChange={handleChange}
            placeholder="Enter Joint Account Holder Name"
          />
        </div>

        {/* Relation with Student */}
        <div className="form-group">
          <label>Relation with Student (for Joint Account Holder):</label>
          <input
            type="text"
            name="relationWithStudent"
            value={formData.relationWithStudent}
            onChange={handleChange}
            placeholder="Enter Relation with Student"
          />
        </div>

        {/* Account Number */}
        <div className="form-group">
          <label>Account Number:</label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            placeholder="Enter Account Number"
            required
          />
        </div>

        {/* IFSC Code */}
        <div className="form-group">
          <label>IFSC Code:</label>
          <input
            type="text"
            name="ifscCode"
            value={formData.ifscCode}
            onChange={handleChange}
            placeholder="Enter IFSC Code"
            required
          />
        </div>

        {/* Bank Name */}
        <div className="form-group">
          <label>Bank Name:</label>
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            placeholder="Enter Bank Name"
            required
          />
        </div>

        {/* Branch Code */}
        <div className="form-group">
          <label>Branch Code:</label>
          <input
            type="text"
            name="branchCode"
            value={formData.branchCode}
            onChange={handleChange}
            placeholder="Enter Branch Code"
            required
          />
        </div>

      
      </form>
    </div>
  );
};

export default StudentBankAccountInformation;
