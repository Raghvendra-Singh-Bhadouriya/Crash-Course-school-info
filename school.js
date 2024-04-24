const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  };


  /*=========================Function Count Calculation=============================*/
function countCalculation(school){
    let mathTeachersCount = 0;
    let historyTeachersCount = 0;
    let mathStudentsCount = 0;
    let historyStudentsCount = 0;

        for(let key in school.departments){
            if(key == "math"){
                mathTeachersCount+= school.departments[key].teachers;
                mathStudentsCount+= school.departments[key].students;
            }
            if(key == "history"){
                historyTeachersCount+= school.departments[key].teachers;
                historyStudentsCount+= school.departments[key].students;
            }
        }
        return {
            mathTeachersCount,
            historyTeachersCount,
            mathStudentsCount,
            historyStudentsCount,
        }
    }
console.log(countCalculation(school))


/*=========================Function Find Top Student=============================*/
function findTopStudent(school,courseName){
    let obj = {};
    let maxMarks = 0;
         for(let key of school.students)
         if(key.scores[courseName]){
             const score = key.scores[courseName];
             if(score > maxMarks){
                 maxMarks = score;
                 obj = key;
             }
         }
     return obj;
};
console.log(findTopStudent(school, 'math'));


/*=========================Function Add New Department=============================*/
function addNewDept(school, newDepartment){
  let updatedSchool = {
    ...school,
    departments: {
      ...school.departments,
      [newDepartment.name]: {
        teachers: newDepartment.teachers,
        students: newDepartment.students
      }
    }
  };

  return updatedSchool;
}

const newDepartment = {
  name: 'art',
  teachers: 2,
  students: 50
}
console.log(addNewDept(school,newDepartment))


/*=========================Function Highest Student Count Department=============================*/
function highestStudentCountDepartment(school) {
  let highestCount = 0;
  let highestDept = '';

  for (let deptName in school.departments) {
    const studentsCount = school.departments[deptName].students;

    if (studentsCount > highestCount) {
      highestCount = studentsCount;
      highestDept = deptName;
    }
  }

  return highestDept;
}
console.log(highestStudentCountDepartment(school));


/*=========================Function Generate Greeting=============================*/
function generateGreeting(name, language) {
  let greetings = {
    'English': `Hello, ${name}!`,
    'Spanish': `¡Hola, ${name}!`,
    'French': `Bonjour, ${name}!`
  };

  if (greetings[language]) {
    return greetings[language];
  } else {
    return greetings['English'];
  }
 
}

console.log(generateGreeting("Alice"));
console.log(generateGreeting("Bob", "Spanish"));
console.log(generateGreeting("Charlie", "French"));

