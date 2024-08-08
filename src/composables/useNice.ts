export const useNice = ({ encodeData }: { encodeData: string }) => {
  const setupNiceWindow = () => {
    const option =
      'width=500, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no'
    const newWindow = window.open('', 'niceWindow', option) as Window

    newWindow.document.write('<html><head><title>CheckPlus</title></head><body></body></html>')
    newWindow.document.close()

    return newWindow
  }

  const createNiceForm = (newWindow: Window) => {
    const form = newWindow.document.createElement('form')
    form.setAttribute('id', 'niceForm')
    form.setAttribute('action', 'https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb')

    const inputM = newWindow.document.createElement('input')
    inputM.setAttribute('type', 'hidden')
    inputM.setAttribute('name', 'm')
    inputM.setAttribute('value', 'checkplusService')

    const inputEncodeData = newWindow.document.createElement('input')
    inputEncodeData.setAttribute('type', 'hidden')
    inputEncodeData.setAttribute('name', 'EncodeData')
    inputEncodeData.setAttribute('value', encodeData)

    form.appendChild(inputM)
    form.appendChild(inputEncodeData)
    newWindow.document.body.appendChild(form)

    return form
  }

  const goNice = () => {
    console.group('openNiceWindow')
    console.log('window', window)
    console.log('document', document)
    // 1. 새로운창 열기
    const newWindow = setupNiceWindow()

    // 2. form 생성 후 주입
    const form = createNiceForm(newWindow)

    // 3. form submit
    form.submit()

    console.groupEnd()
  }

  return { goNice }
}
