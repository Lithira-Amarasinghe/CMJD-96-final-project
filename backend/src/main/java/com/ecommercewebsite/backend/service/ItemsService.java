package com.ecommercewebsite.backend.service;

import com.ecommercewebsite.backend.dto.ItemsDto;
import com.ecommercewebsite.backend.dto.paginatedDto.PaginatedItemsDtos;

import java.util.List;

public interface ItemsService extends Service {
    String saveItem(ItemsDto itemsDto);

    String updateItem(ItemsDto itemsDto);

    String deleteItem(String itemId);

    ItemsDto getItem(String itemId);

    PaginatedItemsDtos getAllItems(
            int page,
            int size,
            String searchText
    );

    List<String> getAllSubCategoriesByMainCategory(String mainCategory);

    PaginatedItemsDtos getAllItemsByMainCategory(String mainCategory);

}
