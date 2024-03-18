import { Component, inject } from '@angular/core';
import { Post } from '../../BlogTypes';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ServiceBlogService } from '../../service-blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [MatChipsModule, MatCardModule, MatButtonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css',
})
export class DeleteComponent {
  deletePost: Post = {
    id: 0,
    title: '',
    content: '',
    tagID: 0,
    tag: {
      id: 0,
      title: '',
    },
  };
  service = inject(ServiceBlogService);
  activateRote = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit() {
    this.service
      .getByID(this.activateRote.snapshot.params['id'])
      .subscribe((result) => {
        this.deletePost = result;
      });
  }

  onHomeButtonClick() {
    this.router.navigateByUrl('home');
  }
  onDeleteButtonClick(id: number) {
    console.log(this.deletePost.id);
    this.service.delete(this.deletePost.id).subscribe((result) => {
      console.log(result);
    });
    alert('Deleted  item with ID: ' + id);
    this.router.navigateByUrl('home');
  }
}
