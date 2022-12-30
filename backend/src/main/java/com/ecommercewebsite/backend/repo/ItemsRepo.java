package com.ecommercewebsite.backend.repo;


import com.ecommercewebsite.backend.entity.Items;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
@EnableJpaRepositories
public interface ItemsRepo extends JpaRepository<Items, String> {
    @Query(value = "SELECT * FROM Items WHERE name LIKE %?1%", nativeQuery = true)
    Page<Items> getAll(String searchText, PageRequest of);

    @Query(value = "SELECT COUNT(*) FROM Items WHERE name LIKE %?1%", nativeQuery = true)
    Long getAllCount(String searchText);

    @Query(value = "SELECT * FROM Items WHERE id LIKE %?1% OR name LIKE %?1% OR description LIKE %?1% OR main_category LIKE %?1% OR sub_category LIKE %?1% OR price LIKE %?1% OR qty LIKE %?1%", nativeQuery = true)
    List<Items> getAllItemsBySearchText(String searchText);

    @Query(value = "SELECT * FROM Items WHERE main_category LIKE ?1", nativeQuery = true)
    List<Items> getAllItemsByMainCategory(String main_category);

    @Query(value = "SELECT * FROM Items WHERE main_category LIKE ?1", nativeQuery = true)
    List<Items> getAllSubCategoriesByMainCategory(String mainCategory);
}
