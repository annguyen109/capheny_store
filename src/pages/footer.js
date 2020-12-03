import React from 'react'

export default function Footer() {
    return (
        <div className="wrapper">
      <div className="page">
        <div className="site-footer footer-desktop">
          <div className="footer-container">
            <div className="f-column1 col-sm-2">
              <h3 className="title">Công ty cổ phần Capheny</h3>
              <p>
                Số ĐKKD: 0107574310, ngày cấp: 23/09/2016. Nơi cấp: Sở Kế hoạch
                và đầu tư Hà Nội
              </p>
              <p>
                Địa chỉ liên hệ: Phòng 301 Tòa nhà GP Invest, 170 La Thành, P. Ô
                Chợ Dừa, Q. Đống Đa, Hà Nội
              </p>
              <p>
                Điện thoại: +8424 - 7303.0222 Fax: +8424 - 6277.6419 Email:
                hello@canifa.com
              </p>
              <div className="img-register">
                <img
                  src="https://canifa.com/skin/frontend/canifa/canifa-2019/images/icon/img-dang-ky.svg"
                  alt
                />
              </div>
              <div className="copyright">© 2020 CAPHENY</div>
            </div>
            <div className="f-column2 col-sm-2 col-sm-offet-1">
              <h3 className="title">Thương hiệu</h3>
              <ul>
                <li>
                  <a href="#">Giới thiệu</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Tuyển dụng</a>
                </li>
                <li>
                  <a href="#">Với cộng đồng</a>
                </li>
                <li>
                  <a href="#">Hệ thống cửa hàng</a>
                </li>
                <li>
                  <a href="#">Liên hệ</a>
                </li>
              </ul>
            </div>
            <div className="f-column3 col-sm-2">
              <h3 className="title">Hỗ trợ</h3>
              <ul>
                <li>
                  <a href="#">Đặt đồng phục</a>
                </li>
                <li>
                  <a href="#">FAQs - Hỏi đáp</a>
                </li>
                <li>
                  <a href="#">Chính sách vận chuyển</a>
                </li>
                <li>
                  <a href="#">Hướng dẫn chọn kích cỡ</a>
                </li>
                <li>
                  <a href="#">Hướng dẫn thanh toán</a>
                </li>
                <li>
                  <a href="#">Kiểm tra đơn hàng</a>
                </li>
                <li>
                  <a href="#">Quy định đổi hàng</a>
                </li>
                <li>
                  <a href="#">Tra cứu điểm thẻ</a>
                </li>
                <li>
                  <a href="#">Chính sách khách hàng thân thiết</a>
                </li>
                <li>
                  <a href="#">Chính sách bảo mật thông tin</a>
                </li>
              </ul>
            </div>
            <div className="f-column4 col-sm-4 col-sm-offet-1">
              <div className="footer-subscribe">
                <h3 className="title">Đăng ký nhận tin</h3>
                <div className="block block-subscribe">
                  <form
                    action="https://canifa.com/newsletter/subscriber/new/"
                    method="post"
                    id="newsletter-validate-detail"
                  >
                    <div className="block-content">
                      <div className="input-box">
                        <input
                          type="email"
                          autoCapitalize="off"
                          autoCorrect="off"
                          spellCheck="false"
                          name="email"
                          id="newsletter"
                          title="Đăng ký nhận bản tin"
                          className="input-text required-entry validate-email"
                        />
                      </div>
                      <div className="actions">
                        <button type="submit" title="Gửi" className="button">
                          <span>
                            <span>Gửi</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="footer-social">
                <h3 className="title">Kết nối</h3>
                <a
                  className="social-icon facebook-icon sprite interactive interactive-hover-button"
                  target="_blank"
                  href="#"
                >
                  <img
                    src="https://canifa.com/skin/frontend/canifa/canifa-2019/images/icon/facebook-icon.svg"
                    alt
                  />
                </a>
                <a
                  className="social-icon instagram-icon sprite interactive interactive-hover-button"
                  target="_blank"
                  href="#"
                >
                  <img
                    src="https://canifa.com/skin/frontend/canifa/canifa-2019/images/icon/instagram-icon.svg"
                    alt
                  />
                </a>
                <a
                  className="social-icon youtube-icon sprite interactive interactive-hover-button"
                  target="_blank"
                  href="#"
                >
                  <img
                    src="https://canifa.com/skin/frontend/canifa/canifa-2019/images/icon/youtube-icon.svg"
                    alt
                  />
                </a>
              </div>
              <div className="footer-logo">
                <div className="img-barcode">
                  <img
                    src="https://canifa.s3.amazonaws.com/media/wysiwyg/QR-canifa_1.jpg"
                    alt
                  />
                </div>
                <div className="img-app">
                  <a href="#" target="_blank">
                    <img
                      src="https://canifa.com/skin/frontend/canifa/canifa-2019/images/icon/img-app1.png"
                      alt
                    />
                  </a>
                  <a href="#" target="_blank">
                    <img
                      src="https://canifa.com/skin/frontend/canifa/canifa-2019/images/icon/img-app2.png"
                      alt
                    />
                  </a>
                </div>
                <div className="img-payment-method">
                  <img
                    src="https://canifa.com/skin/frontend/canifa/canifa-2019/images/icon/img-payment-method.png"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer footer-mobile">
          <ul className="link">
            <li>
              <a href="#">Quy định đổi hàng</a>
            </li>
            <li>
              <a href="#">Tuyển dụng tại Capheny</a>
            </li>
            <li>
              <a href="#">Chính sách khách hàng thân thiết</a>
            </li>
          </ul>
          <div className="footer-social">
            <h3 className="title">Kết nối</h3>
            <a
              className="social-icon facebook-icon sprite interactive interactive-hover-button"
              target="_blank"
              href="#"
            >
              <img
                src="https://canifa.com/skin/frontend/canifa/canifa-2019/images/icon/facebook-icon.svg"
                alt
              />
            </a>
            <a
              className="social-icon instagram-icon sprite interactive interactive-hover-button"
              target="_blank"
              href="#"
            >
              <img
                src="https://canifa.com/skin/frontend/canifa/canifa-2019/images/icon/instagram-icon.svg"
                alt
              />
            </a>
            <a
              className="social-icon youtube-icon sprite interactive interactive-hover-button"
              target="_blank"
              href="#"
            >
              <img
                src="https://canifa.com/skin/frontend/canifa/canifa-2019/images/icon/youtube-icon.svg"
                alt
              />
            </a>
          </div>
          <div className="copyright">© 2020 CAPHENY</div>
        </div>
      </div>
    </div>
    )
}
