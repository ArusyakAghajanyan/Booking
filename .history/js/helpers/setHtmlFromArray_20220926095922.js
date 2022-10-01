const setHtmlFromArray = ($elementToApply, array = [], markupCreator, page) => {
    $elementToApply.innerHTML = array.map(item => markupCreator(item,)).join('');
};

export default setHtmlFromArray;