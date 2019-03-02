<template>
  <div class="editor">
    <editor-menu-bar :editor="editor">
      <div class="menubar" slot-scope="{ commands }">
        <button
          class="menubar__button"
          @click="showImagePrompt(commands.image)"
        >
          <icon name="image" />
        </button>
      </div>
    </editor-menu-bar>

    <editor-content class="editor__content" :editor="editor" />
  </div>
</template>

<script>
  import Icon from '../../components/Icon'
  import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
  import {
    HardBreak,
    Heading,
    Image,
    Bold,
    Code,
    Italic,
  } from 'tiptap-extensions'
  export default {
    components: {
      Icon,
      EditorContent,
      EditorMenuBar,
    },
    data() {
      return {
        editor: new Editor({
          extensions: [
            new HardBreak(),
            new Heading({ levels: [1, 2, 3] }),
            new Image(),
            new Bold(),
            new Code(),
            new Italic(),
          ],
          content: `
          <h2>
            Images
          </h2>
          <p>
            This is basic example of implementing images. Try to drop new images here. Reordering also works.
          </p>
          <img src="https://66.media.tumblr.com/dcd3d24b79d78a3ee0f9192246e727f1/tumblr_o00xgqMhPM1qak053o1_400.gif" />
        `,
        }),
      }
    },
    methods: {
      showImagePrompt(command) {
        const src = prompt('Enter the url of your image here');
        if (src !== null) {
          command({ src })
        }
      },
    },
  }
</script>

<style lang="scss">

  p{
    display: flex;
    padding: 10px 20px;
    position: relative;
    align-items: center;
    justify-content: center;

    img{
      width: 250px;
      height: 250px;
      margin: 0 auto;
    }
  }
</style>
