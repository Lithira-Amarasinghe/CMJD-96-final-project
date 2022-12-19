package com.ecommercewebsite.backend.repo;


import com.ecommercewebsite.backend.entity.Items;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;


@Repository
@EnableJpaRepositories
public interface ItemsRepo extends JpaRepository<Items,String> {


    @Query(value = "SELECT * FROM Items WHERE name LIKE %?1%", nativeQuery = true)
    Page<Items> getAll(String searchText, PageRequest  of);

    @Query(value = "SELECT COUNT(*) FROM Items WHERE name LIKE %?1%", nativeQuery = true)
    Long getAllCount(String searchText);

}
