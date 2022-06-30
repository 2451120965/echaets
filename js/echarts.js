// echarts图表

// 折线图
(function () {
    
    let myChart = echarts.init(document.querySelector('.diagram'));


    // 指定图表的配置项和数据
    option = {
        title: {
            text: '曲线图数据展示',
            left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          // prettier-ignore
          data: []
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} W'
          },
          axisPointer: {
            snap: true
          }
        },
        visualMap: {
          show: false,
          dimension: 0,
        },
        series: [
          {
            type: 'line',
            smooth: true,
            // prettier-ignore
            data: [],
            markArea: {
              itemStyle: {
                color: 'rgba(255, 173, 177, 0.4)'
              },
              data: [
              ]
            }
          }
        ]
      };

    // 1.创建对象
    const xhr = new XMLHttpRequest();
    // 2.设置请求方法 和url      (设置请求行)
    xhr.open('GET', 'https://edu.telking.com/api/?type=month');
    xhr.responseType = 'json';
    //设置请求头 xhr.setRequestHeader（‘属性名’，‘属性值’）  可自定义属性名
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');


    xhr.send();
    // 4.事件绑定
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log("曲线图返回数据：",xhr.response.data);
                option.xAxis.data = xhr.response.data.xAxis
                option.series[0].data = xhr.response.data.series
                myChart.setOption(option);
            } else {
            console.log("请求失败");
            }
        } 
    }

})();


(function () {
    // 饼状图
    let myChart = echarts.init(document.querySelector('.pieChart'));

    option1 = {
        title: {
          text: '饼状图数据展示',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 517, name: 'Ijgd Gxz' },
              { value: 624, name: 'Dkf Kue' },
              { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };


      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://edu.telking.com/api/?type=week');
      xhr.responseType = 'json';
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send();
      xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
              if (xhr.status >= 200 && xhr.status < 300) {
                console.log("饼状图返回数据：",xhr.response);
                // console.log(option);
                  
                  let arr = option1.series[0].data
                  for(var i =0; i < arr.length; i++) {
                    arr[i].name = xhr.response.data.xAxis[i];
                    arr[i].value = xhr.response.data.series[i];
                  }
                  option1.series[0].data = arr
                  myChart.setOption(option1);
              } else {
              console.log("请求失败");
              }
          }
      }

})();

(function () {
    // 柱状图
    let myChart = echarts.init(document.querySelector('.histogram'));

    option2 = {
        title: {
          text: '柱状图数据展示',
          left: 'center'
        },
        xAxis: {
          type: 'category',
          data: []
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [],
            type: 'bar'
          }
        ]
      };

      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://edu.telking.com/api/?type=week');
      xhr.responseType = 'json';
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send();
      xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
              if (xhr.status >= 200 && xhr.status < 300) {
                console.log("柱状图返回数据：",xhr.response.data);
                  option2.series[0].data = xhr.response.data.series
                  option2.xAxis.data = xhr.response.data.xAxis
                  myChart.setOption(option2);
              } else {
              console.log("请求失败");
              }
          }
      }

})()
