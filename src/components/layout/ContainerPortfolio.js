import React from 'react'

class ContainerPortfolio extends React.Component {
  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-sm-12 col-md-12 col-xs-12">
                    <div className="card hovercard">
                        <div className="cardheader">
                        </div>
                        <div className="avatar">
                            <img alt="" src={require('../common/images/dathm-img.jpg')} />
                        </div>
                        <div className="overlay">
                            <div className="row">
                                <div className="hidden-lg hidden-md col-sm-12 col-xs-12">
                                    <div className="block1">
                                        <div className = "myinfo">
                                            <p>
                                            MSSV: <b>1312120</b>
                                            </p>
                                            <p>
                                            Full Name: <b>HA MINH DAT</b>
                                            </p>
                                            <p>
                                            Address: <b>Ho Chi Minh City, Vietnam.</b>
                                            </p>
                                            <p>
                                            Phone: <b>098-352-23-69.</b>
                                            </p>
                                            <p>
                                            Email: <b>dathm.dev@gmail.com</b>
                                            </p>
                                        </div>
                                        <div className="category form-horizontal">
                                            <div><h1>SKILLS</h1></div>
                                            <div className="form-group">
                                                <label htmlFor className="item col-sm-2 col-xs-2">Javascript </label>
                                                <div className="stars">
                                                    <form action="">
                                                        <input className="star star-5" id="star-5" type="radio" name="star" />
                                                        <label htmlFor className="star star-5" for="star-5"></label>
                                                        <input className="star star-4" id="star-4" type="radio" name="star" checked/>
                                                        <label htmlFor className="star star-4" for="star-4"></label>
                                                        <input className="star star-3" id="star-3" type="radio" name="star"/>
                                                        <label htmlFor className="star star-3" for="star-3"></label>
                                                        <input className="star star-2" id="star-2" type="radio" name="star"/>
                                                        <label htmlFor className="star star-2" for="star-2"></label>
                                                        <input className="star star-1" id="star-1" type="radio" name="star"/>
                                                        <label htmlFor className="star star-1" for="star-1"></label>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor className="item col-sm-2 col-xs-12">Reactjs </label>
                                                <div className="stars">
                                                    <form action="">
                                                        <input className="star star-10" id="star-10" type="radio" name="star"/>
                                                        <label htmlFor className="star star-10" for="star-10"></label>
                                                        <input className="star star-9" id="star-9" type="radio" name="star" checked />
                                                        <label htmlFor className="star star-9" for="star-9"></label>
                                                        <input className="star star-8" id="star-8" type="radio" name="star"/>
                                                        <label htmlFor className="star star-8" for="star-8"></label>
                                                        <input className="star star-7" id="star-7" type="radio" name="star"/>
                                                        <label htmlFor className="star star-7" for="star-7"></label>
                                                        <input className="star star-6" id="star-6" type="radio" name="star"/>
                                                        <label htmlFor className="star star-6" for="star-6"></label>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor className="item col-sm-2 col-xs-12">Work group </label>
                                                <div className="stars">
                                                    <form action="">
                                                        <input className="star star-15" id="star-15" type="radio" name="star" checked />
                                                        <label htmlFor className="star star-15" for="star-15"></label>
                                                        <input className="star star-14" id="star-14" type="radio" name="star" />
                                                        <label htmlFor className="star star-14" for="star-14"></label>
                                                        <input className="star star-13" id="star-13" type="radio" name="star"/>
                                                        <label htmlFor className="star star-13" for="star-13"></label>
                                                        <input className="star star-12" id="star-12" type="radio" name="star"/>
                                                        <label htmlFor className="star star-12" for="star-12"></label>
                                                        <input className="star star-11" id="star-11" type="radio" name="star"/>
                                                        <label htmlFor className="star star-11" for="star-11"></label>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor className="item col-sm-2 col-xs-12">C/C++</label>
                                                <div className="stars">
                                                    <form action="">
                                                        <input className="star star-20" id="star-20" type="radio" name="star"/>
                                                        <label htmlFor className="star star-20" for="star-20"></label>
                                                        <input className="star star-19" id="star-19" type="radio" name="star" checked />
                                                        <label htmlFor className="star star-19" for="star-19"></label>
                                                        <input className="star star-18" id="star-18" type="radio" name="star"/>
                                                        <label htmlFor className="star star-18" for="star-18"></label>
                                                        <input className="star star-17" id="star-17" type="radio" name="star"/>
                                                        <label htmlFor className="star star-17" for="star-17"></label>
                                                        <input className="star star-16" id="star-16" type="radio" name="star"/>
                                                        <label htmlFor className="star star-16" for="star-16"></label>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor className="item col-sm-2 col-xs-12">C#</label>
                                                <div className="stars">
                                                    <form action="">
                                                        <input className="star star-25" id="star-25" type="radio" name="star"/>
                                                        <label htmlFor className="star star-25" for="star-25"></label>
                                                        <input className="star star-24" id="star-24" type="radio" name="star"/>
                                                        <label htmlFor className="star star-24" for="star-24"></label>
                                                        <input className="star star-23" id="star-23" type="radio" name="star" checked />
                                                        <label htmlFor className="star star-23" for="star-23"></label>
                                                        <input className="star star-22" id="star-22" type="radio" name="star"/>
                                                        <label htmlFor className="star star-22" for="star-22"></label>
                                                        <input className="star star-21" id="star-21" type="radio" name="star"/>
                                                        <label htmlFor className="star star-21" for="star-21"></label>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor className="item col-sm-2 col-xs-12">HTML/CSS</label>
                                                <div className="stars">
                                                    <form action="">
                                                        <input className="star star-30" id="star-30" type="radio" name="star"/>
                                                        <label htmlFor className="star star-30" for="star-30"></label>
                                                        <input className="star star-29" id="star-29" type="radio" name="star"/>
                                                        <label htmlFor className="star star-29" for="star-29"></label>
                                                        <input className="star star-28" id="star-28" type="radio" name="star"/>
                                                        <label htmlFor className="star star-28" for="star-28"></label>
                                                        <input className="star star-27" id="star-27" type="radio" name="star" checked />
                                                        <label htmlFor className="star star-27" for="star-27"></label>
                                                        <input className="star star-26" id="star-26" type="radio" name="star"/>
                                                        <label htmlFor className="star star-26" for="star-26"></label>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor className="item col-sm-2 col-xs-12">Android</label>
                                                <div className="stars">
                                                    <form action="">
                                                        <input className="star star-35" id="star-35" type="radio" name="star"/>
                                                        <label htmlFor className="star star-35" for="star-35"></label>
                                                        <input className="star star-34" id="star-34" type="radio" name="star" checked />
                                                        <label htmlFor className="star star-34" for="star-34"></label>
                                                        <input className="star star-33" id="star-33" type="radio" name="star"/>
                                                        <label htmlFor className="star star-33" for="star-33"></label>
                                                        <input className="star star-32" id="star-32" type="radio" name="star"/>
                                                        <label htmlFor className="star star-32" for="star-32"></label>
                                                        <input className="star star-31" id="star-31" type="radio" name="star"/>
                                                        <label htmlFor className="star star-31" for="star-31"></label>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="category">
                                            <div className="title"><h1>HOBBY</h1></div>
                                            <table>
                                                <tbody>
                                                    <tr height="40">
                                                        <td width="20">○</td>
                                                        <td>Listen to music - Pop.</td>
                                                    </tr>
                                                    <tr height="40">
                                                        <td width="20">○</td>
                                                        <td>Play game.</td>
                                                    </tr>
                                                    <tr height="40">
                                                        <td width="20">○</td>
                                                        <td>Watch movie.</td>
                                                    </tr>
                                                    <tr height="40">
                                                        <td width="20">○</td>
                                                        <td>Swimming.</td>
                                                    </tr>
                                                    <tr height="40">
                                                        <td width="20">○</td>
                                                        <td>Travel.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-sm-12 col-md-8 col-xs-12">
                                    <div className="block2">
                                        <div className="cat">
                                            <div className="study">
                                                <h1>
                                                    <span><i className="fa fa-child"></i></span>
                                                    <span>PERSONAL INFORMATION</span>
                                                </h1>
                                            </div>
                                            <p>- Birthday: 22/11/1994.</p>
                                            <p>- Gender: Male.</p>
                                            <p>- Home town: Ninh Thuan.</p>
                                            <p>- About yourself: Funny, sociable. Adventurous, risky, particularly fond of sports such as football, swimming, biking ...</p>
                                            <div className="study">
                                                <h1>
                                                    <span><i className="fa fa-bullseye"></i></span>
                                                    <span>PURPOSE</span>
                                                </h1>
                                            </div>
                                            <p>Get familiar with the professional working environment of the company. Thereby accumulate and learn more experience for yourself before graduation and resume later.</p>
                                            <div className="study">
                                                <h1>
                                                    <span><i className="fa fa-graduation-cap"></i></span>
                                                    <span>STUDY</span>
                                                </h1>
                                            </div>
                                            <p>- Fourth-year students in the Faculty of Information Technology, University of Sciences HCMC. <em>(9/2013 - Now)</em></p>
                                            <p>- Specialization: Software Engineering.</p>
                                            <p>- GPA: 7.26</p>
                                            <div className="study">
                                                <h1>
                                                    <span><i className="fa fa-users"></i></span>
                                                    <span>EXPERIENCE</span>
                                                </h1>
                                            </div>
                                            <p>- There is little experience in specialization. Since most experience siblings learned from locking on, friends and teachers.</p>
                                            <p>- Experienced live and work beyond the classNameroom.</p>
                                            <div className="link">
                                                <p>- Link git: <a href="https://github.com/MinhDat">https://github.com/MinhDat</a></p>
                                            </div>
                                            <div className="study">
                                                <h1>
                                                    <span><i className="fa fa-share"></i></span>
                                                    <span>OTHER SHARING</span>
                                                </h1>
                                            </div>
                                            <p>- Passion for work.</p>
                                            <p>- Likes to explore creativity.</p>
                                            <p>- Independence at work.</p>
                                            <p>Maybe the information above is enough for you to understand me. If you accept me, please to contact me so you can understand more about me.</p>
                                            <div className="study">
                                                <h1>
                                                    <span><i className="fa fa-paper-plane-o"></i></span>
                                                    <span>CONTACT</span>
                                                </h1>
                                            </div>
                                            <a className="btn btn-primary btn-twitter btn-sm" href="https://twitter.com/?lang=vi">
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                            <a className="btn btn-danger btn-sm" rel="publisher"
                                            href="https://plus.google.com/u/1/108224163642553600677">
                                                <i className="fa fa-google-plus"></i>
                                            </a>
                                            <a className="btn btn-primary btn-sm" rel="publisher"
                                            href="https://www.facebook.com/minhdat.001">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                            <a className="btn btn-warning btn-sm" rel="publisher" href="https://www.instagram.com/ha.m.dat_z.a.o_/">
                                                <i className="fa fa-instagram"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden-xs hidden-sm col-lg-4 col-md-4">
                                    <div className="block1">
                                        <div className = "myinfo">
                                            <p>
                                            MSSV: <b>1312120</b>
                                            </p>
                                            <p>
                                            Full Name: <b>HA MINH DAT</b>
                                            </p>
                                            <p>
                                            Address: <b>Ho Chi Minh City, Vietnam.</b>
                                            </p>
                                            <p>
                                            Phone: <b>098-352-23-69.</b>
                                            </p>
                                            <p>
                                            Email: <b>haminhdat01@gmail.com</b>
                                            </p>
                                        </div>
                                        <div className="category">
                                            <div><h1>SKILLS</h1></div>
                                            <label htmlFor className="item">Javascript </label>
                                            <div className="stars">
                                            <form action="">
                                                <input className="star star-5" id="star-5" type="radio" name="star" />
                                                <label htmlFor className="star star-5" for="star-5"></label>
                                                <input className="star star-4" id="star-4" type="radio" name="star" checked />
                                                <label htmlFor className="star star-4" for="star-4"></label>
                                                <input className="star star-3" id="star-3" type="radio" name="star"/>
                                                <label htmlFor className="star star-3" for="star-3"></label>
                                                <input className="star star-2" id="star-2" type="radio" name="star"/>
                                                <label htmlFor className="star star-2" for="star-2"></label>
                                                <input className="star star-1" id="star-1" type="radio" name="star"/>
                                                <label htmlFor className="star star-1" for="star-1"></label>
                                            </form>
                                            </div>
                                            <label htmlFor className="item">Reactjs </label>
                                            <div className="stars">
                                            <form action="">
                                                <input className="star star-10" id="star-10" type="radio" name="star"/>
                                                <label htmlFor className="star star-10" for="star-10"></label>
                                                <input className="star star-9" id="star-9" type="radio" name="star" checked />
                                                <label htmlFor className="star star-9" for="star-9"></label>
                                                <input className="star star-8" id="star-8" type="radio" name="star"/>
                                                <label htmlFor className="star star-8" for="star-8"></label>
                                                <input className="star star-7" id="star-7" type="radio" name="star"/>
                                                <label htmlFor className="star star-7" for="star-7"></label>
                                                <input className="star star-6" id="star-6" type="radio" name="star"/>
                                                <label htmlFor className="star star-6" for="star-6"></label>
                                            </form>
                                            </div>
                                            <label htmlFor className="item">Work group</label>
                                            <div className="stars">
                                            <form action="">
                                                <input className="star star-15" id="star-15" type="radio" name="star" checked />
                                                <label htmlFor className="star star-15" for="star-15"></label>
                                                <input className="star star-14" id="star-14" type="radio" name="star"/>
                                                <label htmlFor className="star star-14" for="star-14"></label>
                                                <input className="star star-13" id="star-13" type="radio" name="star"/>
                                                <label htmlFor className="star star-13" for="star-13"></label>
                                                <input className="star star-12" id="star-12" type="radio" name="star"/>
                                                <label htmlFor className="star star-12" for="star-12"></label>
                                                <input className="star star-11" id="star-11" type="radio" name="star"/>
                                                <label htmlFor className="star star-11" for="star-11"></label>
                                            </form>
                                            </div>
                                            <label htmlFor className="item">C/C++</label>
                                            <div className="stars">
                                            <form action="">
                                                <input className="star star-20" id="star-20" type="radio" name="star"/>
                                                <label htmlFor className="star star-20" for="star-20"></label>
                                                <input className="star star-19" id="star-19" type="radio" name="star" checked />
                                                <label htmlFor className="star star-19" for="star-19"></label>
                                                <input className="star star-18" id="star-18" type="radio" name="star"/>
                                                <label htmlFor className="star star-18" for="star-18"></label>
                                                <input className="star star-17" id="star-17" type="radio" name="star"/>
                                                <label htmlFor className="star star-17" for="star-17"></label>
                                                <input className="star star-16" id="star-16" type="radio" name="star"/>
                                                <label htmlFor className="star star-16" for="star-16"></label>
                                            </form>
                                            </div>
                                            <label htmlFor className="item">C#</label>
                                            <div className="stars">
                                            <form action="">
                                                <input className="star star-25" id="star-25" type="radio" name="star"/>
                                                <label htmlFor className="star star-25" for="star-25"></label>
                                                <input className="star star-24" id="star-24" type="radio" name="star"/>
                                                <label htmlFor className="star star-24" for="star-24"></label>
                                                <input className="star star-23" id="star-23" type="radio" name="star" checked />
                                                <label htmlFor className="star star-23" for="star-23"></label>
                                                <input className="star star-22" id="star-22" type="radio" name="star"/>
                                                <label htmlFor className="star star-22" for="star-22"></label>
                                                <input className="star star-21" id="star-21" type="radio" name="star"/>
                                                <label htmlFor className="star star-21" for="star-21"></label>
                                            </form>
                                            </div>
                                            <label htmlFor className="item">HTML/CSS</label>
                                            <div className="stars">
                                            <form action="">
                                                <input className="star star-30" id="star-30" type="radio" name="star"/>
                                                <label htmlFor className="star star-30" for="star-30"></label>
                                                <input className="star star-29" id="star-29" type="radio" name="star"/>
                                                <label htmlFor className="star star-29" for="star-29"></label>
                                                <input className="star star-28" id="star-28" type="radio" name="star"/>
                                                <label htmlFor className="star star-28" for="star-28"></label>
                                                <input className="star star-27" id="star-27" type="radio" name="star" checked />
                                                <label htmlFor className="star star-27" for="star-27"></label>
                                                <input className="star star-26" id="star-26" type="radio" name="star"/>
                                                <label htmlFor className="star star-26" for="star-26"></label>
                                            </form>
                                            </div>
                                            <label htmlFor className="item">Android</label>
                                            <div className="stars">
                                            <form action="">
                                                <input className="star star-35" id="star-35" type="radio" name="star"/>
                                                <label htmlFor className="star star-35" for="star-35"></label>
                                                <input className="star star-34" id="star-34" type="radio" name="star" checked />
                                                <label htmlFor className="star star-34" for="star-34"></label>
                                                <input className="star star-33" id="star-33" type="radio" name="star"/>
                                                <label htmlFor className="star star-33" for="star-33"></label>
                                                <input className="star star-32" id="star-32" type="radio" name="star"/>
                                                <label htmlFor className="star star-32" for="star-32"></label>
                                                <input className="star star-31" id="star-31" type="radio" name="star"/>
                                                <label htmlFor className="star star-31" for="star-31"></label>
                                            </form>
                                            </div>
                                        </div>
                                        <div className="category">
                                            <div className="title"><h1>HOBBY</h1></div>
                                            <table>
                                                <tbody>
                                                    <tr height="40">
                                                        <td width="20">○</td>
                                                        <td>Listen to music - Pop.</td>
                                                    </tr>
                                                    <tr height="40">
                                                        <td width="20">○</td>
                                                        <td>Play game.</td>
                                                    </tr>
                                                    <tr height="40">
                                                        <td width="20">○</td>
                                                        <td>Watch movie.</td>
                                                    </tr>
                                                    <tr height="40">
                                                        <td width="20">○</td>
                                                        <td>Swimming.</td>
                                                    </tr>
                                                    <tr height="40">
                                                        <td width="20">○</td>
                                                        <td>Travel.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default ContainerPortfolio;
