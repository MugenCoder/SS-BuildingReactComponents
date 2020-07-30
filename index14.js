// RENDER YOUR NAME, AGE & SOCIAL MEDIA PROFILE PIC TO THE DOM
class PropExample extends React.Component {
    render() {
        return(
            <div>
                <p>Hi, {}</p>
                <p>My age is: {}</p>
                <img src={''} />
            </div>
        );
    }
}

// REACT DOM
ReactDOM.render(
    // REACT WHAT
    <PropExample/>,
    // REACT WHERE
    document.getElementById('app')
);