import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Album, Photo} from "../models";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
  album: Album;
  loaded : boolean;
  photos: Photo[];
  constructor(private route: ActivatedRoute, private albumService : AlbumsService) {
    this.album = {} as Album;
    this.photos = [];
    this.loaded = true;
  }

  getAlbum(){
    this.route.paramMap.subscribe((params) =>{
      const id = Number(params.get('id'));

      this.albumService.getAlbum(id).subscribe((album) =>{
        this.album = album;
      })
    })
  }

  getPhotos(){
    this.loaded = false;

    this.albumService.getPhotos(this.album.id).subscribe((photos) =>{
      this.photos = photos;
    })

    this.loaded = true;
  }

  ngOnInit(): void {
    this.getAlbum()
    this.getPhotos()
  }

}
