// disable cloud searching entirely
// just disabling in settings still causes AJAX calls to fire
$(()=>{
    window.Cloud = { onSearch: () => false }
})
