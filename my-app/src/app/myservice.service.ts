import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  persons = [
    { name: 'John', surname: 'Doe', isOnline: true, color: 'blue' },
    { name: 'Alice', surname: 'Smith', isOnline: false, color: 'red' },
    { name: 'Bob', surname: 'Johnson', isOnline: true, color: 'green' },
    { name: 'Emily', surname: 'Brown', isOnline: false, color: 'orange' },
    { name: 'David', surname: 'Wilson', isOnline: true, color: 'purple' },
  ];

  constructor() {}
}
