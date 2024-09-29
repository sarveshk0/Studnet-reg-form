import React, { useState,useEffect } from "react";
import "./MediumOfInstructionAndSubjects.css";

const MediumOfInstructionAndSubjects = ({onDataChange}) => {
  const [formData, setFormData] = useState({
    mediumOfInstruction: "",
    compulsorySubjects: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    optionalSubjects: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
  });


  // Update parent component whenever formData changes
  useEffect(() => {
    onDataChange(formData);
  }, [formData, onDataChange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [group, subject] = name.split("-");
    
    if (group === "medium") {
      setFormData({ ...formData, mediumOfInstruction: value });
    } else {
      setFormData({
        ...formData,
        [group]: { ...formData[group], [subject]: value },
      });
    }
  };



  return (
    <div className="instruction-subjects-container">
      <h2>Medium of Instruction & Subjects Taken</h2>
      <form className="instruction-subjects-form">
        {/* Medium of Instruction */}
        <div className="form-group">
          <label>Medium of Instruction:</label>
          <select
            name="medium"
            value={formData.mediumOfInstruction}
            onChange={handleChange}
            required
          >
            <option value="">Select Medium</option>
            <option value="Hindi">Hindi</option>
            <option value="English">English</option>
          </select>
        </div>

        {/* Compulsory Subjects */}
        
       <h3 className="font-bold">Compulsory Subjects (for Class VI to XII)</h3>
        <div className="form-group">
          <label>Compulsory Subject A:</label>
          <input
            type="text"
            name="compulsory-a"
            value={formData.compulsorySubjects.a}
            onChange={handleChange}
            placeholder="Enter Subject A"
          />
        </div>
        <div className="form-group">
          <label>Compulsory Subject B:</label>
          <input
            type="text"
            name="compulsory-b"
            value={formData.compulsorySubjects.b}
            onChange={handleChange}
            placeholder="Enter Subject B"
          />
        </div>
        <div className="form-group">
          <label>Compulsory Subject C:</label>
          <input
            type="text"
            name="compulsory-c"
            value={formData.compulsorySubjects.c}
            onChange={handleChange}
            placeholder="Enter Subject C"
          />
        </div>
        <div className="form-group">
          <label>Compulsory Subject D:</label>
          <input
            type="text"
            name="compulsory-d"
            value={formData.compulsorySubjects.d}
            onChange={handleChange}
            placeholder="Enter Subject D"
          />
        </div>

        {/* Optional Subjects */}
        <h3>Optional Subjects</h3>
        <div className="form-group">
          <label>Optional Subject A:</label>
          <input
            type="text"
            name="optional-a"
            value={formData.optionalSubjects.a}
            onChange={handleChange}
            placeholder="Enter Subject A"
          />
        </div>
        <div className="form-group">
          <label>Optional Subject B:</label>
          <input
            type="text"
            name="optional-b"
            value={formData.optionalSubjects.b}
            onChange={handleChange}
            placeholder="Enter Subject B"
          />
        </div>
        <div className="form-group">
          <label>Optional Subject C:</label>
          <input
            type="text"
            name="optional-c"
            value={formData.optionalSubjects.c}
            onChange={handleChange}
            placeholder="Enter Subject C"
          />
        </div>
        <div className="form-group">
          <label>Optional Subject D:</label>
          <input
            type="text"
            name="optional-d"
            value={formData.optionalSubjects.d}
            onChange={handleChange}
            placeholder="Enter Subject D"
          />
        </div>

       
      </form>
    </div>
  );
};

export default MediumOfInstructionAndSubjects;
