import { Component } from '@angular/core'
import { AdminDataAccessService } from '@stack-v171/admin/data-access'

@Component({
  template: `
    <div class="container my-3 my-md-5">
      <div class="card">
        <div class="card-header">
          Dashboard
        </div>
        <div class="card-footer">Server uptime: {{ uptime$ | async }}</div>
      </div>
    </div>
  `,
})
export class AdminFeatureDashboardComponent {
  public uptime$ = this.data.uptimeWatch()
  constructor(private readonly data: AdminDataAccessService) {}
}
