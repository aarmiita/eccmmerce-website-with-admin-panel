import React, { Component } from "react";

class CompanyNotifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      sort: {
        direction: "desc",
      },
    };
  }

  compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  // Sorting for Assending and descending order

  sortBy(key) {
    const direction = this.state.sort
      ? this.state.sort.direction === "asc"
        ? "desc"
        : "asc"
      : "desc";

    let arrayCopy = [...this.state.contacts];
    arrayCopy.sort(this.compareBy(key));
    this.setState({ contacts: arrayCopy });

    if (direction === "asc") {
      arrayCopy.reverse();
    }

    this.setState({
      data: arrayCopy,
      sort: {
        direction,
      },
    });
  }

  // Fetched the data when component mount, by default data is in ascending order

  componentDidMount() {
    fetch("../companyNotifications.json")
      .then((res) => res.json())
      .then((data) => {
        data.sort((a, b) => (new Date(a) < new Date(b) ? 1 : -1));
        this.setState({ contacts: data }).then((data) =>
          this.setState({ contacts: data })
        );
      })
      .catch(console.log);
  }

  render() {
    const Contacts = ({ contacts }) => {
      return (
        <div class="table-container">
          <table>
            <thead>
              <tr class="table100-head">
                <th class="column1" onClick={() => this.sortBy("dateCreated")}>
                  Date Created
                  <FontAwesomeIcon aria-hidden="true" icon={faSort} />
                </th>
                <th class="column2" onClick={() => this.sortBy("agencyEmail")}>
                  Agency Email
                  <FontAwesomeIcon aria-hidden="true" icon={faSort} />
                </th>
                <th class="column3" onClick={() => this.sortBy("messageT")}>
                  Message Type
                  <FontAwesomeIcon aria-hidden="true" icon={faSort} />
                </th>
                <th class="column4">Message</th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((contact) => (
                <tr>
                  <td class="column1">{contact.dateCreated}</td>
                  <td class="column2">{contact.agencyEmail}</td>
                  <td class="column3">{contact.messageT}</td>
                  <td class="column4">{contact.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };
  }
}
export default CompanyNotifications;

// This is the result i'm getting from my code

// >01/12/2019

// >01/13/2018

// >02/22/2019

// >06/30/2019

// >07/17/2019

// >10/02/2019

// >11/01/2019

// but I'm expecting

// >01/12/2019

// >02/22/2019

// >06/30/2019

// >07/17/2019

// >10/02/2019

// >11/01/2019

// >01/13/2018
