import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  constructor(private router: Router) { }

  openDrawer = false;

  ngOnInit(): void {
  }

  get currentUrl(): string {
    return this.router.url;
  }

  // Open or close drawer;
  onClick(): void {
    this.openDrawer = !this.openDrawer
  }

  navigateHome(): void {
    this.router.navigateByUrl('home')
  }

}
