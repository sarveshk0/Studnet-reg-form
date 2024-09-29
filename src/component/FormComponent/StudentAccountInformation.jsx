import React, { useState, useEffect } from "react";

const StudentBankAccountInformation = ({ onDataChange }) => {
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
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-6xl mx-auto ">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-start">
        Student Bank Account Information
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Account Holder Name */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Account Holder Name:
          </label>
          <input
            type="text"
            name="accountHolderName"
            value={formData.accountHolderName}
            onChange={handleChange}
            placeholder="Enter Account Holder Name"
            required
            className="block w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
          />
        </div>

        {/* Joint Account Holder Name */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Joint Account Holder Name (if any):
          </label>
          <input
            type="text"
            name="jointAccountHolderName"
            value={formData.jointAccountHolderName}
            onChange={handleChange}
            placeholder="Enter Joint Account Holder Name"
            className="block w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
          />
        </div>

        {/* Relation with Student */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Relation with Student (for Joint Account Holder):
          </label>
          <input
            type="text"
            name="relationWithStudent"
            value={formData.relationWithStudent}
            onChange={handleChange}
            placeholder="Enter Relation with Student"
            className="block w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
          />
        </div>

        {/* Account Number */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Account Number:
          </label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            placeholder="Enter Account Number"
            required
            className="block w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
          />
        </div>

        {/* IFSC Code */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            IFSC Code:
          </label>
          <input
            type="text"
            name="ifscCode"
            value={formData.ifscCode}
            onChange={handleChange}
            placeholder="Enter IFSC Code"
            required
            className="block w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
          />
        </div>

        {/* Bank Name */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bank Name:
          </label>
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            placeholder="Enter Bank Name"
            required
            className="block w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
          />
        </div>

        {/* Branch Code */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Branch Code:
          </label>
          <input
            type="text"
            name="branchCode"
            value={formData.branchCode}
            onChange={handleChange}
            placeholder="Enter Branch Code"
            required
            className="block w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
          />
        </div>
      </form>
    </div>
  );
};

export default StudentBankAccountInformation;

// import React, { useState,useEffect } from "react";
// import "./StudentBankAccountInformation.css";

// const StudentBankAccountInformation = ({onDataChange}) => {
//   const [formData, setFormData] = useState({
//     accountHolderName: "",
//     jointAccountHolderName: "",
//     relationWithStudent: "",
//     accountNumber: "",
//     ifscCode: "",
//     bankName: "",
//     branchCode: "",
//   });


//   // Update parent component whenever formData changes
//   useEffect(() => {
//     onDataChange(formData);
//   }, [formData, onDataChange]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };



//   return (
//     <div className="bank-account-info-container">
//       <h2>Student Bank Account Information</h2>
//       <form className="bank-account-info-form">
//         {/* Account Holder Name */}
//         <div className="form-group">
//           <label>Account Holder Name:</label>
//           <input
//             type="text"
//             name="accountHolderName"
//             value={formData.accountHolderName}
//             onChange={handleChange}
//             placeholder="Enter Account Holder Name"
//             required
//           />
//         </div>

//         {/* Joint Account Holder Name */}
//         <div className="form-group">
//           <label>Joint Account Holder Name (if any):</label>
//           <input
//             type="text"
//             name="jointAccountHolderName"
//             value={formData.jointAccountHolderName}
//             onChange={handleChange}
//             placeholder="Enter Joint Account Holder Name"
//           />
//         </div>

//         {/* Relation with Student */}
//         <div className="form-group">
//           <label>Relation with Student (for Joint Account Holder):</label>
//           <input
//             type="text"
//             name="relationWithStudent"
//             value={formData.relationWithStudent}
//             onChange={handleChange}
//             placeholder="Enter Relation with Student"
//           />
//         </div>

//         {/* Account Number */}
//         <div className="form-group">
//           <label>Account Number:</label>
//           <input
//             type="text"
//             name="accountNumber"
//             value={formData.accountNumber}
//             onChange={handleChange}
//             placeholder="Enter Account Number"
//             required
//           />
//         </div>

//         {/* IFSC Code */}
//         <div className="form-group">
//           <label>IFSC Code:</label>
//           <input
//             type="text"
//             name="ifscCode"
//             value={formData.ifscCode}
//             onChange={handleChange}
//             placeholder="Enter IFSC Code"
//             required
//           />
//         </div>

//         {/* Bank Name */}
//         <div className="form-group">
//           <label>Bank Name:</label>
//           <input
//             type="text"
//             name="bankName"
//             value={formData.bankName}
//             onChange={handleChange}
//             placeholder="Enter Bank Name"
//             required
//           />
//         </div>

//         {/* Branch Code */}
//         <div className="form-group">
//           <label>Branch Code:</label>
//           <input
//             type="text"
//             name="branchCode"
//             value={formData.branchCode}
//             onChange={handleChange}
//             placeholder="Enter Branch Code"
//             required
//           />
//         </div>

      
//       </form>
//     </div>
//   );
// };

// export default StudentBankAccountInformation;
