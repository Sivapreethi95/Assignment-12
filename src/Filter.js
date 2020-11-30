import {Component} from 'react';
import Form from 'react-bootstrap/Form';
class Filter extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
   }
   
    handleChange(e) {
        const value = e.target.value
        const name = e.target.name
   
        this.props.onFilter({
             [name]: value
        });
   }
   
    render() {
        return (
            <div>
                <h2>My Inventory</h2>
                <Form.Control size="sm" placeholder="Search..." name="filterText" type="text" onChange={this.handleChange}></Form.Control>
                <br></br>
            </div>
        )
    }
}
export default Filter;