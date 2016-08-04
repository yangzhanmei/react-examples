var Button = React.createClass({
    getInitialState: function() {
        console.log('parent getInitialState');
        return {
            data:0
        };
    },
    getDefaultProps:function () {
        console.log('parent getDefaultProps');
    },
    setNewNumber: function() {
        this.setState({data: this.state.data + 1})
    },
    render: function () {
        console.log('parent render');
        return (
            <div>
                <button onClick = {this.setNewNumber}>点我</button>
                <Content myNumber = {this.state.data}></Content>
            </div>
        );
    }
})
var Content = React.createClass({
    getInitialState: function() {
        console.log('getInitialState');
        return {
           name:'123'
        };
    },
    getDefaultProps:function () {
        console.log('getDefaultProps');
    },
    componentWillMount:function() {
        console.log('componentWillMount')
    },
    componentDidMount:function() {
        console.log('componentDidMount')
    },
    componentWillReceiveProps:function(newProps) {
        console.log('componentWillReceiveProps')
    },
    shouldComponentUpdate:function(newProps, newState) {
        console.log('shouldComponentUpdate');
        return true;
    },
    componentWillUpdate:function(nextProps, nextState) {
        console.log('componentWillUpdate');
    },
    componentDidUpdate:function(prevProps, prevState) {
        console.log('componentDidUpdate')
    },
    componentWillUnmount:function() {
        console.log('componentWillUnmount')
    },

    render: function () {
        console.log('render');
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
});
ReactDOM.render(
    <div>
        <Button />
    </div>,
    document.getElementById('content')
);