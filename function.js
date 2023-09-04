

function clikcButton() {
    console.log('Click element')
    frameworkPlaywirght.clikcButton();
    
}

function clikcButton(selector, test='Hello') {
    console.log('Click element')
    frameworkPlaywirght.clikcButton(selector)
    assert txtOnUi == test
}