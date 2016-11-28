import React, { Component } from 'react';
import Tr from './Tr';
import Th from './Th';

class Table extends Component {
  render() {
      let ondelete = this.props.ondelete;
    return (
      <table>
        <thead>
            <tr>
                {this.props.heading.map((el,i)=>{return <Th key={i.toString()} data={el}/>})}
            </tr>
        </thead>
        <tbody>
            {
            this.props.value.map(function(el,i){
                return <Tr data={el} key={i.toString()} ondelete={ondelete}/>;
            })
            }
        </tbody>

      </table>
    );
  }
}

export default Table;
