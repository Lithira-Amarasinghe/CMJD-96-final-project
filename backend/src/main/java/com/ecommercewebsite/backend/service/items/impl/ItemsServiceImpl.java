package com.ecommercewebsite.backend.service.items.impl;

import com.ecommercewebsite.backend.dto.ItemsDto;
import com.ecommercewebsite.backend.dto.paginatedDto.PaginatedItemsDtos;
import com.ecommercewebsite.backend.entity.Items;
import com.ecommercewebsite.backend.repo.ItemsRepo;
import com.ecommercewebsite.backend.service.items.ItemsService;
import com.ecommercewebsite.backend.util.ItemsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ItemsServiceImpl implements ItemsService {

    @Autowired
    private ItemsRepo itemsRepo;

    @Autowired
    private ItemsMapper itemsMapper;

    @Override
    public String saveItem(ItemsDto itemsDto) {
        return itemsRepo.save(
                new Items(
                        itemsDto.getId(),
                        itemsDto.getName(),
                        itemsDto.getDescription(),
                        itemsDto.getMainCategory(),
                        itemsDto.getSubCategory(),
                        itemsDto.getPrice(),
                        itemsDto.getQty())).getName();
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

            return itemsRepo.save(tempary.get()).getName();

        }

        return itemsDto.getId() + " not found";
    }

    @Override
    public String deleteItem(String itemId) {
        Optional<Items> temp = itemsRepo.findById(itemId);

        if(temp.isPresent()){
            itemsRepo.delete(temp.get());
            return itemId + "Deleted!";
        }
        return null;
    }

    @Override
    public ItemsDto getItem(String itemId) {
        Optional<Items> tempary = itemsRepo.findById(itemId);
        tempary.get();

        if(tempary.isPresent()){
            return itemsMapper.toItemsDto(tempary.get());
        }
        else
            return null;
    }

    @Override
    public PaginatedItemsDtos getAllItems(int page, int size, String searchText) {

        Page<Items> list = itemsRepo.getAll(searchText, PageRequest.of(page, size));

        return new PaginatedItemsDtos(
                itemsMapper.toItemDtoList(list),
                itemsRepo.getAllCount(searchText)
        );


//        List<Items> allItems = itemsRepo.findAll();
//        ArrayList<ItemsDto> itemsDtos = new ArrayList<>();
//        for (Items items:allItems) {
//            itemsDtos.add(itemsMapper.toItemsDto(items));
//        }
//        return null;
    }
}
