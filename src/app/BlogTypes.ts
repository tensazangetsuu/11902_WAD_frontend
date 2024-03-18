export interface Post {
  id: number;
  title: string;
  description: string;
  categoryID: number;
  category: Tag;
}

export interface Tag {
  id: number;
  name: string;
}
