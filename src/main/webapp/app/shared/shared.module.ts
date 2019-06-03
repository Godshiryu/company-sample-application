import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  CompanySampleApplicationSharedLibsModule,
  CompanySampleApplicationSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [CompanySampleApplicationSharedLibsModule, CompanySampleApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [CompanySampleApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CompanySampleApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: CompanySampleApplicationSharedModule
    };
  }
}
