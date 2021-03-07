const axios = require('axios');

const totalTransaction = 360000
const MiniSecond = 10
const DestinationAddress = "http://3.131.135.209:8545"

let params = [{
    "from": "0x94e8ce38148e8bc73b8e0af0fe8275028b452466",
    "to": "0x00000000000000000000000000000000000000ff",
    //"gas": "0x76c0", // 30400
    //"gasPrice": "0x9184e72a000", // 10000000000000
    //"data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
}]

for (let i = 0; i < totalTransaction; i++) {
    setTimeout(() => {
        axios.post(DestinationAddress, {
            jsonrpc: "2.0",
            "method": "eth_sendTransaction",
            params: params,
            id: 1
        },
        {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    }, MiniSecond * i)
}
