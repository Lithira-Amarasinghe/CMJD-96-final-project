package com.ecommercewebsite.backend.service.impl;

import com.ecommercewebsite.backend.dto.ItemsDto;
import com.ecommercewebsite.backend.dto.paginatedDto.PaginatedItemsDtos;
import com.ecommercewebsite.backend.entity.Items;
import com.ecommercewebsite.backend.repo.ItemsRepo;
import com.ecommercewebsite.backend.service.ItemsService;
import com.ecommercewebsite.backend.util.ItemsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ItemsServiceImpl implements ItemsService {

    private final String PATH = "C:\\D\\Lithira\\CMJD\\Final project\\item-images\\";
    @Autowired
    private ItemsRepo itemsRepo;
    @Autowired
    private ItemsMapper itemsMapper;

    @Override
    public String saveItem(ItemsDto itemsDto) {
        Items item = new Items(
                itemsDto.getId(),
                itemsDto.getName(),
                itemsDto.getDescription(),
                itemsDto.getMainCategory(),
                itemsDto.getSubCategory(),
                itemsDto.getPrice(),
                itemsDto.getQty()

                );
        item.setImage(itemsDto.getImageFiles());
        return itemsRepo.save(item).getName();

    }
//
//        Items items = itemsMapper.toItems(itemsDto);

//        System.out.println(itemsDto.getId());
//        System.out.println(items.getId() );
//
//        return itemsRepo.save(itemsMapper.toItems(itemsDto)).getName();
//    }

    @Override
    public String updateItem(ItemsDto itemsDto) {
        Optional<Items> tempary = itemsRepo.findById(itemsDto.getId());

        if (tempary.isPresent()) {
            tempary.get().setName(itemsDto.getName());
            tempary.get().setDescription(itemsDto.getDescription());
            tempary.get().setMainCategory(itemsDto.getMainCategory());
            tempary.get().setSubCategory(itemsDto.getSubCategory());
            tempary.get().setPrice(itemsDto.getPrice());
            tempary.get().setQty(itemsDto.getQty());
            tempary.get().setImage(itemsDto.getImageFiles());

            return itemsRepo.save(tempary.get()).getName();
        }
        return itemsDto.getId() + " not found";
    }

    @Override
    public String deleteItem(String itemId) {
        Optional<Items> temp = itemsRepo.findById(itemId);

        if (temp.isPresent()) {
            itemsRepo.delete(temp.get());
            return itemId + "Deleted!";
        }
        return null;
    }

    @Override
    public ItemsDto getItem(String itemId){
        Optional<Items> tempary = itemsRepo.findById(itemId);

        if (tempary.isPresent()) {
//            return itemsMapper.toItemsDto(tempary.get());
            return new ItemsDto(
                    tempary.get().getId(),
                    tempary.get().getName(),
                    tempary.get().getDescription(),
                    tempary.get().getMainCategory(),
                    tempary.get().getSubCategory(),
                    tempary.get().getPrice(),
                    tempary.get().getQty(),
                    tempary.get().getImage()
            );
        } else
            return null;
    }
//
    @Override
    public PaginatedItemsDtos getAllItems(int page, int size, String searchText){
        List<Items> list = itemsRepo.getAllItemsBySearchText(searchText);
        ArrayList<ItemsDto> itemsDtoList = new ArrayList<>();

        for (Items items : list) {
            itemsDtoList.add(new ItemsDto(
                    items.getId(),
                    items.getName(),
                    items.getDescription(),
                    items.getMainCategory(),
                    items.getSubCategory(),
                    items.getPrice(),
                    items.getQty(),
                    items.getImage()));
        }
        return new PaginatedItemsDtos(itemsDtoList, list.size());
    }


//        ArrayList<ItemsDto> itemsDto = new ArrayList<>();
//
//        for (Items items: list){
//            itemsDto.add(new ItemsDto(
//                    items.getId(),
//                    items.getName(),
//                    items.getDescription(),
//                    items.getMainCategory(),
//                    items.getSubCategory(),
//                    items.getPrice(),
//                    items.getQty()
//            ));
//        }

//        return new PaginatedItemsDtos()
//
//
////        Page<Items> list = itemsRepo.getAll(searchText, PageRequest.of(page, size));
//
////        return new PaginatedItemsDtos(
////                itemsMapper.toItemDtoList(list),
////                itemsRepo.getAllCount(searchText)
////        );
//
//
////        List<Items> allItems = itemsRepo.findAll();
////        ArrayList<ItemsDto> itemsDtos = new ArrayList<>();
////        for (Items items:allItems) {
////            itemsDtos.add(itemsMapper.toItemsDto(items));
////        }
////        return null;
////  }
//
    @Override
    public List<String> getAllSubCategoriesByMainCategory(String mainCategory) {
        List<Items> itemList = itemsRepo.getAllSubCategoriesByMainCategory(mainCategory);

        ArrayList<String> itemsSubCategoryList = new ArrayList();
        for (Items item: itemList){
            itemsSubCategoryList.add(item.getSubCategory());
        }
        return itemsSubCategoryList;
    }

    @Override
    public PaginatedItemsDtos getAllItemsByMainCategory(String mainCategory){
        List<Items> itemList = itemsRepo.getAllItemsByMainCategory(mainCategory);

        ArrayList<ItemsDto> itemsDtoList = new ArrayList();
        for (Items item: itemList){
            itemsDtoList.add(new ItemsDto(
                    item.getId(),
                    item.getName(),
                    item.getDescription(),
                    item.getMainCategory(),
                    item.getSubCategory(),
                    item.getPrice(),
                    item.getQty(),
                    item.getImage()
            ));
        }
        return new PaginatedItemsDtos(itemsDtoList, itemList.size());
    }

}

