import React, { useState,useEffect } from "react";
import "./ParentGuardianInfo.css";

const ParentGuardianInfo = ({onDataChange}) => {
  const [formData, setFormData] = useState({
    fatherName: "",
    fatherAadhar: "",
    fatherMobile: "",
    fatherOccupation: "",
    fatherOfficeAddress: "",
    fatherQualification: "",
    fatherPan: "",
    fatherIncomeTaxPayee: "",
    fatherEmail: "",
    motherName: "",
    motherOccupation: "",
    motherOfficeAddress: "",
    motherQualification: "",
    motherPan: "",
    parentAnnualIncome: "",
    studentBPL: "",
    bplCertificateNumber: "",
    issuingAuthority: "",
    issuedDate: "",
  });
  
  useEffect(() => {
    onDataChange(formData);
  }, [formData, onDataChange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 

  return (
    <div className="parent-info-container">
      <h2>Parent/Guardian Information</h2>
      <form className="parent-info-form">
        <div className="form-group">
          <label>Father's Name:</label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            placeholder="Enter Father's Name"
          />
        </div>

        <div className="form-group">
          <label>Father's Aadhar Number:</label>
          <input
            type="text"
            name="fatherAadhar"
            value={formData.fatherAadhar}
            onChange={handleChange}
            placeholder="Enter Father's Aadhar Number"
          />
        </div>

        <div className="form-group">
          <label>Father's Mobile Number:</label>
          <input
            type="tel"
            name="fatherMobile"
            value={formData.fatherMobile}
            onChange={handleChange}
            placeholder="Enter Mobile Number"
          />
        </div>

        <div className="form-group">
          <label>Father's Occupation:</label>
          <input
            type="text"
            name="fatherOccupation"
            value={formData.fatherOccupation}
            onChange={handleChange}
            placeholder="Enter Occupation"
          />
        </div>

        <div className="form-group">
          <label>Office Address (if working):</label>
          <input
            type="text"
            name="fatherOfficeAddress"
            value={formData.fatherOfficeAddress}
            onChange={handleChange}
            placeholder="Enter Office Address"
          />
        </div>

        <div className="form-group">
          <label>Father's Highest Qualification:</label>
          <input
            type="text"
            name="fatherQualification"
            value={formData.fatherQualification}
            onChange={handleChange}
            placeholder="Enter Highest Qualification"
          />
        </div>

        <div className="form-group">
          <label>Father's PAN Number:</label>
          <input
            type="text"
            name="fatherPan"
            value={formData.fatherPan}
            onChange={handleChange}
            placeholder="Enter PAN Number"
          />
        </div>

        <div className="form-group">
          <label>Income Tax Payee (Yes/No):</label>
          <select
            name="fatherIncomeTaxPayee"
            value={formData.fatherIncomeTaxPayee}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="form-group">
          <label>Father's Email ID:</label>
          <input
            type="email"
            name="fatherEmail"
            value={formData.fatherEmail}
            onChange={handleChange}
            placeholder="Enter Email ID"
          />
        </div>

        <div className="form-group">
          <label>Mother's Name:</label>
          <input
            type="text"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            placeholder="Enter Mother's Name"
          />
        </div>

        <div className="form-group">
          <label>Mother's Occupation:</label>
          <input
            type="text"
            name="motherOccupation"
            value={formData.motherOccupation}
            onChange={handleChange}
            placeholder="Enter Occupation"
          />
        </div>

        <div className="form-group">
          <label>Office Address (if working):</label>
          <input
            type="text"
            name="motherOfficeAddress"
            value={formData.motherOfficeAddress}
            onChange={handleChange}
            placeholder="Enter Office Address"
          />
        </div>

        <div className="form-group">
          <label>Mother's Highest Qualification:</label>
          <input
            type="text"
            name="motherQualification"
            value={formData.motherQualification}
            onChange={handleChange}
            placeholder="Enter Highest Qualification"
          />
        </div>

        <div className="form-group">
          <label>Mother's PAN Number:</label>
          <input
            type="text"
            name="motherPan"
            value={formData.motherPan}
            onChange={handleChange}
            placeholder="Enter PAN Number"
          />
        </div>

        <div className="form-group">
          <label>Parent's Annual Income (in Rs):</label>
          <input
            type="text"
            name="parentAnnualIncome"
            value={formData.parentAnnualIncome}
            onChange={handleChange}
            placeholder="Enter Annual Income"
          />
        </div>

        <div className="form-group">
          <label>Student Belongs to Below Poverty Line (Yes/No):</label>
          <select
            name="studentBPL"
            value={formData.studentBPL}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {formData.studentBPL === "yes" && (
          <>
            <div className="form-group">
              <label>BPL Certificate Number:</label>
              <input
                type="text"
                name="bplCertificateNumber"
                value={formData.bplCertificateNumber}
                onChange={handleChange}
                placeholder="Enter Certificate Number"
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
              <label>Issued Date:</label>
              <input
                type="date"
                name="issuedDate"
                value={formData.issuedDate}
                onChange={handleChange}
              />
            </div>
          </>
        )}

    
      </form>
    </div>
  );
};

export default ParentGuardianInfo;
