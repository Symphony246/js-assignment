const datas = [
    { sname: 'taraneh', participantNumber: 1, diplomaType: 2, age: 20, courseCode: 24, genderCode: 2 },
    { sname: 'mahdi', participantNumber: 2, diplomaType: 2, age: 23, courseCode: 24, genderCode: 1 },
    { sname: 'seti', participantNumber: 3, diplomaType: 1, age: 20, courseCode: 21, genderCode: 2 },
    { sname: 'maryam', participantNumber: 4, diplomaType: 0, age: 50, courseCode: 20, genderCode: 2 },
    { sname: 'sama', participantNumber: 5, diplomaType: 2, age: 21, courseCode: 24, genderCode: 2 },
    { sname: 'melika', participantNumber: 6, diplomaType: 1, age: 17, courseCode: 21, genderCode: 2 },
    { sname: 'hamid', participantNumber: 7, diplomaType: 2, age: 51, courseCode: 24, genderCode: 1 },
]
let count = 0;
let count_1 = 0;
let count_2 = 0;
let Percent = 0;
datas.map(item => {
    if (item.courseCode === 24 && item.genderCode === 1) {
        count++;
    }
    else if (item.age < 18) {
        count_1++;
    }
    else if (item.courseCode === 24) {
        count_2++;
    }
    Percent = (count2 * datas.length) / 100;
    console.log(count,count_1);
    
})
