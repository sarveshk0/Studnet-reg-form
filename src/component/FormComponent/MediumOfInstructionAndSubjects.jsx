import React, { useState, useEffect } from "react";

const MediumOfInstructionAndSubjects = ({ onDataChange }) => {
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
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-6xl mx-auto ">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-start">
        Medium of Instruction & Subjects Taken
      </h2>
      <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Medium of Instruction */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Medium of Instruction:
          </label>
          <select
            name="medium"
            value={formData.mediumOfInstruction}
            onChange={handleChange}
            required
            className="block w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
          >
            <option value="">Select Medium</option>
            <option value="Hindi">Hindi</option>
            <option value="English">English</option>
          </select>
        </div>

        {/* Compulsory Subjects */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-medium text-gray-800 mb-3">Compulsory Subjects (for Class VI to XII)</h3>
          {['a', 'b', 'c', 'd'].map((subject) => (
            <div className="form-group mb-4" key={`compulsory-${subject}`}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Compulsory Subject {subject.toUpperCase()}:
              </label>
              <input
                type="text"
                name={`compulsory-${subject}`}
                value={formData.compulsorySubjects[subject]}
                onChange={handleChange}
                placeholder={`Enter Subject ${subject.toUpperCase()}`}
                className="block w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              />
            </div>
          ))}
        </div>

        {/* Optional Subjects */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-medium text-gray-800 mb-3">Optional Subjects</h3>
          {['a', 'b', 'c', 'd'].map((subject) => (
            <div className="form-group mb-4" key={`optional-${subject}`}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Optional Subject {subject.toUpperCase()}:
              </label>
              <input
                type="text"
                name={`optional-${subject}`}
                value={formData.optionalSubjects[subject]}
                onChange={handleChange}
                placeholder={`Enter Subject ${subject.toUpperCase()}`}
                className="block w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
              />
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default MediumOfInstructionAndSubjects;


// import React, { useState,useEffect } from "react";
// import "./MediumOfInstructionAndSubjects.css";

// const MediumOfInstructionAndSubjects = ({onDataChange}) => {
//   const [formData, setFormData] = useState({
//     mediumOfInstruction: "",
//     compulsorySubjects: {
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//     },
//     optionalSubjects: {
//       a: "",
//       b: "",
//       c: "",
//       d: "",
//     },
//   });


//   // Update parent component whenever formData changes
//   useEffect(() => {
//     onDataChange(formData);
//   }, [formData, onDataChange]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const [group, subject] = name.split("-");
    
//     if (group === "medium") {
//       setFormData({ ...formData, mediumOfInstruction: value });
//     } else {
//       setFormData({
//         ...formData,
//         [group]: { ...formData[group], [subject]: value },
//       });
//     }
//   };



//   return (
//     <div className="instruction-subjects-container">
//       <h2>Medium of Instruction & Subjects Taken</h2>
//       <form className="instruction-subjects-form">
//         {/* Medium of Instruction */}
//         <div className="form-group">
//           <label>Medium of Instruction:</label>
//           <select
//             name="medium"
//             value={formData.mediumOfInstruction}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Medium</option>
//             <option value="Hindi">Hindi</option>
//             <option value="English">English</option>
//           </select>
//         </div>

//         {/* Compulsory Subjects */}
        
//        <h3 className="font-bold">Compulsory Subjects (for Class VI to XII)</h3>
//         <div className="form-group">
//           <label>Compulsory Subject A:</label>
//           <input
//             type="text"
//             name="compulsory-a"
//             value={formData.compulsorySubjects.a}
//             onChange={handleChange}
//             placeholder="Enter Subject A"
//           />
//         </div>
//         <div className="form-group">
//           <label>Compulsory Subject B:</label>
//           <input
//             type="text"
//             name="compulsory-b"
//             value={formData.compulsorySubjects.b}
//             onChange={handleChange}
//             placeholder="Enter Subject B"
//           />
//         </div>
//         <div className="form-group">
//           <label>Compulsory Subject C:</label>
//           <input
//             type="text"
//             name="compulsory-c"
//             value={formData.compulsorySubjects.c}
//             onChange={handleChange}
//             placeholder="Enter Subject C"
//           />
//         </div>
//         <div className="form-group">
//           <label>Compulsory Subject D:</label>
//           <input
//             type="text"
//             name="compulsory-d"
//             value={formData.compulsorySubjects.d}
//             onChange={handleChange}
//             placeholder="Enter Subject D"
//           />
//         </div>

//         {/* Optional Subjects */}
//         <h3>Optional Subjects</h3>
//         <div className="form-group">
//           <label>Optional Subject A:</label>
//           <input
//             type="text"
//             name="optional-a"
//             value={formData.optionalSubjects.a}
//             onChange={handleChange}
//             placeholder="Enter Subject A"
//           />
//         </div>
//         <div className="form-group">
//           <label>Optional Subject B:</label>
//           <input
//             type="text"
//             name="optional-b"
//             value={formData.optionalSubjects.b}
//             onChange={handleChange}
//             placeholder="Enter Subject B"
//           />
//         </div>
//         <div className="form-group">
//           <label>Optional Subject C:</label>
//           <input
//             type="text"
//             name="optional-c"
//             value={formData.optionalSubjects.c}
//             onChange={handleChange}
//             placeholder="Enter Subject C"
//           />
//         </div>
//         <div className="form-group">
//           <label>Optional Subject D:</label>
//           <input
//             type="text"
//             name="optional-d"
//             value={formData.optionalSubjects.d}
//             onChange={handleChange}
//             placeholder="Enter Subject D"
//           />
//         </div>

       
//       </form>
//     </div>
//   );
// };

// export default MediumOfInstructionAndSubjects;
