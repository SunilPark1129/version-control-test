import React from "react";

export default function Literal() {
  // 정해진 타입을 가진 것을 문자열 리터럴 타입이라고 한다.
  const userName1 = "Bob";
  let userName2: string | number = "Tom";

  userName2 = 3;

  type Job = "police" | "developer" | "teacher";

  interface User {
    name: string;
    job: Job;
  }

  const user: User = {
    name: "Bob",
    job: "developer",
  };

  interface HighSchoolStudent {
    // 유니온 타입.
    name: string | number;
    grade: 1 | 2 | 3;
  }

  ////////////////////////////////

  interface Car {
    name: "car";
    color: string;
    start(): void;
  }

  interface Mobile {
    name: "mobile";
    color: string;
    call(): void;
  }

  function getGift(gift: Car | Mobile) {
    console.log(gift.color);
    //   식별가능한 유니온 타입.
    if (gift.name === "car") {
      gift.start();
    } else {
      gift.call();
    }
  }

  //////////////////////////

  //   교차 타입
  interface Cars {
    name: string;
    start(): void;
  }

  interface Toy {
    name: string;
    color: string;
    price: number;
  }

  const toyCar: Toy & Cars = {
    name: "타요",
    start() {},
    color: "red",
    price: 1000,
  };

  return <div>Literal</div>;
}
