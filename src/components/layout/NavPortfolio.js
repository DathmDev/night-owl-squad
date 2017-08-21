import React from 'react'

const styleNav = {
    marginBottom: 0,
    paddingTop: 0,
    backgroundColor: '#222',
    borderColor: '#080808'
}

export default class extends React.Component {
  render() {
    return (
        <nav className="dathm-navbar navbar navbar-inverse navbar-fixed-top" id="nav" style={styleNav}>
            <div className="container" style={{paddingBottom: 0}}>
                <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/"><span className="fa fa-home"></span></a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <form className="navbar-form">
                    <div className="inline search form-group">
                    <input type="text" className="form-control" placeholder="Search" />
                    </div>
                    <a className="inline" href="javascript:void(0)" onclick=""><i className="dathm-form-search fa fa-search"></i></a>
                </form>
                </div>
            </div>
        </nav>
    )
  }
}
