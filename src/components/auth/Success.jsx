import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'



class Success extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         time:5
      };

    };
    
    componentDidMount(){ 
        this.timeDown=setInterval(() => {
            this.setState({
                time:this.state.time-1
            })
        }, 1000);

        }
    componentDidUpdate(){
        if(this.state.time==0){
            this.props.history.push("/")
        }
    }
    componentWillUnmount(){
        clearInterval(this.timeDown)
    }
    render() {
        if(this.props.islogged){
            return (
                <div className="text-center">
                    <p className="display-2 text-primary">Hurray...</p>
                    <p className="display-4">Booking <span className="text-warning display-4">Successful</span></p>
                    <p>Enjoy the benefits of a meeting room.</p>
                    <small className="text-muted">You will be redirected to home page in {this.state.time} seconds</small>
        
                </div>
            )
        }
        else{
            return <Redirect to="/login" />;
        }
    }
}


const mapStateToProps=(state)=>{
    return{
        islogged:state.LoggedIn
    }
}

export default connect(mapStateToProps, null)(Success)



