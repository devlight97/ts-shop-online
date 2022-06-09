import { useInput } from 'common/hooks/use-input'
import { observer } from 'mobx-react-lite'
import React from 'react'

import { useModelProvider } from '@models/model.provider'
import { postService } from '@services/post.service'
import { Editor } from '@tinymce/tinymce-react'

const PostFormPage: React.FC = observer(() => {
  const { appModel: { notify } } = useModelProvider()
  const [content, setContent] = React.useState('')
  const productId = useInput('')
  const title = useInput('')
  const pictureUrl = useInput('')

  const editorRef = React.useRef(null);

  const handleEditorChange = (event: any) => {
    setContent(event.target.getContent())
  }

  return (
    <>
      Title: <input type="text" value={title.value} onChange={title.onChange} />
      <br />
      Image Url: <input type="text" value={pictureUrl.value} onChange={pictureUrl.onChange} />
      <Editor
        tinymceScriptSrc={'https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js'}
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue='<p>This is the initial content of the editor.</p>'
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
        onChange={handleEditorChange}
      />
      Product ID: <input type="text" value={productId.value} onChange={productId.onChange} />
      <button onClick={async () => {
        try {
          await postService.create({ productId: productId.value, content, title: title.value, pictureUrl: pictureUrl.value })
          notify('create success')
        } catch (error) {
          console.log(error)
          notify(error?.response?.data?.message || 'Error Unknowed')
        }
      }}>Log editor content</button>
      <br />
    </>
  )
})

export default PostFormPage
