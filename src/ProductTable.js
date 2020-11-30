import {Component} from 'react';
import ProductRow from './ProductRow';
import Table from 'react-bootstrap/Table';


class ProductTable extends Component {

    constructor(props) {
        super(props)
        this.handleDestroy = this.handleDestroy.bind(this)
   }
   

    handleDestroy(id) {
        this.props.onDestroy(id)
   }
   
    render () {
        const productArray = Object.values(this.props.products);
        const theadStyle={
            color: "#FFF",
            backgroundColor: "#343A40",
        };
        
        return (
            <Table striped size="sm">
            <thead style={theadStyle}>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {productArray.map(
                    product => {
                        if(product.name.indexOf(this.props.filterText)> -1) {
                            return <ProductRow key={product.id} id={product.id} name={product.name} category={product.category} price={product.price} onDestroy={this.handleDestroy} />
                        }
                        return (null);
                    }
                )}
            </tbody>
            </Table>
        );
    }
}

export default ProductTable;