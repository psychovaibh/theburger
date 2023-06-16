import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";

export default function Home(props) {
  return (
    <>
      <div className="hero_area">
        <div className="bg-box">
          <img src="/images/hero-bg.jpg" alt="" />
        </div>
        {/* <!-- slider section --> */}
        <section className="slider_section ">
          <div
            id="customCarousel1"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7 col-lg-6 ">
                      <div className="detail-box">
                        <h1>Fast Food Restaurant</h1>
                        <p>
                          Doloremque, itaque aperiam facilis rerum, commodi,
                          temporibus sapiente ad mollitia laborum quam quisquam
                          esse error unde. Tempora ex doloremque, labore, sunt
                          repellat dolore, iste magni quos nihil ducimus libero
                          ipsam.
                        </p>
                        <div className="btn-box">
                          <Link to="" className="btn1">
                            Order Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7 col-lg-6 ">
                      <div className="detail-box">
                        <h1>Fast Food Restaurant</h1>
                        <p>
                          Doloremque, itaque aperiam facilis rerum, commodi,
                          temporibus sapiente ad mollitia laborum quam quisquam
                          esse error unde. Tempora ex doloremque, labore, sunt
                          repellat dolore, iste magni quos nihil ducimus libero
                          ipsam.
                        </p>
                        <div className="btn-box">
                          <Link to="" className="btn1">
                            Order Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7 col-lg-6 ">
                      <div className="detail-box">
                        <h1>Fast Food Restaurant</h1>
                        <p>
                          Doloremque, itaque aperiam facilis rerum, commodi,
                          temporibus sapiente ad mollitia laborum quam quisquam
                          esse error unde. Tempora ex doloremque, labore, sunt
                          repellat dolore, iste magni quos nihil ducimus libero
                          ipsam.
                        </p>
                        <div className="btn-box">
                          <Link to="" className="btn1">
                            Order Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <ol className="carousel-indicators">
                <li
                  data-target="#customCarousel1"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#customCarousel1" data-slide-to="1"></li>
                <li data-target="#customCarousel1" data-slide-to="2"></li>
              </ol>
            </div>
          </div>
        </section>
        {/* <!-- end slider section --> */}
      </div>

      {/* //   <!-- offer section --> */}

      <section className="offer_section layout_padding-bottom">
        <div className="offer_container">
          <div className="container ">
            <div className="row">
              <div className="col-md-6  ">
                <div className="box ">
                  <div className="img-box">
                    <img src="/images/o1.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Tasty Thursdays</h5>
                    <h6>
                      <span>20%</span> Off
                    </h6>
                    <Link to="">
                      Order Now{" "}
                      <svg
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 456.029 456.029"
                        style={{ enableBackground: "new 0 0 456.029 456.029" }}
                        xmlspace="preserve"
                      >
                        <g>
                          <g>
                            <path
                              d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                     c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                     C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                     c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                     C457.728,97.71,450.56,86.958,439.296,84.91z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                     c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                            />
                          </g>
                        </g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6  ">
                <div className="box ">
                  <div className="img-box">
                    <img src="/images/o2.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Pizza Days</h5>
                    <h6>
                      <span>15%</span> Off
                    </h6>
                    <Link to="">
                      Order Now{" "}
                      <svg
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 456.029 456.029"
                        style={{ enableBackground: "new 0 0 456.029 456.029" }}
                        xmlspace="preserve"
                      >
                        <g>
                          <g>
                            <path
                              d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                     c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                     C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                     c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                     C457.728,97.71,450.56,86.958,439.296,84.91z"
                            />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path
                              d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                     c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                            />
                          </g>
                        </g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                        <g></g>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end offer section --> */}

      {/* <!-- food section --> */}

      <section className="food_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Menu</h2>
          </div>

          <ul className="filters_menu">
            <li className="active" data-filter="*">
              All
            </li>
            <li data-filter=".burger">Burger</li>
            <li data-filter=".pizza">Pizza</li>
            <li data-filter=".pasta">Pasta</li>
            <li data-filter=".fries">Fries</li>
          </ul>

          <div className="filters-content">
            <div className="row grid">
              <div className="col-sm-6 col-lg-4 all pizza">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src="/images/f1.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Delicious Pizza</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="options">
                        <h6>$20</h6>
                        <Link to="">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 456.029 456.029"
                            style={{
                              enableBackground: "new 0 0 456.029 456.029",
                            }}
                            xmlspace="preserve"
                          >
                            <g>
                              <g>
                                <path
                                  d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                         c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                         C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                         c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                         C457.728,97.71,450.56,86.958,439.296,84.91z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                         c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                                />
                              </g>
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 all burger">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src="/images/f2.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Delicious Burger</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="options">
                        <h6>$15</h6>
                        <Link to="">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 456.029 456.029"
                            style={{
                              enableBackground: "new 0 0 456.029 456.029",
                            }}
                            xmlspace="preserve"
                          >
                            <g>
                              <g>
                                <path
                                  d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                         c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                         C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                         c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                         C457.728,97.71,450.56,86.958,439.296,84.91z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                         c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                                />
                              </g>
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 all pizza">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src="/images/f3.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Delicious Pizza</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="options">
                        <h6>$17</h6>
                        <Link to="">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 456.029 456.029"
                            style={{
                              enableBackground: "new 0 0 456.029 456.029",
                            }}
                            xmlspace="preserve"
                          >
                            <g>
                              <g>
                                <path
                                  d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                         c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                         C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                         c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                         C457.728,97.71,450.56,86.958,439.296,84.91z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                         c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                                />
                              </g>
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 all pasta">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src="/images/f4.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Delicious Pasta</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="options">
                        <h6>$18</h6>
                        <Link to="">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 456.029 456.029"
                            style={{
                              enableBackground: "new 0 0 456.029 456.029",
                            }}
                            xmlspace="preserve"
                          >
                            <g>
                              <g>
                                <path
                                  d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                         c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                         C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                         c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                         C457.728,97.71,450.56,86.958,439.296,84.91z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                         c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                                />
                              </g>
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 all fries">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src="/images/f5.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>French Fries</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="options">
                        <h6>$10</h6>
                        <Link to="">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 456.029 456.029"
                            style={{
                              enableBackground: "new 0 0 456.029 456.029",
                            }}
                            xmlspace="preserve"
                          >
                            <g>
                              <g>
                                <path
                                  d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                         c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                         C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                         c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                         C457.728,97.71,450.56,86.958,439.296,84.91z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                         c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                                />
                              </g>
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 all pizza">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src="/images/f6.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Delicious Pizza</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="options">
                        <h6>$15</h6>
                        <Link to="">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 456.029 456.029"
                            style={{
                              enableBackground: "new 0 0 456.029 456.029",
                            }}
                            xmlspace="preserve"
                          >
                            <g>
                              <g>
                                <path
                                  d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                         c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                         C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                         c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                         C457.728,97.71,450.56,86.958,439.296,84.91z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                         c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                                />
                              </g>
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 all burger">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src="/images/f7.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Tasty Burger</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="options">
                        <h6>$12</h6>
                        <Link to="">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 456.029 456.029"
                            style={{
                              enableBackground: "new 0 0 456.029 456.029",
                            }}
                            xmlspace="preserve"
                          >
                            <g>
                              <g>
                                <path
                                  d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                         c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                         C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                         c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                         C457.728,97.71,450.56,86.958,439.296,84.91z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                         c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                                />
                              </g>
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 all burger">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src="/images/f8.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Tasty Burger</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="options">
                        <h6>$14</h6>
                        <Link to="">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 456.029 456.029"
                            style={{
                              enableBackground: "new 0 0 456.029 456.029",
                            }}
                            xmlspace="preserve"
                          >
                            <g>
                              <g>
                                <path
                                  d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                         c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                         C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                         c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                         C457.728,97.71,450.56,86.958,439.296,84.91z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                         c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                                />
                              </g>
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 all pasta">
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src="/images/f9.png" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Delicious Pasta</h5>
                      <p>
                        Veniam debitis quaerat officiis quasi cupiditate quo,
                        quisquam velit, magnam voluptatem repellendus sed eaque
                      </p>
                      <div className="options">
                        <h6>$10</h6>
                        <Link to="">
                          <svg
                            version="1.1"
                            id="Capa_1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 456.029 456.029"
                            style={{
                              enableBackground: "new 0 0 456.029 456.029",
                            }}
                            xmlspace="preserve"
                          >
                            <g>
                              <g>
                                <path
                                  d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                         c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                         C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                         c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                         C457.728,97.71,450.56,86.958,439.296,84.91z"
                                />
                              </g>
                            </g>
                            <g>
                              <g>
                                <path
                                  d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                         c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"
                                />
                              </g>
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <Link to="">View More</Link>
          </div>
        </div>
      </section>

      {/* <!-- end food section --> */}

      {/* <!-- about section --> */}

      <section className="about_section layout_padding">
        <div className="container  ">
          <div className="row">
            <div className="col-md-6 ">
              <div className="img-box">
                <img src="/images/about-img.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>We Are Feane</h2>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All
                </p>
                <Link to="">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- end about section --> */}

      {/* <!-- book section --> */}
      <section className="book_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Book A Table</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form_container">
                <form action="">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div>
                    <select className="form-control nice-select wide">
                      <option value="" disabled selected>
                        How many persons?
                      </option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                    </select>
                  </div>
                  <div>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="btn_box">
                    <button>Book Now</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="map_container ">
                <div id="googleMap">
                  <div className="mapouter">
                    <div className="gmap_canvas">
                      <iframe title="map"
                        width="600"
                        height="500"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=k&z=13&ie=UTF8&iwloc=&output=embed"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end book section --> */}

      {/* <!-- client section --> */}

      <section className="client_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container heading_center psudo_white_primary mb_45">
            <h2>What Says Our Customers</h2>
          </div>
          <div className="carousel-wrap row ">
            <OwlCarousel className="owl-theme" loop margin={10} items={2} nav>
              <div className="item">
                <div className="box">
                  <div className="detail-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </p>
                    <h6>Moana Michell</h6>
                    <p>magna aliqua</p>
                  </div>
                  <div className="img-box">
                    <img src="/images/client1.jpg" alt="" className="box-img" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div className="detail-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </p>
                    <h6>Mike Hamell</h6>
                    <p>magna aliqua</p>
                  </div>
                  <div className="img-box">
                    <img src="/images/client2.jpg" alt="" className="box-img" />
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>

      {/* <!-- end client section --> */}
    </>
  );
}
