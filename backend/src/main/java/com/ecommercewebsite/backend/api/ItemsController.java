package com.ecommercewebsite.backend.api;

import com.ecommercewebsite.backend.dto.ItemsDto;
import com.ecommercewebsite.backend.entity.Image;
import com.ecommercewebsite.backend.service.ItemsService;
import com.ecommercewebsite.backend.util.StandardResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/v1/items")
public class ItemsController {

    @Autowired
    private ItemsService itemsService;

//    @PostMapping(value = {"/addNewItem"},consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
//    public ResponseEntity<StandardResponse> saveItem(
//            @RequestPart ItemsDto itemsDto,
//            @RequestPart MultipartFile imageFile) {

    @PostMapping(consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<StandardResponse> saveItem(@RequestPart("item") ItemsDto itemDto,
                                                     @RequestPart("imageFile") MultipartFile[] imageFiles) {

//    return new ResponseEntity<>(new StandardResponse(
//                200, "Saved", itemsService.saveItem(itemDto,imageFile)
//        ), HttpStatus.CREATED);

        try {
            List<Image> images = processImages(imageFiles);
            itemDto.setImageFiles(images);
            return new ResponseEntity<>(new StandardResponse(
                    200, "Item saved successfully" , itemsService.saveItem(itemDto)
            ),HttpStatus.OK);
        } catch (IOException ex) {
            ex.getMessage();
        }
        return null;
    }

    @PutMapping(consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<StandardResponse> updateItem(@RequestPart("item") ItemsDto itemDto,
                             @RequestPart("imageFile") MultipartFile[] imageFiles) {
        try {
            List<Image> images = processImages(imageFiles);
            itemDto.setImageFiles(images);
            return new ResponseEntity<>(new StandardResponse(
                    200, "Item saved successfully" , itemsService.updateItem(itemDto)
            ),HttpStatus.OK);
        } catch (IOException ex) {
            ex.getMessage();
        }
        return null;
    }

    private List<Image> processImages(MultipartFile[] multipartFiles) throws IOException {
        List<Image> images = new ArrayList<>();

        for (MultipartFile imageFile: multipartFiles){
            Image image = new Image(
                    imageFile.getOriginalFilename(),
                    imageFile.getContentType(),
                    imageFile.getBytes()
            );
            images.add(image);
        }
        return images;
    }

    @DeleteMapping
    public ResponseEntity<StandardResponse> deleteItem(@RequestParam String id) {
        return new ResponseEntity<>(new StandardResponse(
                200, "Item deleted", itemsService.deleteItem(id)

        ), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<StandardResponse> getItem(@PathVariable String id) {
//        return itemsService.getItem(id);
        return new ResponseEntity<>(new StandardResponse(
                200, "Item data", itemsService.getItem(id)
        ), HttpStatus.OK);
    }

    @GetMapping("/allItemsByMainCategory/{mainCategory}")
    public ResponseEntity<StandardResponse> getAllSubCategories(@PathVariable String mainCategory) {
        return new ResponseEntity<>(new StandardResponse(
                200, "Item data found", itemsService.getAllSubCategoriesByMainCategory(mainCategory)
        ), HttpStatus.OK);
    }

    @GetMapping("/allItemsByMainCategory")
    public ResponseEntity<StandardResponse> getAllItemsByMainCategory(@RequestParam String mainCategory) {
        return new ResponseEntity<>(new StandardResponse(
                200,
                "Item data found",
                itemsService.getAllItemsByMainCategory(mainCategory)
        ), HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<StandardResponse> getAllItemsBySearchText(
            @RequestParam int page,
            @RequestParam int size,
            @RequestParam String searchText) {

        return new ResponseEntity<>(new StandardResponse(
                200, "List",
                itemsService.getAllItems(page, size, searchText)),
                HttpStatus.OK);
    }
}