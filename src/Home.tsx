import React from "react";

export default function Home() {
  // 기본 타입들

  // 추가하기
  let car: string = "bmw";
  let age: number = 30;
  let isAdult: boolean = true;

  //   두개다 같은 의미임.
  let a1: number[] = [1, 2, 3];
  let a2: Array<number> = [1, 2, 3];

  //   두개다 같은 의미임.
  let week1: string[] = ["mon", "tue", "wed"];
  let week2: Array<string> = ["mon", "tue", "wed"];

  ////////////////////////

  //   튜플 (Tuple)
  let b: [string, number];

  // 가능
  b = ["z", 1];
  //  이건불가능
  //   b = [1, "z"];

  //   가능
  b[0].toLowerCase();
  //   에러를 리턴함
  //   b[1].toLowerCase();

  //////////////////

  //   void, never

  //   아무것도 리턴하지 않는 함수
  function sayHello(): void {
    console.log("heelo");
  }

  // 에러를 반환하거나 영원히 끝나지 않는 함수로 사용
  function showError(): never {
    throw new Error();
  }
  function infLoop(): never {
    while (true) {
      // do something..
    }
  }

  /////////////////

  //   enum
  enum OsNum {
    Window = 1,
    Ios = 10,
    Android,
  }

  //   enum
  enum OsString {
    Window = "win",
    Ios = "ios",
    Android = "and",
  }

  let myOs: OsString;

  myOs = OsString.Window;

  console.log(OsString.Ios); // 10
  console.log(OsString["Ios"]); // 10
  //   console.log(OsString["win"]); // Ios
  console.log(myOs); // win

  /////////////////////////
  //   null, undefined
  let n: null = null;
  let u: undefined = undefined;

  return <div>{car}</div>;
}
