import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-fotos',
  templateUrl: './upload-fotos.component.html',
  styleUrls: ['./upload-fotos.component.css']
})
export class UploadFotosComponent implements OnInit {

  constructor(private http: HttpClient) { }

  inputFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      const foto = event.target.files[0];

      const formData = new FormData();
      formData.append('foto', foto);

      this.http.post('http://localhost:8080/fotos', formData)
        .subscribe(resposta => console.log('Upload ok.'));
    }
  }

  ngOnInit(): void {
  }

}
