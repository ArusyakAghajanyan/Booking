const setHtmlFromArray = ($elementToApply, array = [], markupCreator, page) => {
    $elementToApply.innerHTML = array.map(item => markupCreator()).join('');
};

export default setHtmlFromArray;