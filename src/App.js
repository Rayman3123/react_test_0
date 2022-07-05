import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import React from "react";
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items:[
                {
                    id:1,
                    title: 'Успешная коробка для бомжей',
                    img: '1.jpg',
                    desc: 'белая красивая дешевая че еше надо?',
                    category: 'chairs',
                    price: '199.99'
                },
                {
                    id:2,
                    title: 'Успешная коробка для элиты',
                    img: '2.jpg',
                    desc: 'Ты что нибудь слышал про эксклюзивы?',
                    category: 'chairs',
                    price: '499.99'
                },
                {
                    id:3,
                    title: 'Успешная коробка 4к',
                    img: '3.jpg',
                    desc: 'Вам нужен холодильник?',
                    category: 'chairs',
                    price: '399.99'
                },
                {
                    id:4,
                    title: 'Старая успешная коробка',
                    img: '4.jpg',
                    desc: 'Все еще что-то может',
                    category: 'chairs',
                    price: '199.99'
                },
                {
                    id:5,
                    title: 'Странная успешная коробка',
                    img: '5.png',
                    desc: 'Ты извращенец?',
                    category: 'chairs',
                    price: '149.99'
                },
                
            ]
        }
    }
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Items items={this.state.items} />
                <Footer />
            </div>
        )
    }
}
export default App;