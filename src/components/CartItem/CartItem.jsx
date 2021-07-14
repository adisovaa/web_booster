import React from 'react'
import './CartItem.css'
import {CurrencyRub} from "phosphor-react"
import {Modal} from "../ModalForm/ModalForm"
import cartImg from "../../assets/img.jpg";

class CartItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 1,
                    img: cartImg,
                    text: 'Парикмахерское кресло "Норма" гидравлическое',
                    price: '9900',
                    button: 'Купить'
                },
                {
                    id: 2,
                    img: cartImg,
                    text: 'Парикмахерское кресло "Норма" гидравлическое',
                    price: '9900',
                    button: 'Купить'
                },
                {
                    id: 3,
                    img: cartImg,
                    text: 'Парикмахерское кресло "Норма" гидравлическое',
                    price: '9900',
                    button: 'Купить'
                },
                {
                    id: 4,
                    img: cartImg,
                    text: 'Парикмахерское кресло "Норма" гидравлическое',
                    price: '9900',
                    button: 'Купить'
                }
            ],
            show: false
        }
    }

        showModal = () => {
            this.setState({ show: true })
        }

        hideModal = () => {
            this.setState({ show: false })
        }

    render() {
        return (
            <div className="cartItems">
                <div className="cartItemsContainer">
                    {
                        this.state.items.map((d, i) => {
                            return (
                                <div key={i} className="cartItem">
                                    <div className="cartItemBlockA">
                                        <div className="cartItemImg">
                                            <img src={d.img} alt=""/>
                                        </div>
                                       <div className="cartItemInfo">
                                            <span className="cartItemText">
                                            {d.text}
                                        </span>
                                           <span className="cartItemPrice">
                                            {d.price}
                                               <CurrencyRub size={18}/>
                                        </span>
                                       </div>
                                    </div>

                                    <div className="cartItemBlockB">
                                        <div className="cartModalItem">
                                            <Modal show={this.state.show} handleClose={this.hideModal}/>
                                            <button className="button" onClick={this.showModal}>
                                                {d.button}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}


export default CartItem

