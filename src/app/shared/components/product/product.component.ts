import { Component, Input } from '@angular/core';
import { Product } from '../../../core/interfaces/type';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [StarRatingComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product!: Product;
}
