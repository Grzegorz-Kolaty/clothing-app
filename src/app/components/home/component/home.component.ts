import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../../../shared/components/product/product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
