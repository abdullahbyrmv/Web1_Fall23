const students = [
    {
        name: "Abdullah",
        surname: "Bayramov"
    }
]

function getStudents(){
    console.log(students);
}

function addNewStudent(student){
    students.push(student);
}

getStudents();

addNewStudent({
    name: "Turkan",
    surname: "Hajiyeva"
})
