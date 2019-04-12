console.log("////Q4. Begins here using functional Constructor" )

function Person4 (name,age) {
    this.name = name,
    this.age =age
}

Person4.prototype.greeting = function(){
    console.log("Greetings, my name is "+this.name+" and I am "+this.age+" years old")
}

Person4.prototype.salute = function () {
    console.log("Good morining!, and in case I don't see you, good afternoon, good evening and good night")
}

let Student2 = new Person4("Li Zhang",100)

    Student2.major = "Chemical Engineering"
    Student2.greeting =function () {
        console.log("Hey, my name is "+this.name+' I am styding ' +this.major)
    };

let Professor2 = new Person4("Eric Sam",44)

    Professor2.department = "Engineering"
    Professor2.greeting = function () {
        console.log("Good day, my name is "+this.name+" and I am in the "+this.department+" department")
    };


Student2.greeting();
Student2.salute();
Professor2.greeting();
Professor2.salute();
