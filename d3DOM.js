var body = d3.select('body');
var ul = d3.select('ul');
var div = d3.select('div');

ul.append('li').append('text').text("Zoomable Bar Chart").attr("link", "https://bbasaldu.github.io/CannibasBarChart/");
ul.append('li').append('text').text("Best Overwatch League Bar Chart").attr("link", "https://bbasaldu.github.io/OverwatchLeagueDataVisualization/");
ul.append('li').append('text').text("Census Data Geo Map").attr("link", "https://bbasaldu.github.io/CensusDataGeoMap/");
ul.append('li').append('text').text("On/Off Multi Line Chart").attr("link", "https://bbasaldu.github.io/MultiLine-Chart/");
ul.append('li').append('text').text("Pan/drag/zoom Scatter Plot").attr("link", "https://bbasaldu.github.io/ScatterPlot/");
ul.append('li').append('text').text("Bubble Pack Layout").attr("link", "https://bbasaldu.github.io/MetaCritic-Review-Visualizer/");
ul.append('li').append('text').text("Census Data Grouped Bar Chart").attr("link", "https://bbasaldu.github.io/CensusDataGroupedBarChart/");
//ul.append('li').text("3 Chart");//placeholders for future projects
//ul.append('li').text("4 Chart");
//ul.append('li').text("5 Chart");

var list = d3.selectAll('li');
list.attr("class", "list");

ul.selectAll('text').style('pointer-events', 'auto');

var viewBox = ul.node().getBoundingClientRect();

let y = 0;
ul.on("wheel", function(){
    //console.log(event)
    var firstElem = ul.node().firstElementChild.getBoundingClientRect();
    var topLi = ul.node().firstElementChild;
    var lastElem = ul.node().lastElementChild.getBoundingClientRect();
    var BottomLi = ul.node().lastElementChild;
    
    event.preventDefault();
    var dy;
    //to limit scroll speed
    if(event.deltaY > 100) dy = 100
    else if(event.deltaY < -100) dy = -100;
    else dy = event.deltaY;
    y += dy;
    //if our future bbox value will exceed the viewbox value then trigger
    if((firstElem.bottom) < viewBox.top){
        //console.log('tigger1')
        y = y + firstElem.height;
        var clone = topLi.cloneNode(true);
        clone.style.top = y;
        ul.node().appendChild(clone);
        topLi.remove();
    }
    else if(((firstElem.top+y) > viewBox.top)){
        //console.log('trigger2')
        y = y - lastElem.height;
        var clone = BottomLi.cloneNode(true);
        clone.style.top = y;
        ul.node().prepend(clone);
        BottomLi.remove();
    }
    ul = d3.select('ul');
    list = d3.selectAll('li'); //new appended child might not be in 'list' so redefine 'list'
    list.style("top", y+"px");
    list.on("click", listClick);
    
    //maybe have a way of resetting y, since y technically can take up infinite memory if i keep increasing it.
});

list.on("click", listClick);    

function listClick(){
    var txt = d3.select(this).select('text');
    window.location = txt.attr("link");
}


