<template>
<footer>
  <div class="content">
    <!-- <div class="logo">
      <img src="../static/logo_footer.png" alt="">
    </div> -->
    <ul>
      <h5 class="sp_left">About</h5>
      <div class="sp_right">
        <nuxt-link to='/'>
          <li>About Tento</li>
        </nuxt-link>
        <a href='https://ark-cg.com/' target="_blank">
          <li>About Us</li>
        </a>
        <nuxt-link to='/faq'>
          <li>Q & A</li>
        </nuxt-link>
      </div>
    </ul>
    <ul>
      <h5 class="sp_left">Links</h5>
      <div class="sp_right">
        <nuxt-link to='/privacy'>
          <li>Privacy</li>
        </nuxt-link>
        <nuxt-link to='/terms'>
          <li>Terms</li>
        </nuxt-link>
      </div>
    </ul>
    <ul>
      <h5 class="sp_left">Contact</h5>
      <div class="sp_right">
        <a href="https://twitter.com/tento_app" target="_blank">
          <li>Twitter</li>
        </a>
      </div>
    </ul>
  </div>
</footer>
</template>

<style lang="scss">
@media (min-width:840px) {
    footer {
        background-color: #302D2C;
        display: flex;
        margin-top: 0rem;
        justify-content: center;
        .content {
            margin: 0;
            flex-wrap: wrap;
            display: flex;
            margin: 0;
            // .logo{
            //   padding: 40px;
            //   img{
            //     width: 40px;
            //   }
            // }
            ul {
                margin-right: 2rem;
                color: #fff;
                padding: 40px 30px 40px 0;
                max-width: 840px;
                &:last-child {
                    margin-right: 0;
                    padding-right: 0;
                }
                h5 {
                    font-size: 18px;
                    margin-bottom: 0.8rem;
                }
                li {
                    margin-right: 4rem;
                    margin-bottom: 0.4rem;
                    font-size: 16px;
                    color: #ccc;
                }
            }
        }
    }

}
@media screen and (min-width: 500px) and (max-width: 839px) {
    footer {
        background-color: #302D2C;
        padding-bottom: 20px;
        justify-content: center;
        display: flex;
        .content {
            display: flex;
            flex-wrap: wrap;
            margin: 0;
            ul {
                margin-right: 2rem;
                color: #fff;
                padding: 40px 0 0;
                max-width: 840px;
                &:last-child {
                    margin-right: 0;
                }
                h5 {
                    font-size: 18px;
                    margin-bottom: 0.8rem;
                }
                li {
                    margin-right: 4rem;
                    margin-bottom: 0.4rem;
                    font-size: 16px;
                    color: #ccc;
                }
            }
        }
    }
}
@media screen and (min-width: 0px) and (max-width: 499px) {
  footer{
    background-color: #302D2C;
    justify-content: center;
    .content{
      margin: 0 auto 0;
      padding: 30px;
      // .logo{
      //   margin-top: 12px;
      //   img{
      //     width: 42px;
      //   }
      // }
      ul{
        color: #fff;
        margin-top: 1.4rem;
        display: flex;
        width: 100%;
        .sp_left{
          margin-right: 18px;
          min-width: 70px;
          font-size: 18px;
          letter-spacing: 0.4px;
        }
        li{
          color: #ccc;
          font-size: 16px;
          margin-bottom: 8px;
          letter-spacing: 0.4px;
        }
      }
    }
  }

}
</style>
