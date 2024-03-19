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
  styleUrl: './create.component.css'
})

export class CreateTagComponent {
  blogService = inject(ServiceBlogService);

  // Needed after succesfull creation
  router = inject(Router);

  // Empty Object of ToDo
  createTag: any = {
    title: '',
  };

  create() {
    this.blogService.createTag(this.createTag).subscribe((result) => {
      alert('Tag Saved');
      this.router.navigateByUrl('home');
    });
  }

}
