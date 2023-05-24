<template lang="">
    <div>
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    </div>
</template>
<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-vue';

export default {
    name: 'CreatePost',
    components: {
        ckeditor: CKEditor.component
    },
    data() {
        return {
            editor: ClassicEditor,
            editorData: '<p>Content of the editor.</p>',
            editorConfig: {
                // The configuration of the editor.
            }
        }
    }
}
</script>
<style lang="">
    
</style>