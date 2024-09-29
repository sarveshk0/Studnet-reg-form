import React, { useState,useEffect } from "react";
import "./DocumentUpload.css";

const DocumentUpload = ({onDataChange}) => {
  const [files, setFiles] = useState({
    section1: null,
    section2: null,
    section3: null,
    section4: null,
    section5: null,
    section6: null,
  });


  // Update parent component whenever formData changes
  useEffect(() => {
    onDataChange(files);
  }, [files, onDataChange]);

  const handleFileChange = (section, event) => {
    setFiles({
      ...files,
      [section]: event.target.files[0],
    });
  };


  return (
    <div className="document-upload-container">
      <h2>Attach Documents</h2>
      <form  className="document-upload-form">
        {[1, 2, 3, 4, 5, 6].map((section) => (
          <div className="form-group" key={section}>
            <label>{`Certificate Section ${section}`}</label>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png" // Accepting specific file types
              onChange={(event) => handleFileChange(`section${section}`, event)}
              required
            />
          </div>
        ))}

      </form>
    </div>
  );
};

export default DocumentUpload;
