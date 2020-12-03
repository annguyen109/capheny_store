import React, { Component } from "react";

import { Link, Route, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import * as action from "./../redux/action";


class Header extends Component {
  componentDidMount() {
    this.props.getCategory(null);
  }

  renderCate = () => {

    return this.props.listCate.map((item, index) => {

      return (
        <li key={index}>
          <Link  key={item.category_id} to={`product/${item.category_id}`} className="ms-label" >
            {item.category_name}
          </Link>
          <div className="ms-submenu col-xs-12 sub-left">
            <div className="ms-content">
              <div className="ms-container">
                <div className="row">
                  {item.child[0].map((item2, index2) => {
                    return (
                      <div key={index2} className="col-sm-2 sm-offet-1 parent">
                        <strong className="form-group leve1">
                          {item2.category_name}
                        </strong>
                        <div className="sub-menu">
                          {item2.child[0].map((item3, index3) => {
                            return (
                              <a key={index3} className="form-group" href="#">
                                {item3.category_name}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="page">
          <header id="header" className="site-header">
            <div className="header-content">
              <a className="logo" href="home.html">
                CAPHENY
              </a>
              <div className="header-menu" id="myDIV">
                <nav className="float-left">
                  <div className="megamenu mobilemenu">
                    <ul className="ms-topmenu">{this.renderCate()}</ul>
                  </div>
                </nav>
              </div>
              <a className="btn-menu-mobile">
                <span>menu</span>
              </a>
              <div id="header-search" className="header-search">
                <form action>
                  <div className="input-box">
                    <input
                      className="input-text"
                      type="search"
                      name
                      placeholder="Tìm kiếm"
                      id
                    />
                    <button type="submit" className="button search-button" />
                  </div>
                </form>
              </div>
              <div className="header-location">
                <a href="#" />
              </div>
              <div className="header-account" id="header-account">
                <a href="#" />
                <div className="header-account-content">
                  <p className="noaccount-message">
                    <b>Bạn đã có tài khoản?</b>
                  </p>
                  <p>
                    <a href="#" className="button button-login">
                      Đăng nhập / Đăng ký
                    </a>
                  </p>
                  <p className="forgotpassword">
                    <a href="#">Bạn quên mật khẩu ?</a>
                  </p>
                </div>
              </div>
              <div className="header-minicart">
                <div className="cart">
                  <a id="cart-icon" className="cart-icon" href="#">
                    <span id="cart-status" className="summary_count">
                      0
                    </span>
                  </a>
                  <div id="cart-drop-down" className="block-cart">
                    <div className="cart-header">
                      <span className="close-cart" />
                      <strong>Giỏ hàng</strong>
                    </div>
                    <div className="cart-content">
                      <div className="minicart-wrapper">
                        <ul id="cart-sidebar" className="mini-products-list">
                          <li className="item last odd">
                            <div className="img-container">
                              <a href="#" className="product-image">
                                <img
                                  src="https://canifa.s3.amazonaws.com/media/catalog/product/cache_generated/130x/1tl20w009-sm235-1-thumb-.jpg"
                                  alt
                                />
                              </a>
                            </div>
                            <div className="product-details">
                              <p className="product-name">
                                <a href="#">Áo phông bé gái</a>
                              </p>
                              <div className="product-box">
                                <div className="qty-size">
                                  <div className="size">
                                    <label>Mã:</label>
                                    <span className="values">
                                      <strong>1TL20W009-SM235-100</strong>
                                    </span>
                                  </div>
                                </div>
                                <div className="product-options">
                                  <ul>
                                    <li className="color">
                                      <label>Màu sắc:</label>
                                      <span className="values">
                                        <img
                                          src="https://canifa.s3.amazonaws.com/media/catalog/swatches/1/21x21/media/sm235.png"
                                          height="25px"
                                          width="25px"
                                          alt
                                        />
                                        <span>SM235</span>
                                      </span>
                                    </li>
                                    <li className="size">
                                      <label>Kích cỡ:</label>
                                      <span className="values">100</span>
                                    </li>
                                  </ul>
                                </div>
                                <ul className="product-detail-mb">
                                  <li className="mb-qty">
                                    <span>Số lượng:</span>
                                    <span className="value">1</span>
                                  </li>
                                  <li className="mb-oldprice">
                                    <span>Đơn giá:</span>
                                    <span className="value">
                                      <span className="price">199.000₫</span>
                                    </span>
                                  </li>
                                  <li className="mb-saleprice">
                                    <span>Giảm giá:</span>
                                    <span className="value">
                                      <span className="price">39.000₫</span>
                                    </span>
                                  </li>
                                  <li className="mb-total">
                                    <span>Thành tiền:</span>
                                    <span className="value">
                                      <span className="price">159.000₫</span>
                                    </span>
                                  </li>
                                </ul>
                              </div>
                              <a href="#" className="remove btn-remove">
                                Xóa
                              </a>
                            </div>
                          </li>
                        </ul>
                        <table className="table-total">
                          <tbody>
                            <tr className="qty-new">
                              <td>Tổng</td>
                              <td>1 sản phẩm</td>
                            </tr>
                            <tr className="total-old">
                              <td>Tổng giá bán</td>
                              <td>
                                <span className="price">199.000₫</span>
                              </td>
                            </tr>
                            <tr className="total-sale">
                              <td>Giảm giá</td>
                              <td>
                                <span className="price">-39.900₫</span>
                              </td>
                            </tr>
                            <tr className="grand_total_new">
                              <td>Tạm tính</td>
                              <td>
                                <span className="price">159.000₫</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="actions cart-actions">
                          <a href="#" className="checkout-button button">
                            Đặt hàng
                          </a>
                          <a href="#" className="cart-link button">
                            Xem giỏ hàng
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="cart-drop-down-nocount" className="cart-empty">
                    <div className="cart-header">
                      <span className="close-cart" />
                      <strong>Giỏ hàng</strong>
                    </div>
                    <div className="cart-empty-content">
                      <p className="empty">
                        Bạn chưa có sản phẩm nào trong giỏ hàng
                      </p>
                      <div className="actions">
                        <a href="#" className="button">
                          <span>Tiếp tục mua</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="header-bottom-mobile">
            <a href="#" className="link-home" />
            <a href="#" className="link-search" />
            <a href="#" className="link-location" />
            <a href="#" className="link-account" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    listCate: state.caphenyReducers.listCate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategory: (cate) => {
      dispatch(action.actGetCategory(cate));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
