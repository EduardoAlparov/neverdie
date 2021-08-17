<template>
    <div class="page__wrapper">
        <div class="page__header header">
            <div class="header__container _container">
                <div class="header__text">
                    Лучшие астрологи и экстрасенсы Румынии
                </div>
            </div>
        </div>
        <div class="page__main-content">
            <ContentComp @scrollDown="scrollDown"/>

            <div class="banner-section">
                <div class="banner-section__container _container">
                    <div class="banner-section__body">
                        <div class="banner-section__text _text">
                            <span>
                                Многие не верят предсказаниям и мы решили доказать каждому,
                                <a href="#" class="banner-section__link _link">что прогноз может изменить жизнь любого человека!</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page__footer" id="footer">
            <FooterSectionComp />
        </div>

        <div class="page__cover ">
            <div class="page__image _ibg">
                <img src="../assets/blik.png" alt="blik">
            </div>  
        </div>
    </div>
</template>

<script>
import ContentComp from '../components/ContentComp'
import FooterSectionComp from '../components/FooterSectionComp'

export default {
    name: "MainLayout",
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        scrollDown() {
            let footer = this.$el.querySelector("#footer");
            footer.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })        
        }
    },
    components: {
        ContentComp, FooterSectionComp
    }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/mixins.scss';
@import '~@/styles/variables.scss';

.page {
    // .page__wrapper
    &__wrapper {
        min-height: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        overflow: hidden;
    }

    &__cover {
        position: absolute;
        width: 100%;
        top: 0;
        right: 0;
        @include tablets {
            top: 45px;
        }
    }
    &__image{
        height: 713px;
        @include tablets {
            height: 438px;
        }
    }
    // .page__header
    &__header {
        border-bottom: 1px solid $text_color_grey;
    }

    // .page__main-content
    &__main-content {
        padding: 12px 0;
        flex: 1 1 auto;
    }

    // .page__footer
    &__footer {
    }
}

.header {
    height: 75px;
    @include tablets {
        height: 50px;
    }
    // .header__container
    &__container {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    // .header__text
    &__text {
        text-align: center;
        color: $text_color_white;
        font-size: $fs;
        font-style: normal;
        font-weight: 300;
        line-height: 29px;
        letter-spacing: 0.1em;
        @include tablets {
            font-size: 12px;
            font-style: normal;
            font-weight: 300;
            line-height: 14px;
            letter-spacing: 0.1em;
            text-align: center;
        }
    }
}

.banner-section {
    width: 1440px;
    height: 606px;
    margin: 0 auto;
    position: relative;

    @include desktop {
        width: 100%;
    }
    @include tablets {
        height: 100vh;
    }
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('~@/assets/image7.jpg') no-repeat;
        background-size: cover;
        background-position: center center;
        opacity: .2;
        z-index: 15;
    }

    // .banner-section__container
    &__container {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    // .banner-section__body
    &__body {
        position: relative;
        z-index: 30;
    }

    // .banner-section__text
    &__text {
        padding: 0 60px;
        @include tablets {
            padding: 0;
        }
    }

    // .banner-section__link
    &__link {
    }
}

</style>