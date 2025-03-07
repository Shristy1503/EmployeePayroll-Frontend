import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],  // ✅ Import CommonModule to use *ngFor
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees = JSON.parse(localStorage.getItem('employees') || '[]');

  constructor(private router: Router) {}

  addEmployee() {
    this.router.navigate(['/add']);
  }

  deleteEmployee(index: number) {
    this.employees.splice(index, 1);
    localStorage.setItem('employees', JSON.stringify(this.employees));
  }

  editEmployee(index: number) {
    sessionStorage.setItem('editIndex', index.toString());
    sessionStorage.setItem('editEmployee', JSON.stringify(this.employees[index]));
    this.router.navigate(['/add']);
  }
}
