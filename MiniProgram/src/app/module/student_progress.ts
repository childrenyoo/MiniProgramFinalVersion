export class StudentProgress {
  studentName: string;
  progress: number;
  doHomework: number;
  constructor(studentName, progress, doHomework) {
    this.studentName = studentName;
    this.progress = progress;
    this.doHomework = doHomework;
  }
}
