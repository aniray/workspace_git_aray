import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsModule } from './about-us/about-us.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { HomeModule } from './home/home.module';
import { HowWeWorkModule } from './how-we-work/how-we-work.module';
import { WhatWeDoModule } from './what-we-do/what-we-do.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AboutUsModule,
    ContactUsModule,
    HomeModule,
    HowWeWorkModule,
    WhatWeDoModule
  ]
})
export class ModulesModule { }
