<template>
    <div class="popup">
        <div class="popup__container _container">
            <div class="popup__body">
                <div class="popup__baloon">
                    <div class="popup__text _text">
                        <span>Спасибо за Ваши ответы!<br></span>
                        <span class="_uppercase">Мы подготовили для Вас персональную аудио запись с Вашим прогнозом.</span>
                    </div>
                </div>
                <div class="popup__desc _text">
                    <span>Вы можете узнать, как повлиять на события, которые ожидают вас в ближайшем будущем.</span>
                </div>
                <div class="popup__message message">
                    <div class="message__body">
                        <div class="message__text _text">
                            <span class="_uppercase">Первое значимое событие может произойти уже 14.02.2021,</span>
                            <span> Вам надо быть готовым, что бы последствия не оказались необратимыми.</span>
                        </div>
                    </div>
                </div>
                <div class="popup__desc _text">
                    <span>Нажмите на кнопку ниже прямо сейчас и наберите наш номер телефона. Прослушайте важную информацию!</span>
                </div>
                <div class="popup__button">
                    <button @click="sendRequest" class="_green-btn">Позвонить и прослушать</button>
                </div>
                <div class="popup__footer">
                    <div class="popup__footer-text">
                        <span>TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE
                             DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 
                             </span>
                        <span>18 ANI IMPLINITI </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "PopupFinalComp",
    data() {
        return {
            info: []
        }
    },
    methods: {
        sendRequest() {
            this.$router.push({path: '/response'})
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
@import '~@/styles/mixins.scss';
@import '~@/styles/ui.scss';

.popup {
    height: 100%;
    width: 100%;
    background: $bg_dark;

    &__container{
        height: 99%;
    }
    // .popup__body
    &__body {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 30px 0 10px 0;
        @include tablets {
            padding: 15px 0 5px 0;
        }
    }

    // .popup__baloon
    &__baloon {
        width: 480px;
        height: 184px;
        background: #FFFFFF;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 50;
        margin-bottom: 30px;

        @include tablets {
            width: 259px;
            height: 94px;
            margin-bottom: 10px;
        }

        &::after {
            content: '';
            position: absolute;
            width: 0;
            height: 0;
            bottom: -19px;
            right: 40px;
            border-style: solid;
            border-width: 19px 10.5px 0 10.5px;
            border-color: #FFF transparent transparent transparent;
            @include tablets {
                bottom: -8px;
            }
        }
    }

    // .popup__text
    &__text {
        // max-width: 446px;
        color: $bg_dark;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 35px;
        letter-spacing: 0em;
        text-align: center;
        margin-bottom: 30px;
        @include tablets {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 18px;
            margin-bottom: 0;
        }
    }

    // .popup__desc
    &__desc {
        // max-width: 422px;
        color: white;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 35px;
        letter-spacing: 0em;
        text-align: center;
        margin-bottom: 30px;
        @include tablets {
            max-width: 220px;
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
            line-height: 16px;
            margin-bottom: 10px;
        }
    }

    // .popup__message
    &__message {
        margin-bottom: 30px;
        @include tablets {
            margin-bottom: 15px;
        }
    }

    // .popup__button
    &__button {
        margin-bottom: 35px;
        @include tablets {
            margin-bottom: 12px;
        }
    }

    // .popup__footer
    &__footer{}
    &__footer-text{
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 3px;
        text-align: center;
        color: $text_color_grey;
        @include tablets {
            font-size: 7px;
            line-height: 9px;
        }
    }
}

.message {
    width: 480px;
    height: 286px;

    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 3px;

    @include tablets {
        width: 259px;
        height: auto;
    }
    // .message__body
    &__body {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    // .message__text
    &__text {
        max-width: 380px;
        color: $orange;
        text-align: center;
    }
}

</style>