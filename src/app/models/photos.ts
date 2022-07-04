export class Photos {
  id?: number;
  postDate?: string;
  url?: string;
  description?: string;
  allowComments?: boolean;
  likes?: number;
  comments?: number;
  userId?: number;


  constructor(photos:any) {
    this.id = photos.id;
    this.postDate = photos.postDate;
    this.url = photos.url;
    this.description = photos.description;
    this.allowComments = photos.allowComments;
    this.likes = photos.likes;
    this.comments = photos.comments;
    this.userId = photos.userId;
  }
}
