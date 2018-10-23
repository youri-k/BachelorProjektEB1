module.exports = class URLParser {
    constructor(url) {
        this.url = url;
    }

    parse() {
        this.folder = this.url.split('/');
        this.folder.shift();

        const lastElementIndex = this.folder.length - 1;
        const parameterString = this.folder[lastElementIndex].split('?')[1];
        this.folder[lastElementIndex] = this.folder[lastElementIndex].split('?')[0];

        if (!parameterString) return;

        this.parameter = parameterString
            .split('&')
            .map((param) => {
                const pair = param.split('=');
                return {
                    attribute: pair[0],
                    value: pair[1],
                };
            });
    }

    getFolder() {
        return this.folder;
    }

    getParameter() {
        return this.parameter;
    }
};
