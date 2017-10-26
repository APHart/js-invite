"use strict";

class Invitation {

    constructor(displayElement){

        displayElement.append(`<img id="image">
                              <h1 id="title"></h1>
                              <p id="date"></p>
                              <p id="start"></p>
                              <p id="end"></p>
                              <p id="location"> </p>
                              <p id="description"></p>`);

        // Set properties on the class
        this.container = displayElement;
        this.imageEl = displayElement.children("img#image");
        this.titleEl = displayElement.children("h1#title");
        this.dateEl = displayElement.children("p#date");
        this.startEl = displayElement.children("p#start");
        this.endEl = displayElement.children("p#end");
        this.locationEl = displayElement.children("p#location");
        this.descriptionEl = displayElement.children("p#description");

    }

    changeTitle(newTitle){
        this.titleEl.text(newTitle);
    }

    changeDate(newDate) {
        this.dateEl.text("Join us on " + newDate);
    }

    changeStart(newStart) {
        this.startEl.text(newStart);
    }

    changeEnd(newEnd) {
        this.endEl.text(newEnd);
    }

    changeImage(newImage){
        this.imageEl.attr("src", newImage);
    }

    changeFont(newFont) {
        this.container.css("font-family", newFont);
    }

    changeDescription(newDescription) {
        this.descriptionEl.text(newDescription);
    }

    changeLocation(newLocation) {
        this.locationEl.text(newLocation);
    }

    changeBackgroundColor(evt) {
        let newColor = evt.target.
        this.container.css('background-color', newColor)
    }
}


// PART 2:

// Create your invitation object

let invitationElement = $("#invite-display");
let invitation = new Invitation(invitationElement);

//inline function gets user input, passes through change date method
$('#date-input').on('click', function () {
    let userDate = $('#date-input').val()
    invitation.changeDate(userDate)
})

$('#title-input').on('keyup', function () {
    let userTitle = $('#title-input').val()
    invitation.changeTitle(userTitle)
})

$('#description-input').on('keyup', function () {
    let userDesc = $('#description-input').val()
    invitation.changeDescription(userDesc)
})

$('#location-input').on('change', function () {
    let userLoc = $('#location-input').val()
    invitation.changeLocation(userLoc)
})

$('#start-time').on('click', function () {
    let userStart = $('#start-time').val()
    invitation.changeStart(userStart)
})

$('#end-time').on('click', function () {
    let userEnd = $('#end-time').val()
    invitation.changeEnd(userEnd)
})

$('#font').on('change', function () {
    let userFont = $('#font').val()
    invitation.changeFont(userFont)
})

