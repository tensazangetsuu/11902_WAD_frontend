import { Component, inject } from '@angular/core';
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
  styleUrl: './delete.component.css'
})
export class DeleteTagComponent {
  deleteTag: any = {
      id: 0,
      title: '',
  };
  service = inject(ServiceBlogService);
  activateRote = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit() {
    this.service
      .getTagByID(this.activateRote.snapshot.params['id'])
      .subscribe((result) => {
        this.deleteTag = result;
      });
  }

  onHomeButtonClick() {
    this.router.navigateByUrl('home');
  }
  onDeleteButtonClick(id: number) {
    console.log(this.deleteTag.id);
    this.service.deleteTag(this.deleteTag.id).subscribe((result) => {
      console.log(result);
    });
    alert('Deleted  item with ID: ' + id);
    this.router.navigateByUrl('home');
  }

}
