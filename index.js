function saturdayFun(activity) {
    activity= (typeof activity !== 'undefined') ? activity : "roller-skate";
    return `This Saturday, I want to ${activity}!`;
}
function mondayWork(work) {
    work= (typeof work !== 'undefined') ? work : "go to the office";
    return `This Monday, I will ${work}.`;
}
function wrapAdjective(adj){
    return function (spec) {
        spec= (typeof spec !== 'undefined' ? spec : 'special')
        return `You are ${adj}${spec}${adj}!`
    }
}