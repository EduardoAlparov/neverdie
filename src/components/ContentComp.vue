<template>
    <div class="content">
        <div class="content__container _container" @scroll.once="handleScroll()">
            <div class="content__title _title">
                <span>Точность прогноза: 97%</span>
            </div>
            <div class="content__image">
                <div class="content__image-container">
                    <div class="content__image-back _ibg">
                        <img
                            src="../assets/icon1.svg"
                            alt="icon"
                        />
                    </div>
                    <div class="content__image-front _ibg">
                        <img src="../assets/woman1.png" alt="woman foto">
                    </div>
                </div>
            </div>
            <div class="content__question">
                <div class="question">
                    <div class="question__body">
                        <div class="question__text">
                            <span class="question__text--pre">Вас беспокоит вопрос о том,<br></span>
                            <span>когда Вы покинете этот Мир и при каких обстоятельствах?</span>
                        </div>
                        <div class="question__buttons">
                            <button class="question__button _button" @click="$emit('scrollDown')">Да</button>
                            <button class="question__button _button">Нет</button>
                        </div>
                        <div class="question__desc">
                            <span>Онлайн предсказание</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content__preview preview" id="preview" :class="{_active: isActive}">
                <div class="preview__body">
                    <div class="preview__text _text">
                        <span>
                            Позвольте нам раскрыть эту волнующую тайну и 
                            <a href="#" class="preview__link _link">с точностью определить дату и время вашей смерти,</a>
                            а также предшествующую этому событию причину
                        </span>
                    </div>
                    <div class="preview__image-contanier">
                        <div class="preview__image _ibg">
                            <img src="../assets/hands.png" alt="hands">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ContentComp',
    data() {
        return {
            isActive: false
        }
    },
    methods: {
        handleScroll() {
            let preview = this.$el.querySelector("#preview");
            const posTop = preview.getBoundingClientRect().top;
            if (posTop + (preview.clientHeight / 1.2) <= window.innerHeight && posTop >= 0) {
                preview.classList.add('_active');
            }       
            if (posTop + (preview.clientHeight/2) > window.innerHeight && posTop >= 0) {
                preview.classList.remove('_active');
            }
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
@import '~@/styles/mixins.scss';


.content {
    position: relative;
    z-index: 50;

    // .content__container
    &__container {
    }

    // .content__title
    &__title {
        font-size: 25px;
        font-style: normal;
        font-weight: 300;
        line-height: 29px;
        letter-spacing: 0.1em;
        text-align: center;
        color: $text_color_white;
        margin-bottom: 42px;
        @include tablets {
            font-size: 20px;
            font-style: normal;
            font-weight: 300;
            line-height: 14px;
            letter-spacing: 0.1em;
            text-align: center;
            margin-bottom: 24px;
        }
    }

    // .content__image
    &__image {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    // .content__image-container
    &__image-container {
        position: relative;
        width: 390px;
        height: 390px;

        @include tablets {
            height: 225px;
            width: 225px;
        }
    }

    &__image-back {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        img {
            fill: $text_color_grey;
        }
    }

    &__image-front {
        position: absolute;
        height: 238px;
        width: 238px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        @include tablets {
            height: 137px;
            width: 137px;
        }
    }

    // .content__question
    &__question {
        
    }
    &__preview {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 130px;
        margin-bottom: 70px;
        @include tablets {
            padding-top: 75px;
            margin-bottom: 40px;
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
            line-height: 25px;
            margin-bottom: 25px;
        }
    }

    // .question__text--pre
    &__text--pre {
        text-align: center;
        font-size: 25px;
        text-transform: none;
        @include tablets {
            font-size: 16px;
        }
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
        @include tablets {
            margin-bottom: 20px;
        }
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
            line-height: 14px;
        }
    }
}

.preview {
    opacity: 0;
    visibility: hidden;
    transition: 1.3s;

    &._active {
        opacity: 1;
        visibility: visible;
    }
    // .preview__body
    &__body {
        position: relative;
        width: 442px;
        height: 437px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid $text_color_white;
        border-radius: 3px;
        @include tablets {
            width: 255px;
            height: 252px;
        }
    }

    &__image-contanier {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &__image {
        width: 135px;
        height: 135px;
        border-radius: 50%;
        @include tablets {
            width: 78px;
            height: 78px;
        }
    }

    // .preview__text
    &__text {
        padding: 0 46px;
        @include tablets {
            padding: 0  15px;
        }
    }

    // .preview__link
    &__link {
    }
}

</style>