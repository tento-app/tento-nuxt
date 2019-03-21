<template>
    <div class="card_loader">
        <div class="sub_btn more">
            <p>Read More</p>
        </div>
    </div>
</template>

<style lang="scss"scoped>
@import "~/assets/style/_color.scss";
@media (min-width: 840px) {
  .card_loader {
    margin-top: 40px;
    margin-bottom: 40px;
    text-align: center;
    .more {
      padding: 12px 32px;
    }
  }
}
@media screen and (min-width: 500px) and (max-width: 840px) {
  .card_loader {
    margin-top: 40px;
    margin-bottom: 40px;
    text-align: center;
    .more {
      padding: 12px 32px;
    }
  }
}
@media screen and (min-width: 0px) and (max-width: 500px) {
  .card_loader {
    margin-top: 40px;
    margin-bottom: 40px;
    text-align: center;
    .more {
      padding: 12px 32px;
    }
  }
}
</style>
