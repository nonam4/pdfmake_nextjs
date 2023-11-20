import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"
pdfMake.vfs = pdfFonts.pdfMake.vfs

function Index() {
  function handlePdf() {
    var docDefinition = {
      info: {
        title: 'awesome Document',
        author: 'john doe',
        subject: 'subject of document',
        keywords: 'keywords for document',
      },
      content: 'This is an sample PDF printed with pdfMake'
    }

    pdfMake.createPdf( docDefinition ).open()
  }

  return (
    <main>
      <button onClick={ handlePdf }>Get pdf</button>
    </main>
  )
}

export default Index
