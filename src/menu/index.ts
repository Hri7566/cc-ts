import { print, read, term, os } from "../lib/cc/main";
import { Menu } from "./Menu";

const testCallback = () => {
	print("Test");
	read();
};

const menu = new Menu("test", "Test Menu", [
	{
		id: "test",
		displayName: "Test Option",
		callback: testCallback
	}
]);

while (true) {
	term.clear();
	term.setCursorPos(1, 1);
	menu.render();
	const key = os.pullEvent("key");
}
