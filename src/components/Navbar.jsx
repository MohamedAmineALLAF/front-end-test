function TopNav({ bell, avatar, home }) {
    return (
      <div className="top-nav">
        <div className="navbar">
          <div className="nav">
            <p className="dashboard-title">Dashboard</p>
            <div className="profile">
              <div>
                <img src={bell} alt="bell" />
              </div>
              <div className="login">
                <div className="login-details">
                  <span className="login-name">Anima Agrawal</span>
                  <br />
                  <span className="login-job">Companyy LLC</span>
                </div>
                <div className="avatar-image">
                  <img src={avatar} alt="avatar" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="breadcrumbs">
          <div className="content">
            <img src={home} alt="home" />
            <div className="item">
              {" / "}
              Home{" / "}
              Dashboard{" / "}
              Page
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default TopNav;
  