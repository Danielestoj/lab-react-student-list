import { useState } from 'react'
import { studentsData } from './students'
import  AddStudentForm  from './components/AddStudentForm';
import './App.css'

function App() {
  const [students, setStudents] = useState(studentsData);

  const addStudent = newStudent => {
    setStudents([...students, newStudent]);
  };

  return (
    <div className="App">
      <AddStudentForm onAddStudent={addStudent} />
      <h1>Student List</h1>
      <div className="student-list">
        {students.map(student => (
          <div key={student._id} className="student-card">
            <img src={student.image} alt={student.fullName} />
            <h3>{student.fullName}</h3>
            <p>Program: {student.program}</p>
            <p>Email: {student.email}</p>
            <p>Phone: {student.phone}</p>
            <p>Graduated: {student.graduated ? 'Yes' : 'No'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
