<template>
    <div class="popup">
        <div class="popup__header header">
            <div class="header__container _container">
                <div class="header__baloon">
                    <div class="header__text  _pophead-text">
                        <span>По вам скучает очень близкий человек, которого больше нет в мире живых.</span>
                    </div>
                </div>
                <div class="header__image"></div>
            </div>
        </div>
        <div class="popup__question">
            <div class="question-block">
                <div class="question-block__body">
                    <div class="question-block__buttons">
                        <div class="question-block__title _title _uppercase-nonbold">
                            <span>Запись, которую Вы услышите, может шокировать людей с неокрепшей психикой. Вы готовы узнать, что ждет именно Вас?</span>
                        </div>
                        <router-link tag="button" to="/popupfinal" class="question-block__button _button">Да</router-link>
                        <router-link tag="button" to="/popupfinal" class="question-block__button _button">Затрудняюсь ответить</router-link>
                    </div>
                    <div class="question-block__image">

                    </div>
                    <div class="question-block__desc">
                        <span>Вопрос 5-5</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PopupFinalComp",
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
@import '~@/styles/mixins.scss';
@import '~@/styles/popup-component.scss';

</style>