package com.ecommercewebsite.backend.service.items;

import com.ecommercewebsite.backend.dto.ItemsDto;
import com.ecommercewebsite.backend.dto.paginatedDto.PaginatedItemsDtos;
import com.ecommercewebsite.backend.service.Service;

import java.util.ArrayList;

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
}
