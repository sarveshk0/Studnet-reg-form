import React, { useState } from 'react'

import StudentInformation from './component/FormComponent/StudentInfromation'
import ParentGuardianInfo from './component/FormComponent/ParentGuardianInfo'
import SiblingInfo from './component/FormComponent/siblingInfo'
import StudentAddressInfo from './component/FormComponent/StudentAddress'
import ReservationInformation from './component/FormComponent/ReservationInformation'
import PastSchoolInformation from './component/FormComponent/PastSchoolInformation'
import MediumOfInstructionAndSubjects from './component/FormComponent/MediumOfInstructionAndSubjects'
import StudentBankAccountInformation from './component/FormComponent/StudentAccountInformation'
import DocumentUpload from './component/FormComponent/DocumentUpload'
import Declaration from './component/FormComponent/Declarition'


const StudentAdmissonForm = () => {
   // Parent state to store data from each section
   const [studentInfo, setStudentInfo] = useState({});
   const [parentGuardianInfo, setParentGuardianInfo] = useState({});
   const [siblingInfo, setSiblingInfo] = useState({});
   const [addressInfo, setAddressInfo] = useState({});
   const [reservationInfo, setReservationInfo] = useState({});
   const [pastSchoolInfo, setPastSchoolInfo] = useState({});
   const [mediumInfo, setMediumInfo] = useState({});
   const [bankInfo, setBankInfo] = useState({});
   const [documentUpload, setDocumentUpload] = useState({});
   const [declaration, setDeclaration] = useState({});



  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      studentInfo,
      parentGuardianInfo,
      siblingInfo,
      addressInfo,
      reservationInfo,
      pastSchoolInfo,
      mediumInfo,
      bankInfo,
      documentUpload,
      declaration,
    };

    // Now you have all the form data in formData object
    console.log('Form Data Submitted:', formData);

    // You can now send formData to your backend or perform any actions
  };

  return (
    <div>
    <h1 className='text-center text-3xl font-bold'>Student Admission Form</h1>
    <form onSubmit={handleSubmit}>
      <StudentInformation onDataChange={setStudentInfo} />
      <ParentGuardianInfo onDataChange={setParentGuardianInfo} />
      <SiblingInfo onDataChange={setSiblingInfo} />
      <StudentAddressInfo onDataChange={setAddressInfo} />
      <ReservationInformation onDataChange={setReservationInfo} />
      <PastSchoolInformation onDataChange={setPastSchoolInfo} />
      <MediumOfInstructionAndSubjects onDataChange={setMediumInfo} />
      <StudentBankAccountInformation onDataChange={setBankInfo} />
      <DocumentUpload onDataChange={setDocumentUpload} />
      <Declaration onDataChange={setDeclaration} />
      <div className='text-center'>
      <button type="submit">Submit Form</button>
      </div>
    
    </form>
  </div>
  )
}

export default StudentAdmissonForm