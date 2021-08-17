<template>
    <div class="footer-section">
        <div class="footer-section__body">
            <div class="footer-section__question">
                <div class="footer-section__container _container">
                    <div class="question">
                        <div class="question__body">
                            <div class="question__text">
                                <!-- <span class="question__text--pre"><br></span> -->
                                <span>Боитесь ли вы умереть?</span>
                            </div>
                            <div class="question__buttons">
                                <router-link tag="button" class="question__button _button" to="/popupone">Да</router-link>
                                <router-link tag="button" class="question__button _button" to="/popupone">Нет</router-link>
                            </div>
                            <div class="question__desc">
                                <span>Вопрос 1-5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-section__footer footer">
                <div class="footer__container _container">
                    <div class="footer__body">
                        <div class="footer__rune">
                            <div class="footer__rune-image _ibg">
                                <img src="../assets/rune1.svg" alt="руны">
                            </div>
                        </div>
                        <div class="footer__text">
                            <span>Вы, конечно, умрете. И все, с кем вы знакомы, тоже однажды умрут.</span>
                        </div>
                        <div class="footer__rune">
                            <div class="footer__rune-image _ibg">
                                <img src="../assets/rune2.svg" alt="руны">
                            </div>
                        </div>
                         <div class="footer__latin-text-block">
                            <div class="footer__latin-text">
                                <span>TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer__image footer__image--left">
                </div>
                <div class="footer__image footer__image--right">
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'FooterSectionComp'
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
@import '~@/styles/mixins.scss';

.footer-section {
        // .footer-section__body
        &__body{
            @include tablets  {
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center0;
                justify-content: space-between;
            }
        }

        // .footer-section__question
        &__question{
            padding: 160px 0 40px 0;
            @include tablets {
                padding: 53px 0 15px 0;
                display: flex;
                align-items: center;
                margin-bottom: 60px;
            }
        }

		// .footer-section__footer
		&__footer {
            @include tablets {
                margin-top: 60px;
            }
		}
}
.question {

    // .question__body
    &__body {
    }

    // .question__text
    &__text {
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 35px;
        letter-spacing: 0em;
        text-align: center;
        text-transform: uppercase;
        margin-bottom: 70px;
        @include tablets {
            font-size: 16px;
            line-height: 19px;
            margin-bottom: 25px;
        }
    }

    // .question__text--pre
    &__text--pre {
        text-align: center;
        font-size: 25px;
        text-transform: none;
    }

    // .question__buttons
    &__buttons {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-bottom: 35px;
    }

    // .question__button
    &__button {
        margin-bottom: 35px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    // .question__desc
    &__desc {
        font-style: normal;
        font-weight: 300;
        line-height: 19px;
        letter-spacing: 0.1em;
        text-align: center;
        color: $text_color_grey;
        @include tablets {
            font-size: 12px;
            font-weight: 300;
            line-height: 14px;
        }
    }
}
.footer {
    height: 500px;
    position: relative;
    width: 1440px;
    margin: 0 auto;
    @include desktop {
        width: 100%;
    }

    @include tablets {
        height: 100%;
    }

    // .footer__container
    &__container {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    // .footer__body
    &__body {
        max-width: 245px;
        @include tablets {
            max-width: 300px;
        }
    }

    // .footer__image
    &__image {
        position: absolute;

        &--left {
            left: 0;
            bottom: 0px;
            transform: translateX(-40%);

            width: 164px;
            height: 164px;

            mask-image: url('../assets/eye.svg');
            background-color: $text_color_grey;
            @include tablets {
                bottom: 80px;
                width: 52px;
                height: 52px;
                mask-image: url('../assets/eye50px.svg');
            }
        }
        &--right {
            width: 296px;
            height: 156px;

            top: 0;
            right: 0;
            transform: translateX(40%);

            mask-image: url('../assets/eye-1.svg');
            background-color: $text_color_grey;
            @include tablets {
                width: 83px;
                height: 44px;
                mask-image: url('../assets/eye83px.svg');
            }
        }
    }

    // .footer__image-container
    &__image-container {
        
    }

    &__svg{
        width: 164px;
        height: 164px;
    }

    &__rune{
        margin-bottom: 80px;
        margin-top: 42px;

        @include tablets {
            margin-bottom: 35px;
        }
        &:nth-child(1) {
            margin-top: 0;
        }
        &:last-child {
            margin-bottom: 0;
        }
    }
    &__rune-image{
        width: 57px;   
        height: 18px;
        margin: 0 auto;
    }
    // footer__text
    &__text{
        font-family: 'Bad Script', cursive;
        font-size: 25px;
        color: $text_color_white;
        font-style: normal;
        font-weight: 400;
        line-height: 35px;
        letter-spacing: 0em;
        text-align: center;
        @include tablets {
            max-width: 235px;
            margin: 0 auto;
        }
    }
    &__latin-text{
        display: none;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 3px;
        text-align: center;
        color: $text_color_grey;
        
        @include tablets {
            display: block;
            font-size: 7px;
            line-height: 9px;
            margin-top: 70px;
        }
    }
}
</style>