import { Component, OnInit, inject } from '@angular/core';
import { ServiceBlogService } from '../../service-blog.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../BlogTypes';

function findIndexByID(jsonArray: any[], indexToFind: number): number {
  return jsonArray.findIndex((item) => item.id === indexToFind);
}

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent implements OnInit {
  todoService = inject(ServiceBlogService); // Service to get and send data from and to the API
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  editPost: Post = {
    id: 0,
    title: '',
    content: '',
    tagID: 0,
    tag: {
      id: 0,
      title: '',
    },
  };
  tagObject: any; // Category Object for listing
  selected: any; // if any selected by default
  cID: number = 0; // category ID To inject to
  ngOnInit() {
    this.todoService
      .getByID(this.activatedRoute.snapshot.params['id'])
      .subscribe((result) => {
        this.editPost = result;
        this.selected = this.editPost.tagID;
      });
    this.todoService.getAllTags().subscribe((result) => {
      this.tagObject = result;
    });
  }

  toHome() {
    this.router.navigateByUrl('home');
  }

  edit() {
    this.editPost.tagID = this.cID;
    this.editPost.tag = this.tagObject[findIndexByID(this.tagObject, this.cID)];
    this.todoService.edit(this.editPost).subscribe((res) => {
      alert('Changes has been updated');
      this.router.navigateByUrl('home');
    });
  }
}
