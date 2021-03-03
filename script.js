let container1 = document.createElement('div');
container1.setAttribute('class', 'container');

let row1 = document.createElement('div');
row1.setAttribute('class', 'row');

let col1 = document.createElement('div');
col1.setAttribute('class', 'offset-3 col-6 justify-content-center');
col1.style.backgroundColor = 'palegoldenrod';

let form = document.createElement('form');

let formGroup = document.createElement('div');
formGroup.setAttribute('class', 'form-group');

let label = document.createElement('label');
label.setAttribute('for','dob');
label.innerHTML = 'Enter your date of birth';

let input = document.createElement('input');
input.setAttribute('id','dob');
input.setAttribute('name','dob');
input.setAttribute('type','text');
input.setAttribute('class','form-control');
input.setAttribute('placeholder', 'YYYY/MM/DD');

formGroup.append(label, input);
form.append(formGroup);
col1.append(form);
row1.append(col1);
container1.append(row1);
document.body.append(container1, document.createElement('hr'));

function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

let formdata = document.querySelector('form');
formdata.addEventListener('submit', function(e) {
    e.preventDefault();
    const dateformat = document.getElementById('dob').value;
    let content = dateformat.split('/');
    let day = content[2];
    let month = content[1];
    let year = content[0];

    //check if valid date
    Date.prototype.isValid = function () {
        return this.getTime() === this.getTime();
    };
    let validDate = new Date(dateformat);
    if(!validDate.isValid()) alert('Invalid Date');

    let dateOfBirth = month + '/' + day + '/'+ year;
    let dob = new Date(dateOfBirth);

    //get today's date;
    let today = new Date();
    let daysElapsed = (today.getTime() - dob.getTime())/(1000*24*60*60);
    console.log("Days elapsed " + Math.floor(daysElapsed));

    let monthsElapsed = monthDiff(dob, today);
    console.log("Months elapsed " + monthsElapsed);

    let presentYear = today.toLocaleDateString().split('/').map(x => +x)[2];
    let yearsElapsed = presentYear - year - 1;
    console.log("Years elapsed " + yearsElapsed);

    let minutesElapsed = daysElapsed*24*60;
    console.log("Minutes elapsed " + minutesElapsed);

    let secondsElapsed = minutesElapsed*60;
    console.log("Seconds elapsed " + secondsElapsed);

    let milliSecondsElapsed = secondsElapsed*1000;
    console.log("Milliseconds elapsed " + milliSecondsElapsed);
});

