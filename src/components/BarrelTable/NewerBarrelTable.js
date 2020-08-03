import React, { Component } from "react";
import ReactDom from "react-dom";
import ObjectList from "react-object-list";
import { connect } from "react-redux";
import { StyledButton, RemoveButton } from "../ButtonStyles/Buttons";
import StyledCheckbox from "../ButtonStyles/Checkbox";
import { Input, TextField } from "@material-ui/core";
import "./BarrelTable.css";
import Popup from "reactjs-popup";
import SpringModal from "./BarrelModal";

class BarrelTable extends Component {
  state = {
    itemToEdit: 0,
    hosts: "",
    street: "",
    city: "",
    description: "",
    zipcode: "",
    hours: "",
    status: true,
    date: "",
    barrelStatus: false,
    toggleEvent: false,
    searchTerm: this.props.state.searchTerm,
  };

  editItem = (item) => {
    this.setState({
      ...this.state,
      itemToEdit: item.id,
      hosts: item.hosts,
      street: item.street,
      city: item.city,
      description: item.description,
      zipcode: item.zipcode,
      status: item.status,
      date: item.dates,
      hours: item.hours,
      searchTerm: this.props.state.searchTerm,
    });
    console.log(this.state);
  };

  cancelEdit = () => {
    this.setState({
      ...this.state,
      itemToEdit: 0,
    });
  };

  updateStatus = (item) => {
    console.log(item);
    let data = {
      id: item.id,
      status: item.status,
      previousSearch: this.props.state.searchTerm,
    };
    this.props.dispatch({
      type: "UPDATE_STATUS",
      payload: data,
    });
  };

  trackEdit = (event, type) => {
    this.setState({
      ...this.state,
      [type]: event.target.value,
    });
    console.log(this.state);
  };

  cancelEdit = () => {
    this.setState({
      ...this.state,
      itemToEdit: 0,
    });
  };

  deleteItem = (id) => {
    let dataObject = {
      id: id,
      previousSearch: this.props.state.searchTerm,
    };

    console.log(dataObject);
    this.props.dispatch({
      type: "DELETE_BARREL",
      payload: dataObject,
    });
    // console.log("payload", id);
  };

  saveChanges = (item) => {
    this.props.dispatch({
      type: "UPDATE_BARREL",
      payload: this.state,
    });
    this.props.dispatch({
      type: "SEARCH_ALL_BARRELS",
      payload: this.props.state.searchTerm,
    });
    this.setState({
      ...this.state,
      itemToEdit: 0,
    });
    console.log(item);
  };

  render() {
    return (
      <div className="table-container">
        <table class="ui celled table">
          {" "}
          <thead className="tableHeader">
            <tr className="coolTableTr">
              <th className="">Host</th>
              <th>Street Number</th>
              <th className="">City</th>
              <th>Zipcode</th>
              <th>Dates</th>
              <th>Hours</th>
              <th>Description</th>
              <th>Status</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {/* Display data based on whether editing or not */}
            {this.props.state.searchBarrels.map((item) => {
              {
                return (
                  <tr className="barrelItem">
                    <td>{item.hosts}</td>
                    <td>{item.street}</td>
                    <td>{item.city}</td>
                    <td>{item.zipcode}</td>
                    <td>{item.dates}</td>
                    <td>{item.hours}</td>
                    <td>{item.description}</td>
                    <td>{item.status ? "Active" : "Deactivated"}</td>
                    <td>
                      <SpringModal
                        item={item}
                        trackEdit={this.trackEdit}
                        editItem={this.editItem}
                      />

                      {/* <div>
                        <TextField
                          className="editInput"
                          type="text"
                          multiline
                          rowsMax={10}
                          value={this.state.hosts}
                          variant="outlined"
                          onChange={(event) => this.trackEdit(event, "hosts")}
                        ></TextField>
                        <TextField
                          multiline
                          rowsMax={10}
                          className="editInput"
                          type="text"
                          value={this.state.street}
                          variant="outlined"
                          onChange={(event) => this.trackEdit(event, "street")}
                        ></TextField>
                        <TextField
                          className="editInput"
                          type="text"
                          rowsMax={10}
                          multiline
                          value={this.state.city}
                          variant="outlined"
                          onChange={(event) => this.trackEdit(event, "city")}
                        ></TextField>
                        <TextField
                          className="editInput"
                          type="text"
                          rowsMax={10}
                          multiline
                          value={this.state.zipcode}
                          variant="outlined"
                          onChange={(event) => this.trackEdit(event, "zipcode")}
                        ></TextField>
                        <TextField
                          className="editInput"
                          type="text"
                          rowsMax={10}
                          multiline
                          value={this.state.date}
                          variant="outlined"
                          onChange={(event) => this.trackEdit(event, "date")}
                        ></TextField>
                        <TextField
                          className="editInput"
                          type="text"
                          rowsMax={10}
                          multiline
                          value={this.state.hours}
                          variant="outlined"
                          onChange={(event) => this.trackEdit(event, "hours")}
                        ></TextField>
                        <TextField
                          className="editInput"
                          type="text"
                          rowsMax={10}
                          multiline
                          value={this.state.description}
                          variant="outlined"
                          onChange={(event) =>
                            this.trackEdit(event, "description")
                          }
                        ></TextField>
                        <div
                          className="sliderCheckbox"
                          class="ui slider checkbox"
                        >
                          <input
                            type="checkbox"
                            onChange={() => {
                              this.updateStatus(item);
                            }}
                            checked={item.status}
                            name="newsletter"
                          />{" "}
                          <label className="sliderLabel">
                            {item.status ? "Active" : "Not Active"}
                          </label>
                        </div>
                        <i
                          class="archive icon"
                          value={item.id}
                          onClick={() => this.saveChanges(item)}
                        />{" "}
                        <i class="ban icon" onClick={this.cancelEdit}>
                          <p>Cancel</p>
                        </i>
                        <i
                          class="trash icon"
                          onClick={() => this.deleteItem(item.id)}
                        >
                          <p>Delete</p>
                        </i>
                      </div> */}
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
          {/* <tfoot>
            <tr>
              <th colspan="5">
                <div class="ui right floated pagination menu">
                  <a class="icon item">
                    <i class="left chevron icon"></i>
                  </a>
                  <a class="item">1</a>
                  <a class="item">2</a>
                  <a class="item">3</a>
                  <a class="item">4</a>
                  <a class="icon item">
                    <i class="right chevron icon"></i>
                  </a>
                </div>
              </th>
            </tr>
          </tfoot> */}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

export default connect(mapStateToProps)(BarrelTable);