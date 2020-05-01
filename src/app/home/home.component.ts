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

  //Get Product item when you select one product.
  onClickProduct(id): void {
    this.apiService
      .sendGetItemRequest(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.selectedProduct = res.body;
      });
  }

  //Get the Products list.
  ngOnInit(): void {
    this.apiService
      .sendGetRequest()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.products = res.body;
      });
  }

  trackByFn(index, item) {
    return index; // or item.id
  }
}
