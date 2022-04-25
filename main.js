const obj = {
  name: 'ekko',
  age: 12
}

const num = 13;

export {
  obj
}

class Situation {
  String where;
  String doing;
  String tool;

  constructor(where, doing, tool) {
    this.where = where;
    this.doing = doing;
    this.tool = tool;
  }
}

class Person extends Situation {
  int name;
  int age;
  constructor(name, age, where, doing, tool) {
    this.super(where, doing, tool);
    this.name = name;
    this.age = age;
  }
  public void printDoing() {
    输出句子
  }
}

