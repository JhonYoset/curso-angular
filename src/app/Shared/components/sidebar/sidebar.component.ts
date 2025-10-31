import { Component, OnInit } from '@angular/core';
import { TracksService } from '@modules/tracks/services/tracks.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  mainMenu: {
    defaultOptions: Array<any>,
    accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }

  customOptions: Array<any> = [];
  constructor(private tracksService: TracksService) {

  }
  ngOnInit() {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'auth']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        //query: { hola: 'mundo' }
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ]

    const TracksElectronic$ = this.tracksService.dataTracksElectronics$.subscribe({
      next: (data)=>{
        data.forEach(track => {
          this.customOptions.push({
            name: track.name,
            router:['/','tracks', track._id]
          })

        });
      }
    })
  }
}
