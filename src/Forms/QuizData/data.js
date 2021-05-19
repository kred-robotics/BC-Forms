import Web3 from 'web3'

const web3 = new Web3('https://kovan.infura.io/v3/62daa7d5d232438cb903b9b27666df05');

var abi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"getAnswers","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string[]","name":"_ans","type":"string[]"}],"name":"setAnswers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]
;
var address =web3.utils.toChecksumAddress("0xF32225627ec538D92D0ebc9547C06fD883F247B6");
var contract = new web3.eth.Contract(abi,address);

export const Questions = [
    {
        question: 'Choose The correct - Which one is Two Zero Two Four ?',
        ansOption: ['2024', '2044', '0044','0024'],
        id: '1'
    },
    {
        question: 'Choose The correct - What is Capital of India ?',
        ansOption: ['Lahor', 'Newyork', 'Palestine','Gaziabad'],
        id: '2'
    },
    {
        question: 'Choose The correct - Who is your best friend',
        ansOption: ['barry', 'gopala', 'suu','tejveer'],
        id: '3'
    }
]

export async function AnswersFun (){
    const result =  contract.methods.getAnswers().call()
    return result
};


//export const Answers = ['2024','Gaziabad','tejveer']