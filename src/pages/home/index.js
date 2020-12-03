import React, { Component } from "react";
import * as action from "./../../redux/action";
import { connect } from "react-redux";
import { map } from "jquery";
import { Link } from "react-router-dom";


class Index extends Component {
  componentDidMount() {
    this.props.getNewProduct();
    this.props.getListProduct();
  }

  renderNewProduct = () => {
    return this.props.listNewProduct.map((item, index) => {
      let img = JSON.parse(item.product_image)
      console.log(img[0])
      if (index < 4) {
        return (
          <li key={index} class="product-item item">
            <div class="product-info">
              <div class="product-image">
                <Link to={`/detail/${item.product_id}`} class="product-img">
                  <img
                    src={
                      `http://caphenystore.com/public/images/product/${JSON.parse(item.product_image)[0]}`
                    }
                    alt=""
                  />
                </Link>
              </div>
              <div class="product-detail">
                <h4 class="product-name">
                  <a>{item.product_name}</a>
                </h4>
                <div class="price-box">
                  {item.discount ? (
                    <p class="old-price">{item.product_price} đ</p>
                  ) : (
                    ""
                  )}
                  <p class="special-price">
                    {item.discount ? item.final_price : item.product_price} đ
                  </p>
                </div>
              </div>
            </div>
          </li>
        );
      }
    });
  };

  renderListProduct = () => {
    return this.props.listProduct.map((item, index) => {
      if (index < 4) {
        return (
          <li key={index} class="product-item item">
            <div class="product-info">
              <div class="product-image">
                <Link to={`/detail/${item.product_id}`} class="product-img">
                  <img
                               src={
                      `http://caphenystore.com/public/images/product/${JSON.parse(item.product_image)[0]}`
                    }
                    alt=""
                  />
                </Link>
              </div>
              <div class="product-detail">
                <h4 class="product-name">
                <a>{item.product_name}</a>
                </h4>
                <div class="price-box">
                  {item.discount ? (
                    <p class="old-price">{item.product_price} đ</p>
                  ) : (
                    ""
                  )}
                  <p class="special-price">
                    {item.discount ? item.final_price : item.product_price} đ
                  </p>
                </div>
              </div>
            </div>
          </li>
        );
      }
    });
  };

  render() {
    return (
      <div class="wrapper">
        <div class="page">
          <div class="main">
            <div class="slide-home">
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="d-block w-100"
                      src="https://canifa.s3.amazonaws.com/media/wysiwyg/ao-ni-nam-nu-home-banner.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="https://canifa.s3.amazonaws.com/media/wysiwyg/ao-ni-nam-nu-home-banner.jpg"
                      alt="Second slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="https://canifa.s3.amazonaws.com/media/wysiwyg/ao-ni-nam-nu-home-banner.jpg"
                      alt="Third slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="https://canifa.s3.amazonaws.com/media/wysiwyg/ao-ni-nam-nu-home-banner.jpg"
                      alt="Four slide"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div class="home-banner">
              <div class="banner-img">
                <a href="#">
                  <img
                    src="https://canifa.s3.amazonaws.com/media/wysiwyg/so-mi-nam-subcate.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div class="banner-img">
                <a href="#">
                  <img
                    src="https://canifa.s3.amazonaws.com/media/wysiwyg/so-mi-nam-subcate.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div class="new-product">
              <div class="block-new-product">
                <div class="block-title">
                  <h3 class="title">Sản phẩm mới</h3>
                  <div class="link">
                  {this.props.listCate.map((item,indes)=>{
                    return(
                      <Link className="ms-label" to={`product/${item.category_id}`}>
                      
                      {item.category_name}</Link>
                    )
                  })}
                    
                  </div>
                </div>
                <div class="block-new-content">
                  <div class="category-product">
                    <ul class="product-items product-grid">
                      {this.renderNewProduct()}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="hot-product">
              <div class="block-hot-product">
                <div class="block-title">
                  <h3 class="title">Sản phẩm bán chạy</h3>
                </div>
                <div class="block-content">
                  <div class="category-product">
                    <ul class="product-items product-grid">
                      {this.renderListProduct()}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="home-banner">
              <a href="#">
                <img
                  src="https://canifa.s3.amazonaws.com/media/wysiwyg/san-pham-gia-tot-new.jpg"
                  alt=""
                />
              </a>
            </div>
            <div class="block-service">
              <div class="service">
                <div class="item">
                  <div class="service-img">
                    <img
                      src="https://canifa.com/skin/frontend/canifa/canifa-2019/images/icon/service2.svg"
                      alt=""
                    />
                  </div>
                  <div class="service-detail">
                    <h3>
                      <a href="#">Quy định đổi trả</a>
                    </h3>
                    <p>
                      CANIFA sẵn sàng hỗ trợ đổi sản phẩm cho bạn trong vòng 15
                      ngày trên toàn hệ thống.
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div class="service-img">
                    <img
                      src="https://canifa.com/skin/frontend/canifa/canifa-2019/images/icon/service2.svg"
                      alt=""
                    />
                  </div>
                  <div class="service-detail">
                    <h3>
                      <a href="#">Tuyển dụng tại CAPHENY</a>
                    </h3>
                    <p>
                      CANIFA đang cần tuyển hơn 40 vị trí nhân viên bán hàng tại
                      Hà Nội, Hải Phòng, Vĩnh Yên, Nghệ An, Thái Nguyên; TX. Sơn
                      Tây, Hưng Yên (Sắp khai trương)
                    </p>
                  </div>
                </div>
                <div class="item">
                  <div class="service-img">
                    <img
                      src="https://canifa.com/skin/frontend/canifa/canifa-2019/images/icon/service2.svg"
                      alt=""
                    />
                  </div>
                  <div class="service-detail">
                    <h3>
                      <a href="#">Khách hàng thân thiết</a>
                    </h3>
                    <p>
                      Chính sách khách hàng thân thiết của CANIFA: khi mua đơn
                      hàng trị giá 5.000.000Đ, quý khách sẽ được cấp ngay thẻ
                      VIP có ưu đãi 10% và 20% khi sinh nhật.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listNewProduct: state.caphenyReducers.listNewProduct,
    listProduct: state.caphenyReducers.listProduct,
    listCate: state.caphenyReducers.listCate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNewProduct: () => {
      dispatch(action.actGetNewProduct());
    },
    getListProduct: () => {
      dispatch(action.actGetListProduct());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
