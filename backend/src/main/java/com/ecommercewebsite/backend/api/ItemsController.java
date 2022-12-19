package com.ecommercewebsite.backend.api;

import com.ecommercewebsite.backend.dto.ItemsDto;
import com.ecommercewebsite.backend.dto.paginatedDto.PaginatedItemsDtos;
import com.ecommercewebsite.backend.service.items.ItemsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("api/v1/items")
@CrossOrigin
public class ItemsController {

    @Autowired
    private ItemsService itemsService;

    @PostMapping
    public String saveItem(@RequestBody ItemsDto itemsDto){
        return itemsService.saveItem(itemsDto);
    }

    @PutMapping
    public String updateItem(@RequestBody ItemsDto itemsDto){
        return itemsService.updateItem(itemsDto);
    }

    @DeleteMapping
    public String deleteItem(@RequestParam String id){
        return itemsService.deleteItem(id);
    }

    @GetMapping("/{id}")
    public ItemsDto getItem(@PathVariable String id){
        return itemsService.getItem(id);
    }

    @GetMapping("/list")
    public PaginatedItemsDtos getAllItems(
            @RequestParam int page,
            @RequestParam int size,
            @RequestParam String searchText){

        return itemsService.getAllItems(page,size,searchText);
    }
}