var Rules = require('./rules.js');
module.exports = function (content, cssRealPath) {
    var _arr_css = []
        , _content;
    var reg = /(?:\/\*[\s\S]*?(?:\*\/|$))|([^{}\/]*)\{([^{}]*)}/gi;
    _content = content.replace(reg, function (m, selector, css) {
        if (css) {
            var rules = Rules.wrap(selector.trim(), css.trim(), cssRealPath);
            if (rules.isSprites()) {
                _arr_css.push(rules);
                css = rules.getCss();
            }
            // css代码压缩
            css = css.replace(/\?__spriter?\s*(["')])/g, "$1");
            css = css.replace(/(^\s*)|(\s*$)/gm, "");
            return selector + '{' + css + '}';
        }
        return m;
    });
    return {
        content: _content,
        map: _arr_css
    };
};
