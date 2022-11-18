import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './component/section/section.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { CalculTtcDirective } from './directives/calcul-ttc.directive';
import { RoundTaxAmountPipe } from './pipes/round-tax-amount.pipe';

const COMPONENTS = [SectionComponent,
                    NotFoundComponent]
const DIRECTIVES = [CalculTtcDirective ]
const PIPES = [RoundTaxAmountPipe ]


@NgModule({
  declarations: [
    ...COMPONENTS,...DIRECTIVES, ...PIPES
  ],
  exports:[...COMPONENTS, ...DIRECTIVES, ...PIPES],
  imports: [
    CommonModule
  ],providers:[...PIPES]
})
export class SharedModule { }
