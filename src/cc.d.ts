declare class TextUtilsConstructor {
	serialize(obj: object): string;
	unserialize(text: string): object;
	serializeJSON(obj: object): string;
	unserializeJSON(text: string): object;
}

export const TextUtils: TextUtilsConstructor;
