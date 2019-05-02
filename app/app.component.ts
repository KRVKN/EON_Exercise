import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  options: string[] = [
    'Círculo de crédito',
    'Capital Humano S.A de C.V',
    'Circulo contigo',
    'D Staffing Personal S.A de C.V',
    'DPM Capital Humano',
    'Diantres',
    'Erase una vez',
    'Empoderamiento Humano',
    'Esta vez S.A de C.V'
  ]

myControl = new FormControl();
filteredOptions: Observable<string[]>;

ngOnInit(){
  this.filteredOptions = this.myControl.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value))
  );
}

private _filter(value: string): string[]{
  const filterValue = value.toLowerCase();
  return this.options.filter(option =>
    option.toLowerCase().includes(filterValue)
    );
}

  displayFn(subject){
    return subject ? subject.name : undefined;
  }

}