<template>
    <div class="editor">
      <editor-menu-bar :editor="editor">
        <div class="menubar" slot-scope="{ commands, isActive }">

          <button class="menubar__button" :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
            <!--<icon name="paragraph"></icon>-->
            강조
          </button>

          <button class="menubar__button" :class="{ 'is-active': isActive.italic() }" @click="commands.italic">
            <!--<icon name="italic" />-->
            기울임
          </button>

          <button class="menubar__button" :class="{ 'is-active': isActive.strike() }" @click="commands.strike">
            <!--<icon name="strike" />-->
            지우기
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.underline() }"
            @click="commands.underline"
          >
            <!--<icon name="underline" />-->
            밑줄
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.code() }"
            @click="commands.code"
          >
            <!--<icon name="code" />-->
            코드
          </button>

          <!--<button-->
            <!--class="menubar__button"-->
            <!--:class="{ 'is-active': isActive.paragraph() }"-->
            <!--@click="commands.paragraph"-->
          <!--&gt;-->
            <!--<icon name="paragraph" />-->
          <!--</button>-->

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 1 }) }"
            @click="commands.heading({ level: 1 })"
          >
            H1
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 2 }) }"
            @click="commands.heading({ level: 2 })"
          >
            H2
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 3 }) }"
            @click="commands.heading({ level: 3 })"
          >
            H3
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.bullet_list() }"
            @click="commands.bullet_list"
          >
            <!--<icon name="ul" />-->
            UL
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.ordered_list() }"
            @click="commands.ordered_list"
          >
            <!--<icon name="ol" />-->
            Ol
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.blockquote() }"
            @click="commands.blockquote"
          >
            <!--<icon name="quote" />-->
            인용
          </button>

          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.code_block() }"
            @click="commands.code_block"
          >
            코드블록
          </button>

          <button
            class="menubar__button"
            @click="commands.horizontal_rule"
          >
            수평선
          </button>

          <button
            class="menubar__button"
            @click="commands.undo"
          >
            <!--<icon name="undo" />-->
            Undo
          </button>

          <button
            class="menubar__button"
            @click="commands.redo"
          >
            <!--<icon name="redo" />-->
            Redo
          </button>
          <button
            class="menubar__button"
            @click="showImagePrompt(commands.image)"
          >
            <!--<icon name="image" />-->
            InsertImage
          </button>
        </div>
      </editor-menu-bar>
      <editor-content ref="innerwrite" class="editor__content" :editor="editor" />
      <button v-on:click="posting">포스팅</button>
    </div>
</template>

<script>
  import Icon from '../../components/Icon'
  import { Editor,  EditorContent, EditorMenuBar } from 'tiptap'
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
    Image
  } from 'tiptap-extensions'

  export default {
        name: "editor_icon",
    components: {
      EditorContent,
      EditorMenuBar,
      Icon
    },
    data(){
      return {
        editor: new Editor({
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
            new Image()
          ],
          content: `적기 시작하세요.`,
          onUpdate: ({getJSON, getHTML})=>{
            this.json=getJSON();
            this.html=getHTML();
          }
        }),
        json:'',
        html:''
      }
    },
    methods: {
      showImagePrompt(command) {
        const src = prompt('Enter the url of your image here');
        if (src !== null) {
          command({ src })
        }
      },
      posting(){
        console.log(this.html);
        this.$http.post("http://127.0.0.1:8000/blogapi/previousposts", {'content': this.html}).then(function (data) {
          console.log(this.html);
        })
      }
    },
    beforeDestroy() {
      this.editor.destroy()
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../public/scss/reset';

  .editor__content{
    p{
      display: flex;
      justify-content: center;
      align-items: center;
    }

  }


</style>
