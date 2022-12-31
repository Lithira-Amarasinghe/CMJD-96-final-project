import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ItemService} from "../../service/item.service";
import {ItemDto} from "../../dto/ItemDto";
import {HttpClient} from "@angular/common/http";

;

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  saveForm = new FormGroup({
    id : new FormControl(null,[Validators.required]),
    name : new FormControl(null,[Validators.required]),
    mainCategory : new FormControl(null, [Validators.required]),
    subCategory : new FormControl(null, [Validators.required]),
    description : new FormControl(null, [Validators.required]),
    price : new FormControl(null, [Validators.required]),
    qty : new FormControl(null,[Validators.required]),
    imgUrl : new FormControl()
  })

  constructor(private itemService: ItemService) {


  }

  ngOnInit(): void {
    // @ts-ignore
    document.getElementById('side-nav-content').innerHTML = '<router-outlet></router-outlet><app-add-item></app-add-item>'
   }

  saveItem(){
    let item = new ItemDto(
      this.saveForm.get('id')?.value,
      this.saveForm.get('name')?.value,
      this.saveForm.get('mainCategory')?.value,
      this.saveForm.get('subCategory')?.value,
      this.saveForm.get('description')?.value,
      Number(this.saveForm.get('price')?.value),
      Number(this.saveForm.get('qty')?.value),
      this.saveForm.get('imgUrl')?.value
    );
    this.itemService.saveItem(item).subscribe(response=>{
      console.log(response)
    },error => {
      console.log(error)
    })
  }

  @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'Choose File';
  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file: any) => {
        this.fileAttr += file.name + ' - ';
      });
      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          let imgBase64Path = e.target.result;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);
      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = '';
    } else {
      this.fileAttr = 'Choose File';
    }
  }

  fileName = '';

  onFileSelected(event:any) {
    const file:File = event.target.files[0]

    if (file){
      this.fileName = file.name;
      const formData = new FormData();
      this.saveForm.controls['imgUrl'].setValue(this.fileName)
      // formData.append('thumbnail',file);
      // const upload$ = this.http.post('/localhost:8080/api/v1/items', formData);
      // upload$.subscribe();

    }
  }
}
