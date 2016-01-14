MainLayout = React.createClass({
    render() {
        return <div>
            <TopMenu/>
            <div className="ui main text container">
                {this.props.content}
            </div>
            <Footer/>
        </div>
    }
});
