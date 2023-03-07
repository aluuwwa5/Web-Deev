import {Component, OnInit} from '@angular/core';
import {Album} from "../models";
import {AlbumsService} from "../albums.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit{
  album : Album;
  loaded : boolean;

  constructor(private albumService : AlbumsService, private route : ActivatedRoute) {
    this.album = {} as Album;
    this.loaded = true;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) =>{
      const id = Number(params.get('id'));

      this.loaded = false;

      this.albumService.getAlbum(id).subscribe((album) =>{
        this.album = album;
        this.loaded = true;
      })
    })
  }
}
