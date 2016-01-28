// minify with `make min` & then add this to the end of the
// "com.tle.web.sections.equella.logon.title" string
$(function(){
    $('#eqpageForm').submit(function(event) {
        var $un = $('#username')
        var username = $un.val()
        // if username ends in email domain, remove it
        if (username.match(/@cca\.edu$/)) {
            $un.val(username.replace('@cca.edu', ''))
        }
    })
})
