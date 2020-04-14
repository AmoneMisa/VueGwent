<template>
  <div class="deck-page">
    <div class="deck-page__fractions">
      <media :query="{minWidth: 971}">
        <fraction-slider :current-fraction-index="currentFractionIndex"
                         :set-current-fraction-index="(value) => this.currentFractionIndex = value"/>
      </media>
      <media :query="{maxWidth: 970}">
        <fraction-slider-mobile :current-fraction-index="currentFractionIndex"
                                :set-current-fraction-index="(value) => this.currentFractionIndex = value"/>
      </media>
    </div>
    <div class="deck-page__content">
      <div class="deck-page__fraction-cards">
        <div class="cards-collection">
          <div class="cards-collection__title">Коллекция карт</div>
          <div class="cards-collection__current-filter">{{ filtersTitles[currentAvailableCardsFilter] || 'Все карты'
            }}
          </div>
          <media :query="{minWidth: 971}">
            <div class="cards-collection__filters">
              <filters :current-filter="currentAvailableCardsFilter"
                       @set-current-filter="(filter) => this.currentAvailableCardsFilter = filter"/>
            </div>
          </media>
          <media :query="{maxWidth: 970}">
            <div class="cards-collection__filters">
              <filters-mobile :current-filter="currentAvailableCardsFilter"
                              @set-current-filter="(filter) => this.currentAvailableCardsFilter = filter"
                              v-if="isActiveFiltersMenu"/>
            </div>
          </media>
          <media :query="{minWidth: 971}">
            <div class="cards-collection__cards">
              <simplebar data-simplebar-auto-hide="false" class="simple-bar-cards">
                <deck-available-cards :fraction="currentFraction" v-if="user"/>
                <fraction-cards :fraction="currentFraction" v-else/>
              </simplebar>
            </div>
          </media>
          <media :query="{maxWidth: 970}">
            <div class="cards-collection__cards">
              <div class="cards-collection__filters-menu" @click="changeStateFiltersMenu">Выбрать фильтр карт</div>
              <div class="cards-collection__cards_mobile" @click="isCurrentDeck" v-if="user">Переключить колоду</div>
              <div class="cards-collection__cards_mobile" v-else>
                <nuxt-link to="/" class="cards-collection__alt-title-link">Войдите</nuxt-link>
                , чтобы собрать колоду
              </div>
              <simplebar data-simplebar-auto-hide="false" class="simple-bar-cards" v-if="isCurrentDeckAvailable">
                <deck-available-cards :fraction="currentFraction" v-if="user"/>
                <fraction-cards :fraction="currentFraction" v-else/>
              </simplebar>
              <simplebar data-simplebar-auto-hide="false" class="simple-bar-cards" v-else>
                <deck-cards :fraction="currentFraction" v-if="user"/>
                <div class="cards-collection__alt-title" v-else>
                  <nuxt-link class="cards-collection__alt-title-link" to="/">Войдите</nuxt-link>
                  , чтобы собрать колоду
                </div>
              </simplebar>
            </div>
          </media>
        </div>
      </div>
      <div class="deck-page__deck-stats">
        <info
          :fraction="currentFraction"
          v-if="user"
        />
      </div>
      <media :query="{minWidth: 971}">
        <div class="deck-page__deck-cards">
          <div class="cards-collection">
            <div class="cards-collection__title cards-collection__title-right" v-if="user">Карты колоды</div>
            <div class="cards-collection__current-filter cards-collection__current-filter-right" v-if="user">{{
              filtersTitles[currentCardsFilter] || 'Все карты' }}
            </div>
            <div class="cards-collection__filters">
              <filters :current-filter="currentCardsFilter"
                       @set-current-filter="(filter) => this.currentCardsFilter = filter"
                       v-if="user"/>
            </div>
            <div class="cards-collection__cards">
              <simplebar data-simplebar-auto-hide="false" class="simple-bar-cards">
                <deck-cards :fraction="currentFraction" v-if="user"/>
                <div class="cards-collection__alt-title" v-else>
                  <nuxt-link class="cards-collection__alt-title-link" to="/">Войдите</nuxt-link>
                  , чтобы собрать колоду
                </div>
              </simplebar>
            </div>
          </div>
        </div>
      </media>
    </div>
    <action-buttons v-if="user"/>
  </div>
</template>
<script>
  import FractionSlider from "~/components/deck/FractionSlider";
  import FractionCards from "~/components/deck/FractionCards";
  import DeckCards from "~/components/deck/DeckCards";
  import Filters from "~/components/deck/Filters";
  import Info from "~/components/deck/Info";
  import DeckAvailableCards from "~/components/deck/DeckAvailableCards";
  import ActionButtons from "~/components/deck/ActionButtons";
  import LeadersPopup from "~/components/deck/LeadersPopup";

  import Simplebar from 'simplebar-vue';

  import Media from 'vue-media';

  import FractionSliderMobile from "~/components/deck-mobile/FractionSlider";
  import FiltersMobile from "~/components/deck-mobile/Filters";

  export default {
    data() {
      return {
        currentFractionIndex: 0,
        currentAvailableCardsFilter: null,
        currentCardsFilter: null,
        filtersTitles: {
          'filter-all': 'Все карты',
          'filter-warrior': 'Рукопашные отряды',
          'filter-archer': 'Дальнобойные отряды',
          'filter-siege': 'Осадные отряды',
          'filter-hero': 'Герои',
          'filter-weather': 'Погодные карты',
          'filter-action': 'Специальные карты',
        },
        isActiveFiltersMenu: false,
        isCurrentDeckAvailable: true
      }
    },
    mounted() {
      let that = this;
      document.addEventListener('keyup', function (key) {
        if (key.code === 'Escape') {
          that.$store.dispatch('deck_page/closeLeadersPopup');
        }
      });
      document.addEventListener('keyup', function (key) {
        if (key.code === 'KeyX' || key.code === 'Keyx' || key.code === 'Keyч' || key.code === 'KeyЧ') {
          that.$store.dispatch('deck_page/openLeadersPopup');
        }
      })
    },
    components: {
      DeckAvailableCards,
      DeckCards, FractionSlider, FractionCards,
      Filters, Simplebar, Info, ActionButtons,
      LeadersPopup, Media, FractionSliderMobile,
      FiltersMobile
    },
    head: {
      title: 'Колода'
    },
    computed: {
      fractions: function () {
        return this.$store.state.fraction.list;
      },
      currentFraction: function () {
        return this.fractions[this.currentFractionIndex];
      },
      user: function () {
        return this.$store.state.user.data;
      },
    },
    methods: {
      changeStateFiltersMenu() {
        this.isActiveFiltersMenu = !this.isActiveFiltersMenu;
      },
      isCurrentDeck() {
        this.isCurrentDeckAvailable = !this.isCurrentDeckAvailable;
      }
    }
  };
</script>
<style lang="scss">
  @import "~/assets/_variables";

  .deck-page__content {
    display: flex;
  }

  .deck-page__fractions {
    display: flex;
    justify-content: center;
  }

  .deck-page__fraction-cards,
  .deck-page__deck-cards {
    flex: 1;
    overflow: hidden;
    padding-left: 15px;
  }

  .deck-page__fraction-cards {
    border-right: 1px solid;
    border-image: linear-gradient(
        to bottom, rgba(47, 37, 23, 0.1),
        #574c27,
        rgba(47, 37, 23, 0.1)) 1 100%;;
  }

  .deck-page__deck-stats {
    width: 280px;
    flex: none;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .cards-collection__cards {
    margin-top: 30px;
    overflow: hidden;
    height: 660px;
    padding-right: 15px;
  }

  .cards-collection__cards_mobile {
    text-align: right;
    color: $defaultText;
    margin-bottom: 10px;
  }

  .cards-collection__alt-title {
    display: flex;
    font-size: 28px;
    color: $defaultTextMoreIntensive;
    align-items: center;
    justify-content: center;
    height: 660px;
    border: 1px solid $borderDeck;
    border-radius: 5px;
  }

  .cards-collection__alt-title-link {
    color: $subTitle;
    transition: color .2s ease-in-out;

    &:hover {
      color: $title;
    }
  }

  .simple-bar-cards {
    height: 660px;
    position: relative;
  }

  .main-content-game__game-list {
    border-radius: 5px;
    border: 1px solid #0c0c0c;
    padding: 10px;
    margin-bottom: 20px;
  }

  .cards-collection__title {
    text-transform: uppercase;
    font-size: 18px;
    color: #b0b0ae;
  }

  .cards-collection__filters {
    position: relative;
  }

  .cards-collection__current-filter {
    margin-top: 5px;
    margin-bottom: 20px;
    text-transform: uppercase;
    color: $title;
  }

  .cards-collection__title-right {
    text-align: right;
  }

  .cards-collection__current-filter-right {
    text-align: right;
  }

  .cards-collection__filters-menu {
    padding-bottom: 10px;
    color: $defaultText;
    margin-bottom: -35px;
  }

  @media (max-width: 970px) {
    .deck-page__deck-stats {
      width: 160px;
    }
  }
</style>

