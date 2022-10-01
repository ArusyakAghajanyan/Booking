const setHtmlFromArray = ($elementToApply, array = [], markupCreator, p) => {
    $elementToApply.innerHTML = array.map(markupCreator).join('');
};

export default setHtmlFromArray;