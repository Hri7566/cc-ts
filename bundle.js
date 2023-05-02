const bundleName = "cc-ts";

const { bundle } = require('luabundle');
const { writeFileSync, mkdirSync } = require('fs');
const package = require('./package.json');

const lua = bundle('./out/init.lua', {
    luaVersion: 'LuaJIT',
    paths: ['out/?.lua'],
    preprocess: (module, options) => {
        let code = module.content;
        const regex = /TS\.import\(.*,.*,/g;
        let c = code.replace(regex, `require(`);
        return c;
    }
});

mkdirSync("dist", {
    recursive: true
});

writeFileSync(`dist/${bundleName}.bundle.lua`, lua);
