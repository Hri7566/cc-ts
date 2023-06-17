type MaybePromise<T> = Promise<T> | T;
export type EventArguments = unknown[];
export type EventCallback = (...args: EventArguments) => MaybePromise<void>;

interface Event {
	once: boolean;
	callback: EventCallback;
}

export class EventEmitter {
	_events: Record<string, Event[]> = {};

	on(evt: string, func: EventCallback) {
		if (!this._events[evt]) {
			this._events[evt] = [];
		}

		this._events[evt].push({
			once: false,
			callback: func
		});
	}

	once(evt: string, func: EventCallback) {
		if (!this._events[evt]) {
			this._events[evt] = [];
		}

		this._events[evt].push({
			once: true,
			callback: func
		});
	}

	off(evt: string, func: EventCallback) {
		if (!this._events[evt]) return;

		for (let i = 0; i < this._events[evt].size(); i = i + 1) {
			const event = this._events[evt][i];

			if (event.callback === func) {
				this._events[evt].remove(i);
				break;
			}
		}
	}

	emit(evt: string, ...args: EventArguments) {
		if (!this._events[evt]) return;

		for (let i = 0; i < this._events[evt].size(); i = i + 1) {
			const event = this._events[evt][i];
			event.callback(...args);

			if (event.once) {
				this.off(evt, event.callback);
			}
		}
	}
}
