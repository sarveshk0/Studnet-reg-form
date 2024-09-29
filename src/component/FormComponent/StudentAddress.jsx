import React, { useState, useEffect } from "react";
import "./StudentAddressInfo.css";

const StudentAddressInfo = ({ onDataChange }) => {
  const [formData, setFormData] = useState({
    corrAddress: "",
    corrDistanceFromSchool: "",
    corrCityVillageTown: "",
    corrTehsil: "",
    corrBlock: "",
    corrAreaLiving: "",
    corrDistrict: "",
    corrState: "",
    corrPin: "",
    landlineNumber: "",
    phoneNumber: "",
    isSameAsCorr: "yes", // yes or no
    permAddress: "",
    permCityVillageTown: "",
    permTehsil: "",
    permBlock: "",
    permAreaLiving: "",
    permDistrict: "",
    permState: "",
    permPin: "",
  });

  // Call onDataChange whenever formData changes
  useEffect(() => {
    onDataChange(formData);
  }, [formData, onDataChange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

 

  return (
    <div className="address-info-container">
      <h2>Student Address Information</h2>
      <form className="address-info-form">
        {/* Correspondence Address */}
        <h1 className="text-xl font-bold">Correspondence Address</h1>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="corrAddress"
            value={formData.corrAddress}
            onChange={handleChange}
            placeholder="Enter Correspondence Address"
            required
          />
        </div>
        
        {/* Other fields for Correspondence Address ... */}

        {/* Same as Correspondence Address */}
        <div className="form-group">
          <label>Is Permanent Address Same as Correspondence Address?</label>
          <select
            name="isSameAsCorr"
            value={formData.isSameAsCorr}
            onChange={handleChange}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Permanent Address (Visible only if different from Correspondence Address) */}
        {formData.isSameAsCorr === "no" && (
          <>
            <h1 className="text-xl font-bold">Permanent Address</h1>
            <div className="form-group">
              <label>Address:</label>
              <input
                type="text"
                name="permAddress"
                value={formData.permAddress}
                onChange={handleChange}
                placeholder="Enter Permanent Address"
                required
              />
            </div>
            {/* Other fields for Permanent Address ... */}
          </>
        )}
        
      
      
      </form>
    </div>
  );
};

export default StudentAddressInfo;
