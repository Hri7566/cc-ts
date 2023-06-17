import { colors, os, term } from "../lib/cc/main";

type MenuCallback = () => void;

interface MenuOption {
	id: string;
	displayName: string;
	callback: MenuCallback;
}

export class Menu {
	public selectedOption = 1;

	constructor(
		public id: string,
		public displayName: string,
		public options: MenuOption[],
		public color: number = colors.blue
	) {}

	public render() {
		term.setBackgroundColour(this.color);
		term.clear();
		print(this.displayName);
		for (const [index, option] of pairs(this.options)) {
			if (index === this.selectedOption) {
				print(`> ${option.displayName} <`);
			} else {
				print(`  ${option.displayName}  `);
			}
		}
	}
}
