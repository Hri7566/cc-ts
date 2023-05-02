const bundleName = "cc-ts";
const bundleDir = "dist";

const { bundle } = require('luabundle');
const { writeFileSync, mkdirSync } = require('fs');
const package = require('./package.json');

const lua = bundle('./out/init.lua', {
    luaVersion: 'LuaJIT',
    paths: ['out/?.lua'],
    preprocess: (module, options) => {
        // redneck code
        let code = module.content;
        return code.split(/TS.import\(script, script.Parent, /g).join("require(").split(/\", \"/g).join("/")
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
