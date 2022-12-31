import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ItemDto} from "../../dto/ItemDto";
import {ItemService} from "../../service/item.service";


@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  updateForm = new FormGroup({
    id : new FormControl(null, [Validators.required]),
    name : new FormControl(null, [Validators.required]),
    description : new FormControl(null, [Validators.required]),
    mainCategory : new FormControl(null, [Validators.required]),
    subCategory : new FormControl(null, [Validators.required]),
    price : new FormControl(null, [Validators.required]),
    qty : new FormControl(null, [Validators.required])
  })

  updateItem(){
    let item = new ItemDto(
      this.updateForm.get('id')?.value,
      this.updateForm.get('name')?.value,
      this.updateForm.get('description')?.value,
      this.updateForm.get('mainCategory')?.value,
      this.updateForm.get('subCategory')?.value,
      this.updateForm.get('price')?.value,
      this.updateForm.get('qty')?.value,
      this.updateForm.get('imgUrl')?.value
    )

    this.itemService.updateItem(item).subscribe(response=>{
      console.log(response)
    }, error=>{
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
}
