import { LayoutModule } from '@angular/cdk/layout';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MealAdderComponent } from 'src/meal-adder/meal-adder.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from './shared/material/material.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MealAdderComponent,
        NavBarComponent,
        DashboardComponent,
      ],
      imports: [
        AppRoutingModule,
        NoopAnimationsModule,
        FormsModule,
    	  ReactiveFormsModule,
        BrowserModule,
        MaterialModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
