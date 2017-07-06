import React from 'react'

export default (Component) => class DecoratedComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            openedItemId: null
        }
    }
    
    oneOpen(id) {
        return (event) => {
            this.setState({
                openedItemId: id === this.state.openedItemId ? null : id
            })
        }
    }
    
    render() {
        return (
            <Component
                {...this.props}
                openedItemId = {this.state.openedItemId}
                oneOpen = {this.oneOpen.bind(this)}
            />
        )
    }
}