import React from "react";

export default function Utility() {
  interface User {
    id: number;
    name: string;
    age: number;
    gender: "m" | "f";
  }

  type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'

  const uk: UserKey = "gender";

  //////////////

  let admin: Partial<User> = {
    id: 1,
    name: "Bob",
  };
  //   이것은 밑에와 같다. 없는 프로퍼티는 안됨.
  // interface User {
  //     id?: number;
  //     name?: string;
  //     age?: number;
  //     gender?: "m" | "f";
  //   }

  //   이것은 곡 모두 필요하다는 것.
  let admin2: Required<User> = {
    id: 1,
    name: "Bob",
    age: 3,
    gender: "m",
  };

  //   이것은 수정이 불가능함.
  let admin3: Readonly<User> = {
    id: 1,
    name: "Bob",
    age: 3,
    gender: "m",
  };
  admin3.id = 2; // 에러

  /////////////////////

  //   Record<K, T>
  // K는 key 이고 T는 type이다.

  //   이렇게 사용할것을 리코드로 옮겨보자
  interface Score {
    "1": "A" | "B" | "C" | "D";
    "2": "A" | "B" | "C" | "D";
    "3": "A" | "B" | "C" | "D";
    "4": "A" | "B" | "C" | "D";
  }
  const score: Score = {
    "1": "A",
    "2": "C",
    "3": "D",
    "4": "B",
  };

  //   이렇게 할 수 있다.
  const score2: Record<"1" | "2" | "3" | "4", "A" | "B" | "C" | "D"> = {
    "1": "A",
    "2": "C",
    "3": "D",
    "4": "B",
  };

  //  이렇게 정리할 수 도 있다.
  type Grade3 = "1" | "2" | "3" | "4";
  type Score3 = "A" | "B" | "C" | "D" | "F";
  const score3: Record<Grade3, Score3> = {
    "1": "A",
    "2": "C",
    "3": "D",
    "4": "B",
  };

  interface User2 {
    id: number;
    name: string;
    age: number;
  }
  function isValid(user: User2) {
    const result: Record<keyof User2, boolean> = {
      id: user.id > 0,
      name: user.name !== "",
      age: user.age > 0,
    };
    return result;
  }

  ////////////////////
  // Pick<T,K>
  interface User3 {
    id: number;
    name: string;
    age: number;
    gender: "M" | "W";
  }

  //   User3에서 id와 name만 가져와서 사용 가능하다. **
  const me: Pick<User3, "id" | "name"> = {
    id: 0,
    name: "Bob",
  };

  /////////////////////
  // Omit<T,K>
  // Pick과 반대로 User3에서 id와 name만 제외하고 사용한다.

  const you: Omit<User3, "id" | "name"> = {
    age: 20,
    gender: "M",
  };

  ////////////////////
  // Exclude<T1,T2>
  // T1에서 number를 제외한다는 의미
  type T1 = string | number;
  type T2 = Exclude<T1, number>;

  ////////////////////
  // NonNullable<Type>
  // Null과 undefined를 제외한다.

  type T3 = string | null | undefined | void;
  type T4 = NonNullable<T3>;

  return <div>Utility</div>;
}
