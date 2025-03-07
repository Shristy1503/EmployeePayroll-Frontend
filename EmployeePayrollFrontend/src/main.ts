import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { EmployeeListComponent } from './app/employee-list/employee-list.component';
import { EmployeeFormComponent } from './app/employee-form/employee-form.component';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: EmployeeListComponent },
      { path: 'add', component: EmployeeFormComponent },
    ]),
    importProvidersFrom(FormsModule),
  ],
}).catch((err) => console.error(err));
