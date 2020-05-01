import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpResponse } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private destroy$: ReplaySubject<boolean> = new ReplaySubject(1);
  selectedProduct: any;
  products = [];
  constructor(private apiService: ApiService) {}

  onClickProduct(id): void {
    this.apiService.getItem(id).subscribe((data: any[]) => {
      this.selectedProduct = data;
      console.log(this.selectedProduct.imageUrl);
    });
  }
  ngOnInit(): void {
    this.apiService.get().subscribe((data: any[]) => {
      this.products = data;
    });
  }
}
