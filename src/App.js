import React, { Component } from 'react'
import "./App.css"
import Home from './Home'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      homeData: []
    }
  }

  fetchCatagories = () => {
    fetch("https://testing.pogo91.com/api/online-store/category/?store_prefix=cake-shop ")
      .then((res) => res.json())
      .then((cat) => {
        console.log(cat.category)
        this.setState({ data: cat.category })
      })
  }
  getHomeData = () => {
    fetch("https://testing.pogo91.com/api/online-store/category/product/?store_prefix=cake-shop&page=1&category_id=0&host_name=tshop.pogo91.com")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ homeData: data.products })
        console.log(this.state.homeData)
      })
  }
  componentDidMount() {
    this.fetchCatagories();
    this.getHomeData();
  }


  render() {
    const products = this.state.data.map((item, index) => {
      if (item.image === "") {
        return (<a href="/" key={index}>
          <li key={index} className="list" style={{ width: '80px', height: '80px' }}>
          <img className="image" alt=""/><span>{item.name}</span></li></a>
        )
      }
      return(
         <a href="#" key={index}>
      <li  className="list">
        <img src={item.image} alt={item.name} />
        <span> {item.name} </span></li>
        </a>
      )
    })
    return (
      <div>
        <h1 style={{ textAlign: "center" }} >Home</h1>
        <div className="catagories">
          <ul>
            {products}
          </ul>
        </div>
        <Home getHomeData={this.state.homeData} />
      </div>
    )
  }
}