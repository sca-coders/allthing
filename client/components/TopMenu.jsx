TopMenu = React.createClass({
    render(params) {
        return (
            <header className="ui fixed inverted menu">
                <div className="ui container">
                    <a href="/" className="header item">Allthing</a>
                        <div className="ui simple dropdown item">
                            Dropdown <i className="dropdown icon"></i>
                            <div className="menu">
                                <a className="item" href="#"><i className="save icon"></i>Link Item</a>
                                <a className="item" href="#">Link Item</a>
                                <div className="divider"></div>
                                <div className="header">Header Item</div>
                                <div className="item">
                                    <i className="dropdown icon"></i>
                                    Sub Menu
                                    <div className="menu">
                                        <a className="item" href="#">Link Item</a>
                                        <a className="item" href="#">Link Item</a>
                                    </div>
                                </div>
                                <a className="item" href="#">Link Item</a>
                            </div>
                        </div>
                    </div>
            </header>
        );
    }
});
