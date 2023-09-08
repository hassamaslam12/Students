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
        <td>${allStudents[i].firstName}</td>
        <td>${allStudents[i].lastName}</td>
        <td>${allStudents[i].age}</td>
        <td>${allStudents[i].Id}</td>
        <td><button onclick="deleteStudent(${i})" class = "btn btn-primary">Delete student</button></td>
        
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
    neww = Math.round(Math.random()*20)+1;

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