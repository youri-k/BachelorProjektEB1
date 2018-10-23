const chai = require('chai');
const expect = chai.expect;
const URLParser = require('../server/URLParser.js');

describe('URLParser', function () {
    it('should set the url as local variable when construced', function () {
        const parser = new URLParser('/Hello/World');
        expect(parser.url).to.eql('/Hello/World');
    });

    it('should correctly parse the folders', function () {
        const parser = new URLParser('/Hello/World');
        parser.parse();

        const folder = parser.getFolder();
        expect(folder).to.have.a.lengthOf(2);
        expect(folder).to.have.ordered.members(['Hello', 'World']);
    });
});
