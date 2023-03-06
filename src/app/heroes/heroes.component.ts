import { Component } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes'; /// not needed anymore after HeroService is imported
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
  selectedHero?: Hero;
  
  // heroes = HEROES; /// not needed anymore after HeroService is imported
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }
  
  ngOnInit(): void {
    this.getHeroes();
  }
  
  onSelect(hero: Hero): void {
    console.log(hero);
    this.selectedHero = hero;
  }
  
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}