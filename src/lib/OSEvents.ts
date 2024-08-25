import { EventEmitter } from "./EventEmitter";
import { os, print, textutils } from "./cc/main";

export class OSEvents {
	public static bus = new EventEmitter();

	public static listen() {
		while (true) {
			this.handle();
		}
	}

	public static handle() {
		//! do NOT de-curse this code.
		//! roblox-ts does not support [evt, ...args]

		const [
			evt,
			arg1,
			arg2,
			arg3,
			arg4,
			arg5,
			arg6,
			arg7,
			arg8,
			arg9,
			arg10,
			arg11,
			arg12,
			arg13,
			arg14,
			arg15,
			arg16
		] = os.pullEventRaw();
		this.bus.emit(
			evt,
			arg1,
			arg2,
			arg3,
			arg4,
			arg5,
			arg6,
			arg7,
			arg8,
			arg9,
			arg10,
			arg11,
			arg12,
			arg13,
			arg14,
			arg15,
			arg16
		);

		this.bus.emit(
			"tick",
			evt,
			arg1,
			arg2,
			arg3,
			arg4,
			arg5,
			arg6,
			arg7,
			arg8,
			arg9,
			arg10,
			arg11,
			arg12,
			arg13,
			arg14,
			arg15,
			arg16
		);
	}
}
