console.log("////Q4. Begins here using Object.create " )

const Person3 ={

    name:'Habineza',
    age:100,
    greeting:function(){
        console.log("Greetings, my name is "+this.name+" and I am "+this.age+" years old")
    },
    salute:function () {
        console.log("Good morining!, and in case I don't see you, good afternoon, good evening and good night")
    }


}


let Student = Object.create(Person3)
    Student.major='Software Engineering'

    Student.greeting = function () {
        console.log("Hey, my name is "+this.name+' I am styding ' +this.major)
    };

    let Professor = Object.create(Person3)
        Professor.department="Computer Science "

        Professor.greeting = function () {
            console.log("Good day, my name is "+this.name+" and I am in the "+this.department+" department")
        };



        Student.greeting();
        Student.salute();
        Professor.greeting();
        Professor.salute();


