<template lang="html">
  <div class="">
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
<no-ssr>
  <div class="editor">
    <editor-menu-bar :editor="editor">
      <div class="menubar" slot-scope="{ commands, isActive }">

        <button
          class="menubar__button svg_only_button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <div class="icon">
            <img src="~assets/svg/bold.svg" />
          </div>
        </button>

        <button
          class="menubar__button svg_only_button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <div class="icon">
            <img src="~assets/svg/italic.svg" />
          </div>
        </button>

        <button
          class="menubar__button svg_only_button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <div class="icon">
            <img src="~assets/svg/strike.svg" />
          </div>
        </button>

        <button
          class="menubar__button svg_only_button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          <div class="icon">
            <img src="~assets/svg/underline.svg" />
          </div>
        </button>

        <button
          class="menubar__button svg_only_button"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          <div class="icon">
            <img src="~assets/svg/code.svg" />
          </div>
        </button>

        <button
          class="menubar__button svg_only_button"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          <div class="icon">
            <img src="~assets/svg/paragraph.svg" />
          </div>
        </button>

        <button
          class="menubar__button inline_button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </button>

        <button
          class="menubar__button inline_button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          H2
        </button>

        <button
          class="menubar__button inline_button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          H3
        </button>

        <button
          class="menubar__button svg_only_button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          <div class="icon">
            <img src="~assets/svg/ul.svg" />
          </div>
        </button>

        <button
          class="menubar__button svg_only_button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <div class="icon">
            <img src="~assets/svg/ol.svg" />
          </div>
        </button>

        <button
          class="menubar__button svg_only_button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          <div class="icon">
            <img src="~assets/svg/quote.svg" />
          </div>
        </button>

        <button
          class="menubar__button svg_only_button"
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          <div class="icon">
            <img src="~assets/svg/code.svg" />
          </div>
        </button>

        <button
          class="menubar__button svg_only_button"
          @click="commands.horizontal_rule"
        >
          <div class="icon">
            <img src="~assets/svg/hr.svg" />
          </div>
        </button>

        <button
          class="menubar__button svg_only_button"
          @click="commands.undo"
        >
          <div class="icon">
            <img src="~assets/svg/undo.svg" />
          </div>
        </button>

        <button
          class="menubar__button svg_only_button"
          @click="commands.redo"
        >
          <div class="icon">
            <img src="~assets/svg/redo.svg" />
          </div>
        </button>

      </div>
    </editor-menu-bar>
    <editor-content class="editor__content" :editor="editor" />
  </div>
</no-ssr>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Header from '~/layouts/Header.vue';

import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
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
  CodeBlockHighlight,
} from 'tiptap-extensions'

import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'

export default {
  components: {
    Header,
    EditorMenuBar,
    EditorContent,
  },
  data() {
    return {
      editor: null
    }
  },
    mounted() {
    this.editor = new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new History(),
          new CodeBlockHighlight({
            languages: {
              javascript,
              css,
            },
          })
        ],
        content: `
          <h2>
            Hi there,
          </h2>
          <p>
            this is a very <em>basic</em> example of tiptap.
          </p>
          <pre><code>body { display: none; }</code></pre>
          <ul>
            <li>
              A regular list
            </li>
            <li>
              With regular items
            </li>
          </ul>
          <blockquote>
            It's amazing 👏
            <br />
            – mom
          </blockquote>
          <h2>
            Code Highlighting
          </h2>
          <p>
            These are code blocks with <strong>automatic syntax highlighting</strong> based on highlight.js.
          </p>
          <pre><code>function $initHighlight(block, flags) {
  try {
    if (block.className.search(/no-highlight/) != -1)
      return processBlock(block, true, 0x0F) + ' class=""';
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) { // "0 / 2" should not be parsed as regexp
    if (checkCondition(classes[i]) === undefined)
      return /d+/g;
  }
}</code></pre>
          <pre><code class="css">@font-face {
  font-family: Chunkfive; src: url('Chunkfive.otf');
}

body, .usertext {
  color: #F0F0F0; background: #600;
  font-family: Chunkfive, sans;
}

@import url(print.css);
@media print {
  a[href^=http]::after {
    content: attr(href)
  }
}</code></pre>
          <p>
            Note: tiptap doesn't import syntax highlighting language definitions from highlight.js. You
            <strong>must</strong> import them and initialize the extension with all languages you want to support:
          </p>
          <pre><code>import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import { Editor } from 'tiptap'
import {
  CodeBlockHighlight,
} from 'tiptap-extensions'</code></pre>

<pre>
  <code class="python">import sys</code>
</pre>


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

<style lang="scss">
@import '~assets/sass/main.scss';

.menubar {
  margin: 1rem 0;
}
.icon {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 0.8rem;
  height: 0.8rem;
  margin: 0 .3rem;
  top: -.05rem;
  fill: currentColor;
  // &.has-align-fix {
  // 	top: -.1rem;
  // }
  &__img {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    height: 100%;
  }
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>