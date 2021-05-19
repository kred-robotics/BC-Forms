import Web3 from 'web3'
const TestWeb3 = () => {
    return (<div><h1>Hello World</h1></div>)
}
export default TestWeb3
const web3 = new Web3('https://kovan.infura.io/v3/62daa7d5d232438cb903b9b27666df05');

var abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"getAnswers","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string[]","name":"_ans","type":"string[]"}],"name":"setAnswers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
;
var address =web3.utils.toChecksumAddress("0xF32225627ec538D92D0ebc9547C06fD883F247B6");
var contract = new web3.eth.Contract(abi,address);
contract.methods.getAnswers().call(function (err,res){
    if (res){
        //res ==  ANS_ARRAY
        console.log(res);
    }
})
var check = contract.methods.setAnswers([1,2,3]).send({from:'0x2799e4777E52649BA9E73e0D33D2B6ebA719650F'})
console.log(check);
contract.methods.getAnswers().call(function (err,res){
    if (res){
        //res ==  ANS_ARRAY
        console.log(res);
    }
})