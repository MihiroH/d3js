//グラフ下地
function graphBase_01_02() {
  var list = [100]; //大きさ（全周360度に対する数値）
  var color = '#fff2cc'; //色
  var svgWidth = 160; // SVG領域の横幅
  var svgHeight = 160; // SVG領域の縦幅

  // SVGの表示領域を生成
  var svg = d3.select('.graph .pie_base').append('svg').attr('width', svgWidth).attr('height', svgHeight);

  // 円グラフを生成
  var pie = d3.layout.pie().sort(null).value(function (d) {
    return d;
  });

  // 円グラフのサイズを指定
  //var arc = d3.svg.arc().innerRadius(0).outerRadius(200);
  // ドーナツ型にする場合のサンプル
  var arc = d3.svg.arc().startAngle(function (d) {
    return 0;
  }).endAngle(function (d) {
    return Math.PI * 2 * 1;
  }).innerRadius(35).outerRadius(80);

  // グループを作成
  var g = svg.append('g');

  // 円グラフを描画
  g.selectAll('path').data(pie(list)).enter().append('path').attr("fill", function (d, i) {
    return color;
  }).attr('transform', 'translate(' + svgWidth / 2 + ', ' + svgHeight / 2 + ')') // SVG領域の中心
    .transition().attrTween('d', function (d) {
      // 指定した範囲で値を変化させアニメーションさせる
      var interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, { startAngle: d.startAngle, endAngle: d.endAngle });

      return function (t) {
        return arc(interpolate(t));
      };
    });
}

function graphMain01() {
  var list = [42, 58]; //大きさ（全周360度に対する数値）
  var color = ['#fbcb38', '#fff2cc']; //色
  var svgWidth = 160; // SVG領域の横幅
  var svgHeight = 160; // SVG領域の縦幅

  // SVGの表示領域を生成
  var svg = d3.select('.graph .pie').append('svg').attr('width', svgWidth).attr('height', svgHeight);

  // 円グラフを生成
  var pie = d3.layout.pie().sort(null).value(function (d) {
    return d;
  });

  // 円グラフのサイズを指定
  //var arc = d3.svg.arc().innerRadius(0).outerRadius(200);
  // ドーナツ型にする場合のサンプル
  var arc = d3.svg.arc().innerRadius(35).outerRadius(80);

  // グループを作成
  var g = svg.append('g');

  // 円グラフを描画
  g.selectAll('path').data(pie(list)).enter().append('path').attr("fill", function (d, i) {
    return color[i];
  }).attr('transform', 'translate(' + svgWidth / 2 + ', ' + svgHeight / 2 + ')') // SVG領域の中心
    .transition().duration(500) // スピード
    .ease('linear') // イージング
    .attrTween('d', function (d) {
      // 指定した範囲で値を変化させアニメーションさせる
      var interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, { startAngle: d.startAngle, endAngle: d.endAngle });

      return function (t) {
        return arc(interpolate(t));
      };
    });
}

graphBase_01_02();
graphMain01()
