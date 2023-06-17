// import "./menu";
import { http } from "./lib/cc/main";

const ws = http.websocket("wss://mpp.hri7566.info:8443");

print(type(ws));
