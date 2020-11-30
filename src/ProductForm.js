import {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const RESET_VALUES = {id: '', category: '', price: '', name: ''}

class ProductForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            product: Object.assign({}, RESET_VALUES), 
            errors: {}
       }
       this.handleSave = this.handleSave.bind(this)
       this.handleChange = this.handleChange.bind(this)
   }
   
    handleSave(e) {
        this.props.onSave(this.state.product)
        this.setState({
             product: Object.assign({}, RESET_VALUES), errors: {}
        })
        e.preventDefault(); //Prevent form from triggering HTTP POST
   }

   handleChange(e) {
    const value = e.target.value
    const name = e.target.name

    this.setState((prevState) => {
         prevState.product[name] = value
         return { product: prevState.product }
    })
}

   
    render() {
        return (
            <Form><h3>Add a New Product</h3>
            <Form.Label> Name 
                <br></br>
                <Form.Control name="name" type="text" placeholder="Enter a new product" onChange={this.handleChange} value={this.state.product.name} ></Form.Control>
            </Form.Label>
            <br></br>
            <br></br>
            <Form.Label> Category
                <br></br>
                <Form.Control name="category" type="text" placeholder="Enter category" onChange={this.handleChange} value={this.state.product.category} ></Form.Control>
            </Form.Label>
            <br></br>
            <br></br>
            <Form.Label>Price
                <br></br>
                <Form.Control name="price" type="text" placeholder="Enter product price" onChange={this.handleChange} value={this.state.product.price} ></Form.Control>
            </Form.Label>
            <br></br>
            <br></br>
            <Button onClick={this.handleSave} type="submit" size="sm" variant="info">
                    Save
            </Button>
            </Form>
        )
    }
}
export default ProductForm;