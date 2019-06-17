export class Student {
  id: string;
  name: string;
  email: string;
  sex: number;
  openId: string;
  constructor(id, name, email, sex, openId) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.openId = openId;
    this.sex = sex;
  }
}
