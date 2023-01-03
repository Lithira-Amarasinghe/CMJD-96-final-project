package com.ecommercewebsite.backend.service;

import com.ecommercewebsite.backend.dto.ItemsDto;
import com.ecommercewebsite.backend.dto.paginatedDto.PaginatedItemsDtos;
import com.ecommercewebsite.backend.entity.Items;

import java.util.List;
import java.util.Set;

public interface ItemsService {
    String saveItem(ItemsDto itemsDto);

    String updateItem(ItemsDto itemsDto);

    String deleteItem(String itemId);

    ItemsDto getItem(String itemId);

    PaginatedItemsDtos getAllItems(
            int page,
            int size,
            String searchText
    );

    Set<String> getAllSubCategoriesByMainCategory(String mainCategory);

    PaginatedItemsDtos getAllItemsByMainCategory(String mainCategory);

}
