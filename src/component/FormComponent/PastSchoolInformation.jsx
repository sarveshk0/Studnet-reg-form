import React, { useState, useEffect } from "react";

const PastSchoolInformation = ({ onDataChange }) => {
  const [formData, setFormData] = useState({
    srn: "",
    previousSchoolName: "",
    dateOfJoining: "",
    dateOfLeaving: "",
    gradeOrPercentage: "",
    transferCertificate: null,
    resultImage: null,
  });

  // Update parent component whenever formData changes
  useEffect(() => {
    onDataChange(formData);
  }, [formData, onDataChange]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-6xl mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Past School Information</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Student Registration Number */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Student Registration Number (SRN):</label>
          <input
            type="text"
            name="srn"
            value={formData.srn}
            onChange={handleChange}
            placeholder="Enter SRN (if available)"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Name of Previous School */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Name of Previous School:</label>
          <input
            type="text"
            name="previousSchoolName"
            value={formData.previousSchoolName}
            onChange={handleChange}
            placeholder="Enter School Name"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Date of Joining */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Date of Joining:</label>
          <input
            type="date"
            name="dateOfJoining"
            value={formData.dateOfJoining}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Date of Leaving */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Date of Leaving:</label>
          <input
            type="date"
            name="dateOfLeaving"
            value={formData.dateOfLeaving}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Grade or Percentage */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Percentage / Grade:</label>
          <input
            type="text"
            name="gradeOrPercentage"
            value={formData.gradeOrPercentage}
            onChange={handleChange}
            placeholder="Enter % or Grade"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Transfer Certificate Upload */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Upload Transfer Certificate:</label>
          <input
            type="file"
            name="transferCertificate"
            onChange={handleChange}
            accept="image/*, .pdf"
            required
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />
        </div>

        {/* Result Image Upload */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Upload Result Image:</label>
          <input
            type="file"
            name="resultImage"
            onChange={handleChange}
            accept="image/*"
            required
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />
        </div>
      </form>
    </div>
  );
};

export default PastSchoolInformation;

// import React, { useState,useEffect } from "react";
// import "./PastSchoolInformation.css";

// const PastSchoolInformation = ({onDataChange}) => {
//   const [formData, setFormData] = useState({
//     srn: "",
//     previousSchoolName: "",
//     dateOfJoining: "",
//     dateOfLeaving: "",
//     gradeOrPercentage: "",
//     transferCertificate: null,
//     resultImage: null,
//   });



//   // Update parent component whenever formData changes
//   useEffect(() => {
//     onDataChange(formData);
//   }, [formData, onDataChange]);


//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files) {
//       setFormData({ ...formData, [name]: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };



//   return (
//     <div className="past-school-info-container">
//       <h2>Past School Information</h2>
//       <form className="past-school-info-form">
//         {/* Student Registration Number */}
//         <div className="form-group">
//           <label>Student Registration Number (SRN):</label>
//           <input
//             type="text"
//             name="srn"
//             value={formData.srn}
//             onChange={handleChange}
//             placeholder="Enter SRN (if available)"
//           />
//         </div>

//         {/* Name of Previous School */}
//         <div className="form-group">
//           <label>Name of Previous School:</label>
//           <input
//             type="text"
//             name="previousSchoolName"
//             value={formData.previousSchoolName}
//             onChange={handleChange}
//             placeholder="Enter School Name"
//             required
//           />
//         </div>

//         {/* Date of Joining */}
//         <div className="form-group">
//           <label>Date of Joining:</label>
//           <input
//             type="date"
//             name="dateOfJoining"
//             value={formData.dateOfJoining}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Date of Leaving */}
//         <div className="form-group">
//           <label>Date of Leaving:</label>
//           <input
//             type="date"
//             name="dateOfLeaving"
//             value={formData.dateOfLeaving}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Grade or Percentage */}
//         <div className="form-group">
//           <label>Percentage / Grade:</label>
//           <input
//             type="text"
//             name="gradeOrPercentage"
//             value={formData.gradeOrPercentage}
//             onChange={handleChange}
//             placeholder="Enter % or Grade"
//             required
//           />
//         </div>

//         {/* Transfer Certificate Upload */}
//         <div className="form-group">
//           <label>Upload Transfer Certificate:</label>
//           <input
//             type="file"
//             name="transferCertificate"
//             onChange={handleChange}
//             accept="image/*, .pdf"
//             required
//           />
//         </div>

//         {/* Result Image Upload */}
//         <div className="form-group">
//           <label>Upload Result Image:</label>
//           <input
//             type="file"
//             name="resultImage"
//             onChange={handleChange}
//             accept="image/*"
//             required
//           />
//         </div>

        
//       </form>
//     </div>
//   );
// };

// export default PastSchoolInformation;
