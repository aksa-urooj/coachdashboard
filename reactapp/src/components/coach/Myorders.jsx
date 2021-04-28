import "./css/myorders.css";

const Myorders = () => {
  return (
    <>
      <div className="col-xl-10 col-lg-10 col-md-9 mt-2 maincontent">
        <div className="col-12 p-3  headingbox">
          <h3>My Inventory</h3>
        </div>
        <div className="row dashblock p-4">
          <div className="card col-lg-3 col-md-10 mb-4">
            <div className="card-body">
              <h5 className="card-title text-center ">Order 1</h5>
              <p className="card-text text-center">
                <strong>Product:</strong> <span>Why Course</span>
                <br />
                <strong>Date:</strong> <span>07/30/18</span>
                <br />
                <strong>Total:</strong> <span>$55.25</span>
                <br />
                <strong>Status:</strong> <span>In Progress</span>
                <br />
                <strong>Payment Method:</strong> <span>PayPal</span>
                <br />
                <button className="btn btn-outline-info ">Check Details</button>
              </p>
            </div>
          </div>

          <div className="card col-lg-3 col-md-10 mb-4">
            <div className="card-body">
              <h5 className="card-title text-center">Order 2</h5>
              <p className="card-text text-center">
                <strong>Product:</strong> <span>Why Course</span>
                <br />
                <strong>Date:</strong> <span>07/30/18</span>
                <br />
                <strong>Total:</strong> <span>$55.25</span>
                <br />
                <strong>Status:</strong> <span>In Progress</span>
                <br />
                <strong>Payment Method:</strong> <span>PayPal</span>
                <br />
                <button className="btn btn-outline-info ">Check Details</button>
              </p>
            </div>
          </div>

          <div className="card col-lg-3 col-md-10 mb-4">
            <div className="card-body">
              <h5 className="card-title text-center">Order 3</h5>
              <p className="card-text text-center">
                <strong>Product:</strong> <span>Why Course</span>
                <br />
                <strong>Date:</strong> <span>07/30/18</span>
                <br />
                <strong>Total:</strong> <span>$55.25</span>
                <br />
                <strong>Status:</strong> <span>In Progress</span>
                <br />
                <strong>Payment Method:</strong> <span>PayPal</span>
                <br />
                <button className="btn btn-outline-info ">Check Details</button>
              </p>
            </div>
          </div>

          <div className="card col-lg-3 col-md-10 mb-4">
            <div className="card-body">
              <h5 className="card-title text-center">Order 4</h5>
              <p className="card-text text-center">
                <strong>Product:</strong> <span>Why Course</span>
                <br />
                <strong>Date:</strong> <span>07/30/18</span>
                <br />
                <strong>Total:</strong> <span>$55.25</span>
                <br />
                <strong>Status:</strong> <span>In Progress</span>
                <br />
                <strong>Payment Method:</strong> <span>PayPal</span>
                <br />
                <button className="btn btn-outline-info ">Check Details</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myorders;
