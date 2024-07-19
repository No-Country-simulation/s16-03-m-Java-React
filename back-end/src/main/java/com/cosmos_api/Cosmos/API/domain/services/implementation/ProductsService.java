package com.cosmos_api.Cosmos.API.domain.services.implementation;

import com.cosmos_api.Cosmos.API.aplication.dto.dtoProducts;
import com.cosmos_api.Cosmos.API.domain.entities.Products;
import com.cosmos_api.Cosmos.API.domain.repository.RepositoryProducts;
import com.cosmos_api.Cosmos.API.domain.services.interfaces.IProductsService;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductsService implements IProductsService {

    private final RepositoryProducts productsRepository;

    @Override
    public List<Products> listAlllProducts() {
        return this.productsRepository.findAll();
    }

    @Override
    public Products getOneProducts(Long idproducts) {
        return productsRepository.findByIdproducts(idproducts)
                .orElseThrow(() -> new RuntimeException("products with that ID dont exist"));
    }

    @Override
    public Products saveProducts(dtoProducts dtoproducts) {
        Products products = Products.builder()
                .title(dtoproducts.getTitle())
                .description(dtoproducts.getDescription())
                .cost(dtoproducts.getCost())
                .build();
        return productsRepository.save(products);
    }

    @Override
    public boolean deleteProducts(Long idproducts) {
        Optional<Products> productsDelete = this.productsRepository.findById(idproducts);
        if (productsDelete.isPresent()) {
            this.productsRepository.deleteById(idproducts);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean existsByIdProducts(Long idproducts) {
        return productsRepository.existsById(idproducts);
    }

    @Override
    public Optional<Products> getByTitleProducts(String Title) {
        return productsRepository.findByTitle(Title);
    }

    @Override
    public Products editProducts(Long idproducts, dtoProducts dtoproducts) {
        Products products = this.getOneProducts(idproducts);
        products.setTitle(dtoproducts.getTitle());
        products.setDescription(dtoproducts.getDescription());
        products.setCost(dtoproducts.getCost());
        return productsRepository.save(products);
    }

    @Override
    public boolean existsByTitleProducts(String Title) {
        return productsRepository.existsByTitle(Title);
    }

}
