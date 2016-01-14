ReactLayout.setRootProps({
    className: "ui container"
});

FlowRouter.route("/", {
    name: "Home",
    subscritions(params) {

    },
    action(params) {
        ReactLayout.render(MainLayout, { content: <div className="ui main container"><Home/></div>});
    }
});
