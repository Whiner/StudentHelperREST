
class CurrentUser{
    constructor(isAdmin, username, isAuthorised){
        this.isAdmin = isAdmin;
        this.username = username;
        this.isAuthorised = isAuthorised;
    }
}

let curr_user = new CurrentUser(false, "unknown", false);


let user_definition = new Vue({
    el: "#isUser",
    data: {
        unknown: true
    }
});