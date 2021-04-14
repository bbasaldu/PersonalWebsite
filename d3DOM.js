let body = d3.select('body');
let ul = d3.select('ul');
let div = d3.select('div');
let svg = d3.select('#mainSvg')
let title = d3.selectAll('.title')

ul.append('li').append('text').text("Zoomable Bar Chart").attr("link", "https://bbasaldu.github.io/CannibasBarChart/");
ul.append('li').append('text').text("Best Overwatch League Bar Chart").attr("link", "https://bbasaldu.github.io/OverwatchLeagueDataVisualization/");
ul.append('li').append('text').text("US Conglomerates").attr('link', "https://bbasaldu.github.io/USConglomerates/");
ul.append('li').append('text').text("Audio Spectrum with Annotations").attr("link", "https://bbasaldu.github.io/AudioSpectrum/");
ul.append('li').append('text').text("Census Data Geo Map").attr("link", "https://bbasaldu.github.io/CensusDataGeoMap/");
ul.append('li').append('text').text("On/Off Multi Line Chart").attr("link", "https://bbasaldu.github.io/MultiLine-Chart/");
ul.append('li').append('text').text("Pan/drag/zoom Scatter Plot").attr("link", "https://bbasaldu.github.io/ScatterPlot/");
ul.append('li').append('text').text("Bubble Pack Layout").attr("link", "https://bbasaldu.github.io/MetaCritic-Review-Visualizer/");
ul.append('li').append('text').text("Census Data Grouped Bar Chart").attr("link", "https://bbasaldu.github.io/CensusDataGroupedBarChart/");
ul.append('li').append('text').text("Simple Typing Test App (Windows)").attr("link", "https://github.com/bbasaldu/StoryTyper");
let list = d3.selectAll('li');
list.attr("class", "list");
let bottomText = ul.selectAll('text');
bottomText.attr('class', 'text');
let listEase = d3.easeBounceOut;
let textEase = d3.easeQuadIn;
let topText = d3.select('.top').selectAll('text')
let info = d3.select('#info')

let line = svg.append('line')
  .attr('x1', '0%')
  .attr('y1', '0%')
  .attr('x2', '0%')
  .attr('y2', '0%')
  .attr('stroke', '#000')
  .attr('stroke-width', 3)
line.transition().duration(1500).ease(listEase)
  .attr('x2', '100%')


title
  .style('left', '-100%')
list
  .style('left', (d,i) => (i%2 == 0)?'-100%':'100%')
topText
  .style('opacity', 0)
  .transition().duration(1000).ease(textEase)
  .style('opacity', 1)
bottomText
  .style('opacity', 0)
  .transition().duration(1000).ease(textEase)
  .style('opacity', 1)
info
  .style('opacity', 0)
  .transition().duration(1500).ease(textEase)
  .style('opacity', 1)

title.transition().duration(1500).ease(listEase)
  .style('left', (d,i) => (i==0)?'5%':'10%')
list.transition().duration(1500).ease(listEase)
  .style('left', '0%')

list.on('click', function(){
  openLink(d3.select(this).select('text').attr('link'))
})

function openLink(link){
  window.open(link, '_blank')
}
