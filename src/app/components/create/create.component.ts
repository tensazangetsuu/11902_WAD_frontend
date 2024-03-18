import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ServiceBlogService } from '../../service-blog.service';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  blogService = inject(ServiceBlogService);

  // Needed after succesfull creation
  router = inject(Router);

  // Category Object
  cate: any;

  // category ID To inject to
  cID: number = 0;

  // Empty Object of ToDo
  createPost: any = {
    title: '',
    content: '',
    tagID: 0,
  };

  ngOnInit() {
    this.blogService.getAllTags().subscribe((result) => {
      console.log(result);

      this.cate = result;
    });
  }
  create() {
    this.createPost.tagID = this.cID;
    console.log(this.createPost);

    this.blogService.create(this.createPost).subscribe((result) => {
      alert('Item Saved');
      this.router.navigateByUrl('home');
    });
  }
}
