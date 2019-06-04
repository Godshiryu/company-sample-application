import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: './region/region.module#CompanySampleApplicationRegionModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#CompanySampleApplicationCountryModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#CompanySampleApplicationLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#CompanySampleApplicationDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#CompanySampleApplicationTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#CompanySampleApplicationEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#CompanySampleApplicationJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#CompanySampleApplicationJobHistoryModule'
      },
      {
        path: 'region',
        loadChildren: './region/region.module#CompanySampleApplicationRegionModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#CompanySampleApplicationCountryModule'
      },
      {
        path: 'city',
        loadChildren: './city/city.module#CompanySampleApplicationCityModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#CompanySampleApplicationLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#CompanySampleApplicationDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#CompanySampleApplicationTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#CompanySampleApplicationEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#CompanySampleApplicationJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#CompanySampleApplicationJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CompanySampleApplicationEntityModule {}
