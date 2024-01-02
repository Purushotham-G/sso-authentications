import React from "react";

class Person extends React.Component{
    constructor(){
        this.name = "purushotham"
    }
    printName(){
        console.log(this.name)
    }
}

const result = new Person();

result.printName()