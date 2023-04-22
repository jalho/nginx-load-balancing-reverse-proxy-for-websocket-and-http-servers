import WebSocket from "ws";

process.on("exit", (code) => {
    console.log(`About to exit with code: ${code}`);
});

function sendToWsServer(url) {
    const ws = new WebSocket(url);
    ws.on("error", console.error);
    ws.on("open", () => {
        console.log("[%s] Sending message to %s", new Date(), url);
        ws.send("Hello from client!");
    });
    ws.on("message", (data) => {
        console.log(data.toString());
    });
}

sendToWsServer("ws://proxy:80/a");
sendToWsServer("ws://proxy:80/b");
