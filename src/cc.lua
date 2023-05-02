local TextUtils = {}

function TextUtils:serialize(obj)
    return textutils.serialize(obj)
end

function TextUtils:unserialize(text)
    return textutils.unserialize(text)
end

function TextUtils:serializeJSON(obj)
    return textutils.serializeJSON(obj)
end

function TextUtils:unserializeJSON(text)
    return textutils.unserializeJSON(text)
end

return { TextUtils = TextUtils }
