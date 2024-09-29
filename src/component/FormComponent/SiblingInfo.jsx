import React, { useState,useEffect } from "react";
import "./SiblingInfo.css";

const SiblingInfo = ({onDataChange}) => {
  const [formData, setFormData] = useState({
    firstSiblingFullName: "",
    firstSiblingClass: "",
    firstSiblingRegNumber: "",
    firstSiblingRelation: "",
    secondSiblingFullName: "",
    secondSiblingClass: "",
    secondSiblingRegNumber: "",
    secondSiblingRelation: "",
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
    <div className="sibling-info-container">
      <h2>Information About Sibling in This School</h2>
      <form  className="sibling-info-form">
        {/* First Sibling */}
        <div className="form-group">
          <label>1st Sibling Full Name:</label>
          <input
            type="text"
            name="firstSiblingFullName"
            value={formData.firstSiblingFullName}
            onChange={handleChange}
            placeholder="Enter 1st Sibling's Full Name"
          />
        </div>

        <div className="form-group">
          <label>1st Sibling Class:</label>
          <input
            type="text"
            name="firstSiblingClass"
            value={formData.firstSiblingClass}
            onChange={handleChange}
            placeholder="Enter 1st Sibling's Class"
          />
        </div>

        <div className="form-group">
          <label>1st Sibling Registration Number (SRN):</label>
          <input
            type="text"
            name="firstSiblingRegNumber"
            value={formData.firstSiblingRegNumber}
            onChange={handleChange}
            placeholder="Enter 1st Sibling's Registration Number"
          />
        </div>

        <div className="form-group">
          <label>1st Sibling Relation (Brother/Sister):</label>
          <select
            name="firstSiblingRelation"
            value={formData.firstSiblingRelation}
            onChange={handleChange}
          >
            <option value="">Select Relation</option>
            <option value="brother">Brother</option>
            <option value="sister">Sister</option>
          </select>
        </div>

        {/* Second Sibling */}
        <div className="form-group">
          <label>2nd Sibling Full Name:</label>
          <input
            type="text"
            name="secondSiblingFullName"
            value={formData.secondSiblingFullName}
            onChange={handleChange}
            placeholder="Enter 2nd Sibling's Full Name"
          />
        </div>

        <div className="form-group">
          <label>2nd Sibling Class:</label>
          <input
            type="text"
            name="secondSiblingClass"
            value={formData.secondSiblingClass}
            onChange={handleChange}
            placeholder="Enter 2nd Sibling's Class"
          />
        </div>

        <div className="form-group">
          <label>2nd Sibling Registration Number (SRN):</label>
          <input
            type="text"
            name="secondSiblingRegNumber"
            value={formData.secondSiblingRegNumber}
            onChange={handleChange}
            placeholder="Enter 2nd Sibling's Registration Number"
          />
        </div>

        <div className="form-group">
          <label>2nd Sibling Relation (Brother/Sister):</label>
          <select
            name="secondSiblingRelation"
            value={formData.secondSiblingRelation}
            onChange={handleChange}
          >
            <option value="">Select Relation</option>
            <option value="brother">Brother</option>
            <option value="sister">Sister</option>
          </select>
        </div>

      </form>
    </div>
  );
};

export default SiblingInfo;
