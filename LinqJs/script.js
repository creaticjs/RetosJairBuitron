var dataset = [
    {
        id:1, nombre: 'Jair', edad: 32
    },
    {
        id:2, nombre: 'Luis', edad: 26
    },
    {
        id:3, nombre: 'Carlos', edad: 36
    }
]

var query = 
    Enumerable.From(dataset)
    .Where('$.edad < 27').ToArray();