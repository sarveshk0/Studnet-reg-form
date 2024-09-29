import React, { useState, useEffect } from "react";

const ParentGuardianInfo = ({ onDataChange }) => {
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
    <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-start">Parent/Guardian Information</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Father's Name */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Father's Name</label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Father's Name"
          />
        </div>

        {/* Father's Aadhar Number */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Father's Aadhar Number</label>
          <input
            type="text"
            name="fatherAadhar"
            value={formData.fatherAadhar}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Father's Aadhar Number"
          />
        </div>

        {/* Father's Mobile Number */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Father's Mobile Number</label>
          <input
            type="tel"
            name="fatherMobile"
            value={formData.fatherMobile}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Mobile Number"
          />
        </div>

        {/* Father's Occupation */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Father's Occupation</label>
          <input
            type="text"
            name="fatherOccupation"
            value={formData.fatherOccupation}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Occupation"
          />
        </div>

        {/* Father's Office Address */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Office Address (if working)</label>
          <input
            type="text"
            name="fatherOfficeAddress"
            value={formData.fatherOfficeAddress}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Office Address"
          />
        </div>

        {/* Father's Highest Qualification */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Father's Highest Qualification</label>
          <input
            type="text"
            name="fatherQualification"
            value={formData.fatherQualification}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Highest Qualification"
          />
        </div>

        {/* Father's PAN Number */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Father's PAN Number</label>
          <input
            type="text"
            name="fatherPan"
            value={formData.fatherPan}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter PAN Number"
          />
        </div>

        {/* Income Tax Payee */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Income Tax Payee (Yes/No)</label>
          <select
            name="fatherIncomeTaxPayee"
            value={formData.fatherIncomeTaxPayee}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Father's Email ID */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Father's Email ID</label>
          <input
            type="email"
            name="fatherEmail"
            value={formData.fatherEmail}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Email ID"
          />
        </div>

        {/* Mother's Name */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Mother's Name</label>
          <input
            type="text"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Mother's Name"
          />
        </div>

        {/* Mother's Occupation */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Mother's Occupation</label>
          <input
            type="text"
            name="motherOccupation"
            value={formData.motherOccupation}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Occupation"
          />
        </div>

        {/* Mother's Office Address */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Office Address (if working)</label>
          <input
            type="text"
            name="motherOfficeAddress"
            value={formData.motherOfficeAddress}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Office Address"
          />
        </div>

        {/* Mother's Highest Qualification */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Mother's Highest Qualification</label>
          <input
            type="text"
            name="motherQualification"
            value={formData.motherQualification}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Highest Qualification"
          />
        </div>

        {/* Mother's PAN Number */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Mother's PAN Number</label>
          <input
            type="text"
            name="motherPan"
            value={formData.motherPan}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter PAN Number"
          />
        </div>

        {/* Parent's Annual Income */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Parent's Annual Income (in Rs)</label>
          <input
            type="text"
            name="parentAnnualIncome"
            value={formData.parentAnnualIncome}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter Annual Income"
          />
        </div>

        {/* Student BPL */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Student Belongs to BPL (Yes/No)</label>
          <select
            name="studentBPL"
            value={formData.studentBPL}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* BPL Certificate Number */}
        {formData.studentBPL === "yes" && (
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">BPL Certificate Number</label>
            <input
              type="text"
              name="bplCertificateNumber"
              value={formData.bplCertificateNumber}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter BPL Certificate Number"
            />
          </div>
        )}

        {/* Issuing Authority */}
        {formData.studentBPL === "yes" && (
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Issuing Authority</label>
            <input
              type="text"
              name="issuingAuthority"
              value={formData.issuingAuthority}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Issuing Authority"
            />
          </div>
        )}

        {/* Issued Date */}
        {formData.studentBPL === "yes" && (
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700">Issued Date</label>
            <input
              type="date"
              name="issuedDate"
              value={formData.issuedDate}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        )}
      </form>
    </div>
  );
};

export default ParentGuardianInfo;


// import React, { useState,useEffect } from "react";
// import "./ParentGuardianInfo.css";

// const ParentGuardianInfo = ({onDataChange}) => {
//   const [formData, setFormData] = useState({
//     fatherName: "",
//     fatherAadhar: "",
//     fatherMobile: "",
//     fatherOccupation: "",
//     fatherOfficeAddress: "",
//     fatherQualification: "",
//     fatherPan: "",
//     fatherIncomeTaxPayee: "",
//     fatherEmail: "",
//     motherName: "",
//     motherOccupation: "",
//     motherOfficeAddress: "",
//     motherQualification: "",
//     motherPan: "",
//     parentAnnualIncome: "",
//     studentBPL: "",
//     bplCertificateNumber: "",
//     issuingAuthority: "",
//     issuedDate: "",
//   });
  
//   useEffect(() => {
//     onDataChange(formData);
//   }, [formData, onDataChange]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

 

//   return (
//     <div className="parent-info-container">
//       <h2>Parent/Guardian Information</h2>
//       <form className="parent-info-form">
//         <div className="form-group">
//           <label>Father's Name:</label>
//           <input
//             type="text"
//             name="fatherName"
//             value={formData.fatherName}
//             onChange={handleChange}
//             placeholder="Enter Father's Name"
//           />
//         </div>

//         <div className="form-group">
//           <label>Father's Aadhar Number:</label>
//           <input
//             type="text"
//             name="fatherAadhar"
//             value={formData.fatherAadhar}
//             onChange={handleChange}
//             placeholder="Enter Father's Aadhar Number"
//           />
//         </div>

//         <div className="form-group">
//           <label>Father's Mobile Number:</label>
//           <input
//             type="tel"
//             name="fatherMobile"
//             value={formData.fatherMobile}
//             onChange={handleChange}
//             placeholder="Enter Mobile Number"
//           />
//         </div>

//         <div className="form-group">
//           <label>Father's Occupation:</label>
//           <input
//             type="text"
//             name="fatherOccupation"
//             value={formData.fatherOccupation}
//             onChange={handleChange}
//             placeholder="Enter Occupation"
//           />
//         </div>

//         <div className="form-group">
//           <label>Office Address (if working):</label>
//           <input
//             type="text"
//             name="fatherOfficeAddress"
//             value={formData.fatherOfficeAddress}
//             onChange={handleChange}
//             placeholder="Enter Office Address"
//           />
//         </div>

//         <div className="form-group">
//           <label>Father's Highest Qualification:</label>
//           <input
//             type="text"
//             name="fatherQualification"
//             value={formData.fatherQualification}
//             onChange={handleChange}
//             placeholder="Enter Highest Qualification"
//           />
//         </div>

//         <div className="form-group">
//           <label>Father's PAN Number:</label>
//           <input
//             type="text"
//             name="fatherPan"
//             value={formData.fatherPan}
//             onChange={handleChange}
//             placeholder="Enter PAN Number"
//           />
//         </div>

//         <div className="form-group">
//           <label>Income Tax Payee (Yes/No):</label>
//           <select
//             name="fatherIncomeTaxPayee"
//             value={formData.fatherIncomeTaxPayee}
//             onChange={handleChange}
//           >
//             <option value="">Select</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Father's Email ID:</label>
//           <input
//             type="email"
//             name="fatherEmail"
//             value={formData.fatherEmail}
//             onChange={handleChange}
//             placeholder="Enter Email ID"
//           />
//         </div>

//         <div className="form-group">
//           <label>Mother's Name:</label>
//           <input
//             type="text"
//             name="motherName"
//             value={formData.motherName}
//             onChange={handleChange}
//             placeholder="Enter Mother's Name"
//           />
//         </div>

//         <div className="form-group">
//           <label>Mother's Occupation:</label>
//           <input
//             type="text"
//             name="motherOccupation"
//             value={formData.motherOccupation}
//             onChange={handleChange}
//             placeholder="Enter Occupation"
//           />
//         </div>

//         <div className="form-group">
//           <label>Office Address (if working):</label>
//           <input
//             type="text"
//             name="motherOfficeAddress"
//             value={formData.motherOfficeAddress}
//             onChange={handleChange}
//             placeholder="Enter Office Address"
//           />
//         </div>

//         <div className="form-group">
//           <label>Mother's Highest Qualification:</label>
//           <input
//             type="text"
//             name="motherQualification"
//             value={formData.motherQualification}
//             onChange={handleChange}
//             placeholder="Enter Highest Qualification"
//           />
//         </div>

//         <div className="form-group">
//           <label>Mother's PAN Number:</label>
//           <input
//             type="text"
//             name="motherPan"
//             value={formData.motherPan}
//             onChange={handleChange}
//             placeholder="Enter PAN Number"
//           />
//         </div>

//         <div className="form-group">
//           <label>Parent's Annual Income (in Rs):</label>
//           <input
//             type="text"
//             name="parentAnnualIncome"
//             value={formData.parentAnnualIncome}
//             onChange={handleChange}
//             placeholder="Enter Annual Income"
//           />
//         </div>

//         <div className="form-group">
//           <label>Student Belongs to Below Poverty Line (Yes/No):</label>
//           <select
//             name="studentBPL"
//             value={formData.studentBPL}
//             onChange={handleChange}
//           >
//             <option value="">Select</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//         </div>

//         {formData.studentBPL === "yes" && (
//           <>
//             <div className="form-group">
//               <label>BPL Certificate Number:</label>
//               <input
//                 type="text"
//                 name="bplCertificateNumber"
//                 value={formData.bplCertificateNumber}
//                 onChange={handleChange}
//                 placeholder="Enter Certificate Number"
//               />
//             </div>

//             <div className="form-group">
//               <label>Issuing Authority:</label>
//               <input
//                 type="text"
//                 name="issuingAuthority"
//                 value={formData.issuingAuthority}
//                 onChange={handleChange}
//                 placeholder="Enter Issuing Authority"
//               />
//             </div>

//             <div className="form-group">
//               <label>Issued Date:</label>
//               <input
//                 type="date"
//                 name="issuedDate"
//                 value={formData.issuedDate}
//                 onChange={handleChange}
//               />
//             </div>
//           </>
//         )}

    
//       </form>
//     </div>
//   );
// };

// export default ParentGuardianInfo;
