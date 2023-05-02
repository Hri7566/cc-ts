script = "TS"
_G = {
    TS = {
        import = function(script, parent, name)
            return require(name)
        end
    }
}

require("main")
