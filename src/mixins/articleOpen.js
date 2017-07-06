export default {
    getInitialState() {
        
    },
    articleOpen() {
        return (event) => {
            this.setState({
                openedArticleId: id === this.state.openedArticleId ? null : id
            })
        }
    }
}