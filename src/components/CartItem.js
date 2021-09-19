import React, { Component } from 'react'

import * as message from './../constants/Message'

class CartItem extends Component {

    render() {
        var { product, quantity } = this.props.cartItem
        return (
            <tr>
                <th scope="row">
                    <img alt={product.name} src={product.image} />
                </th>
                <td>
                    <h5>
                        <strong>{product.name}</strong>
                    </h5>
                </td>
                <td>{product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => this.onUpdateQuantity(product, quantity - 1)}
                        >
                            <a href="/#">—</a>
                        </label>
                        <label
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => this.onUpdateQuantity(product, quantity + 1)}
                        >
                            <a href="/#">+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showSubTotal(product.price, quantity)}$</td>
                <td>
                    <button
                        type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" data-original-title="Remove item"
                        onClick={() => this.onDelete(product)}
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }

    showSubTotal(price, quantity) {
        return price * quantity
    }

    onDelete(product) {
        this.props.onDeleteProductInCart(product)
        this.props.onChangeMessage(message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
    }

    onUpdateQuantity(product, quantity) {
        if (quantity > 0) {
            this.props.onUpdateProductInCart(product, quantity)
            this.props.onChangeMessage(message.MSG_UPDATE_CART_SUCCESS)
        }
    }
}


export default CartItem;
