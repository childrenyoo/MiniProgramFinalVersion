export class Message {
  uuid: number;
  text: string;
  imageUrl: string;
  type: string
  constructor(uuid, text, imageUrl, type) {
    this.uuid = uuid;
    this.text = text;
    this.imageUrl = imageUrl;
    this.type = type;
  }
}
