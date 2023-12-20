let students = [
  { name: 'Focous', age: 23 },
  { name: 'Ekim', age: 19 },
  { name: 'Frikky', age: 20 },
  { name: 'Ace', age: 19 },
  { name: 'Yong', age: 17 },
  { name: 'Kyrios', age: 19 },
  { name: 'Dax', age: 20 },
  { name: 'Casper', age: 16 },
  { name: 'Breezy', age: 18 },
  { name: 'Beeke', age: 18 },
  { name: 'Hills', age: 28 },
  { name: 'Ferry', age: 23 },
  { name: 'Davy', age: 20 }
]

function initials (string) {
  let initial = string[0]
  for (let i = 0; i <= string.length - 1; i++) {
    if (string[i] === ' ') {
      initial += '.' + string[i + 1]
    }
  }
  return initial
}

let stud
function searchStudent (stud) {
  return `
    <tr> 
       <td>${initials(stud.name)}</td>
       <td>${stud.name}</td>
       <td>${stud.age}</td>
       <td><button id ="delete" class = "delete-btn">Delete</button></td>
    </tr>`
}
stud()

function displayStudents (students) {
  const studentsList = document.getElementById('student-list')
  studentsList.innerHTML = ''

  students.forEach((stud) => {
    // const listItem = document.createElement('li')
    // listItem.textContent = students
    studentsList.innerHTML += searchStudent(stud)
    // studentsList.appendChild(listItem)
  })
}
displayStudents(students)

// function filterStudents() {
//     const filterdData = students.filter(stud => stud.age < 25)
//     displayStudents(filterdData)
//     const nameInput = document.getElementById('name-input').value.toLowerCase()
//     const ageInput = parseInt(document.getElementById('age-input').value)
//     const matchingStudent = students.find(student => {
//         const lowerCaseName = student.name.toLocaleLowerCase()
//         const matchesName = lowerCaseName.includes(nameInput)
//         const matchesAge = isNaN(ageInput) || student.age === ageInput

//         return matchesName && matchesAge
//     })

//     const resultElement = document.getElementById('student-list')
//     if (matchingStudent) {
//         resultElement.textContent = `matching student: ${matchingStudent.name}`
//     } else {
//         resultElement.textContent = 'no matching student found.'
//     }
// }

const filterStudents = () => {
  const nameInput = document.getElementById('name-input').value.toLowerCase()
  const ageInput = parseInt(document.getElementById('age-input').value)

  if (nameInput) {
    const filterdData = students.filter(student => student.name.toLocaleLowerCase().includes(nameInput.toLocaleLowerCase()))
    console.log('filter students', filterdData)
    displayStudents(filterdData)
  }

  else if (ageInput) {
    const filterdData = students.filter(student => student.age === +ageInput)
    console.log('filter students', filterdData)
    displayStudents(filterdData)
  }

  console.log('filter students', filterdData)
  displayStudents(filterdData)
}

const refreshPage = () => {
  location.reload()
}
refreshPage()
filterStudents()

function userDelete () {
  const deleteButton = document.querySelectorAll('.delete-btn')

  deleteButton.forEach((btn, index) => {
    btn.addEventListener('click', () => {
    // Get the age of the student to be deleted
      const ageToDelete = students[index].age

      // Remove all students with the same age from the array
      const updatedStudents = students.filter(student => student.age !== ageToDelete)
      students = updatedStudents

      // Update the display
      displayStudents(updatedStudents)
    })
  })
}
userDelete()
