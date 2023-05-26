class User {
  constructor(name) {
    this.name = name;
  }

  print() {
    console.log(this.name);
  }
}

class NewUser extends User {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

const a = new User("sun");
const b = new NewUser("jess", 25);

console.log(a);
console.log(b);
