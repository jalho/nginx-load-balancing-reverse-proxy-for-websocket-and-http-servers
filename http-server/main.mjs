import http from "node:http";

http.createServer((i, o) => {
    console.log("[%s] %s %s", new Date(), i.method, i.url);
    o.end();
}).listen(80, () => console.log("Listening..."));
