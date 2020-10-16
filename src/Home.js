import React from 'react'
import "./Home.css"

export default function Home(props) {
    const products = props.getHomeData.map((item, index) => {
        return (
            <div className="section" key={index}>
                <img src={item.image_url} alt={item.product_name} style={{ width: "120px", height: "120px" }} />
                <div>
                    <span>{item.product_name}</span>
                    <p className="mrp">₹{item.price_stock[0].mrp}</p>
                    <div className="price">
                        <span>₹{item.price_stock[0].selling_price}</span>
                        <button>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-handbag-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 0 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.361a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.356a2.5 2.5 0 0 0 2.472-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
                            </svg>
                            Cart
                        </button>
                    </div>

                </div>
            </div>
        )
    })
    return (
        <div className="products">
            {products}
        </div>
    )
}

