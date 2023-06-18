const bundleName = "cc-ts";
const bundleDir = "dist";

const { bundle } = require("luabundle");
const { writeFileSync, mkdirSync } = require("fs");
const package = require("./package.json");
const path = require("path");

// TS.import(script, script.Parent, "lib", "cc", "main")
// require("lib.cc.main")

function resolveModule(currentPath, args) {
	let pathArgs = args.map((el) => {
		let p = el.split(".");
		p = p
			.map((e) => {
				if (e == "script") return ".";
				if (e == "Parent") return "..";
				return e;
			})
			.join("/");

		if (p.startsWith("./")) p = p.substring("./".length);

		if (p.match(/\".*\"/)) {
			return p.substring(1, p.length - 1);
		} else {
			return p;
		}
	});

	// console.log("prejoin:", pathArgs);
	// console.log("postjoin:", path.join(currentPath, "out", pathArgs.join("/")));

	// const out = path.join(currentPath, "out", pathArgs.join("/")).replace("out/", "").split("/").join(".");
	// console.log("from " + currentPath + ":", out);
	// return out;

	const out = path.join(currentPath, ...pathArgs);
	console.log(out);
	return out;
}

const lua = bundle("./out/init.lua", {
	luaVersion: "5.1",
	rootModuleName: "init",
	paths: ["./?.lua", "./?/init.lua", "./?.lc", "./out/?.lua", "./out/?/init.lua"],
	preprocess: (module, options) => {
		// redneck code
		let code = module.content;
		console.log(module.name + ":", module.resolvedPath);
		// code = [...code.split(/TS.import\(script, script.*, /g).join("require(").split(/\", \"/g)].join("/");
		// code = [...code.split(/TS.import\(script, script, /g).join("require(").split(/\", \"/g)].join("/");

		// code = code.split("TS.import(").join("require(");
		console.log("before\n", code);
		// code = code.replace(/TS.import\("/g, 'require("');
		// code = code.replace(/TS.import\(script\, script\..*\, "/g, 'require("');

		if (module.resolvedPath) {
			code = code.replace(/TS.import\(script\, script.*\, ".*"\)/g, (el) => {
				console.log(`\x1b[35m${el}\x1b[0m`);
				const args = el.substring("TS.import(script, ".length, el.length - 1).split(", ");
				console.log(args);
				let newPath = resolveModule(path.parse(module.resolvedPath).dir, args);
				return `require("${newPath}")`;
			});
		}

		// code = code.replace(/require\(.*\)/g, (el) => {
		// 	el = el.split(`", "`).join(".");
		// 	console.log(`\x1b[35m${el}\x1b[0m`);
		// 	return el;
		// });

		console.log("after\n", code);
		return code;
		// const regex = /TS\.import\(script, script.Parent,/g;
		// console.log(code.match(regex));
		// let c = code.replace(regex, `require(`);
		// return c;
	}
});

mkdirSync(bundleDir, {
	recursive: true
});

writeFileSync(`${bundleDir}/${bundleName}.bundle.lua`, lua);
