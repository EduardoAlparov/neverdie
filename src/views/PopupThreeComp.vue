<template>
    <div class="popup">
        <div class="popup__header header">
            <div class="header__container _container">
                <div class="header__text  _pophead-text">
                    <span>Смерть родного человека – одно из тяжелейших испытаний в жизни каждого из нас!</span>
                </div>
                <div class="header__image"></div>
            </div>
        </div>
         <div class="popup__question">
                <div class="question-block">
                    <div class="question-block__body">
                        <div class="question-block__buttons">
                            <div class="question-block__title _title">
                                <span>Снятся ли Вам умершие люди?</span>
                            </div>
                            <router-link tag="button" to="/popupfour" class="question-block__button _button">Да</router-link>
                            <router-link tag="button" to="/popupfour" class="question-block__button _button">Нет</router-link>
                            <router-link tag="button" to="/popupfour" class="question-block__button _button">Иногда</router-link>
                        </div>
                        <div class="question-block__image">

                        </div>
                        <div class="question-block__desc">
                            <span>Вопрос 4-5</span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: "PopupThreeComp",
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
@import '~@/styles/mixins.scss';
@import '~@/styles/popup-component.scss';

</style>