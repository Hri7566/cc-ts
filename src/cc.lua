function fillTranslationTable(existing, new)
    if existing == nil then return end
    for i,v in pairs(existing) do
        if type(v) == "function" then
            new[i] = function(self, ...)
                return v(...)
            end
        end
    end
end

local Colors = {}
local Colours = {}
local Commands = {}
local Disk = {}
local Fs = {}
local GPS = {}
local Help = {}
local HTTP = {}
local IO = {}
local Keys = {}
local Multishell = {}
local OS = {}
local PaintUtils = {}
local Parallel = {}
local Peripheral = {}
local Pocket = {}
local Rednet = {}
local Redstone = {}
local Settings = {}
local Shell = {}
local Term = {}
local TextUtils = {}
local Turtle = {}
local Vector = {}
local Window = {}

fillTranslationTable(colors, Colors)
fillTranslationTable(colours, Colours)
fillTranslationTable(commands, Commands)
fillTranslationTable(disk, Disk)
fillTranslationTable(fs, Fs)
fillTranslationTable(gps, GPS)
fillTranslationTable(help, Help)
fillTranslationTable(http, HTTP)
fillTranslationTable(io, IO)
fillTranslationTable(keys, Keys)
fillTranslationTable(multishell, Multishell)
fillTranslationTable(os, OS)
fillTranslationTable(paintutils, PaintUtils)
fillTranslationTable(parallel, Parallel)
fillTranslationTable(peripheral, Peripheral)
fillTranslationTable(pocket, Pocket)
fillTranslationTable(rednet, Rednet)
fillTranslationTable(redstone, Redstone)
fillTranslationTable(settings, Settings)
fillTranslationTable(shell, Shell)
fillTranslationTable(term, Term)
fillTranslationTable(textutils, TextUtils)
fillTranslationTable(turtle, Turtle)
fillTranslationTable(vector, Vector)
fillTranslationTable(window, Window)

return {
    colors = Colors,
    colours = Colours,
    commands = Commands,
    disk = Disk,
    fs = Fs,
    gps = GPS,
    help = Help,
    http = HTTP,
    io = IO,
    keys = Keys,
    multishell = Multishell,
    os = OS,
    paintutils = PaintUtils,
    parallel = Parallel,
    peripheral = Peripheral,
    pocket = Pocket,
    rednet = Rednet,
    redstone = Redstone,
    rs = Redstone,
    settings = Settings,
    shell = Shell,
    term = Term,
    textutils = TextUtils,
    turtle = Turtle,
    vector = Vector,
    window = Window
}
