import React, { Component } from 'react';

export default class TodoList extends Component {
  
    render() {
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Contact Number</th>
            </tr>
          </thead>
          <tbody className="appList">
          {this.props.items.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.contactNo}</td>
                <td> <button onClick={()=>this.props.onDelete(item.id)}>delete</button></td>
                <td> <button onClick={()=>this.props.onEdit(item)}>edit</button></td>
              </tr>
          ))}
          </tbody>
        </table>
      );
    }
  }