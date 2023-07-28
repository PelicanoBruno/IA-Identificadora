//https://teachablemachine.withgoogle.com/models/eou34jGnT/model.json
Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
})
camera = document.getElementById("camera")
Webcam.attach("#camera")
function CapturarImagem(){
    Webcam.snap(function(data_uri){
        document.getElementById("resultado").innerHTML = '<img id="imagem" src="'+ data_uri + '"/>'
    })
}
console.log("Teste:",ml5.version)
var classificador = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/eou34jGnT/model.json', CarregarModelo)
function CarregarModelo(){
 console.log('Modelo Carregado')
}
function Verificar(){
 var img = document.getElementById("imagem")
 classificador.classify(img,pegarResultado)
}
function pegarResultado(error,results){
if(error){
    console.log(error)
}else{
    console.log(results)
    var nome = results[0].label
    var confiança = results[0].confidence * 100

    document.getElementById("objeto").innerHTML = nome
    document.getElementById("confianca").innerHTML = confiança.toFixed(2)+"%"
}
}