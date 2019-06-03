import { NgModule } from '@angular/core';

import { CompanySampleApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [CompanySampleApplicationSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [CompanySampleApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class CompanySampleApplicationSharedCommonModule {}
