import React from 'react';
import Course from './Course'

// type definition
interface Course {
    name: string;
    courseId: string;
    studentPositions: number;
}
// properties type definition (array of courses)
interface CourseListProps {
    courses : Course[];
}
// map through courses array and render Course component of each item
export default function CourseList ({courses} : CourseListProps) {
    return (
        <div>
           {courses.map(course => (
                <Course 
                    name = {course.name}
                    courseId = {course.courseId}
                    studentPositions = {course.studentPositions}
                /> 
            ))}
        </div>
    )
}

