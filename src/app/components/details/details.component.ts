import { Component, inject } from '@angular/core';
import { Post } from '../../BlogTypes';
import { ServiceBlogService } from '../../service-blog.service';
import { ActivatedRoute } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatChipsModule, MatCardModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  detailsPost: Post = {
    id: 0,
    title: '',
    content: '',
    tagID: 0,
    tag: {
      id: 0,
      title: '',
    },
  };
  // This is a Service inject to get item By ID
  service = inject(ServiceBlogService);
  // This is a Routing attribute collecting inject for to get the ID from URL
  activatedRoute = inject(ActivatedRoute);
  ngOnInit() {
    // an ID coming from URL. We have replaced it with ID in GetBy ID
    // this.activatedRoute.snapshot.params["id"]

    this.service
      .getByID(this.activatedRoute.snapshot.params['id'])
      .subscribe((resultedItem) => {
        this.detailsPost = resultedItem;
      });
  }
}
