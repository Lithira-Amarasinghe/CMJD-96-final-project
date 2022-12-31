import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../service/item-service/item.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ItemDto} from "../../dto/ItemDto";
import {MatDialog} from "@angular/material/dialog";
import {DeleteConfimationDialogComponent} from './delete-confimation-dialog/delete-confimation-dialog.component';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-manage-items',
  templateUrl: './manage-items.component.html',
  styleUrls: ['./manage-items.component.css']
})
export class ManageItemsComponent implements OnInit {

  itemData: any[] = []

  toggleBtnValue = ''
  toggleBtnText = ''
  imageFile: any;
  imageName: string = ''
  imageUrl: string = ''

  constructor(public dialog: MatDialog,
              private itemService: ItemService,
              private formBuilder: FormBuilder,
              private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit() {
    this.searchItemsBySearchText('')
    this.changeValueToAddOrUpdate('Add')
  }

  onFileSelected(event: any) {
    console.log(event)
    if (event.target.files[0]) {
      console.log(event.target.files[0])
      this.imageFile = event.target.files[0]
      this.imageName = this.imageFile.name;
    }
  }

  createUrlForBase64(base64ImageFile:any){
    return this.sanitizer.bypassSecurityTrustUrl(
      window.URL.createObjectURL(base64ImageFile)
    )
  }


  //
  // if (file) {
  //   this.fileName = file.name;
  //   const formData = new FormData();
  //
  //   // @ts-ignore
  //   this.saveUpdateItemForm.controls['imgUrl'].setValue(fileName)
  //   // formData.append('thumbnail',file);
  //   // const upload$ = this.http.post('/localhost:8080/api/v1/items', formData);
  //   // upload$.subscribe();
  // }

  searchItemByIdForm = new FormGroup({
    id: new FormControl(null, [Validators.required])
  })

  searchItemById() {
    this.itemService.searchItem(this.searchItemByIdForm.get('id')?.value).subscribe(response => {
      console.log(response)
      if(response.object == null){
        this.saveUpdateItemForm.patchValue({
          id: null,
          name: null,
          description: null,
          mainCategory: null,
          subCategory: null,
          price: null,
          qty: null
        })
        alert(this.searchItemByIdForm.get('id')?.value+" can't find ")
      }else {
        this.saveUpdateItemForm.patchValue({
          id: response.object.id,
          name: response.object.name,
          description: response.object.description,
          mainCategory: response.object.mainCategory,
          subCategory: response.object.subCategory,
          price: response.object.price,
          qty: response.object.qty,
          imageFile: response.object.imageFiles[0]
        })
      }
    }, error => {
      alert('No item found')
      this.saveUpdateItemForm.patchValue({
        id: null,
        name: null,
        description: null,
        mainCategory: null,
        subCategory: null,
        price: null,
        qty: null,
      })
    })
  }

  changeValueToAddOrUpdate(value: string) {
    if (value == 'updateItem') {
      this.toggleBtnValue = 'update'
      this.toggleBtnText = 'Update a item'
    } else {
      this.toggleBtnValue = 'save'
      this.toggleBtnText = 'Add a new item'
    }
  }

  saveUpdateItemForm = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      mainCategory: new FormControl(null, [Validators.required]),
      subCategory: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      qty: new FormControl(null, [Validators.required]),
      imageFile: new FormControl(null)
    }
  )

  addOrUpdateItem() {
    if (this.toggleBtnValue === 'updateItem') {
      this.updateItem()
    } else {
      this.addItem()
    }
  }

  addItem() {
    const itemJSON = {
      id: this.saveUpdateItemForm.get('id')?.value,
      name: this.saveUpdateItemForm.get('name')?.value,
      description: this.saveUpdateItemForm.get('description')?.value,
      mainCategory: this.saveUpdateItemForm.get('mainCategory')?.value,
      subCategory: this.saveUpdateItemForm.get('subCategory')?.value,
      price: this.saveUpdateItemForm.get('price')?.value,
      qty: this.saveUpdateItemForm.get('qty')?.value
      // imageFile: null
    }

    this.itemService.addItem(this.prepareFormData(itemJSON)).subscribe(response => {
      console.log(response)
      this.ngOnInit();
    }, error => {
      console.log(error)
    })
  }




  updateItem() {
    const itemJSON = {
      id: this.saveUpdateItemForm.get('id')?.value,
      name: this.saveUpdateItemForm.get('name')?.value,
      description: this.saveUpdateItemForm.get('description')?.value,
      mainCategory: this.saveUpdateItemForm.get('mainCategory')?.value,
      subCategory: this.saveUpdateItemForm.get('subCategory')?.value,
      price: this.saveUpdateItemForm.get('price')?.value,
      qty: this.saveUpdateItemForm.get('qty')?.value,
      // imageFile: null
    }

    this.itemService.updateItem(this.prepareFormData(JSON)).subscribe(response => {
      console.log(response)
      this.ngOnInit();
    }, error => {
      console.log(error)
    })
  }

  prepareFormData(itemJSON: any): FormData {
    const formData = new FormData();
    formData.append("item", new Blob([JSON.stringify(itemJSON)], {type: 'application/json'}));
    formData.append("imageFile", this.imageFile)
    return formData
  }

  searchItemsBySearchTextForm = new FormGroup({
    searchText: new FormControl('')
  })

  searchItemsBySearchText(searchText: string) {
    this.itemService.getAllItemsBySearchText(1, 1, this.searchItemsBySearchTextForm.get('searchText')?.value).subscribe(response => {
      console.log(response)
      console.log(response.object.dataCount)
      console.log(response.object)
      this.itemData = response.object.list
    }, error => {
      console.log(error)
    })
  }

  deleteItem(id: string) {
    this.itemService.deleteItem(id).subscribe(response => {
      console.log(response)
      this.ngOnInit()
    }, error => {
      console.log(error)
    })
  }

  openDialog(item: ItemDto) {
    let dialogRef = this.dialog.open(DeleteConfimationDialogComponent, {
      height: '200px',
      width: '350px',
      data: item
    })

    dialogRef.afterClosed().subscribe(response => {
      if (response == true) {
        this.deleteItem(item.id)
      } else {
        console.log(response)
      }
    })
  }

  clearFormFields() {
    this.saveUpdateItemForm.patchValue({
      id: null,
      name: null,
      description: null,
      mainCategory: null,
      subCategory: null,
      price: null,
      qty: null,
    })
  }
}
