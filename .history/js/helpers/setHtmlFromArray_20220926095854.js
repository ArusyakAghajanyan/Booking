const setHtmlFromArray = ($elementToApply, array = [], markupCreator, page) => {
    $elementToApply.innerHTML = array.map(markupCreator).join('');
};

export default setHtmlFromArray;