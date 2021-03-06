import {
  Component,
  OnInit,
  Input,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  
  @Input() valorInicial = 10;

  constructor() {
    this.log('constructor');
  }

  ngOnInit() {
    this.log('ngOnInit')
  }

  ngOnChanges() {
    this.log('ngOnChanges')
  }

  ngDoCheck() {
    this.log('ngDoCheck')
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit')
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked')
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked')
  }

  ngOnDestroy() {
    this.log('ngOnDestroy')
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit')
  }

  private log(hook: string) {
    console.log(hook);
  }
}
