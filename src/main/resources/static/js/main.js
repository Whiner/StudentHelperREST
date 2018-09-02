Vue.component('logout', {
    template:
    '    <form method="post"> <!-- action="/logout"-->' +
    //'        <input type="hidden" name="_csrf" value="${_csrf.token}"/>' +
    '        <button type="submit" class="btn btn-warning">Log out</button>' +
    '    </form>'
});

Vue.component('auth-user-nav-options', {
    props: ['username'],
    template:
    '        <div class="navbar-text mr-4">' +
    '            <span style="font-size: 17px">{{username}}</span>' +
    '        </div>'

});

Vue.component('nav-bar', {
        props: ['user'],
        template:
        '    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mx-auto">' +
        '        <a class="navbar-brand" href="/">Student Helper</a>' +
        '        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"' +
        '                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">' +
        '            <span class="navbar-toggler-icon"></span>' +
        '        </button>' +
        '        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">' +
        '            <div class="navbar-nav">' +
        '                <a class="nav-item nav-link " href="#">Home</a>  <!--href="/general"-->' +
        '                <a class="nav-item nav-link" href="#">Works</a>  <!--href="/general"-->' +
        '                <user-list-link v-if="user.isAdmin"></user-list-link>' +
        '            </div>' +
        '        </div>' +
        '        <auth-user-nav-options' +
        '                v-if="user.isAuthorised && user.username !== \'unknown\'"' +
        '                :username="user.username">' +
        '        </auth-user-nav-options>' +
        '        <logout v-if="user.isAuthorised && user.username !== \'unknown\'"></logout>' +
        '    </nav>'
    }
);

new Vue({
    el: "#nav",
    data:
    function() {
        return {
            curr_user: new Vue({
                data:{
                    isAdmin: true,
                    username: "Sashko" ,
                    isAuthorised: true
                }
            })
        }
    },
    template:
    '<nav-bar :user = curr_user></nav-bar>'
});


