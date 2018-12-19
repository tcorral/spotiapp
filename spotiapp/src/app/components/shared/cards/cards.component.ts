import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: []
})
export class CardsComponent implements OnInit {

  @Input()
  items: any[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

}

