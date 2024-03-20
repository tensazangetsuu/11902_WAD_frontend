import { Component, OnInit, inject } from '@angular/core';
import { ServiceBlogService } from '../../service-blog.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../BlogTypes';

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
  styleUrl: './edit.component.css'
})
export class EditTagComponent implements OnInit {
  blogService = inject(ServiceBlogService); // Service to get and send data from and to the API
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  editTag: any = {
      id: 0,
      title: ''
  };
  ngOnInit() {
    this.blogService
      .getTagByID(this.activatedRoute.snapshot.params['id'])
      .subscribe((result) => {
        this.editTag = result;
      });
  }

  toHome() {
    this.router.navigateByUrl('home');
  }

  edit() {
    this.blogService.editTag(this.editTag).subscribe((res) => {
      alert('Changes has been updated');
      this.router.navigateByUrl('home');
    });
  }}
