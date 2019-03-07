// $(document).ready(startApp);

class LandingPage{
    constructor(){
        $(".landingPage").click(this.hideBackgroundImage);
    }

    hideBackgroundImage(){
        $(".landingPage").hide();
    }
}
