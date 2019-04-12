

console.log("////Q3. Begins here " )

console.log("// using functional Constructor")

function Person(name){
    this.name = name
}

let Teacher = new Person("Christophe")
Person.prototype.teach = function(subject){
    console.log(this.name+" is teaching "+subject)
}

Teacher.teach("Modern Web Programming")

console.log("//using factory Function")

const person = {
    fname:'unkown',
    teach:function(subject){console.log(this.fname+" is teaching "+subject)}
}

let teacher = Object.create(person)
teacher.fname='Christophe'
teacher.teach("MWA")





