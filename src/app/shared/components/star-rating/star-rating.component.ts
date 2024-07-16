import { Component, Input } from '@angular/core';
import { faStar as SolidFaStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as RegularFaStar } from '@fortawesome/free-regular-svg-icons';

import {
  FontAwesomeModule,
  IconDefinition
} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingComponent {
  @Input() starRating: number = 0;
  @Input() readonly: boolean = true;
  starRatingValues: number[] = [5, 4, 3, 2, 1];
  faStar: IconDefinition = SolidFaStar;

  setRating(i: number) {
    //service to place star
    // this.ratingService.saveRatingAsUser(i);
    this.starRating = i;
  }
}
