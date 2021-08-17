<template>
    <div class="popup">
        <div class="popup__header header">
            <div class="header__container _container">
                <div class="header__text  _pophead-text">
                    <span>Уже совсем скоро Вы узнаете много интересного о своем будущем!</span>
                </div>
                <div class="header__image"></div>
            </div>
        </div>
        <div class="popup__question">
            <div class="question-block">
                <div class="question-block__body">
                    <div class="question-block__buttons">
                        <div class="question-block__title _title">
                            <span>Укажите свою дату рождения:</span>
                        </div>
                        <div class="question-block__select select">
                            <button class="select__button _select-button">День</button>
                            <div class="select__arrow"></div>
                        </div>
                        <div class="question-block__select select">
                            <button class="select__button _select-button">Месяц</button>
                            <div class="select__arrow"></div>
                        </div>
                        <div class="question-block__select select">
                            <button class="select__button _select-button">Год</button>
                            <div class="select__arrow"></div>
                        </div>
                        <router-link tag="button" to="/popupthree" class="question-block__button _button">Далее</router-link>
                    </div>
                    <div class="question-block__image"></div>
                    <div class="question-block__desc">
                        <span>Вопрос 3-5</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PopupTwoComp",
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
@import '~@/styles/mixins.scss';
@import '~@/styles/popup-component.scss';


</style>