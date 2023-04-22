import { WebSocketServer } from "ws";

process.on("exit", (code) => {
    console.log(`About to exit with code: ${code}`);
});

const server = new WebSocketServer({ port: 80 });

server.on("connection", function connection(ws) {
    ws.on("error", console.error);
    ws.on("message", function message(data) {
        console.log("[%s] received: %s", new Date(), data);
        ws.send("Hello from server!");
    });
});
