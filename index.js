


var foo = require('./foo')

if (module.hot) {
    module.hot.accept('./foo', function () {
        foo.dispose()
        foo = require('./foo')
    })
}



