<template>
    <form method="post"> <!-- action="/logout"-->
        <input type="hidden" name="_csrf" value="${_csrf.token}"/>
        <button type="submit" class="btn btn-warning">Log out</button>
    </form>
</template>

<script>
    export default {
        name: 'logout'
    }
</script>


<style scoped>

</style>