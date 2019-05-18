import React, { Component } from 'react';
import Modal from "react-awesome-modal";

export default class Todolist extends Component {
  state = {
    fetchdata: [],
    visible:false
  }
  componentDidMount() {
   fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data=>this.setState({fetchdata:data}))
  }
  openModel = () => {
    this.setState({visible:true})
  }
  closeModal() {
    this.setState({
        visible : false
    });
}

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="row">
            <h2 style={{ paddingLeft: "31px" }}>Address</h2>
          </div>
          <hr />
          <div className="topnav" style={{ marginTop: "-16px" }}>
            <a >Found:<span>106 Address</span></a>
            <div className="topnav-right">
              <a href="#search">Select all</a>
              <a href="#about">Action with Selected(6)</a>
              <a><i className="fa fa-caret-down"></i></a>
            </div>
          </div>
          <hr />

          <div className="table-responsive desing">
            <div>
            <section>
            <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
            <div>
               
                <a onClick={() => this.closeModal()}>Close</a>
            </div>
        </Modal>
      </section>
      </div>
          <table className="table">
            <thead>
              <tr>
                <th ><input type="checkbox" /><span>ID</span></th>
                <th>id</th>
                <th>userID</th>
                <th>title</th>
              </tr>
            </thead>
            <tbody>
              {this.state.fetchdata.length ? this.state.fetchdata.map((val, key) => (
                <tr key={key}>
                  <td><input type="checkbox" /><span>234</span></td>
                  <td>{val.id}</td>
                  <td>{val.userID}</td>
                  <td>{val.title}</td>
                  <td><span style={{ fontSize: "18px" }}><button className="btn btn-success" onClick={this.openModel}><i className="fa fa-edit"></i></button > <button className="btn btn-danger ml-3"><i className="fa fa-trash-o" aria-hidden="true"></i></button></span></td>
                </tr>
              )) : ""}
            </tbody>
          </table>
        </div>
        </div>
      </React.Fragment >
    )
  }
}