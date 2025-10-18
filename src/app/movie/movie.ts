import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.html',
  styleUrls: ['./movie.css'] // ovde je bilo styleUrl
})
export class Movie {
  protected path = signal<string>('')

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      if (params['path']) {
        this.path.set(params['path'])
      }
    })
  }
}

