function Login2(){
const bgcss= `


.account-box
{
    border: 2px solid rgba(153, 153, 153, 0.75);
    width:20rem;
    border-radius: 20px !important;
    box-shadow:3px 2px 2px 1px #888888;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    -khtml-border-radius: 2px;
    -o-border-radius: 2px;
    z-index: 3;
    font-size: 13px !important;
    font-family: "Gill Sans", cursive;;
    background-color: #ffffff;
    padding: 20px;
}
.logo
{
    font-family:"Gill Sans", cursive;;
    text-align: center;
    font-weight:bold;
    font-size:2rem;
    margin-bottom:3rem;
    position: relative;
}

.forgotLnk
{
    text-decoration:none;
    margin-top: 10px;
    display: block;
    text-align:center;
}

.purple-bg
{
    background-color: #6E329D;
    color: #fff;
}
.yellow-bg
{
    background-color:#fcd319;
    color:#0a0a0a;
}
.or-box
{
    position: relative;
    border-top: 1px solid #dfdfdf;
    padding-top: 20px;
    margin-top:20px;
}
.or
{
    color: #666666;
    background-color: #ffffff;
    position: absolute;
    text-align: center;
    top: -8px;
    width: 40px;
    left: 120px;
}
.account-box .btn:hover
{
    border-color:black;
}
.btn-google
{
    background-color: #d93447;
    color: #ffff;
    font-weight:bold;
}
.form-signin{
    display:flex;
    flex-direction:column;
}
    `

    return(
        
        
        
        <div className="container min-vh-100 d-flex align-items-center ">
        <style>{bgcss}</style>
    <div className="row" style={{margin:'auto' ,display:'flex'}} >
        <div className="col-md-3 col-md-offset-4" >
            <div className="account-box">
                <div className="logo ">
                    Welcome
                </div>
                <form className="form-signin" action="#">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email" required autofocus />
                </div>
                <br/>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" required />
                </div>
                <br/>
                <label className="checkbox">
                    <input type="checkbox" value="remember-me" />
                    Keep me signed in
                </label>
                <br/>
                <button className="btn btn-lg btn-block purple-bg" type="submit">
                    Sign in</button>
                </form>
                <a className="forgotLnk" href="#">I forgot my Password</a>
                <div className="or-box">
                    <span className="or">OR</span>
                    <div className="row">
                        <div className="col-md-12 row-block" style={{display:'flex',justifyContent:'center'}}>
                            <a href="#" className="btn btn-google btn-block">Google</a>
                        </div>
                    </div>
                </div>
                <div className="or-box row-block">
                    <div className="row">
                        <div className="col-md-12 row-block" style={{display:'flex',justifyContent:'center'}}>
                            <a href="#" className="btn btn-lg btn-block yellow-bg">Register</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>


    );


}
export default Login2;