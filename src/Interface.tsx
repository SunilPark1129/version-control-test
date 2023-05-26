import React from "react";

export default function Interface() {
  let example: object;

  example = {
    name: "xx",
    age: 30,
  };

  console.log(example.name); // 에러가 나오는 이유는 interface를 설정안해서

  type Score = "A" | "B" | "C" | "F"; // type을 만들 수 있음.

  interface User {
    name: string;
    age: number;
    gender?: string; // 있어도 되고 없어도 되는 프로퍼티
    readonly birthYear: number; // 변경이 불가능
    [grade: number]: Score; // 있어도 되고 없어도 되지만 여러개를 추가할때 사용
  }

  let user: User = {
    name: "xx",
    age: 30,
    birthYear: 2000,
    1: "A",
    2: "B",
  };

  console.log(user.name);
  user.gender = "male";
  user.birthYear = 1990; // readonly 이기 때문에 에러가 나옴.

  ////////////////////////////

  //   함수

  interface Add {
    (num1: number, num2: number): number;
  }

  const add: Add = function (x, y) {
    return x + y;
  };

  const added = add(10, 20);

  console.log(added);

  interface IsAdult {
    (age: number): boolean;
  }

  const a: IsAdult = (age) => {
    return age > 19;
  };

  console.log(a(33));

  ///////////////////////////////

  //   class

  //   implements 작용하기

  //   class에서 정의할것을 선언하기
  interface Car {
    color: string;
    wheels: number;
    start(): void;
  }

  //   implements로 Bmw에 Car 속성을 넣기
  class Bmw implements Car {
    color;
    wheels = 4;
    constructor(c: string) {
      this.color = c;
    }

    start() {
      console.log("go..");
    }
  }

  const b = new Bmw("blue");
  console.log(b);

  //   extend
  interface Benz extends Car {
    door: number;
    stop(): void;
  }

  const benz: Benz = {
    door: 5,
    stop() {
      console.log("stop");
    },
    color: "black",
    wheels: 4,
    start() {},
  };

  interface Kia extends Car {
    price: number;
  }

  class Kia implements Car {
    constructor(price: number) {
      //   super(color, door, wheels, start);
      this.price = price;
    }
  }

  //   const myCar = new Kia()

  return <div>Interface</div>;
}
