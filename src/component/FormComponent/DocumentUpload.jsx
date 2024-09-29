import React, { useState, useEffect } from "react";

const DocumentUpload = ({ onDataChange }) => {
  const [files, setFiles] = useState({
    section1: null,
    section2: null,
    section3: null,
    section4: null,
    section5: null,
    section6: null,
  });

  // Update parent component whenever files change
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
    <div className="bg-white shadow-md rounded-lg p-6 max-w-6xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Attach Documents</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4, 5, 6].map((section) => (
          <div className="form-group" key={section}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {`Certificate Section ${section}`}
            </label>
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png" // Accepting specific file types
              onChange={(event) => handleFileChange(`section${section}`, event)}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              required
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default DocumentUpload;

// import React, { useState,useEffect } from "react";
// import "./DocumentUpload.css";

// const DocumentUpload = ({onDataChange}) => {
//   const [files, setFiles] = useState({
//     section1: null,
//     section2: null,
//     section3: null,
//     section4: null,
//     section5: null,
//     section6: null,
//   });


//   // Update parent component whenever formData changes
//   useEffect(() => {
//     onDataChange(files);
//   }, [files, onDataChange]);

//   const handleFileChange = (section, event) => {
//     setFiles({
//       ...files,
//       [section]: event.target.files[0],
//     });
//   };


//   return (
//     <div className="document-upload-container">
//       <h2>Attach Documents</h2>
//       <form  className="document-upload-form">
//         {[1, 2, 3, 4, 5, 6].map((section) => (
//           <div className="form-group" key={section}>
//             <label>{`Certificate Section ${section}`}</label>
//             <input
//               type="file"
//               accept=".pdf,.jpg,.jpeg,.png" // Accepting specific file types
//               onChange={(event) => handleFileChange(`section${section}`, event)}
//               required
//             />
//           </div>
//         ))}

//       </form>
//     </div>
//   );
// };

// export default DocumentUpload;
