const Pet = ({name, animal, breed}) => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, name),
        React.createElement("h3", {}, animal),
        React.createElement("h3", {}, breed)
    ])
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {id: "my-brand"}, "Adopt Me!"),
            React.createElement(Pet, {name: "Luna", animal: "Dog", breed: "Havanese"}),
            React.createElement(Pet, {name: "Pepper", animal: "Bird", breed: "Cockatiel"}),
            React.createElement(Pet, {name: "Sudo", animal: "Dog", breed: "Terrier"})
        ]
    );
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
