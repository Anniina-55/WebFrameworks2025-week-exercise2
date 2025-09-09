import './App.css'
import CourseList from './CourseList';

// example courses
const courses = [
  { name: "Course 1", courseId: "ABC123", studentPositions: 10 },
  { name: "Course 2", courseId: "XYZ456", studentPositions: 20 },
  { name: "Course 3", courseId: "DEF789", studentPositions: 30 },
];

function App() {
// render CourseList component into DOM
  return (
    <>
      <div><h2>Week exercise 2</h2></div>
      <CourseList courses={courses}/>
    </>
  )
}

export default App;
