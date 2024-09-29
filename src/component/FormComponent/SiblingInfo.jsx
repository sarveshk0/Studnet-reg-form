import React, { useState, useEffect } from "react";

const SiblingInfo = ({ onDataChange }) => {
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
    <div className="sibling-info-container max-w-6xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Information About Sibling in This School
      </h2>
      <form className="sibling-info-form grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Sibling */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">1st Sibling Full Name:</label>
          <input
            type="text"
            name="firstSiblingFullName"
            value={formData.firstSiblingFullName}
            onChange={handleChange}
            placeholder="Enter 1st Sibling's Full Name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">1st Sibling Class:</label>
          <input
            type="text"
            name="firstSiblingClass"
            value={formData.firstSiblingClass}
            onChange={handleChange}
            placeholder="Enter 1st Sibling's Class"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">1st Sibling Registration Number (SRN):</label>
          <input
            type="text"
            name="firstSiblingRegNumber"
            value={formData.firstSiblingRegNumber}
            onChange={handleChange}
            placeholder="Enter 1st Sibling's Registration Number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">1st Sibling Relation (Brother/Sister):</label>
          <select
            name="firstSiblingRelation"
            value={formData.firstSiblingRelation}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select Relation</option>
            <option value="brother">Brother</option>
            <option value="sister">Sister</option>
          </select>
        </div>

        {/* Second Sibling */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">2nd Sibling Full Name:</label>
          <input
            type="text"
            name="secondSiblingFullName"
            value={formData.secondSiblingFullName}
            onChange={handleChange}
            placeholder="Enter 2nd Sibling's Full Name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">2nd Sibling Class:</label>
          <input
            type="text"
            name="secondSiblingClass"
            value={formData.secondSiblingClass}
            onChange={handleChange}
            placeholder="Enter 2nd Sibling's Class"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">2nd Sibling Registration Number (SRN):</label>
          <input
            type="text"
            name="secondSiblingRegNumber"
            value={formData.secondSiblingRegNumber}
            onChange={handleChange}
            placeholder="Enter 2nd Sibling's Registration Number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">2nd Sibling Relation (Brother/Sister):</label>
          <select
            name="secondSiblingRelation"
            value={formData.secondSiblingRelation}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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

// import React, { useState,useEffect } from "react";
// import "./SiblingInfo.css";

// const SiblingInfo = ({onDataChange}) => {
//   const [formData, setFormData] = useState({
//     firstSiblingFullName: "",
//     firstSiblingClass: "",
//     firstSiblingRegNumber: "",
//     firstSiblingRelation: "",
//     secondSiblingFullName: "",
//     secondSiblingClass: "",
//     secondSiblingRegNumber: "",
//     secondSiblingRelation: "",
//   });


//   // Update parent component whenever formData changes
//   useEffect(() => {
//     onDataChange(formData);
//   }, [formData, onDataChange]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };



//   return (
//     <div className="sibling-info-container">
//       <h2>Information About Sibling in This School</h2>
//       <form  className="sibling-info-form">
//         {/* First Sibling */}
//         <div className="form-group">
//           <label>1st Sibling Full Name:</label>
//           <input
//             type="text"
//             name="firstSiblingFullName"
//             value={formData.firstSiblingFullName}
//             onChange={handleChange}
//             placeholder="Enter 1st Sibling's Full Name"
//           />
//         </div>

//         <div className="form-group">
//           <label>1st Sibling Class:</label>
//           <input
//             type="text"
//             name="firstSiblingClass"
//             value={formData.firstSiblingClass}
//             onChange={handleChange}
//             placeholder="Enter 1st Sibling's Class"
//           />
//         </div>

//         <div className="form-group">
//           <label>1st Sibling Registration Number (SRN):</label>
//           <input
//             type="text"
//             name="firstSiblingRegNumber"
//             value={formData.firstSiblingRegNumber}
//             onChange={handleChange}
//             placeholder="Enter 1st Sibling's Registration Number"
//           />
//         </div>

//         <div className="form-group">
//           <label>1st Sibling Relation (Brother/Sister):</label>
//           <select
//             name="firstSiblingRelation"
//             value={formData.firstSiblingRelation}
//             onChange={handleChange}
//           >
//             <option value="">Select Relation</option>
//             <option value="brother">Brother</option>
//             <option value="sister">Sister</option>
//           </select>
//         </div>

//         {/* Second Sibling */}
//         <div className="form-group">
//           <label>2nd Sibling Full Name:</label>
//           <input
//             type="text"
//             name="secondSiblingFullName"
//             value={formData.secondSiblingFullName}
//             onChange={handleChange}
//             placeholder="Enter 2nd Sibling's Full Name"
//           />
//         </div>

//         <div className="form-group">
//           <label>2nd Sibling Class:</label>
//           <input
//             type="text"
//             name="secondSiblingClass"
//             value={formData.secondSiblingClass}
//             onChange={handleChange}
//             placeholder="Enter 2nd Sibling's Class"
//           />
//         </div>

//         <div className="form-group">
//           <label>2nd Sibling Registration Number (SRN):</label>
//           <input
//             type="text"
//             name="secondSiblingRegNumber"
//             value={formData.secondSiblingRegNumber}
//             onChange={handleChange}
//             placeholder="Enter 2nd Sibling's Registration Number"
//           />
//         </div>

//         <div className="form-group">
//           <label>2nd Sibling Relation (Brother/Sister):</label>
//           <select
//             name="secondSiblingRelation"
//             value={formData.secondSiblingRelation}
//             onChange={handleChange}
//           >
//             <option value="">Select Relation</option>
//             <option value="brother">Brother</option>
//             <option value="sister">Sister</option>
//           </select>
//         </div>

//       </form>
//     </div>
//   );
// };

// export default SiblingInfo;
