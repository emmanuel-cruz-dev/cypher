import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Navbar, Footer } from '../../shared';

@Component({
  selector: 'app-main-layout',
  imports: [RouterModule, Navbar, Footer],
  templateUrl: './main-layout.html',
})
export class MainLayout {}
