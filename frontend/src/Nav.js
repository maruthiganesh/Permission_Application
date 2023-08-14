import navbar from "bootstrap";
function Nav() {
  const bt = `

  .navbar a.active {
    color:#fff !important;
    background-color: #04AA6D;
    border-radius:16px;
  }
  .navbar a:hover {
    color:#fff !important;
    background-color: #000;
    border-radius:16px;
  }

  .navbar{
    display:flex;
  }
  .navbar ul {
    
    padding:0;
    list-style:none;
    display:flex;
    flex:1 0 0%;
    justify-content:space-between;
  }
  

  @media only screen and (max-width: 575px) {
    
    .nav-item {
      display:flex;
      padding-top:2px;
      padding-bottom:2px;
      justify-content:center;
    }
    .navbar ul a{
      
      padding-left:20px;
      padding-right:20px
      
    }
  }
  @media(576px<=width<=991px) {
    .navbar{
      justify-content:center;
    }
    .navbar ul a{
      display:block;
      padding:5px 10px;
      text-align:center;
      
    }
  }
  @media(min-width:992px)
  {
    .navbar ul a{
      width:225px;
      display:block;
      padding:5px 10px;
      text-align:center;
      
    }
  }


  `;
  return (
    <nav
      className="navbar navbar-expand-sm navbar-light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <style>{bt}</style>
      <div className="container-fluid"  >
        <div className="navbar-brand">
          EasyApply
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-house-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                </svg>{" "}
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-window-fullscreen"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" />
                  <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H.5ZM1 5V2h14v3H1Zm0 1h14v8H1V6Z" />
                </svg>{" "}
                My applications
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bell-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                </svg>{" "}
                Notifications
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </svg> {" "}
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
