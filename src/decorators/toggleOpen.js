import React from 'react'

export default (Component) => class DecoratedComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
    }
    
    onClickHandler(event) {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    
    render() {
        return (
            <Component
                {...this.props}
                isOpen = {this.state.isOpen}
                onClickHandler = {this.onClickHandler.bind(this)}
            />
        )
    }
}