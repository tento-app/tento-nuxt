<template>
<footer>
  <div class="content">
    <ul>
      <h5>About</h5>
      <a href="#">
        <li>About Tento</li>
      </a>
      <a href="#">
        <li>About Us</li>
      </a>
      <a href="#">
        <li>Q & A</li>
      </a>
    </ul>
    <ul>
      <h5>Links</h5>
      <a href="#">
        <li>Privacy</li>
      </a>
      <a href="#">
        <li>Terms</li>
      </a>
    </ul>
    <ul>
      <h5>Contact</h5>
      <a href="#">
        <li>E-mail</li>
      </a>
      <a href="#">
        <li>Twitter</li>
      </a>
    </ul>
  </div>
</footer>
</template>

<style lang="scss">
@media (min-width:840px) {

    footer {
        background-color: #302D2C;
        display: flex;
        margin-top: 4rem;
        justify-content: center;
        .content {
            margin: 0;
            flex-wrap: wrap;
            display: flex;
            margin: 0;
            ul {
                margin-right: 2rem;
                color: #fff;
                font-size: 16px;
                padding: 40px 30px 40px 0;
                max-width: 840px;
                &:last-child {
                    margin-right: 0;
                    padding-right: 0;
                }
                h5 {
                    font-size: 16px;
                    margin-bottom: 0.8rem;
                }
                li {
                    margin-right: 1.2rem;
                    margin-bottom: 0.4rem;
                    font-size: 14px;
                    color: #ccc;
                }
            }
        }
    }

}
@media screen and (min-width: 0px) and (max-width: 840px) {
    footer {
        background-color: #302D2C;
        margin-top: 4rem;
        padding-bottom: 20px;
        .content {
            flex-wrap: wrap;
            display: flex;
            margin: 0;
            ul {
                margin-right: 2rem;
                color: #fff;
                font-size: 16px;
                padding: 40px 0 0;
                max-width: 840px;
                &:last-child {
                    margin-right: 0;
                }
                h5 {
                    font-size: 16px;
                    margin-bottom: 0.8rem;
                }
                li {
                    margin-right: 1.2rem;
                    margin-bottom: 0.4rem;
                    font-size: 14px;
                    color: #ccc;
                }
            }
        }
    }
}
</style>
