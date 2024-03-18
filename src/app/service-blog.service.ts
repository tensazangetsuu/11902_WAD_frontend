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
    return this.httpClient.get<Post[]>('http://localhost:5169/api/Posts');
  }

  getByID(id: number) {
    return this.httpClient.get<Post>('http://localhost:5169/api/Posts/' + id);
  }
  edit(item: Post) {
    return this.httpClient.put('http://localhost:5169/api/Posts', item);
  }
  delete(id: number) {
    return this.httpClient.delete('http://localhost:5169/api/Posts/' + id);
  }
  create(item: Post) {
    return this.httpClient.post<Post>('http://localhost:5169/api/Posts', item);
  }
  getAllTags() {
    return this.httpClient.get<Tag[]>('http://localhost:5169/api/Tags');
  }
}
