import React, { useState,useEffect } from "react";
 import "./Declaration.css";

const Declaration = ({onDataChange}) => {
  const [formData, setFormData] = useState({
    place: "",
    date: "",
    agreement: false, // Checkbox state
  });


  // Update parent component whenever formData changes
  useEffect(() => {
    onDataChange(formData);
  }, [formData, onDataChange]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };


  return (
    <div className="declaration-container">
      <h2>Declaration by Parent/Guardian</h2>
            {/* Agreement Checkbox */}
            <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
              required
            />
            I agree to the declaration
          </label>
        </div>
      <form className="declaration-form">
           <>
         <p className="text-start text-[.75rem] font-bold">
          I hereby declare that all the information given here is true. I take full responsibility for my child to behave sincerely. We will abide by all the rules and regulations of the institution. Please admit my child.
        </p>
           </>
      
  
        <>
                {/* Place Input */}
                <div className="form-group">
          <label>Place:</label>
          <input
            type="text"
            name="place"
            value={formData.place}
            onChange={handleChange}
            placeholder="Enter Place"
            required
          />
        </div>

        {/* Date Input */}
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        
        </>

       
       

  
      </form>
    </div>
  );
};

export default Declaration;
