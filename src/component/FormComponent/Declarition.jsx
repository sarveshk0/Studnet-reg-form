import React, { useState, useEffect } from "react";

const Declaration = ({ onDataChange }) => {
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
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-6xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-start">
        Declaration by Parent/Guardian
      </h2>
       {/* Agreement Checkbox */}
       <div className="form-group flex items-start">
          <input
            type="checkbox"
            name="agreement"
            checked={formData.agreement}
            onChange={handleChange}
            required
            className="mr-2"
          />
         
        </div>
      <p className="text-start text-sm font-bold mb-4">
        I hereby declare that all the information given here is true. I take full responsibility for my child to behave sincerely. We will abide by all the rules and regulations of the institution. Please admit my child.
      </p>

      <form className="grid grid-cols-1 gap-6">
       

        {/* Place Input */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">Place:</label>
          <input
            type="text"
            name="place"
            value={formData.place}
            onChange={handleChange}
            placeholder="Enter Place"
            required
            className="block w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
          />
        </div>

        {/* Date Input */}
        <div className="form-group">
          <label className="block text-sm font-medium text-gray-700 mb-1">Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="block w-full border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-200 focus:border-blue-500"
          />
        </div>
      </form>
    </div>
  );
};

export default Declaration;

// import React, { useState,useEffect } from "react";
//  import "./Declaration.css";

// const Declaration = ({onDataChange}) => {
//   const [formData, setFormData] = useState({
//     place: "",
//     date: "",
//     agreement: false, // Checkbox state
//   });


//   // Update parent component whenever formData changes
//   useEffect(() => {
//     onDataChange(formData);
//   }, [formData, onDataChange]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };


//   return (
//     <div className="declaration-container">
//       <h2>Declaration by Parent/Guardian</h2>
//             {/* Agreement Checkbox */}
//             <div className="form-group">
//           <label>
//             <input
//               type="checkbox"
//               name="agreement"
//               checked={formData.agreement}
//               onChange={handleChange}
//               required
//             />
//             I agree to the declaration
//           </label>
//         </div>
//       <form className="declaration-form">
//            <>
//          <p className="text-start text-[.75rem] font-bold">
//           I hereby declare that all the information given here is true. I take full responsibility for my child to behave sincerely. We will abide by all the rules and regulations of the institution. Please admit my child.
//         </p>
//            </>
      
  
//         <>
//                 {/* Place Input */}
//                 <div className="form-group">
//           <label>Place:</label>
//           <input
//             type="text"
//             name="place"
//             value={formData.place}
//             onChange={handleChange}
//             placeholder="Enter Place"
//             required
//           />
//         </div>

//         {/* Date Input */}
//         <div className="form-group">
//           <label>Date:</label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         </>

       
       

  
//       </form>
//     </div>
//   );
// };

// export default Declaration;
