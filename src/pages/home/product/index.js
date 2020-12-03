import React, { Component } from "react";

export default class index extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="list_product">
          <div className="menu-head">
            <ul className="menu-head-top">
              <li>
                <a href="#">Trang chủ/</a>
              </li>
              <li>
                <a href="#">Nữ/</a>
              </li>
              <li>
                <a href="#">Sản phẩm mới</a>
              </li>
            </ul>
          </div>
          <section className="main">
            {/* start menu vertical */}
            <div className="row">
              <div className="col-lg-2 main__menu">
                <ul className="menu-first">
                  <li>
                    <a href="#">Nữ</a>
                  </li>
                  <li>
                    <a href="#">Sản phẩm mới</a>
                  </li>
                </ul>
                <ul className="menu-category">
                  <span>Danh mục sản phẩm</span>
                  <li>
                    <a href="#">Áo phông</a>
                  </li>
                  <li>
                    <a href="#">Áo polo</a>
                  </li>
                  <li>
                    <a href="#">Áo sơ mi</a>
                  </li>
                  <li>
                    <a href="#">Áo kiểu</a>
                  </li>
                  <li>
                    <a href="#">Váy liền thân (Đầm)</a>
                  </li>
                  <li>
                    <a href="#">Quần short</a>
                  </li>
                  <li>
                    <a href="#">Chân váy</a>
                  </li>
                  <li>
                    <a href="#">Quần jeans</a>
                  </li>
                  <li>
                    <a href="#">Quần vải</a>
                  </li>
                  <li>
                    <a href="#">Quần kaki</a>
                  </li>
                  <li>
                    <a href="#">Đồ mặc nhà</a>
                  </li>
                  <li>
                    <a href="#">Đồ mặc bên trong</a>
                  </li>
                  <li>
                    <a href="#">Quần áo thể thao</a>
                  </li>
                  <li>
                    <a href="#">Phụ kiện</a>
                  </li>
                </ul>
                <ul className="menu-category">
                  <span>Sản phẩm đặc biệt</span>
                  <li>
                    <a href="#">Áo chống nắng nữ</a>
                  </li>
                  <li>
                    <a href="#">Thoát ẩm vượt trội</a>
                  </li>
                  <li>
                    <a href="#">SP đạt chứng chỉ an toàn</a>
                  </li>
                  <li>
                    <a href="#">Chống thấm nước</a>
                  </li>
                  <li>
                    <a href="#">Len lông Cừu Úc</a>
                  </li>
                  <li>
                    <a href="#">Giữ nhiệt</a>
                  </li>
                  <li>
                    <a href="#">Len lông Dê Cashmere</a>
                  </li>
                </ul>
              </div>
              {/* end menu vertical */}
              <div className="col-lg-10 col-md-12">
                <div className="layer-top">
                  <div className="layer__left">
                    <i
                      className="fa fa-sort"
                      id="filter"
                      onclick="onFilter()"
                    />
                    <span>Lọc sản phẩm</span>
                  </div>
                  <div className="layer__right">
                    <i className="fa fa-undo" />
                  </div>
                </div>
                {/* layout in filter */}
                <div className="filter-sort">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="filter__title">MÀU SẮC CHÍNH</div>
                      <div className="filter__content-color">
                        <ul className="filter__colors">
                          <li>
                            <a href="#" className="red" />
                          </li>
                          <li>
                            <a href="#" className="orange" />
                          </li>
                          <li>
                            <a href="#" className="caramel" />
                          </li>
                          <li>
                            <a href="#" className="pink" />
                          </li>
                          <li>
                            <a href="#" className="yellow" />
                          </li>
                          <li>
                            <a href="#" className="green" />
                          </li>
                          <li>
                            <a href="#" className="blue" />
                          </li>
                          <li>
                            <a href="#" className="violet" />
                          </li>
                          <li>
                            <a href="#" className="black" />
                          </li>
                          <li>
                            <a href="#" className="gray" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="filter__title">ĐƠN GIÁ</div>
                      <div className="filter__content-price">
                        <ul className="filter__price">
                          <li>
                            <div className="form-check">
                              <input
                                className="form-check-input position-static check-price"
                                type="checkbox"
                                id="blankCheckbox"
                                defaultValue="option1"
                                aria-label="..."
                              />
                            </div>
                            <span>0₫ - 200.000₫</span>
                          </li>
                          <li>
                            <div className="form-check">
                              <input
                                className="form-check-input position-static check-price"
                                type="checkbox"
                                id="blankCheckbox"
                                defaultValue="option1"
                                aria-label="..."
                              />
                            </div>
                            <span>200.000₫ - 400.000₫</span>
                          </li>
                          <li>
                            <div className="form-check">
                              <input
                                className="form-check-input position-static check-price"
                                type="checkbox"
                                id="blankCheckbox"
                                defaultValue="option1"
                                aria-label="..."
                              />
                            </div>
                            <span>400.000₫ - 600.000₫</span>
                          </li>
                          <li>
                            <div className="form-check">
                              <input
                                className="form-check-input position-static check-price"
                                type="checkbox"
                                id="blankCheckbox"
                                defaultValue="option1"
                                aria-label="..."
                              />
                            </div>
                            <span>600.000₫ - 800.000₫</span>
                          </li>
                          <li>
                            <div className="form-check">
                              <input
                                className="form-check-input position-static check-price"
                                type="checkbox"
                                id="blankCheckbox"
                                defaultValue="option1"
                                aria-label="..."
                              />
                            </div>
                            <span>800.000₫ - 1.000.000₫</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="filter__title">KÍCH CỠ</div>
                      <div className="filter__content-size">
                        <ul className="filter__size">
                          <li>
                            <a href="#" className="#">
                              000
                            </a>
                          </li>
                          <li>
                            <a href="#" className="#">
                              XS
                            </a>
                          </li>
                          <li>
                            <a href="#" className="#">
                              S
                            </a>
                          </li>
                          <li>
                            <a href="#" className="#">
                              M
                            </a>
                          </li>
                          <li>
                            <a href="#" className="#">
                              L
                            </a>
                          </li>
                          <li>
                            <a href="#" className="#">
                              XL
                            </a>
                          </li>
                          <li>
                            <a href="#" className="#">
                              26
                            </a>
                          </li>
                          <li>
                            <a href="#" className="#">
                              27
                            </a>
                          </li>
                          <li>
                            <a href="#" className="#">
                              28
                            </a>
                          </li>
                          <li>
                            <a href="#" className="#">
                              29
                            </a>
                          </li>
                          <li>
                            <a href="#" className="#">
                              30
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end layout in filter */}
                {/* start content main */}
                <div className="layer-main">
                  {/* start row 1 */}
                  <div className="card-group">
                    <div className="row">
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6 card-custom">
                        <div className="card">
                          <a href="#">
                            <img
                              src="images/products/tuinu.jpg"
                              className="card-img-top"
                              alt="Tui nu"
                            />
                          </a>
                          <div className="products">
                            <div className="products__colors">
                              <ul className="products__colors-item">
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sa096.png"
                                      alt="nau"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sw011.png"
                                      alt="trang"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sk010.png"
                                      alt="den"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <span className="products__name">
                              <a href="#">tui nu</a>
                            </span>
                            <p className="products__price">29.000₫</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6 card-custom">
                        <div className="card">
                          <a href="#" className="product-img">
                            <img
                              src="images/products/jeannu_front.jpg"
                              className="card-img-top images-front"
                              alt="Quan sooc jean nu"
                            />
                            <img
                              src="images/products/jeannu_back.jpg"
                              className="images-back"
                              alt="Quan sooc jean nu backend"
                            />
                          </a>
                          <div className="products">
                            <div className="products__colors">
                              <ul className="products__colors-item">
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sj542.png"
                                      alt="nau"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sj543.png"
                                      alt="trang"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <span className="products__name">
                              <a href="#">Quần sosooc jeans nữ</a>
                            </span>
                            <p className="products__price">499.000₫</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6 card-custom">
                        <div className="card">
                          <a href="#" className="product-img">
                            <img
                              src="images/products/6bj20s003-sj547-1-thumb-.jpg"
                              className="card-img-top images-front"
                              alt="Quan sooc jean nu"
                            />
                            <img
                              src="images/products/jeannu.jpg"
                              className="images-back"
                              alt="Quan sooc jean nu backend"
                            />
                          </a>
                          <div className="products">
                            <div className="products__colors">
                              <ul className="products__colors-item">
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sj546.png"
                                      alt="nau"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sj547.png"
                                      alt="trang"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <span className="products__name">
                              <a href="#">Quần jeans nữ</a>
                            </span>
                            <p className="products__price">399.000₫</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6 card-custom">
                        <div className="card">
                          <a href="#">
                            <img
                              src="images/products/onha.jpg"
                              className="card-img-top"
                              alt="Bo mac nha nu"
                            />
                          </a>
                          <div className="products">
                            <div className="products__colors">
                              <ul className="products__colors-item">
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/fb237.png"
                                      alt="nau"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/fr037.png"
                                      alt="trang"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <span className="products__name">
                              <a href="#">Bộ mặc nhà nữ</a>
                            </span>
                            <p className="products__price">399.000₫</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6 card-custom">
                        <div className="card">
                          <a href="#">
                            <img
                              src="images/products/tuinu.jpg"
                              className="card-img-top"
                              alt="Tui nu"
                            />
                          </a>
                          <div className="products">
                            <div className="products__colors">
                              <ul className="products__colors-item">
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sa096.png"
                                      alt="nau"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sw011.png"
                                      alt="trang"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sk010.png"
                                      alt="den"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <span className="products__name">
                              <a href="#">tui nu</a>
                            </span>
                            <p className="products__price">29.000₫</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6 card-custom">
                        <div className="card">
                          <a href="#">
                            <img
                              src="images/products/jeannu_front.jpg"
                              className="card-img-top"
                              alt="Quan sooc jean nu"
                            />
                          </a>
                          <div className="products">
                            <div className="products__colors">
                              <ul className="products__colors-item">
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sj542.png"
                                      alt="nau"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sj543.png"
                                      alt="trang"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <span className="products__name">
                              <a href="#">Quần sosooc jeans nữ</a>
                            </span>
                            <p className="products__price">499.000₫</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6 card-custom">
                        <div className="card">
                          <a href="#">
                            <img
                              src="images/products/jeannu.jpg"
                              className="card-img-top"
                              alt="jean nu"
                            />
                          </a>
                          <div className="products">
                            <div className="products__colors">
                              <ul className="products__colors-item">
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sj546.png"
                                      alt="nau"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sj547.png"
                                      alt="trang"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <span className="products__name">
                              <a href="#">Quần jeans nữ</a>
                            </span>
                            <p className="products__price">399.000₫</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6 card-custom">
                        <div className="card">
                          <a href="#">
                            <img
                              src="images/products/onha.jpg"
                              className="card-img-top"
                              alt="Bo mac nha nu"
                            />
                          </a>
                          <div className="products">
                            <div className="products__colors">
                              <ul className="products__colors-item">
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/fb237.png"
                                      alt="nau"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/fr037.png"
                                      alt="trang"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <span className="products__name">
                              <a href="#">Bộ mặc nhà nữ</a>
                            </span>
                            <p className="products__price">399.000₫</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6 card-custom">
                        <div className="card">
                          <a href="#">
                            <img
                              src="images/products/tuinu.jpg"
                              className="card-img-top"
                              alt="Tui nu"
                            />
                          </a>
                          <div className="products">
                            <div className="products__colors">
                              <ul className="products__colors-item">
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sa096.png"
                                      alt="nau"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sw011.png"
                                      alt="trang"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sk010.png"
                                      alt="den"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <span className="products__name">
                              <a href="#">tui nu</a>
                            </span>
                            <p className="products__price">29.000₫</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6 card-custom">
                        <div className="card">
                          <a href="#">
                            <img
                              src="images/products/jeannu_front.jpg"
                              className="card-img-top"
                              alt="Quan sooc jean nu"
                            />
                          </a>
                          <div className="products">
                            <div className="products__colors">
                              <ul className="products__colors-item">
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sj542.png"
                                      alt="nau"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sj543.png"
                                      alt="trang"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <span className="products__name">
                              <a href="#">Quần sosooc jeans nữ</a>
                            </span>
                            <p className="products__price">499.000₫</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6 card-custom">
                        <div className="card">
                          <a href="#">
                            <img
                              src="images/products/jeannu.jpg"
                              className="card-img-top"
                              alt="jean nu"
                            />
                          </a>
                          <div className="products">
                            <div className="products__colors">
                              <ul className="products__colors-item">
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sj546.png"
                                      alt="nau"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sj547.png"
                                      alt="trang"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <span className="products__name">
                              <a href="#">Quần jeans nữ</a>
                            </span>
                            <p className="products__price">399.000₫</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6 card-custom">
                        <div className="card">
                          <a href="#">
                            <img
                              src="images/products/onha.jpg"
                              className="card-img-top"
                              alt="Bo mac nha nu"
                            />
                          </a>
                          <div className="products">
                            <div className="products__colors">
                              <ul className="products__colors-item">
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/fb237.png"
                                      alt="nau"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/fr037.png"
                                      alt="trang"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <span className="products__name">
                              <a href="#">Bộ mặc nhà nữ</a>
                            </span>
                            <p className="products__price">399.000₫</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6 card-custom">
                        <div className="card">
                          <a href="#">
                            <img
                              src="images/products/tuinu.jpg"
                              className="card-img-top"
                              alt="Tui nu"
                            />
                          </a>
                          <div className="products">
                            <div className="products__colors">
                              <ul className="products__colors-item">
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sa096.png"
                                      alt="nau"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sw011.png"
                                      alt="trang"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sk010.png"
                                      alt="den"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <span className="products__name">
                              <a href="#">tui nu</a>
                            </span>
                            <p className="products__price">29.000₫</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6 card-custom">
                        <div className="card">
                          <a href="#">
                            <img
                              src="images/products/jeannu_front.jpg"
                              className="card-img-top"
                              alt="Quan sooc jean nu"
                            />
                          </a>
                          <div className="products">
                            <div className="products__colors">
                              <ul className="products__colors-item">
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sj542.png"
                                      alt="nau"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sj543.png"
                                      alt="trang"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <span className="products__name">
                              <a href="#">Quần sosooc jeans nữ</a>
                            </span>
                            <p className="products__price">499.000₫</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6 card-custom">
                        <div className="card">
                          <a href="#">
                            <img
                              src="images/products/jeannu.jpg"
                              className="card-img-top"
                              alt="jean nu"
                            />
                          </a>
                          <div className="products">
                            <div className="products__colors">
                              <ul className="products__colors-item">
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sj546.png"
                                      alt="nau"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sj547.png"
                                      alt="trang"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <span className="products__name">
                              <a href="#">Quần jeans nữ</a>
                            </span>
                            <p className="products__price">399.000₫</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6 card-custom">
                        <div className="card">
                          <a href="#">
                            <img
                              src="images/products/jeannu_front.jpg"
                              className="card-img-top"
                              alt="Quan sooc jean nu"
                            />
                          </a>
                          <div className="products">
                            <div className="products__colors">
                              <ul className="products__colors-item">
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sj542.png"
                                      alt="nau"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sj543.png"
                                      alt="trang"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <span className="products__name">
                              <a href="#">Quần sosooc jeans nữ</a>
                            </span>
                            <p className="products__price">499.000₫</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6 card-custom">
                        <div className="card">
                          <a href="#">
                            <img
                              src="images/products/jeannu.jpg"
                              className="card-img-top"
                              alt="jean nu"
                            />
                          </a>
                          <div className="products">
                            <div className="products__colors">
                              <ul className="products__colors-item">
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sj546.png"
                                      alt="nau"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/sj547.png"
                                      alt="trang"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <span className="products__name">
                              <a href="#">Quần jeans nữ</a>
                            </span>
                            <p className="products__price">399.000₫</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-4 col-6 card-custom">
                        <div className="card">
                          <a href="#">
                            <img
                              src="images/products/onha.jpg"
                              className="card-img-top"
                              alt="Bo mac nha nu"
                            />
                          </a>
                          <div className="products">
                            <div className="products__colors">
                              <ul className="products__colors-item">
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/fb237.png"
                                      alt="nau"
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <img
                                      src="images/color/fr037.png"
                                      alt="trang"
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <span className="products__name">
                              <a href="#">Bộ mặc nhà nữ</a>
                            </span>
                            <p className="products__price">399.000₫</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end row 1 */}
                  {/* nav panigations */}
                  <div className="panigation">
                    <ol className="panigation__main">
                      <li className="first">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">5</a>
                      </li>
                      <li>
                        <a href="#">6</a>
                      </li>
                      <li>
                        <a href="#">7</a>
                      </li>
                      <li>
                        <a href="#">8</a>
                      </li>
                      <li>
                        <a href="#">9</a>
                      </li>
                      <li>
                        <a href="#">10</a>
                      </li>
                      <li>
                        <i className="fa fa-caret-right" />
                      </li>
                    </ol>
                  </div>
                  {/* end panigations */}
                  <div className="products-introduce">
                    <h1 className="products__title-short">SẢN PHẨM MỚI</h1>
                    <h2 className="products__title-long">
                      CÁC MẪU QUẦN ÁO THỜI TRANG NỮ ĐẸP NHẤT
                    </h2>
                    <p className="products__description">
                      Với 1000+ mẫu quần áo nữ, CANIFA sẽ giúp bạn thỏa sức lựa
                      chọn và làm mới phong cách cho bản thân. Phái đẹp sẽ tràn
                      đầy tự tin và luôn cảm thấy thoải mái khi diện đồ từ BST
                      thời trang nữ CANIFA do sự đa dạng trong mẫu mã, kiểu dáng
                      cũng như màu sắc...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
