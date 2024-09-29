import React, { useState, useEffect } from "react";

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
    <div className="address-info-container max-w-6xl mx-auto mt-6 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-start">
        Student Address Information
      </h2>
      <form className="address-info-form grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Correspondence Address */}
        <h3 className="col-span-1 md:col-span-2 text-xl font-bold text-gray-800">
          Correspondence Address
        </h3>
        
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">Address:</label>
          <input
            type="text"
            name="corrAddress"
            value={formData.corrAddress}
            onChange={handleChange}
            placeholder="Enter Correspondence Address"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        {/* Additional fields for Correspondence Address can be added similarly */}
        
        {/* Same as Correspondence Address */}
        <div className="form-group col-span-1 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Is Permanent Address Same as Correspondence Address?
          </label>
          <select
            name="isSameAsCorr"
            value={formData.isSameAsCorr}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Permanent Address Section (Visible only if different from Correspondence Address) */}
        {formData.isSameAsCorr === "no" && (
          <>
            <h3 className="col-span-1 md:col-span-2 text-xl font-bold text-gray-800">
              Permanent Address
            </h3>
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Address:</label>
              <input
                type="text"
                name="permAddress"
                value={formData.permAddress}
                onChange={handleChange}
                placeholder="Enter Permanent Address"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            {/* Additional fields for Permanent Address can be added similarly */}
          </>
        )}
      </form>
    </div>
  );
};

export default StudentAddressInfo;


// import React, { useState, useEffect } from "react";
// import "./StudentAddressInfo.css";

// const StudentAddressInfo = ({ onDataChange }) => {
//   const [formData, setFormData] = useState({
//     corrAddress: "",
//     corrDistanceFromSchool: "",
//     corrCityVillageTown: "",
//     corrTehsil: "",
//     corrBlock: "",
//     corrAreaLiving: "",
//     corrDistrict: "",
//     corrState: "",
//     corrPin: "",
//     landlineNumber: "",
//     phoneNumber: "",
//     isSameAsCorr: "yes", // yes or no
//     permAddress: "",
//     permCityVillageTown: "",
//     permTehsil: "",
//     permBlock: "",
//     permAreaLiving: "",
//     permDistrict: "",
//     permState: "",
//     permPin: "",
//   });

//   // Call onDataChange whenever formData changes
//   useEffect(() => {
//     onDataChange(formData);
//   }, [formData, onDataChange]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

 

//   return (
//     <div className="address-info-container">
//       <h2>Student Address Information</h2>
//       <form className="address-info-form">
//         {/* Correspondence Address */}
//         <h1 className="text-xl font-bold">Correspondence Address</h1>
//         <div className="form-group">
//           <label>Address:</label>
//           <input
//             type="text"
//             name="corrAddress"
//             value={formData.corrAddress}
//             onChange={handleChange}
//             placeholder="Enter Correspondence Address"
//             required
//           />
//         </div>
        
//         {/* Other fields for Correspondence Address ... */}

//         {/* Same as Correspondence Address */}
//         <div className="form-group">
//           <label>Is Permanent Address Same as Correspondence Address?</label>
//           <select
//             name="isSameAsCorr"
//             value={formData.isSameAsCorr}
//             onChange={handleChange}
//           >
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//         </div>

//         {/* Permanent Address (Visible only if different from Correspondence Address) */}
//         {formData.isSameAsCorr === "no" && (
//           <>
//             <h1 className="text-xl font-bold">Permanent Address</h1>
//             <div className="form-group">
//               <label>Address:</label>
//               <input
//                 type="text"
//                 name="permAddress"
//                 value={formData.permAddress}
//                 onChange={handleChange}
//                 placeholder="Enter Permanent Address"
//                 required
//               />
//             </div>
//             {/* Other fields for Permanent Address ... */}
//           </>
//         )}
        
      
      
//       </form>
//     </div>
//   );
// };

// export default StudentAddressInfo;
