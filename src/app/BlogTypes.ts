export interface Post {
  id: number;
  title: string;
  description: string;
  tagID: number;
  tag: Tag;
}

export interface Tag {
  id: number;
  name: string;
}
