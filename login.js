$(()=>{
    let register = $(".register");
    let login = $(".login");
    let registerTab = $(".tab-register");
    let loginTab = $(".tab-login");

    loginTab.hide();
    register.addClass("active");
    onRegisterTab();
    onLoginTab();

    function onRegisterTab(){
        login.on("click",(evt)=>{
            swapLogin(evt);
        })
    }   

    function onLoginTab(){
        register.on("click",(evt)=>{
            swapRegister(evt);
        })
    }

    function swapLogin(evt){
        evt.preventDefault();
        registerTab.slideUp(250,()=>{
            loginTab.slideDown(250);
        });
        
        login.addClass("active");
        register.removeClass("active");
    }

    function swapRegister(evt){
        evt.preventDefault();
        loginTab.slideUp(250,()=>{
            registerTab.slideDown(250);
        });
        register.addClass("active");
        login.removeClass("active");

    }

})