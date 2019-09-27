import React from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery';

class App extends React.Component {

    state = {
      manager:'',
      players:[],
      balance:'',
      value:'',
      message:''
    }

async componentDidMount(){
  const manager = await lottery.methods.manager().call();
  const players = await lottery.methods.getPlayers().call();
  const balance = await web3.eth.getBalance(lottery.options.address);
  this.setState({manager,players,balance});
}

onSubmit = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();

    this.setState({message:'等待交易完成.....'})
    await lottery.methods.enetr().send({from:accounts[0],value:web3.utils.toWei(this.state.value,'ether')});
    this.setState({message:'入场成功！'})
}

onClick = async ()=>{
  const accounts = await web3.eth.getAccounts();
  this.setState({message:'博彩进行中，祝您好运！'});
  await lottery.methods.pickwiner().send({from:accounts[0]});
  this.setState({message:'赢家产生！'});

}

  render(){
    console.log(this.state.value);
  return (
    <div className="App">
    <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
        <p>博彩合约测试作业-学生：连春树</p>
        <h4>管理者地址：{this.state.manager} </h4>
        <p>当前的参与者数量：{this.state.players.length}人 —— 当前资金池数量：{web3.utils.fromWei(this.state.balance,'ether')} ether</p>
        <form onSubmit={this.onSubmit}>
          <h4>博彩项目参与：</h4>
          <div>
            <lable>你想能与的金额:</lable>
            <input
                value={this.state.value}
                onChange={event=>{this.setState({value:event.target.value})}}
            />
            <button>提交</button>
          </div>
        </form>

        <h4>判断输赢：<button onClick={this.onClick}>开始博彩</button></h4>
        <p>{this.state.message}</p>
    </header>
    </div>
  );
}
}
export default App;
