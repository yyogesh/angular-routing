import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {
  employeeId: string = '';
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.employeeId = params['id'];
    })
  }

  onClickBack() {
    if (this.employeeId === '5') {
      this.router.navigate(['/home'])
    } else {
      this.router.navigate(['/employee'])
    }

  }

}
