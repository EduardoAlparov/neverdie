<template>
    <div class="popup">
        <div class="popup__header header">
            <div class="header__container _container">
                <div class="header__text _pophead-text">
                    <span>Мы расскажем Вам не только подробности вашей смерти, но также поможем Вам избежать этой ужасной даты и продлить вашу жизнь на многие годы.</span>
                </div>
                <div class="header__image"></div>
            </div>
        </div>
        <div class="popup__question">
            <div class="question-block">
                <div class="question-block__body">
                    <div class="question-block__buttons">
                        <div class="question-block__title _title">
                            <span>Когда Вы чувствуете себя наиболее комфортно?</span>
                        </div>
                        <router-link tag="button" to="/popuptwo" class="question-block__button _button">Утро</router-link>
                        <router-link tag="button" to="/popuptwo" class="question-block__button _button">День</router-link>
                        <router-link tag="button" to="/popuptwo" class="question-block__button _button">Вечер</router-link>
                        <router-link tag="button" to="/popuptwo" class="question-block__button _button">Ночь</router-link>
                    </div>
                    <div class="question-block__image">

                    </div>
                    <div class="question-block__desc">
                        <span>Вопрос 2-5</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PopupOneComp",
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
@import '~@/styles/mixins.scss';
@import '~@/styles/popup-component.scss';

</style>