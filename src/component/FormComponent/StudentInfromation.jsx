import React, { useState, useEffect } from "react";
// import "./StudentInformation.css"; // If you have some specific styles, otherwise, you can remove this.

const StudentInformation = ({ onDataChange }) => {
  const [formData, setFormData] = useState({
    classOfAdmission: "",
    stream: "",
    nameTitle: "Mr",
    name: "",
    dob: "",
    gender: "",
    aadharNumber: "",
    placeOfBirth: {
      country: "",
      state: "",
      district: "",
      tehsil: "",
      cityOrVillage: "",
    },
    email: "",
    mobileNo: "",
    nationality: "",
    domicileOfHaryana: "",
  });

  // Update parent component whenever formData changes
  useEffect(() => {
    onDataChange(formData);
  }, [formData, onDataChange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePlaceChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      placeOfBirth: {
        ...prevData.placeOfBirth,
        [name]: value,
      },
    }));
  };

  return (
    <div className="form-container max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg ">
      <h2 className="text-3xl font-semibold text-start mb-8">Student Information</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Class of Admission */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Class of Admission:</label>
          <input
            type="text"
            name="classOfAdmission"
            placeholder="Class Name"
            value={formData.classOfAdmission}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Stream */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Stream:</label>
          <select
            name="stream"
            value={formData.stream}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select Stream (for class 11th and 12th)</option>
            <option value="arts">Arts</option>
            <option value="commerce">Commerce</option>
            <option value="science">Science</option>
          </select>
        </div>

        {/* Name */}
        <div className="form-group col-span-2">
          <label className="block text-sm font-medium text-gray-700">Name:</label>
          <div className="flex space-x-2">
            <select
              name="nameTitle"
              value={formData.nameTitle}
              onChange={handleChange}
              className="mt-1 block w-20 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="Mr">Mr</option>
              <option value="Miss">Miss</option>
              <option value="Mrs">Mrs</option>
            </select>
            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Date of Birth */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Gender */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Aadhar Number */}
        <div className="form-group col-span-2">
          <label className="block text-sm font-medium text-gray-700">Aadhar Number:</label>
          <input
            type="text"
            name="aadharNumber"
            placeholder="Enter Aadhar Number"
            value={formData.aadharNumber}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Place of Birth */}
        <div className="form border p-4 col-span-2 rounded-lg bg-gray-50 shadow-md">
          <h1 className="text-xl font-semibold mb-4">Place of Birth</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Country:</label>
              <input
                type="text"
                name="country"
                placeholder="Enter Country"
                value={formData.placeOfBirth.country}
                onChange={handlePlaceChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">State:</label>
              <input
                type="text"
                name="state"
                placeholder="Enter State"
                value={formData.placeOfBirth.state}
                onChange={handlePlaceChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">District:</label>
              <input
                type="text"
                name="district"
                placeholder="Enter District"
                value={formData.placeOfBirth.district}
                onChange={handlePlaceChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700">Tehsil:</label>
              <input
                type="text"
                name="tehsil"
                placeholder="Enter Tehsil"
                value={formData.placeOfBirth.tehsil}
                onChange={handlePlaceChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="form-group col-span-2">
              <label className="block text-sm font-medium text-gray-700">City or Village:</label>
              <input
                type="text"
                name="cityOrVillage"
                placeholder="Enter City or Village"
                value={formData.placeOfBirth.cityOrVillage}
                onChange={handlePlaceChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="form-group col-span-2">
          <label className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Mobile No */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Mobile No:</label>
          <input
            type="tel"
            name="mobileNo"
            placeholder="Enter Mobile Number"
            value={formData.mobileNo}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Nationality */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700">Nationality:</label>
          <input
            type="text"
            name="nationality"
            placeholder="Enter Nationality"
            value={formData.nationality}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        {/* Domicile of Haryana */}
        <div className="form-group col-span-2">
          <label className="block text-sm font-medium text-gray-700">Domicile of Haryana:</label>
          <select
            name="domicileOfHaryana"
            value={formData.domicileOfHaryana}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select Yes or No</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default StudentInformation;

// import React, { useState, useEffect } from "react";
// import "./StudentInformation.css";

// const StudentInformation = ({ onDataChange }) => {
//   const [formData, setFormData] = useState({
//     classOfAdmission: "",
//     stream: "",
//     nameTitle: "Mr",
//     name: "",
//     dob: "",
//     gender: "",
//     aadharNumber: "",
//     placeOfBirth: {
//       country: "",
//       state: "",
//       district: "",
//       tehsil: "",
//       cityOrVillage: "",
//     },
//     email: "",
//     mobileNo: "",
//     nationality: "",
//     domicileOfHaryana: "",
//   });

//   // Update parent component whenever formData changes
//   useEffect(() => {
//     onDataChange(formData);
//   }, [formData, onDataChange]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handlePlaceChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       placeOfBirth: {
//         ...prevData.placeOfBirth,
//         [name]: value,
//       },
//     }));
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   console.log("Form submitted:", formData);
//   //   // You can also send the data to the parent here if needed
//   // };

//   return (
//     <div className="form-container">
//       <h2>Student Information</h2>
//       <form className="form">
//         <div className="form-group">
//           <label>Class of Admission:</label>
//           <input
//             type="text"
//             name="classOfAdmission"
//             placeholder="Class Name"
//             value={formData.classOfAdmission}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="form-group">
//           <label>Stream:</label>
//           <select name="stream" value={formData.stream} onChange={handleChange}>
//             <option value="">Select Stream(for class 11th and 12th)</option>
//             <option value="arts">Arts</option>
//             <option value="commerce">Commerce</option>
//             <option value="science">Science</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Name:</label>
//           <select name="nameTitle" value={formData.nameTitle} onChange={handleChange}>
//             <option value="Mr">Mr</option>
//             <option value="Miss">Miss</option>
//             <option value="Mrs">Mrs</option>
//           </select>
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter full name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="form-group">
//           <label>Date of Birth:</label>
//           <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
//         </div>

//         <div className="form-group">
//           <label>Gender:</label>
//           <select name="gender" value={formData.gender} onChange={handleChange}>
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Aadhar Number:</label>
//           <input
//             type="text"
//             name="aadharNumber"
//             placeholder="Enter Aadhar Number"
//             value={formData.aadharNumber}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="form border p-4">
//           <h1 className="text-2xl">Place of Birth</h1>
//           <div className="form-group">
//             <label>Country:</label>
//             <input
//               type="text"
//               name="country"
//               placeholder="Enter Country"
//               value={formData.placeOfBirth.country}
//               onChange={handlePlaceChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>State:</label>
//             <input
//               type="text"
//               name="state"
//               placeholder="Enter State"
//               value={formData.placeOfBirth.state}
//               onChange={handlePlaceChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>District:</label>
//             <input
//               type="text"
//               name="district"
//               placeholder="Enter District"
//               value={formData.placeOfBirth.district}
//               onChange={handlePlaceChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>Tehsil:</label>
//             <input
//               type="text"
//               name="tehsil"
//               placeholder="Enter Tehsil"
//               value={formData.placeOfBirth.tehsil}
//               onChange={handlePlaceChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>City or Village:</label>
//             <input
//               type="text"
//               name="cityOrVillage"
//               placeholder="Enter City or Village"
//               value={formData.placeOfBirth.cityOrVillage}
//               onChange={handlePlaceChange}
//             />
//           </div>
//         </div>

//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter Email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="form-group">
//           <label>Mobile No:</label>
//           <input
//             type="tel"
//             name="mobileNo"
//             placeholder="Enter Mobile Number"
//             value={formData.mobileNo}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="form-group">
//           <label>Nationality:</label>
//           <input
//             type="text"
//             name="nationality"
//             placeholder="Enter Nationality"
//             value={formData.nationality}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="form-group">
//           <label>Domicile of Haryana:</label>
//           <select name="domicileOfHaryana" value={formData.domicileOfHaryana} onChange={handleChange}>
//             <option value="">Select</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//         </div>

        
//       </form>
//     </div>
//   );
// };

// export default StudentInformation;
