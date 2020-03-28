const studentNames = ["Cassidy", "Adylin", "Parker"];
let i =0;
while(i < 3){
    const name = prompt("Type Student's Name");
    studentNames.push(name);
    i++
}

for (let i=0; i<studentNames.length; i++){
    console.log(studentNames[i]);
}