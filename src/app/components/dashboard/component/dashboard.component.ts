import { Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { StarRatingComponent } from '../../../shared/components/star-rating/star-rating.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FooterComponent, StarRatingComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {}
