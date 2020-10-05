
<template>
    <input
     type="text"
     v-model="username"
    />
    <input
    type="password"
     v-model="password"
    />
    <button @click="login">Submit</button>
</template>

<script>
export default {
    name:"Login",
    data(){
        return {
            username:'',
            password:''
        }
    },
    methods:{
        login(){
            this.$router.push({ path: 'home' });
        }
    }
}
</script>

<style scoped>

</style>