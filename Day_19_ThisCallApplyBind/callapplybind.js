// let person = {
//     name : 'Raju',
//     car : 'Altzo',
//     model : 'Altz123',
//     data : function(name,greeting){
//         console.log(`Hi ${name},${greeting} Welome to Ola sevices 
//             Your ride has been started, you're driver details are..
//             ${this.name}, ${this.car} with a model ${this.model}`);
        

//     }
// }
// person.data('Anu','GoodAfternoon')


let person1 = {
    name : 'Ramu',
    car : 'Punch',
    model : 'Punch23456'
}


let person2 = {
    name : 'Govind',
    car : 'Altzo',
    model : 'Altz9023'
}

let person3 = {
    name : 'Kiran',
    car : 'Verna',
    model : 'Verna890'
}

let person4 = {
    name : 'Rahul',
    car : 'Altzo',
    model : 'Altz123'
}

let person5 = {
    name : 'Rajesh',
    car : 'HondaCity',
    model : 'HondaCity1234'
}


console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person5);


function details(name,greeting){
   console.log(`Hi ${name},${greeting} Welcome to Ola sevices 
            Your ride has been started, you're driver details are..
            ${this.name}, ${this.car} with a carNo ${this.model}`);
    



}
details.call(person1,'Anu', 'Goodevening');
details.call(person1,'Deepika','Goodevening');


details.apply(person2,['Geethika','Good Afternoon']) //array **



//bind- function return

let p5 = details.bind(person5,'Raghu','GoodMorning');
console.log(p5());



