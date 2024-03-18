export interface Post {
  id: number;
  title: string;
  content: string;
  tagID: number;
  tag: Tag;
}

export interface Tag {
  id: number;
  title: string;
}
