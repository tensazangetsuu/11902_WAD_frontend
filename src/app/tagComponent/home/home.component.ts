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
  styleUrl: './home.component.css'
})
export class HomeTagComponent {
  blogService = inject(ServiceBlogService); // injction of created service
  router = inject(Router);
  items: any[] = []; // preparing the variable for to work
  // ngOnInit() function initiated when page is loaded
  ngOnInit() {
    // line below is to get the requests from api
    this.blogService.getAllTags().subscribe((result) => {
      this.items = result;
    });
  }

  displayedColumns: string[] = [
    'ID',
    'Title',
    'Actions',
  ];

  EditClicked(itemID: number) {
    console.log(itemID, 'From Edit');
    this.router.navigateByUrl('/tag-edit/' + itemID);
  }
  DetailsClicked(itemID: number) {
    console.log(itemID, 'From Details');
    this.router.navigateByUrl('/tag-details/' + itemID);
  }
  DeleteClicked(itemID: number) {
    console.log(itemID, 'From Delete');
    this.router.navigateByUrl('/tag-delete/' + itemID);
  }
}