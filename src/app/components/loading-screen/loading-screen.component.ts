import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingScreenService } from '../../services/loading-screen.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent implements OnInit, OnDestroy {

  loading = false;
  loadingSuscription: Subscription;

  constructor(private loadingScreenService: LoadingScreenService) {

   }

  ngOnInit() {

      this.loadingSuscription = this.loadingScreenService.loadingStatus
        .subscribe((value: boolean) => {
          this.loading = value;
        });
  }

  ngOnDestroy() {
     this.loadingSuscription.unsubscribe();
  }

}
