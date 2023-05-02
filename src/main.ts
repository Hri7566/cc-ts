import { TextUtils } from "./cc";
import { EventEmitter } from "./EventEmitter";

const evt = new EventEmitter();

evt.on("print", print);
evt.emit("print", "hello");
