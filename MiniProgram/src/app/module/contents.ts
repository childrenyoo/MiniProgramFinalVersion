export class Chapter {
  public contentId: string;
  public id: number;
  public text: string;
  chatBoxId: string;
  constructor(contentId, id, text, chatBoxId) {
    this.contentId = contentId;
    this.id = id;
    this.text = text;
    this.chatBoxId = chatBoxId;
  }
}
