function onload() {
    let releaseDateFrom = new Date();
    let ninetyDaysAgo = new Date(releaseDateFrom);
    ninetyDaysAgo.setDate(releaseDateFrom.getDate() - 90);
    let releaseDateFromFormatted = releaseDateFrom.toISOString().split('T')[0];
    let ninetyDaysAgoFormatted = ninetyDaysAgo.toISOString().split('T')[0];
    document.getElementById("rdf").setAttribute("min", ninetyDaysAgoFormatted);
    document.getElementById("rdf").setAttribute("max", releaseDateFromFormatted);
    let releaseDateTo = new Date();
    let ninetyDays = new Date(releaseDateTo);
    ninetyDays.setDate(releaseDateFrom.getDate() - 90);
    let releaseDateToFormatted = releaseDateTo.toISOString().split('T')[0];
    let ninetyDaysFormatted = ninetyDays.toISOString().split('T')[0];
    document.getElementById("rdt").setAttribute("min", ninetyDaysFormatted);
    document.getElementById("rdt").setAttribute("max", releaseDateToFormatted);
    let estimationArrivalDateFrom = new Date();
    let ninety = new Date(estimationArrivalDateFrom);
    ninety.setDate(estimationArrivalDateFrom.getDate() - 90);
    let estimationArrivalDateFromFormatted = estimationArrivalDateFrom.toISOString().split('T')[0];
    let ninetyFormatted = ninety.toISOString().split('T')[0];
    document.getElementById("eadf").setAttribute("min", ninetyFormatted);
    document.getElementById("eadf").setAttribute("max", estimationArrivalDateFromFormatted);
    let estimationArrivalDateTo = new Date();
    let ninetyDayss = new Date(estimationArrivalDateTo);
    ninetyDayss.setDate(estimationArrivalDateTo.getDate() - 90);
    let estimationArrivalDateToFormatted = estimationArrivalDateTo.toISOString().split('T')[0];
    let ninetyDayssFormatted = ninetyDayss.toISOString().split('T')[0];
    document.getElementById("eadt").setAttribute("min", ninetyDayssFormatted);
    document.getElementById("eadt").setAttribute("max", estimationArrivalDateToFormatted);
    let actualArrivalDateFrom = new Date();
    let daysAgo = new Date(actualArrivalDateFrom);
    daysAgo.setDate(actualArrivalDateFrom.getDate() - 90);
    let actualArrivalDateFromFormatted = actualArrivalDateFrom.toISOString().split('T')[0];
    let daysAgoFormatted = daysAgo.toISOString().split('T')[0];
    document.getElementById("aadf").setAttribute("min", daysAgoFormatted);
    document.getElementById("aadf").setAttribute("max", actualArrivalDateFromFormatted);
    let actualArrivalDateTo = new Date();
    let ninetyDayssAgo = new Date(actualArrivalDateTo);
    ninetyDayssAgo.setDate(actualArrivalDateTo.getDate() - 90);
    let actualArrivalDateToFormatted = actualArrivalDateTo.toISOString().split('T')[0];
    let ninetyDayssAgoFormatted = ninetyDayssAgo.toISOString().split('T')[0];
    document.getElementById("aadt").setAttribute("min", ninetyDayssAgoFormatted);
    document.getElementById("aadt").setAttribute("max", actualArrivalDateToFormatted);
    disable();
}
function disable() {
    let search = document.getElementById("search");
    search.disabled = true;
    let reset = document.getElementById("reset");
    reset.disabled = true;
    let submit = document.getElementById("submit");
    submit.disabled = true;
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
}