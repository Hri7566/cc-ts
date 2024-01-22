# cc-ts

This project is a very cursed test of TypeScript to ComputerCraft transpilation with `roblox-ts` and `luabundle`.

## How to use this template

In order for this template to even work, you have to update the roblox-ts compiler types:

```
$ pnpm upgrade @rbxts/compiler-types
```

If the above command doesn't work, try uninstalling it first:

```
$ pnpm remove @rbxts/compiler-types && pnpm i -D @rbxts/compiler-types
```

This template works by generating lua code with roblox-ts, then bundling the code into one output file with luabundle. After that, the `require()` calls are fixed from weird broken roblox code and replaced with happy code compatible with CC: Tweaked and the lua bundle is finally output as one file. Then I usually just drag and drop that file on a CC interface and it copies the code onto the in-game computer.

Compiling and bundling is handled with pnpm:

```
$ pnpm build && pnpm bundle
```

The code is output in the `dist/cc-ts.bundle.lua` file. This output can be changed by editing the variables `bundleName` and `bundleDir` in `bundle.js`.

This project is easily extendable and opens opportunities for easy interoperability between TypeScript and CC.
