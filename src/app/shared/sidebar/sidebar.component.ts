import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {





  get historial() {
    return this.gifsService.historial;

    console.log(this.gifsService.historial);

  }

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

}

