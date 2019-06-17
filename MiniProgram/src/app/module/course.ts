export class Course {
  public id: number;
  public name: string;
  public contentId: string;
  teacherId: number;
  constructor(id, name, contendId, teacherId) {
    this.id = id;
    this.name = name;
    this.contentId = contendId;
    this.teacherId = teacherId;
  }
}
