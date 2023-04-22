# Nginx load balancing reverse proxy for WebSocket and HTTP servers

This is an example setup.

# Usage

1. Make images

    ```
    cd websocket-server; make
    ```

    ```
    cd http-server; make
    ```

    ```
    cd websocket-client; make
    ```

2. Start

    ```
    docker compose up
    ```

    See the logs. The container `websocket-client` sends messages to `websocket-server-a` and `websocket-server-b` at startup.
    
    The proxy is also bound to Docker host's port 8080. Therefore, for browser web API demo, open the included `index.html`, and observe its connection reach `websocket-server-a`. To further observe the load balancing, use e.g. `curl -v "http://localhost:8080/g"` and other paths.

3. Stop

    ```
    docker compose down
    ```
