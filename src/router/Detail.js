import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const {location,history}=this.props
        if(location.state === undefined){
            history.push("/")
        }
    }
    render(){
        const {location:{state:{title,year}}}=this.props
        return <div>
            <h1>{title}</h1>
            <h3>{year}</h3>
        </div>
    }
}

export default Detail;