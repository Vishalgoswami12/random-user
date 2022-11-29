import React from "react"


class Main extends React.Component {
    constructor(props){
        super();
        this.state={
            data: null,
            tab:"name"
        }
    }
    componentDidMount(){
        this.fetchRandomUser();
    }

    fetchRandomUser = () => {
        fetch("https://randomuser.me/api/")
        .then((res)=>res.json())
        .then((data)=> 
            this.setState({
                data: data.results[0],
                tab: 'name'
            })
        ) 
    }

    setTab=(tab)=>{
        this.setState({tab})
    }


    render(){
        const { data = {}, tab = '' } = this.state;
        if(!data){
            return <h1>Loading.....</h1>
        }
        const { email, picture: { medium },name,login,phone} = data;
        return(
        <>
        <section className="container">
            <div>
                <div className="center">
                <img src={medium} alt={medium} />
                </div>
                
                <h3 className="center">My {tab} is</h3>
                { tab === 'name' && (
                    <p className="center">{name.title} <span>{name.first}</span> <span>{name.last}</span></p>
                )}
                {
                    tab === 'user' && (
                        <p className="center">{login.username}</p>
                    )
                }
                 {
                    tab === 'phone' && (
                        <p className="center">{phone}</p>
                    )
                }
                {tab === 'lock' && (
                    <p className="center">{login.password}</p>
                )}
                {tab === 'email' && (
                    <h2 className="center">{email}</h2>
                )}
                <div className="flex width">
                <i className="fa-solid fa-envelope" id="name" onClick={()=> this.setTab('email')}></i>
                {/* <button onClick={()=> this.setTab('email')}>mail</button> */}
                <i class="fa-solid fa-user" onClick={()=> this.setTab('user')}></i>
                <i class="fa-solid fa-sensor-on"></i>
                <i class="fa-solid fa-phone" onClick={()=> this.setTab('phone')}></i>
                <i class="fa-solid fa-lock" onClick={()=> this.setTab('lock')}></i>
                </div>
                 {/* <p>{gender}</p>
              <p>{email}</p>  */}
            </div>
            <div className="button"> 
                <button onClick={this.fetchRandomUser}>Random User</button>
            </div>
       
        </section>
        </>

        )
    }
}


export default Main;