import {Component} from 'react';
import './App.scss';
import  Header from '../header/header';
import Footer from '../footer/footer';
import Article from '../article/article';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:''
        }
    }

    render(){
        return(
            <div>
                <div>
                    <Header/>
                </div>  
                <div>
                    <Article/>
                </div>  
                <div>
                    <Footer/>
                </div>   

            </div>
        );
    }
}

export default App;