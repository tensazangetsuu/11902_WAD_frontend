import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Post, Tag } from './BlogTypes';

@Injectable({
  providedIn: 'root',
})
export class ServiceBlogService {
  httpClient = inject(HttpClient);
  constructor() {}

  getAllBlogItems() {
    return this.httpClient.get<Post[]>('https://localhost:7224/api/Posts');
  }

  getByID(id: number) {
    return this.httpClient.get<Post>('https://localhost:7224/api/Posts/' + id);
  }
  edit(item: Post) {
    return this.httpClient.put('https://localhost:7224/api/Posts', item);
  }
  delete(id: number) {
    return this.httpClient.delete('https://localhost:7224/api/Posts/' + id);
  }
  create(item: Post) {
    return this.httpClient.post<Post>('https://localhost:7224/api/Posts', item);
  }
  getAllTags() {
    return this.httpClient.get<Tag[]>('https://localhost:7224/api/Tags');
  }
}
