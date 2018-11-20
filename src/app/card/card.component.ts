import { Component, OnInit, Input } from '@angular/core';
import { cardD } from '../shared/schema';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardDetails: cardD;
  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.router.snapshot.params['dat'])
  }

}
