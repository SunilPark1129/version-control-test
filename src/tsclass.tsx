import React from "react";

export default function Tsclass() {
  //   interface Car {
  //     color: string;
  //   }

  // public
  // 퍼블릭은 자식클래스, 인스턴스가 접근가능. 기본값이 퍼블릭임.

  // private
  // 자식이 사용할 수 없음. 해당 클래스 내부에서만 접근 가능.

  // protected
  // 클래스 인스턴스에서는 사용불가능. 해당 클래스 내부에서만 접근 가능.

  class Car {
    constructor(public color: string) {
      this.color = color;
    }
    start() {
      console.log("start");
    }
  }

  const bmw = new Car("red");

  //   static
  // 정적 메소드.
  class Person {
    static greeting = "hello";
    constructor(public age: number) {
      this.age = age;
    }
    static start() {
      console.log(Person.greeting + "start");
    }
  }

  //   abstract
  abstract class Toy {
    color: string;
    constructor(color: string) {
      this.color = color;
    }
    start() {
      console.log(this.color);
    }
    // 자식에서 무조건 사용해야됨.
    abstract doSomething(): void;
  }

  //   추상화는 이렇게 바로 가져올 수 없다.
  const story = new Toy("red");

  class Bmw extends Toy {
    constructor(color: string) {
      super(color);
    }
    // 자식에서 무조건 사용해야됨.
    doSomething() {
      console.log(this.color);
    }
  }

  const newThing = new Bmw("black");
  newThing.doSomething();

  return <div>T</div>;
}
