
const Home = () => {
  return (
    <>
      <div className="col-xl-10 col-lg-10 col-md-9 mt-2 maincontent">
        <div className="col-12 p-3  headingbox">
          <h3>Dashboard</h3>
        </div>
        <div className="row dashblock p-4">
          <div className="card col-lg-3 col-md-10 mb-4">
            <div className="card-body">
              <h6 className="card-title">KNOW YOUR WHY</h6>
              <p className="card-text">
                Simon started a movement to inspire people to do the things that
                inspire them.{" "}
              </p>
              <a href="#" className="btn btn-outline-warning">
                Purchase WHY $25
              </a>
            </div>
          </div>

          <div className="card col-lg-3 col-md-10 mb-4">
            <div className="card-body">
              <h6 className="card-title">KNOW YOUR HOW</h6>
              <p className="card-text">
                You have your WHY and now you have the worthwhile and infinite
                task of living it.{" "}
              </p>
              <a href="#" className="btn btn-outline-warning">
                Purchase HOW $50
              </a>
            </div>
          </div>

          <div className="card col-lg-3 col-md-10 mb-4">
            <div className="card-body">
              <h6 className="card-title">KNOW YOUR WHAT</h6>
              <p className="card-text">
                While WHY is easy, finding the right words for your WHY is a
                challenge.
              </p>
              <a href="#" className="btn btn-outline-warning">
                Purchase WHAT $190
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
