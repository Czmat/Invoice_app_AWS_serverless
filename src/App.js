import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import {
  faImage,
  faMoneyCheckAlt,
  faThumbsDown,
  faThumbsUp,
  faSearchDollar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class App extends Component {
  state = {
    isLoading: false,
    invoices: [],
  };

  remove(id) {
    let updatedInvoices = [...this.state.invoices].filter((i) => i.Id !== id);
    this.setState({ invoices: updatedInvoices });
  }

  async componentDidMount() {
    const response = await fetch(
      'https://ops0qwsb1a.execute-api.us-east-2.amazonaws.com/Dev'
    );
    const body = await response.json();
    this.setState({ invoices: body, isLoading: false });
  }

  render() {
    const isLoading = this.state.isLoading;
    const allinvoices = this.state.invoices;

    if (isLoading) return <div>Loading...</div>;

    let invoices = allinvoices.map((invoice) => (
      <tr key={invoice.Id}>
        <td>{invoice.Vendor}</td>
        <td>{invoice.Amount}</td>
        <td>{invoice.Invoice}</td>
        <td>{invoice.Date}</td>
        <td>
          <Button
            className="btn btn-lg btn-success"
            onClick={() => this.remove(invoice.Id)}
          >
            <FontAwesomeIcon icon={faThumbsUp} /> Ok
          </Button>
        </td>
        <td>
          <Button
            className="btn btn-lg btn-danger"
            onClick={() => this.remove(invoice.Id)}
          >
            <FontAwesomeIcon icon={faThumbsDown} /> NOK
          </Button>
        </td>
        <td>
          <Button
            className="btn btn-lg btn-info"
            onClick={() => this.remove(invoice.Id)}
          >
            <FontAwesomeIcon icon={faMoneyCheckAlt} /> 50%
          </Button>
        </td>
        <td>
          <Button
            className="btn btn-lg btn-warning"
            onClick={() => this.remove(invoice.Id)}
          >
            <FontAwesomeIcon icon={faSearchDollar} /> ??
          </Button>
        </td>
        <td>
          <Button
            className="btn btn-lg btn-info"
            onClick={() => this.remove(invoice.Id)}
          >
            <FontAwesomeIcon icon={faImage} /> Image
          </Button>
        </td>
      </tr>
    ));
    return (
      <div className="container ">
        <div className="row">
          <div className="col-12">
            <h4>Pending Invoices - The Test Company</h4>
          </div>
        </div>

        <div className="row pos">
          <div className=".col-xs-12 text-center">
            <Table dark responsive striped bordered hover>
              <thead>
                <tr>
                  <th scope="row">Vendor</th>
                  <th scope="row">Amount</th>
                  <th scope="row">Invoice #</th>
                  <th scope="row">Date</th>
                  <th scope="row" colSpan="4">
                    Action
                  </th>
                  <th scope="row">Image</th>
                </tr>
              </thead>
              <tbody>
                {this.state.invoices.length === 0 ? (
                  <tr>
                    <td colSpan="9">All caught up!</td>
                  </tr>
                ) : (
                  invoices
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

//KFaro9MsV7uf5BIOKlp3gN3paZi3SSV5d7q/EeGF
