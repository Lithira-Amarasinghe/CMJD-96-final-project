package com.ecommercewebsite.backend.dto.paginatedDto;

import com.ecommercewebsite.backend.dto.ItemsDto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PaginatedItemsDtos {
    private List<ItemsDto> list;
    private long dataCount;
}
