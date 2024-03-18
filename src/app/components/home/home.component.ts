import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { ServiceBlogService } from '../../service-blog.service';
import { Post } from '../../BlogTypes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  blogService = inject(ServiceBlogService); // injction of created service
  router = inject(Router);
  items: Post[] = []; // preparing the variable for to work
  // ngOnInit() function initiated when page is loaded
  ngOnInit() {
    // line below is to get the requests from api
    this.blogService.getAllBlogItems().subscribe((result) => {
      this.items = result;
    });
  }

  displayedColumns: string[] = [
    'ID',
    'Title',
    'Content',
    'Tag Name',
    'Actions',
  ];

  EditClicked(itemID: number) {
    console.log(itemID, 'From Edit');
    this.router.navigateByUrl('/edit/' + itemID);
  }
  DetailsClicked(itemID: number) {
    console.log(itemID, 'From Details');
    this.router.navigateByUrl('/details/' + itemID);
  }
  DeleteClicked(itemID: number) {
    console.log(itemID, 'From Delete');
    this.router.navigateByUrl('/delete/' + itemID);
  }
}
