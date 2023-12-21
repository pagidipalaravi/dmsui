function onload() {
    let todayDate = new Date();
    let ninetyDaysAgo = new Date();
    ninetyDaysAgo.setDate(todayDate.getDate() - 90);
    console.log("todayDate = " + todayDate);
    console.log("todayDate = " + ninetyDaysAgo);
    let todayDateYYYYMMDD = todayDate.toISOString().split('T')[0];
    let ninetyDaysAgoYYYYMMDD = ninetyDaysAgo.toISOString().split('T')[0];
    document.getElementById("rdf").setAttribute("min", ninetyDaysAgoYYYYMMDD);
    document.getElementById("rdf").setAttribute("max", todayDateYYYYMMDD);
    document.getElementById("rdt").setAttribute("min", ninetyDaysAgoYYYYMMDD);
    document.getElementById("rdt").setAttribute("max", todayDateYYYYMMDD);
    /*document.getElementById("eadf").setAttribute("min", ninetyDaysAgoYYYYMMDD);
    document.getElementById("eadf").setAttribute("max", todayDateYYYYMMDD);
    document.getElementById("eadt").setAttribute("min", ninetyDaysAgoYYYYMMDD);
    document.getElementById("eadt").setAttribute("max", todayDateYYYYMMDD);
    document.getElementById("aadf").setAttribute("min", ninetyDaysAgoYYYYMMDD);
    document.getElementById("aadf").setAttribute("max", todayDateYYYYMMDD);
    document.getElementById("aadt").setAttribute("min", ninetyDaysAgoYYYYMMDD);
    document.getElementById("aadt").setAttribute("max", todayDateYYYYMMDD);
    */
    disable();
}
function disable() {
    let search = document.getElementById("search");
    search.disabled = true;
    let reset = document.getElementById("reset");
    reset.disabled = true;
}
function enableSubmit() {
    let rdf = document.getElementById("rdf").value;
    let rdt = document.getElementById("rdt").value;
    console.log(rdf);
    console.log(rdt);
    if (rdf !== "" && rdt != "") {
        let search = document.getElementById("search");
        search.disabled = false;
    }
    let toDate = document.getElementById("rdt");
    if (toDate !== "") {
        toDate.disable = false;
        toDate.setAttribute("min", rdf);
    }
}

function multiple() {
    const inputsWithList = document.querySelectorAll('input[list][multiple]');

    if (inputsWithList && inputsWithList.length) {
        inputsWithList.forEach(function ( /** @type {HTMLInputElement} */ input) {
            if (input.type !== 'text' && input.type !== 'file') {
                input.addEventListener('input', function ( /** @type {Event|InputEvent} */ event) {

                    /** @type {HTMLInputElement} */
                    const input = event.target;

                    /** @type {HTMLDataListElement} */
                    const datalist = input.list;

                    /** @type {HTMLCollection} */
                    const options = datalist.options;

                    if (options && options.length) {
                        [...options].forEach(function ( /** @type {HTMLOptionElement} */ option) {
                            if (!option.trustedValue) {
                                option.trustedValue = option.value;
                                (datalist.allOptionValues = datalist.allOptionValues || new Set()).add(option.value);
                            }
                        });

                        /** @type {Boolean} */
                        let someValueIsSuffix = false;

                        for (const option of options) {
                            if (input.value.endsWith(option.trustedValue)) {
                                someValueIsSuffix = true;
                                break;
                            }
                        }
                        /** @type {Array} */
                        const parts = input.value.split(' , ').join(',').split(' ,').join(',').split(',');

                        /** @type {String} */
                        let lastPart = parts.slice(-1).pop();

                        if (lastPart.startsWith(' ')) {
                            lastPart = lastPart.trimStart();
                        }
                        [...options].forEach(function ( /** @type {HTMLOptionElement} */ option) {
                            option.hidden = false;
                            if (!someValueIsSuffix) {
                                if (option.trustedValue.startsWith(lastPart)) {
                                    option.value = input.value + option.trustedValue.replace(lastPart, '');
                                } else {
                                    option.hidden = true;
                                }
                            }
                        });
                    }
                }, {
                    capture: false,
                    once: false,
                    passive: true,
                });
            }
        });
    }
}