import React from "react";

export default function TestInterface() {
  interface Person {
    name: string;
    age: number;
    print(): void;
  }

  class Person {
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    print() {
      console.log(this.name + " is ", this.age);
    }
  }

  const me = new Person("sunil", 30);

  me.print();

  interface Animal extends Person {
    isDog: boolean;
    gender: string;
  }

  class Animal extends Person {
    constructor(name: string, age: number, isDog: boolean, gender: string) {
      super(name, age);
      this.isDog = isDog;
      this.gender = gender;
    }
    print() {
      console.log(
        this.name +
          " is " +
          this.age +
          ` ${this.isDog ? "and a dog." : "and not a dog."} `
      );
    }
  }
  const you = new Animal("bory", 12, true, "male");

  you.print();

  return <div>testInterface</div>;
}
