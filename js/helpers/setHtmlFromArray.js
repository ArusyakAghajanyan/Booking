const setHtmlFromArray = ($elementToApply, array = [], markupCreator, page) => {
    $elementToApply.innerHTML = array.map(item => markupCreator(item, page)).join('');
};

export default setHtmlFromArray;