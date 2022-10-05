

const PRIMERA_CONSULTA = "http://localhost:8080/api/home/readProductCategories"


const apenasCargaUno = async () => {

    var ctx = document.getElementById('myChart')
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            datasets: [{
                label: 'Producto / Cantidad',
                backgroundColor: ['#477A6E', '#A49E2E', '#70C2C5', '#4C7AB6', '#EB8149', '#7930C8', '#90CAF9', '#21A80C'],
                borderColor: ['White'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })

    fetch(PRIMERA_CONSULTA)
        .then(response => response.json())
        .then(datos => mostrar(datos))
        .catch(error => console.log(error))


    const mostrar = (articulos) => {
        articulos.forEach(element => {
            myChart.data['labels'].push(element.categoria)
            myChart.data['datasets'][0].data.push(element.cantidad)
            myChart.update()
        });

    }


}


fetch(PRIMERA_CONSULTA)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data)
    let body = ""
    for (var i = 0; i < data.length; i++) {
        body += `<tr><td>${data[i].categoria}</td><td>${data[i].cantidad}</td></tr>`
    }
    document.getElementById('data').innerHTML = body
    //console.log(body)
}



