import {Component} from 'react';
import Button from 'react-bootstrap/Button';



class ProductRow extends Component {
    
    constructor(props) {
        super(props)
        this.destroy = this.destroy.bind(this)
   }
   

    destroy() {
        this.props.onDestroy(this.props.id);
    }
   
    render () {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.category}</td>
                <td>${this.props.price}</td>
                <td><Button onClick={this.destroy} size="sm" variant="info">Delete</Button></td>
            </tr>
        )
    }
}
export default ProductRow;