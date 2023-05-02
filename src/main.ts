import { print, _HOST, term, colors } from "./lib/cc/main";

term.clear();
term.setTextColor(colors.white);
term.write(`${_HOST}\n`);
