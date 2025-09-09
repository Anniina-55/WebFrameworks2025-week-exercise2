import React from 'react';

// props type definition
interface CourseProps {
    name: string;
    courseId: string;
    studentPositions: number;
};

// rendering course item into DOM with given properties 
// predefined class-styling from App.css
export default function Course({name, courseId, studentPositions} : CourseProps ) {
    return (
    <div className='course'>
        <h2>{name}</h2>
        <p>{courseId}</p>
        <p>Student Positions: {studentPositions}</p>
    </div>
    )
}
