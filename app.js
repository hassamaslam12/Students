var totalStudents = document.getElementById("totalStudents");
var allStudents =[]
var student1 = {
    firstName: 'John',
    lastName: 'wick',
    age: 21,
    Id: calcID(),

};
var student2 = {
    firstName: 'Mushtaq',
    lastName: 'Ali',
    age: 31,
    Id: calcID(),

};
var student3 = {
    firstName: 'Gulfam',
    lastName: 'naeem',
    age: 14,
    Id: calcID(),

};

 allStudents = [student1,student2,student3];

var tableBody = document.getElementById("tableBody");


function render(){

    totalStudents.innerText = allStudents.length;

    tableBody.innerHTML =``;
    
    for (let i=0 ;i<allStudents.length;i++){
        tableBody.innerHTML += 
        `<tr>
        <td>${i+1}</td>
        <td id="fName${i}">${allStudents[i].firstName}</td>
        <td id="lName${i}">${allStudents[i].lastName}</td>
        <td id="age${i}">${allStudents[i].age}</td>
        <td id="Id${i}">${allStudents[i].Id}</td>
        <td id="buttons${i}">
        <button onclick="editStudentUI(${i})" class="btn btn-primary">Edit</button>
        <button onclick="deleteStudent(${i})" class = "btn btn-primary">Delete</button>
        </td>
        
        </tr>`;
    }
    tableBody.innerHTML += `  <tr>
    <td colspan="1"></td>
    <td>
      <input
        type="text"
        id="firstName"
        placeholder="Add first name"
      />
    </td>
    <td>
      <input type="text" id="lastName" placeholder="Add last name" />
    </td>
    <td>
      <input type="number" id="age" placeholder="Add Age" />
    </td>
    <td>
    <button class="btn btn-primary" onclick="addNewStudent()">
    Add New Student
  </button>
    </td>
  </tr>`;


}
render();

function addNewStudent(){
    var fName = document.getElementById("firstName").value;
    var lName = document.getElementById("lastName").value;
    var newAge = document.getElementById('age').value;
    var temp = {
        firstName: fName,
        lastName :lName,
        age     :newAge,
        Id: calcID(),
    };
    

allStudents.push(temp);
render();   

}

function calcID(){
    var neww;
    neww = Math.round(Math.random()*100)+1;

    for(var i = 0 ; i < allStudents.length ; i++){
        if(neww === allStudents[i].Id){
            calcID();
        }
    }
return neww;
}

function deleteStudent(index){

allStudents.splice(index,1);
render();

}


function editStudentUI(index){

document.getElementById(`fName${index}`).innerHTML = `<td>
<input
  type="text"
  id="firstNameEdit"
  placeholder="Add first name"
/>`
document.getElementById(`lName${index}`).innerHTML = `<td>
<input type="text" id="lastNameEdit" placeholder="Add last name" />
</td>`
document.getElementById(`age${index}`).innerHTML = `<td>
<input type="number" id="ageEdit" placeholder="Add Age" />
</td>`
document.getElementById(`Id${index}`).innerHTML = `<td></td>`
document.getElementById(`buttons${index}`).innerHTML = `<button class="btn btn-primary" onclick="editStudent(${index})">
Update`

}


function editStudent(index){

allStudents[index].firstName = document.getElementById("firstNameEdit").value;
allStudents[index].lastName = document.getElementById("lastNameEdit").value;
allStudents[index].age = document.getElementById("ageEdit").value;
render();

}
