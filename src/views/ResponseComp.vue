<template>
    <div class="response-page">  
        <LoadingComp v-if="isLoad"/>
        <ul class="response-page__list" v-else>
            <li class="response-page__item">
                <div class="response-page__text _text"> Data from Api:</div>
            </li>
            <li class="response-page__item">
                <div class="response-page__text _text"> Hello, my name is {{data.name}}</div>
            </li>
            <li class="response-page__item">
                <div class="response-page__text _text"> i am {{data.birth_year}}</div>
            </li>
            <li class="response-page__item">
                <div class="response-page__text _text"> my height {{data.height}}sm and mass {{data.mass}}kilo</div>
            </li>
            <div class="response-page__image">
                <div class="response-page__luke _ibg">
                    <img src="../assets/luke.jpg" alt="luke">
                </div>
            </div>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
import LoadingComp from '../components/LoadingComp.vue';

export default {
    name: "ResponseComp",
    components: {
        LoadingComp
    },
    props:  {},
    data() {
        return {
            data: [],
            isLoad: true
        }
    },
    mounted() {
        axios.get('https://swapi.dev/api/people/1/').then((response) => {
            this.data = response.data
            this.isLoad = false
        })
    }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
@import '~@/styles/mixins.scss';

.response-page{
    height: 100vh;
    width: 100%;
    &__list{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
    &__luke {
        width: 300px;
        height: 200px;
    }
}
</style>