import React, { Component } from "react";
import * as action from "./../../../redux/action";
import { connect } from "react-redux";

class Index extends Component {
  constructor() {
    super();
    this.state = {
      activeImg: "",
      idProduct: "",
      count:0
    };
  }

  handleChangeImg(e) {
    const imagesPath = document.getElementById(e.target.id).getAttribute("src");
    document.getElementById("imagesChange").setAttribute("src", imagesPath);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    this.props.getDetailProduct(id);
    this.setState({
      idProduct: id,
    });
  }

  renderSize = () => {
    if (this.props.detailProduct.size) {
      return this.props.detailProduct.size.map((size, indexSize) => {
        return (
          <li>
            <a href="#">
              <span>{size.size}</span>
            </a>
          </li>
        );
      });
    }
  };
  renderColor = () => {
    if (this.props.detailProduct.color) {
      return this.props.detailProduct.color.map((color, indexColor) => {
        let colorr = `#${color.color}`;

        return (
          <li>
            <a className="swatch-link" href="#">
              <div
                style={{ background: colorr, width: "25px", height: "25px" }}
              ></div>
            </a>
          </li>
        );
      });
    }
  };

  renderBigImg = () => {
    if (this.props.detailProduct.product_image) {
      return (
        <img
          src={`http://caphenystore.com/public/images/product/${
            JSON.parse(this.props.detailProduct.product_image)[0]
          }`}
          alt
          id="imagesChange"
        />
      );
    }
  };

  //Counter react
  state = { count: 0 };
  
  increment = () => {
    this.setState({
      count: this.state.count + 1 
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    const originalString = `
  ${this.props.detailProduct.description}
`;
    const description = originalString.replace(/(<([^>]+)>)/gi, "");

    return (
      <div className="wrapper">
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
        <section className="body-detail">
          <div className="row">
            <div className="col-lg-2 list-image">
              <ul className="detail-menu">
                <li>
                  <img
                    src="https://canifa.s3.amazonaws.com/media/catalog/product/2/t/2tw20w013-sb592-1.jpg"
                    alt
                    id="imagesOne"
                    onClick={this.handleChangeImg}
                  />
                </li>
                <li>
                  <img
                    src="https://canifa.s3.amazonaws.com/media/catalog/product/2/t/2tw20w013-sb592-2.jpg"
                    alt
                    id="imagesTwo"
                    onClick={this.handleChangeImg}
                  />
                </li>
                <li>
                  <img
                    src="https://canifa.s3.amazonaws.com/media/catalog/product/2/t/2tw20w013-sb592-4.jpg"
                    alt
                    id="imagesThree"
                    onClick={this.handleChangeImg}
                  />
                </li>
                <li>
                  <img
                    src="https://canifa.s3.amazonaws.com/media/catalog/product/2/t/2tw20w013-sb592-110-3.jpg"
                    alt
                    id="imagesFour"
                    onClick={this.handleChangeImg}
                  />
                </li>
              </ul>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="detail-hover">{this.renderBigImg()}</div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="product-describe">
                <div>
                  <h1 className="product-name">
                    {this.props.detailProduct.product_name}
                  </h1>
                </div>
                <div className="product-code">
                  <span>Mã: {this.props.detailProduct.product_id}</span>
                </div>
                <div>
                  <span className="product-price">
                    {this.props.detailProduct.discount
                      ? this.props.detailProduct.final_price
                      : this.props.detailProduct.product_price}
                  </span>
                </div>
                <div className="product-color">
                  <span>MÀU SẮC:</span>
                  <ul className="product__color--item">{this.renderColor()}</ul>
                </div>
                <div className="product-size">
                  <span>KÍCH CỠ:</span>
                  <ul className="product__size--item">{this.renderSize()}</ul>
                  <div className="product__size--small">
                    Tư vấn chọn kích cỡ
                  </div>
                </div>
                <div className="qty-cart">
                  <span>SỐ LƯỢNG</span>

                  <div className="cart-qty">
                    <div className="box-qty">
                      <input
                        type="text"
                        value={this.state.count}
                        minLength="0"
                        name="qty"
                        id="qty"
                        className="btn-qty"
                      />
                      <div class="control-qty">
                        <a
                          class="btn-number"
                          onClick={this.increment}
                        ></a>
                        <a
                          class="btn-number"
                          onClick={this.decrement}
                        ></a>
                      </div>
                    </div>
                    <div className="qty-about">
                      <p>Miễn phí vận chuyển cho đơn hàng từ 499k</p>
                    </div>
                  </div>
                </div>
                <div className="btn-add">
                  <button type="button" className="btn-add-card">
                    THÊM VÀO GIỎ
                  </button>
                </div>
                <div className="product-detail-tab">
                  <div className="detail-describe">
                    <h3>MÔ TẢ</h3>
                    {description}
                  </div>
                  <div className="detail-material">
                    <h3>CHẤT LIỆU</h3>
                    <p>98% cotton 2% spandex.</p>
                  </div>
                  <div className="detail-manual">
                    <h3>HƯỚNG DẪN SỬ DỤNG</h3>
                    <p>Giặt máy ở chế độ nhẹ, nhiệt độ thường.</p>
                    <p>Không sử dụng hóa chất tẩy có chứa clo.</p>
                    <p>Phơi trong bóng mát.</p>
                    <p>Sấy thùng chế độ nhẹ nhàng.</p>
                    <p>Là ở nhiệt độ trung bình 150 độ C.</p>
                    <p>Giặt với sản phẩm cùng màu.</p>
                  </div>
                  <div className="detail-model">
                    <h3>THÔNG SỐ NGƯỜI MẪU</h3>
                    <p>Chiều cao: 163cm</p>
                    <p>Cân nặng: 46kg</p>
                    <p>Mặc áo size: S</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="similar-product">
            <div className="container">
              <h2 className="similar-title">SẢN PHẨM TƯƠNG TỰ</h2>
              <div className="row">
                <div className="col-md-2 col-4 card-custom">
                  <div className="card">
                    <a href="#">
                      <img
                        src="https://canifa.s3.amazonaws.com/media/catalog/product/2/t/2tw20w013-sb592-1.jpg"
                        className="card-img-top"
                        alt="Bo mac nha nu"
                      />
                    </a>
                    <div className="products">
                      <span className="products__name">
                        <a href="#">Áo polo Nam</a>
                      </span>
                      <p className="products__price">399.000₫</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-4 card-custom">
                  <div className="card">
                    <a href="#">
                      <img
                        src="https://canifa.s3.amazonaws.com/media/catalog/product/2/t/2tw20w013-sb592-1.jpg"
                        className="card-img-top"
                        alt="Bo mac nha nu"
                      />
                    </a>
                    <div className="products">
                      <span className="products__name">
                        <a href="#">Áo polo Nam</a>
                      </span>
                      <p className="products__price">399.000₫</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-4 card-custom">
                  <div className="card">
                    <a href="#">
                      <img
                        src="https://canifa.s3.amazonaws.com/media/catalog/product/2/t/2tw20w013-sb592-1.jpg"
                        className="card-img-top"
                        alt="Bo mac nha nu"
                      />
                    </a>
                    <div className="products">
                      <span className="products__name">
                        <a href="#">Áo polo Nam</a>
                      </span>
                      <p className="products__price">399.000₫</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-4 card-custom">
                  <div className="card">
                    <a href="#">
                      <img
                        src="https://canifa.s3.amazonaws.com/media/catalog/product/2/t/2tw20w013-sb592-1.jpg"
                        className="card-img-top"
                        alt="Bo mac nha nu"
                      />
                    </a>
                    <div className="products">
                      <span className="products__name">
                        <a href="#">Áo polo Nam</a>
                      </span>
                      <p className="products__price">399.000₫</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-4 card-custom">
                  <div className="card">
                    <a href="#">
                      <img
                        src="https://canifa.s3.amazonaws.com/media/catalog/product/2/t/2tw20w013-sb592-1.jpg"
                        className="card-img-top"
                        alt="Bo mac nha nu"
                      />
                    </a>
                    <div className="products">
                      <span className="products__name">
                        <a href="#">Áo polo Nam</a>
                      </span>
                      <p className="products__price">399.000₫</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-4 card-custom">
                  <div className="card">
                    <a href="#">
                      <img
                        src="https://canifa.s3.amazonaws.com/media/catalog/product/2/t/2tw20w013-sb592-1.jpg"
                        className="card-img-top"
                        alt="Bo mac nha nu"
                      />
                    </a>
                    <div className="products">
                      <span className="products__name">
                        <a href="#">Áo polo Nam</a>
                      </span>
                      <p className="products__price">399.000₫</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.caphenyReducers.detailProduct);
  return {
    detailProduct: state.caphenyReducers.detailProduct,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDetailProduct: (id) => {
      dispatch(action.actGetDetailProduct(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
