const headerDate = $("#currentDay");




function getDate(){
    let date = moment().format('dddd, MMM Do');
    headerDate.text(date);
}


getDate();