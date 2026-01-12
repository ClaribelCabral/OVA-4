//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=100; timeIni=100; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=10;
var score=0; scoreMax=2; scoreInc=2; scoreDec=2
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#008000";colorLeave="#000000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=12;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="'Times New Roman', Times, serif";
var timeOnMessage=5; messageOk="FELICIDADES,EXCELENTE"; messageTime=""; messageError="VUELVE A INTENTARLO"; messageErrorG="VUELVE A INTENTARLO"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[];
var c=[];
var con1=["Incognita","Coeficiente","Término independiente","MIiembro izquierdo","Miembro dereccho","Signo de igualdad"];
var con2=["Letra que representa un valor desconocido","Número que acompaña a la incógnita","Valor numérico que no tiene letra","Expresión que se encuentra antes del signo igual","Expresión que se encuentra después del signo igual","Símbolo que indica que dos expresiones son iguales"];
var sel1=""; join1=[]; join2=[];
