import React from "react";

export default function Book(props) {
  return (
    <>
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
                      <iframe
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
    </>
  );
}
