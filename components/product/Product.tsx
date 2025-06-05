
"use client";
import React, { useState, useEffect } from "react";
import { useCart } from "react-use-cart";
import QuantityInput from "../QuantityInput";

type Product = {
  _id: string;
  title: string;
  imageUrl: string;
  price: number;
  slug: { current: string };
  stock: "inStock" | "outOfStock" | "limited";
  category: { title: string };
  description: string;
};

type ProductsCategory = {
  _id: string;
  title: string;
  description: string | null;
  slug: {
    _type: "slug";
    current: string;
  };
};

type ProductProps = {
  products: Product[];
  productsCategory: ProductsCategory[];
};

function Product({ products, productsCategory }: ProductProps) {
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const { addItem, items } = useCart();


  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (product) =>
            product.category.title.toLowerCase() ===
            productsCategory
              .find((cat) => cat.slug.current === selectedCategory)
              ?.title.toLowerCase()
        );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setCurrentPage(1); // Reset to first page when category changes
  }, [selectedCategory]);

  const handleQuickView = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  useEffect(() => {
    if (!mounted) return;
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div>
      {/* Product Section */}
      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="th-sort-bar">
            <div className="row justify-content-between align-items-center">
              <div className="col-md">
                <p className="woocommerce-result-count">
                  Showing Products By Category
                </p>
              </div>
              <div className="col-md-auto">
                <form className="woocommerce-ordering" method="get">
                  <select
                    name="category"
                    className="orderby"
                    aria-label="Filter by category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="all">All Products</option>
                    {productsCategory.map((category) => (
                      <option key={category._id} value={category.slug.current}>
                        {category.title}
                      </option>
                    ))}
                  </select>
                </form>
              </div>
            </div>
          </div>
          <div className="row gy-40">
            {paginatedProducts.length === 0 ? (
              <div className="col-12 text-center">
                <p className="text-muted">This category has no products.</p>
              </div>
            ) : (
              paginatedProducts.map((product) => (
                <div key={product._id} className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="th-product product-grid">
                    <div className="product-img">
                      <img src={product.imageUrl} alt={product.title} />
                      {product.stock === "limited" && (
                        <span className="product-tag">Limited</span>
                      )}
                      {product.stock === "outOfStock" && (
                        <span className="product-tag bg-danger">
                          Out of Stock
                        </span>
                      )}
                      <div className="actions">
                        <button
                          onClick={(e) => handleQuickView(product, e)}
                          className="icon-btn"
                        >
                          <i className="far fa-eye"></i>
                        </button>
                      </div>
                    </div>
                    <div className="product-content">
                      <span className="product-category">
                        {product.category.title}
                      </span>
                      <h3 className="product-title">
                        <a href={`/product/${product.slug.current}`}>
                          {product.title}
                        </a>
                      </h3>
                      <span className="price">ETB: {product.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Pagination */}
          <div className="th-pagination text-center pt-50">
            <ul>
              {Array.from({ length: totalPages }, (_, i) => (
                <li key={i}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(i + 1);
                    }}
                    className={currentPage === i + 1 ? "active" : ""}
                  >
                    {i + 1}
                  </a>
                </li>
              ))}
              {currentPage < totalPages && (
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(currentPage + 1);
                    }}
                  >
                    <i className="far fa-arrow-right"></i>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* Dynamic Quick View Modal */}
      {showModal && selectedProduct && (
        <div className="quick-view-modal">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="container bg-white rounded-10 modal-content">
            <div className="row gx-60">
              <div className="col-lg-6">
                <div className="product-big-img">
                  <div className="img">
                    <img
                      src={selectedProduct.imageUrl}
                      alt={selectedProduct.title}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="product-about">
                  <p className="price">ETB: {selectedProduct.price.toFixed(2)}</p>
                  <h2 className="product-title">{selectedProduct.title}</h2>
                  <p className="text">{selectedProduct.description}</p>
                  <div className="mt-2 link-inherit">
                    <p>
                      <strong className="text-title me-3">Availability:</strong>
                      <span
                        className={`stock ${
                          selectedProduct.stock === "inStock"
                            ? "in-stock"
                            : "out-of-stock"
                        }`}
                      >
                        <i className="far fa-check-square me-2 ms-1"></i>
                        {selectedProduct.stock === "inStock"
                          ? "In Stock"
                          : selectedProduct.stock === "outOfStock"
                            ? "Out of Stock"
                            : "Limited Stock"}
                      </span>
                    </p>
                  </div>
                  <div className="actions">
                    {(() => {
                      const itemInCart = items.find(
                        (item) => item.id === selectedProduct._id
                      );
                      return itemInCart ? (
                        <div className="cart-item">
                          <QuantityInput item={itemInCart} />
                        </div>
                      ) : null;
                    })()}
                    <button
                      className="th-btn"
                      onClick={() =>
                        selectedProduct &&
                        addItem({
                          id: selectedProduct._id,
                          price: selectedProduct.price,
                          name: selectedProduct.title,
                          image: selectedProduct.imageUrl,
                          slug: selectedProduct.slug.current,
                        })
                      }
                    >
                      Get a quote
                    </button>
                  </div>
                  <div className="product_meta">
                    <span className="sku_wrapper">
                      SKU:{" "}
                      <span className="sku">
                        {selectedProduct.slug.current}
                      </span>
                    </span>
                    <span className="posted_in">
                      Category: <a href="#">{selectedProduct.category.title}</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button
              title="Close (Esc)"
              type="button"
              className="mfp-close"
              onClick={closeModal}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Modal Styles */}
      <style jsx>{`
        .quick-view-modal {
          position: fixed;
          z-index: 1000;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
        }

        .modal-content {
          position: relative;
          z-index: 1001;
          padding: 2rem;
          max-width: 1100px;
          width: 100%;
          background: #fff;
          border-radius: 10px;
          max-height: 90vh;
          overflow-y: auto;
        }

        .mfp-close {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 2rem;
          background: transparent;
          border: none;
          color: #333;
          font-weight: bold;
          cursor: pointer;
          z-index: 10;
          transition: color 0.2s ease;
        }

        .mfp-close:hover {
          color: #e11d48;
        }

        .th-pagination ul {
          display: inline-flex;
          list-style: none;
          padding-left: 0;
          gap: 0.5rem;
        }

        .th-pagination ul li button {
          border: none;
          background: transparent;
          font-size: 1rem;
          padding: 0.5rem 0.75rem;
          cursor: pointer;
        }

        .th-pagination ul li button.active {
          font-weight: bold;
          color: #e11d48;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

export default Product;
