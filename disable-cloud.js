// disable cloud searching entirely
// just disabling in settings still causes AJAX calls to fire
// added to com.tle.web.sections.equella.footer.thankyou
$(()=>{
    window.Cloud = { onSearch: () => false }
})
