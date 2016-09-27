function Calc(part1, part2, bottle) {
  var reg = new RegExp('^[0-9]+$');
  part1 = parseInt(part1);
  part2 = parseInt(part2);
  bottle = parseInt(bottle);
  if((part1 === 0 || !part1) || (part2 === 0 || !part2) || (bottle === 0 || !bottle)) {
    return [0,0];
  }
  var parts = part1 + part2;
  var step = bottle / parts;
  var res1 = Math.round(step * part1).toFixed(2).split('.');
  var res2 = Math.round(step * part2).toFixed(2).split('.');
  var percentage = part1*100/(part1+part2);
  var res1MLL = 'ml';
  var res2MLL = 'ml';
  if(res1[0] >= 1000) {
    res1[0] = res1[0]/1000;
    res1MLL = 'l';
  }
  if(res2[0] >= 1000) {
    res2[0] = res2[0]/1000;
    res2MLL = 'l';
  }
  var stepResult1 = res1[0].toString().replace('.', ',');
  var stepResult2 = res2[0].toString().replace('.', ',');
  var result = stepResult1 + '' + res1MLL + ' : ' + stepResult2 + '' + res2MLL;

  var res = [result, percentage];
  return res;
}

module.exports = Calc;
