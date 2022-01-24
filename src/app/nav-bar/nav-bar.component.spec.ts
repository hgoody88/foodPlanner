import { LayoutModule } from '@angular/cdk/layout';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';

import { NavBarComponent } from './nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MaterialModule } from '../shared/material/material.module';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MealAdderComponent } from 'src/meal-adder/meal-adder.component';
import { AppComponent } from '../app.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MealAdderComponent,
        NavBarComponent,
        DashboardComponent,
      ],
      imports: [
        AppRoutingModule,
        NoopAnimationsModule,
        MaterialModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should have title as "Food Planner"', () => {
    expect(component.title).toEqual("Food Planner")
  })

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('h1')?.textContent).toContain('Food Planner')
  })
});
