const ctx = document.querySelector("canvas");

new Chart(ctx,{
    type:"bar",
    data:{
        labels:["red","blue","green","violet","yellow","indigo","orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3,8],
            borderWidth: 1
          }],
          options: {
            plugins:{
                customCanvasBackgroundColor:{
                    color:""
                }
            },
            scales: {
              y: {
                beginAtZero: true
              }
            }
    }
}
})