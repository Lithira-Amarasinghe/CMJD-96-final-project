package com.ecommercewebsite.backend.util;


import com.ecommercewebsite.backend.dto.ItemsDto;
import com.ecommercewebsite.backend.entity.Items;
import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;

import java.util.List;

@Mapper(componentModel = "spring",uses = {ItemsDto.class, Items.class})
public interface ItemsMapper {
    Items toItems(ItemsDto itemsDto);
    ItemsDto toItemsDto(Items items);

    List<ItemsDto> toItemDtoList(Page<Items> entities);

}