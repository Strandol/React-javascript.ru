import React, { Component } from 'react'

export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    
    setOpen(ev) {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    
    render() {
        console.log(this.props);
        const { article: { title, text } } = this.props;
        const body = this.state.isOpen ? <section>{text}</section> : null;
        
        return (
            <div>
                <h1 onClick={this.setOpen.bind(this)}>{title}</h1>
                {body}
            </div>
        )  
    }

}