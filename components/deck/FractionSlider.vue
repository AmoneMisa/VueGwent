<template>
  <div class="fractions">
    <div class="fractions__wrapper">
      <div class="fractions-deck" v-for="fraction of fractions" :key="fraction.id">
        <div class="fractions-deck__wrapper">
          <div class="fractions-deck__icon">
            <img class="fractions-deck__icon-img" :src="fraction.icon" :alt="fraction.name" />
          </div>
          <div class="fractions-deck__name">{{ fraction.name }}</div>
        </div>
      </div>
    </div>
    <div class="fractions__button fractions__button_left">
      <div class="fractions__button-text">{{ prevFraction.name }}</div>
      <div class="fractions__button-arrow">
        <div class="fractions__button-arrow-1"></div>
        <div class="fractions__button-arrow-2"></div>
        <div class="fractions__button-arrow-3"></div>
      </div>
    </div>
    <div class="fractions__button fractions__button_right">
      <div class="fractions__button-arrow fractions__button-arrow_reverse">
        <div class="fractions__button-arrow-1"></div>
        <div class="fractions__button-arrow-2"></div>
        <div class="fractions__button-arrow-3"></div>
      </div>
      <div class="fractions__button-text">{{ nextFraction.name }}</div>
    </div>
    <div class="fractions__pages">
      <div class="fractions__page"></div>
      <div class="fractions__page"></div>
      <div class="fractions__page"></div>
    </div>
    <div class="fractions__description">{{ currentFraction.description }}</div>
  </div>
</template>

<script>
  import $ from '~/plugins/jquery';

  export default {
    data() {
      return {
        currentFractionIndex: 0
      }
    },
    mounted() {
      let $fractions = $(this.$el);
      let $cards = $fractions.find('.fractions-deck');

      let then = this;

      $fractions.jcarousel({
        wrap: 'circular',
        animation: 0,
        transitions: true
      }).on('jcarousel:targetin', '.fractions-deck', function (event, carousel) {
        then.currentFractionIndex = $cards.index($(this));
      });


      $fractions.find('.fractions__pages')
        .on('jcarouselpagination:active', '.fractions__page', function () {
          $(this).addClass('fractions__page_current');
        })
        .on('jcarouselpagination:inactive', '.fractions__page', function () {
          $(this).removeClass('fractions__page_current');
        })
        .jcarouselPagination({
          item: function (page) {
            return "<div class=\"fractions__page\"></div>"
          }
        });

      $fractions.find('.fractions__button_left').jcarouselControl({
        target: '-=1'
      });

      $fractions.find('.fractions__button_right').jcarouselControl({
        target: '+=1'
      });
    },
    computed: {
      fractions: function () {
        return this.$store.state.fraction.list;
      },
      currentFraction: function () {
        return this.fractions[this.currentFractionIndex];
      },
      prevFraction: function () {
        return this.fractions[(this.fractions.length + this.currentFractionIndex - 1) % this.fractions.length];
      },
      nextFraction: function () {
        return this.fractions[(this.fractions.length + this.currentFractionIndex + 1) % this.fractions.length];
      }
    }
  }
</script>

<style lang="scss">
  .fractions {
    overflow: hidden;
    width: 900px;
    margin: 0 auto;
    position: relative;
  }

  .fractions__wrapper {
    position: relative;
    font-size: 18px;
    display: flex;
    width: 100000px;
    height: 52px;
  }

  .fractions__button {
    position: absolute;
    top: 10px;
    display: flex;
    cursor: pointer;
    align-items: center;
    height: 30px;

    &:hover {
      .fractions__button-arrow-1,
      .fractions__button-arrow-3 {
        border-right-color: #a1844c;
      }
    }
  }

  .fractions__button_left {
    left: 60px;

    .fractions__button-arrow {
      margin-left: 20px;
    }

    .fractions__button-text {
      text-align: right;
    }
  }

  .fractions__button_right {
    right: 60px;

    .fractions__button-arrow {
      margin-right: 20px;
    }
  }

  .fractions__button-arrow {
    position: relative;
  }

  .fractions__button-arrow_reverse {
    transform: scaleX(-1);
  }

  .fractions__button-arrow-1 {
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 20px solid #645A41;
    transition: border-color .2s ease-in-out;
  }

  .fractions__button-arrow-2 {
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 16px solid #0b0b0b;
    position: absolute;
    top: 2px;
    right: 1px;
  }

  .fractions__button-arrow-3 {
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-right: 13px solid #645A41;
    position: absolute;
    top: 4px;
    right: 2px;
    transition: border-color .2s ease-in-out;
  }

  .fractions__button-text {
    font-size: 16px;
    color: rgba(193, 102, 29, 0.5);
    width: 140px;
  }

  .fractions__pages {
    display: flex;
    justify-content: center;
    margin-top: -6px;
    margin-bottom: 10px;
  }

  .fractions__page {
    width: 7px;
    height: 7px;
    background-color: #252525;
    top: -50px;
    transform: rotate(45deg);
    margin: 0 2px;
    cursor: pointer;
    transition: background-color .2s ease-in-out;

    &:hover {
      background-color: rgba(166, 127, 54, 0.73);
    }
  }

  .fractions__page_current {
    background-color: rgba(239, 163, 38, 0.73);
  }

  .fractions__description {
    color: #645A41;
    margin: 0 auto;
    width: 600px;
    text-align: center;
  }

  .fractions-deck {
    flex: 0 0 900px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .fractions-deck__wrapper {
    position: relative;
    flex: none;
  }

  .fractions-deck__name {
    font-size: 32px;
    color: #a1844c;
    line-height: 52px;
  }

  .fractions-deck__icon {
    width: 50px;
    height: 52px;
    position: absolute;
    right: 100%;
    margin-right: 10px;
  }

  .fractions-deck__icon-img {
    vertical-align: top;
  }
</style>
