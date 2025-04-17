import React from 'react';

export default function MBASyllabus() {
  const syllabusData = {
    semesters: [
      {
        name: "Semester I",
        subjects: [
          "Entrepreneurial Practice",
          "Business Communication (WAC)",
          "Managerial Economics",
          "Financial Accounting",
          "Data Visualisation (Excel/Tableau)",
          "Organizational Behaviour",
          "Marketing Management"
        ]
      },
      {
        name: "Semester II",
        subjects: [
          "Business Research Methods (R/Python)",
          "Operation Management",
          "Human Resource Management",
          "Management Accounting",
          "Financial Management",
          "Legal Aspects of Business",
          "Business Communication (VAC)"
        ]
      },
      {
        name: "Semester III",
        coreSubjects: [
          "Strategic Management",
          "Term Paper"
        ],
        electiveHeading: "Electives/Specializations Subjects:",
        electiveNote: "13 Electives are there; get through the list:",
        electives: [
          "Digital Marketing",
          "Finance",
          "Marketing",
          "Human Resources",
          "Analytics & DS",
          "BFSI",
          "FinTech",
          "Operations management",
          "International Business",
          "Information System Management",
          "Project Management",
          "Supply Chain Management",
          "Retail Management"
        ]
      },
      {
        name: "Semester IV",
        coreSubjects: [
          "International Business Management",
          "Project"
        ],
        electiveHeading: "Electives/Specializations Subjects:",
        electiveNote: "13 Electives are there; get through the list:",
        electives: [
          "Digital Marketing",
          "Finance",
          "Marketing",
          "Human Resources",
          "Analytics & DS",
          "BFSI",
          "FinTech",
          "Operations management",
          "International Business",
          "Information System Management",
          "Project Management",
          "Supply Chain Management",
          "Retail Management"
        ]
      }
    ],
    skills: {
      left: [
        "Strategic thinking",
        "Communication",
        "Entrepreneurship",
        "Networking",
        "Time management",
        "Leadership",
        "Interpersonal communication",
        "Leadership and management",
        "Problem-solving",
        "Marketing",
        "Decision-making"
      ],
      right: [
        "Analytical skills",
        "Finance skills",
        "Operations management",
        "Analysis",
        "Skills management",
        "Self-discipline",
        "Teamwork",
        "Technical skills",
        "Global perspective",
        "Flexibility"
      ]
    }
  };

  return (
    <div className="max-w-6xl mx-auto pb-8">
      <h3 className="text-2xl font-bold mb-3 text-gray-800 ">Online MBA Course Subjects/Syllabus</h3>
      
      <p className="mb-6 text-sm text-gray-700">
        Must get through the <span className=" font-medium">online MBA course curriculum</span> before going to learn the course, there is a general syllabus of this program that 
        states what covers the program and what kind of skills you obtained <span className=" font-medium">while learning the program</span>.
      </p>
      
      <div className="border border-gray-300 rounded-xl overflow-hidden">
        <div className="bg-blue-900 text-white p-3 font-medium text-center">
          Online MBA Course Syllabus
        </div>
        
        <div className="grid md:grid-cols-2 gap-px bg-gray-200">
          {syllabusData.semesters.map((semester, idx) => (
            <div key={idx} className="bg-white p-4">
              <h3 className="font-semibold text-lg mb-3 text-gray-800">{semester.name}</h3>
              
              {semester.coreSubjects && (
                <>
                  <p className="font-medium mb-2 text-gray-700">Core subjects</p>
                  <ul className="list-disc ml-6 mb-4">
                    {semester.coreSubjects.map((subject, subIdx) => (
                      <li key={subIdx} className="mb-1.5 text-slate-500">
                        <span className=" hover:underline">{subject}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              
              {semester.electiveHeading && (
                <>
                  <p className="font-medium mb-1 text-gray-700">{semester.electiveHeading}</p>
                  <p className="text-sm mb-2 text-gray-600">{semester.electiveNote}</p>
                  <ul className="list-disc ml-6">
                    {semester.electives.map((elective, eleIdx) => (
                      <li key={eleIdx} className="mb-1.5 text-slate-500">
                        <span className=" hover:underline">{elective}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              
              {!semester.coreSubjects && !semester.electiveHeading && (
                <ul className="list-disc ml-6">
                  {semester.subjects.map((subject, subIdx) => (
                    <li key={subIdx} className="mb-1.5 text-slate-500">
                      <span className=" hover:underline">{subject}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        
        {/* Skills section */}
        <div className="bg-gray-100 text-center p-3 border-t border-gray-300">
          <h3 className="font-medium text-gray-800">Skills obtained in online MBA Course</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-px bg-gray-200">
          <div className="bg-white p-4">
            <ul className="list-disc ml-6">
              {syllabusData.skills.left.map((skill, idx) => (
                <li key={idx} className="mb-1.5 text-slate-500">
                  <span className=" hover:underline">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-4">
            <ul className="list-disc ml-6">
              {syllabusData.skills.right.map((skill, idx) => (
                <li key={idx} className="mb-1.5 text-slate-500">
                  <span className=" hover:underline">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}