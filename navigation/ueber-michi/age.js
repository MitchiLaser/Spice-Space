// -- Configuration --

// enter the date of your birthday here:
var birthday = "2000-04-13";  //YYYY-MM-DD

// if you wanna print you birthday on the website using this fancy JavaScript plugin then
// enter the id of the HTML object here; otherweise leave blank.
var bd_out = "";

// if you didn't leave the previous parameter blank you can specify the output format.
// p. ex.: "W, D.M.Y" -> Thursday, 15.04.2000
var bd_out_form = "W, D.M.Y";

// if you wanna use the names of the days of the weekend in the parameter above
// then enter the names here from sunday to saturday:
var week = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

// if you wanna print yout age in years and days
// enter the id of the HTML object here; otherweise leave blank.
var age_out = "age_out";

// if you wanna use the names of the days of the weekend in the parameter above
// then enter the word for "year" and "day" in your language in singular and plural
var date_words = ["Jahr", "Jahre", "Tag", "Tage"];


// -- The program itself --

Number.prototype.enlarge = function(length){ // add '0's in front of numbers until thex reach a certain length
    var Return = this.constructor == String() ? this : String(this);
    while(Return.length < length){
        Return = 0 + Return;
    }
    return Return;
}

Date.prototype.print = function(format){ // print the date within a fancy format
    var Return = new String();

    for(var i = 0; i < format.length; i++){
        switch(format.charAt(i)){
            case "W": Return += week[this.getDay()];                break;
            case "D": Return += this.getDate().enlarge(2);          break;
            case "M": Return += (this.getMonth() + 1).enlarge(2);   break;
            case "Y": Return += this.getFullYear();                 break;
            default:  Return += format.charAt(i);
        }
    }
    return Return;
}

Date.prototype.leapYear = function(){
    if(((this.getFullYear() % 4 == 0)  && (this.getFullYear() % 100 != 0)) || (this.getFullYear() % 400 == 0)){
        return true;
    }
    else{
        return false;
    }
}

Date.prototype.calcDiffToday = function (){
    var now = new Date('2020-04-9');
    var diff = Math.floor((now - this)/ (1000 * 60 * 60 * 24));
    
    // if you were born before the leap day: remove the day from this year
    if(this.leapYear() && this.getMonth() < 3){
        diff--;
    }
    // remove all the days from leap years betweem you birth year and the current year
    for(var i = this.getFullYear() + 1; i < now.getFullYear(); i++){
        t_date = new Date();
        t_date.setFullYear(i);
        if(t_date.leapYear()){
            diff--;
        }
    }
    //if ypu the actual year is a leap year and you were born after 29th February then remove this day
    if(now.leapYear() && this.getMonth() >= 3){
        diff--;
    }

    var diff_d = diff % 365;
    var diff_y = (diff - diff_d) / 365;

    //alert(diff);
    return [diff_y, diff_d];
}

function print_age(age){
    var Return = new String();

    Return += age[0] + " ";
    Return += (age[0] > 0) ? date_words[1]:date_words[0];

    Return += " ";

    Return += age[1] + " ";
    Return += (age[1] > 0) ? date_words[3]:date_words[2];

    return Return;
}

window.addEventListener("load", function(){
    Birthday = new Date(birthday);

    if(bd_out != ""){
        document.getElementById(bd_out).innerHTML = Birthday.print(bd_out_form);
    }

    if(age_out != ""){
        document.getElementById("age_out").innerHTML = print_age(Birthday.calcDiffToday());
    }
    
});