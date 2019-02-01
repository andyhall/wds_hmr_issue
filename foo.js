


module.exports = {

    dispose: function () {

        // the error below causes WDS to fully reload
        // the page whenever this file is edited.
        // comment it out and HMR will work normally

        this.syntaxError()

    }

}


document.body.innerHTML +=
    '<p>Foo module successfully required</p>'




