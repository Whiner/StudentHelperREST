<template>
    <div>
        <div class="navbar-text mr-4">
            <span style="font-size: 17px">{{username}}</span>
        </div>
        <div class="form-inline">
            <logout></logout>
        </div>
    </div>
</template>

<script>
    import Logout from "../accountsecurity/logout";
    export default {
        name: 'auth-user-nav-options',
        components: {Logout},
        props: {"username": String}
    }
</script>

<style scoped>

</style>