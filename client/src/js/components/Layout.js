import React from "react"
import { connect } from "react-redux"

import Table from './Table'

import { fetchDataFromServer,deleteData } from "../actions/dataActions"

@connect((store) => {
  return {
    data: store.data,
    heading:['Title','Status','Updated','Created','Delete']
  };
})
export default class Layout extends React.Component {
  constructor(props){
    super(props);
    this.state={search:'all'};
  }
  componentWillMount() {
    this.props.dispatch(fetchDataFromServer())
  }

  onDelete(id){
    this.props.dispatch(deleteData(id))
  }

  updateSearch(event){
    this.setState({search:event.target.value});
  }

  render() {
    const { data ,heading} = this.props;
    let filteredResult = data.filter((el)=>{
      if(this.state.search.toLowerCase() === 'all'){
        return true;
      }else{
        return el.status.toLowerCase() === this.state.search.toLowerCase();
      }
    });
    return (
      <section className="mainSection">
      <div className="dropDownDiv">
                <div>
                    <label>
                        Status
                    </label>
                    <br/>
                    <select className="dropDown" value={this.state.search} onChange={this.updateSearch.bind(this)}>
                        <option value="all">All</option>
                        <option value="approved">Approved</option>
                        <option value="denied">Denied</option>
                        <option value="pending">Pending</option>
                    </select>
                </div>

            </div>
        <Table heading={heading} value={filteredResult} ondelete={this.onDelete.bind(this)}/>
      </section>
    )
  }
}
