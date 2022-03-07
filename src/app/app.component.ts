import { Component, VERSION } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { CustObseravle } from './custObservable';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor() {
    const check$ = new CustObseravle((sub) => {
      sub.next('Gopinath');
    });

    check$.subscribe((subvalue) => {
      console.log('1 st value', subvalue);
    });

    check$.subscribe((subvalues) => {
      console.log('2 nd value', subvalues);
    });

    const test$ = new Observable((subscriber) => {
      console.log('mytest');
      subscriber.next('1');
      subscriber.next('2');
      subscriber.next('3');
      subscriber.error('erroroccured');
      subscriber.next('4');
      setTimeout(() => subscriber.next('5'), 1000);
      // subscriber.complete();
      subscriber.next('6');
    });

    console.log('start');
    test$.subscribe(
      (x) => {
        console.log('1st', x);
      },
      (error) => {
        console.log('error', error);
      }
    );
    console.log('end');
    test$.subscribe((y) => {
      console.log('2nd', y);
    });
  }
}
