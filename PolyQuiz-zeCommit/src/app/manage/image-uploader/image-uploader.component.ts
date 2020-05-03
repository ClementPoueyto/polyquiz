import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgxImageCompressService} from 'ngx-image-compress';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.css']
})
export class ImageUploaderComponent implements OnInit {

  emptyLoaderUrl = './../../../assets/placeholder.png';
  localCompressedURl: any;
  isImageSaved: boolean;
  @Output() cardImageBase64Event = new EventEmitter<string>();
  @Input() imageLoad: string;

  constructor(private imageCompress: NgxImageCompressService) {
  }

  ngOnInit() {
  }

  compressFile() {
    this.imageCompress.uploadFile().then(({image, orientation}) => {
      const img = new Image();
      img.src = image;
      console.warn('Size in bytes was:', this.imageCompress.byteCount(img.src));
      let width: number;
      let height: number;
      img.addEventListener('load', () => {
        width = img.width;
        height = img.height;
        const ratioW = ((500 / width) !== Infinity) ? (500 / width) * 100 : 100;
        const ratioH = ((300 / height) !== Infinity) ? (300 / height) * 100 : 100;
        const ratio = Math.min(ratioH, ratioW);
        this.imageCompress.compressFile(img.src, orientation, ratio, 60).then(
          result => {
            this.localCompressedURl = result;
            this.cardImageBase64Event.emit(result);
            console.warn('Size in bytes is now:', this.imageCompress.byteCount(result));
          }
        );
        this.isImageSaved = true;
      });
    });
  }

}
