<template>
    <div class="loading">
        <div class="loading__image-container">
            <div class="loading__image _ibg">
                <img src="../assets/loadicon1.png" alt="loading">
            </div>
            <div class="loading__text _text">
                <span>Loading</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "LoadingComp",
    data() {
        return {
            count: 0
        }
    },
    methods: {
        rotate() {
            setInterval(() => {
                this.count = this.count + 30;
                this.$el.querySelector('.loading__image').style.transform = `rotate(${this.count}deg)`;
            }, 500);
        }
    },
    mounted() {
        this.rotate();
    }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
@import '~@/styles/mixins.scss';

.loading {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;



    // .loading__image-container
    &__image-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    // .loading__image
    &__image {
        height: 146px;
        width: 146px;
        filter: linear-gradient(90deg, rgba(171,120,10,1) 0%, rgba(255,227,167,1) 100%);
        @include tablets {
            height: 73px;
            width: 73px;
        }

    }
    &__text {
        margin-top: 30px;
    }
}

</style>