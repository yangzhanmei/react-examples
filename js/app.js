const Cart = React.createClass({
    getInitialState(){
        return {value: 'Hello'};
    },
    add: function () {
        const value = $('input[type=text]').val();
        this.setState({value});
    },
    render(){
        return (<div>
                <div>
                    <input type="text"/>
                </div>
                <button onClick={this.add}>show</button>
                <p>{this.state.value}</p>
                <Children name={this.state.value}/>
            </div>
        )
    }
});

const Children = React.createClass({
    render(){
        return (<div>
            <input type="text" value={this.props.name}/>
        </div>)
    }
});

ReactDOM.render(<Cart/>, document.getElementById('content'));