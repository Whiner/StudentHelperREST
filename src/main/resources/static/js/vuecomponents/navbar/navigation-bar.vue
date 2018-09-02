<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mx-auto">
        <a class="navbar-brand" href="/">Student Helper</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link " href="#">Home</a>  <!--href="/general"-->
                <a class="nav-item nav-link" href="#">Works</a>  <!--href="/general"-->
                <!--<user-list-link v-if="user.isAdmin"></user-list-link>   &lt;!&ndash; &ndash;&gt;-->
            </div>
        </div>

        <!--<auth-user-nav-options-->
                <!--v-if="user.isAuthorised && user.username !== 'unknown'"-->
                <!--:username="user.username">-->
        <!--</auth-user-nav-options>-->
    </nav>

</template>

<script>
    import AuthUserNavOptions from "./auth-user-nav-options";
    import UserListLink from "./user-list-link";


    export default {
        el: "#bg",
        name: "navigation-bar",
        components: {UserListLink, AuthUserNavOptions},
        //props: {'user': user}
    }
</script>

<style scoped>

</style>