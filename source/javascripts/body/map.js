$(function(){
  new jvm.Map({
    map: 'world_mill',
    container: $('#map'),
    backgroundColor: 'transparent',
    zoomOnScroll: false,
    regionStyle: {
      initial: {
        fill: '#e4e4e4'
      },
    },
    series: {
      regions: [{
        scale: {
          'LIVED': '#161618',
          'VISITED': '#5a46ff'
        },
        attribute: 'fill',
        values: {
          BE: 'LIVED',
          CN: 'LIVED',
          FI: 'LIVED',
          ES: 'LIVED',
          AT: 'VISITED',
          BG: 'VISITED',
          CZ: 'VISITED',
          EE: 'VISITED',
          FR: 'VISITED',
          DE: 'VISITED',
          HU: 'VISITED',
          IE: 'VISITED',
          IT: 'VISITED',
          NL: 'VISITED',
          NO: 'VISITED',
          RU: 'VISITED',
          SE: 'VISITED',
          CH: 'VISITED',
          UA: 'VISITED',
          GB: 'VISITED',
          ID: 'VISITED',
          MY: 'VISITED',
          TH: 'VISITED',
          VN: 'VISITED',
        }
      }]
    }
  });
});