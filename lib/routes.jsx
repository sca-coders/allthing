ReactLayout.setRootProps({
    className: "ui container"
});

FlowRouter.route("/", {
    name: "Home",
    subscritions(params) {

    },
    action(params) {
        ReactLayout.render(MainLayout, { content: <Home/>});
    }
});
