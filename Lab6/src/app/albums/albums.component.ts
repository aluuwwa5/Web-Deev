import {Component, OnInit} from '@angular/core';
import {Album} from "../models";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  albums : Album[];
  loaded : boolean;

  constructor(private albumService : AlbumsService) {
    this.albums = [];
    this.loaded = true;
  }

  getAlbums(){
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    })
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  removeAlbum(id: number){
    this.albums = this.albums.filter((x) => x.id !== id);
  }
}
