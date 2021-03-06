var Hex = {
    encode : function (s) {
        var s = unescape(encodeURIComponent(s))
        var h = ''
        for (var i = 0; i < s.length; i++) {
            h += s.charCodeAt(i).toString(16)
        }
        return h
    },
    decode : function (h) {
        var s = ''
        for (var i = 0; i < h.length; i+=2) {
            s += String.fromCharCode(parseInt(h.substr(i, 2), 16))
        }
        return decodeURIComponent(escape(s))
    }
};
