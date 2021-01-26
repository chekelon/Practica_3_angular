import { Component, OnInit,Input} from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  coche: {marca: string, modelo: string};
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private rutaActiva:ActivatedRoute 
  ) {}

  ngOnInit(): void {
    this.getHero();
    this.coche={
      marca:'Nissan',
      modelo:'2021'
    }
  }
  
  goBack(): void {
    this.location.back();
  }
  
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

}
