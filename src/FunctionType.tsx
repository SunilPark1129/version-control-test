import React from "react";

export default function FunctionType() {
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }
  function order(num: number): boolean {
    return num < 30;
  }
  //   ? optional 매개변수는 뒤에 둬야된다.
  function hello(age: number | null, name?: string): string {
    return `Hello, ${name || "world"}.`;
  }
  const result = hello(null, "sun");

  function adds(...nums: number[]) {
    return nums.reduce((a, b) => a + b);
  }
  adds(1, 2, 3);

  /////////////////

  interface User {
    name: string;
  }

  const Sam: User = { name: "Sam" };

  //   this가 먼저 와야된다.
  function showName(this: User, age: number, gender: "m" | "f") {
    console.log(this.name);
  }

  const a = showName.bind(Sam);
  a(30, "m");

  //////////////

  interface User2 {
    name: string;
    age: number;
  }

  //   인터페이스와 같이 자주 사용된다.
  //   오버로드.
  function join(name: string, age: string): string;
  function join(name: string, age: number): User2;

  function join(name: string, age: number | string): User2 | string {
    if (typeof age === "number") {
      return { name, age };
    } else {
      return "나이는 숫자로 입력해주세요.";
    }
  }

  const sam: User2 = join("Sam", 30);
  const jane: string = join("Jane", "30");

  return <div>FunctionType</div>;
}
