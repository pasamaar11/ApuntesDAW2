const salarioB = document.getElementById("salarioB");
const retencion = document.getElementById("retencion");
const nPagas = document.getElementById("nPagas");

function calculoSalarioNeto(){
    var sbm = (salarioB / nPagas);
    var factorRetencion = (retencion / 100);
    var retencionMensual = (sbm * factorRetencion);
}