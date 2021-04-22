import "./css/myaccount.css";



const Myaccount=()=>{
return (
    <>

<div className="col-xl-10 col-lg-10 col-md-9 mt-2 maincontent">
    <div className="col-12 p-3  headingbox">
        <h3>My Account</h3>
    </div>
<div className="row ">

<div className="col-md-4  userprofilecard">
<div className="card  text-center">
  <div className="card-body">
    <h5 className="card-title">John Doe</h5>
    <p className="card-text">
    <h6>Current Level</h6>
    <div className="row">
      <div className="col">Student</div>
      <div className="col">Coach</div>
    </div>
    <div className="progress">
  <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
    </p>
   
  </div>
</div>
</div>

    <div className="col-md-7 mt-4 p-4 updateprofileform ">
    <form className="row g-3">
    <div className="row p-2 formheading">
    <h6>Account Details</h6>
    </div>
  <div className="col-md-6">
    <label for="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="col-12">
    <label for="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="col-md-6">
    <label for="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity"/>
  </div>
  <div className="col-md-4">
    <label for="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-2">
    <label for="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip"/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Update Profile</button>
  </div>
</form>
    </div>
    </div>
</div>
    </>
)
}

export default Myaccount;