const setHtmlFromArray = ($elementToApply, array = [], markupCreator) => {
    $elementToApply.innerHTML = array.map(markupCreator).join('')
}