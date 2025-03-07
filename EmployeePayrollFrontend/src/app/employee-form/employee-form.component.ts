import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  name = '';
  salary = 0;
  gender = 'Male';
  department = 'HR';
  startDate: string = '';

  constructor(private router: Router) {}

  saveEmployee() {
    let employees = JSON.parse(localStorage.getItem('employees') || '[]');
    employees.push({
      name: this.name,
      salary: this.salary,
      gender: this.gender,
      department: this.department,
      startDate: this.startDate
    });
    localStorage.setItem('employees', JSON.stringify(employees));
    this.router.navigate(['/']);
  }
}
