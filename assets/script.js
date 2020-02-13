const headerDate = $("#currentDay");
const container = $(".container");
let currentHour;
let currentMinute;
let hourArr = ["12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"];

//start the MomentJS time request before document is fully loaded
function getDate(){
    let date = moment().format('dddd, MMM Do');
    headerDate.text(date);
    currentHour = moment().format('H');
    currentMinute = parseInt(moment().format('mm'));
}

$(document).ready(function() {

    //function to populate the page with time blocks for 5AM to 12AM. This will be called only on page load, and will populate any saved calander info. 
    function loadSchedule(){
        console.log("you are in the load function!");

        //can update this in the future to have the start index be a variable for user to dictate the start of the work day
        for (let i = 5; i < 24; i++) {
            console.log("in the loop!!!");
            let nextRow = $("<div>");
            let nextColumn;
            nextRow.addClass("row");

            for (let k = 0; k < 3; k++){

                //check if div or input column
                switch (k){               
                    case 0:
                        nextColumn = $("<div>");
                        nextColumn.addClass("col-1 hour");
                        nextColumn.text(hourArr[i]);
                        break;
                    //this is the description column which will take input and have dynamic style depending on current hour
                    case 1:
                        nextColumn = $("<input>");
                        if (i < currentHour){
                            nextColumn.addClass("col-10 description past");
                        }
                        else if (i == currentHour){
                            nextColumn.addClass("col-10 description present");
                        }
                        else{
                            nextColumn.addClass("col-10 description future");
                        }
                        //function to find any saved content to display in this time-block
                        //getEvents(hour);
                        break;
                    case 2:
                        nextColumn = $("<div>");
                        nextColumn.addClass("col-1 saveBtn");
                        nextColumn.html("<i class='far fa-save'>");
                        break;
                }
                nextRow.append(nextColumn);
            }
            container.append(nextRow);        
        }
    }


    //function to convert 24-hour time to 12-hour clock
    function convertToPM(time){

    }

    loadSchedule();

    },
);


getDate();
