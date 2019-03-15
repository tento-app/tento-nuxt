<template lang="html">
  <div class="">
    <form class="" action="index.html" method="post">
      <Header />
      <div class="create">

      <div class="create_title">
        <div class="create_title_content">
          <p>長期募集(開発メンバー、サークルメンバー募集など)</p>
          <div class="create_title_content_input">
            <input type="text" name="" value="" placeholder="タイトルを記入してください">
          </div>

        </div>
      </div>
      <div class="create_body">
        <div class="editor">
            <editor-menu-bar :editor="editor">
              <div slot-scope="{ commands, isActive }">
                <button :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
                  Bold
                </button>
                <button :class="{ 'is-active': isActive.heading({ level: 2 }) }" @click="commands.heading({ level: 2 })">
                  H2
                </button>
              </div>
            </editor-menu-bar>
            <editor-content :editor="editor" />
        </div>
      </div>
    </div>

    </form>
  </div>
</template>

<script>
import Header from '~/layouts/Header.vue';
import { Editor, EditorContent,EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
} from 'tiptap-extensions'

export default {
  components: {
    Header,
    EditorMenuBar,
    EditorContent,
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new BulletList(),
          new OrderedList(),
          new ListItem(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new History(),
        ],
        content: `
          <h1>Yay Headlines!</h1>
          <p>All these <strong>cool tags</strong> are working now.</p>
        `,
      }),
    }
  },
  mounted() {
    this.editor = new Editor({
      content: `
        <h1>Yay Headlines!</h1>
        <p>All these <strong>cool tags</strong> are working now.</p>
      `,
    })
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss">
@import '~/assets/style/_color.scss';
@import '~/assets/style/base.scss';
@import '~/assets/style/btn.scss';

  .create{
    &_title{
      background-color: $sub_color;
      &_content{
        max-width: 840px;
        margin: 0 auto;
        padding: 5rem 0;
        color: #fff;
        p{
          margin-bottom: 1.5rem;
          font-size: 14px;
          font-weight: bold;
        }
        &_input{

          input{
            border: none;
            background-color: rgba(0,0,0,0);
            outline: 0;
            box-sizing: border-box;
            width: 100%;
            color: #fff;
            font-size: 32px;
            font-weight: bold;
            &::placeholder{
              color: rgba(255,255,255,0.4);
            }
          }
        }
      }
    }
    &_body{
      .editor{
        max-width: 840px;
        margin: 0 auto;
        padding: 0 30px;
      }
      &_content{
        max-width: 840px;
        margin: 2rem auto;
      }
    }
  }
</style>
