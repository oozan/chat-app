const socket = new WebSocket('ws://localhost:8080/ws');

let connect = cb => {
    console.log('Connecting...');

    socket.onopen = () => {
        console.log('Connected to the server.');
    };

    socket.onmessage = msg => {
        console.log(msg);
        cb(msg);
    };

    socket.onclose = event => {
        console.log('Connection closed', event);
    };

    socket.onerror = error => {
        console.log('Connection error', error);
    };
};

let sendMsg = msg => {
    console.log('Sending msg', msg);
    socket.send(msg);
};

export { connect, sendMsg };