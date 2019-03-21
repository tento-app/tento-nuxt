<template lang="html">
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="setting-modal">
          <h3>公開設定</h3>
          <form class="" action="index.html" method="post">
            <div class="item">
              <label for="">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
                <p>スキル</p>
              </label>
              <input type="text" name="" value="" placeholder="スキルを追加してください">
            </div>
            <div class="item">
              <label for="">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/></svg>
                <p>開催場所</p>
              </label>
              <input type="text" name="" value="" placeholder="Tentoキャンパス学食">
            </div>
            <div class="item">
              <label for="">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <p>開催日時</p>
              </label>
              <input type="datetime-local" name="" value="">
            </div>
            <div class="item">
              <label for="">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <p>連絡先</p>
              </label>
              <input type="text" name="" value="" placeholder="tento@example.com">
            </div>

            <div class="btn-list">
              <p>編集に戻る</p>
              <button class="btn_priority" type="button" name="button">公開する</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '~/assets/style/_color.scss';
@import '~/assets/style/base.scss';
@import '~/assets/style/btn.scss';

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
  display: none;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  transition: all .3s ease;
}

.setting-modal {
  max-width: 500px;
  margin:0 auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 12px;
  h3 {
    color: $black01;
  }
  form {
    .item {
      margin:1rem 0 2rem;
      label {
        color: $black01;
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 5px;
        p {
          margin-left: 5px;
        }
      }
      input {
        width: 100%;
        outline: 0;
        border: 0;
        border-bottom: 1px solid $black03;
        font-size: 1rem;
        padding: 0.2rem 0.2rem 0.5rem;
      }
    }
    .btn-list {
      display: flex;
      align-items: center;
      p {
        cursor: pointer;
        color: $black03;
        font-weight: bold;
        margin-right: auto;
      }
    .btn_priority {
      width: 90px;
      text-align: center;
    }
    }
  }
}
</style>
