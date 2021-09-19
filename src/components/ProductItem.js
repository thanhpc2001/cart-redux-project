import React, { Component } from 'react'

import * as message from './../constants/Message'

class ProductItem extends Component {

    render() {
        var { product } = this.props

        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img alt={product.name} src={product.image} className="img-fluid" />
                        <a href="/#">
                            <div className="mask waves-light waves-effect waves-light" />
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href="/#">{product.name}</a>
                            </strong>
                        </h4>

                        {this.showRating(product.rating)}

                        <p className="card-text">
                            {product.description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <a
                                    href="/#" className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" data-original-title="Add to Cart"
                                    onClick={(e) => this.onAddToCart(e, product)}
                                >
                                    <i className="fa fa-shopping-cart" />
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        );

    }

    showRating(rating) {
        var result = []
        for (let i = 0; i < rating; i++) {
            result.push(<li href="/#" key={"i" + i}>
                <i className="fa fa-star" />
            </li>)
        }
        for (let j = 5 - rating; j > 0; j--) {
            result.push(<li href="/#" key={"j" + j}>
                <i className="fa fa-star-o" />
            </li>)
        }
        return <ul className="rating">
            {result}
        </ul>
    }

    onAddToCart = (e, product) => {
        e.preventDefault()
        this.props.onAddToCart(product)
        this.props.onChangeMessage(message.MSG_ADD_TO_CART_SUCCESS)
    }
}


export default ProductItem;
