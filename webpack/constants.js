const { resolve } = require('path');

exports.SRC = resolve(__dirname, '../src');
exports.PUBLIC = resolve(__dirname, '../public');
exports.DIST = resolve(__dirname, '../build');
exports.FAVICON = resolve(__dirname, '../public', 'favicon.ico');
exports.MANIFEST = resolve(__dirname, '../public', 'manifest.json');
