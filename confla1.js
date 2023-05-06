// A) 3 chicos de 23 años perfectamente normales entran a una heladeria a comrpr un helado pero hay un problema:
//los precios no estan al lado de cada estante con su respectivo helado
//Ellos quieren comprar el helado mas caro que puedan con la plata que tienen
//asi que ayudemosles

//Roberto ---> 1.5$
//Pedro ---> 1.7$
//Cofla ---> 3$

/*Los precios de los elados son los siguientes:

Palito de helado de agua: 0.6
Palito de helado de crema: 1
Bombon de helado marca heladix: 1.6
Bombon de helado de marca heladovich: 1.7
Potecito de helado con condites: 2.9
Pote de 1/4kg ---> 2.9


Crear soluciones: 

 - Pedirle que ingresen el monto que tienen y mostrarle el helado mas caro que se puedqn comparr
 - Si hay 2 o mas helados con el mismo precio, mostrar ambos
 - Confla quiere saber cuanto es el vuelto
*/


dineroCofla = prompt("cuanto dinero tienes cofla?");
dineroRoberto = prompt("cuanto dinero tienes roberto?");
dineroPedro = prompt("cuanto dinero tienes pedro?");

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
	alert("cofla; comprate el helado de agua");
	alert("y te sobran" + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.6) {
	alert("cofla; comprate el helado de crema");
	alert("y te sobran" + (dineroCofla - 1));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
	alert("cofla; comprate el helado de heladix");
	alert("y te sobran" + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
	alert("cofla; comprate el helado de heladovich");
	alert("y te sobran" + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
	alert("cofla; comprate el helado de helardo");
	alert("y te sobran" + (dineroCofla - 1.8));
}

else if (dineroCofla >= 2.9) {
    alert("cofla, comprate helado con confites o el pote de 1/4kg");
	alert("y te sobran" + (dineroCofla - 2.9));

} else {
	alert("lo siento cofla, pobre de mierda, no te alcanza para ningun helado");
}





if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
	alert("roberto, comprate el helado de agua");
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
	alert("roberto, comprate el helado de crema");
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
	alert("roberto, comprate el helado de heladix");
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
	alert("roberto, comprate el helado de heladovich");
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
	alert("roberto, comprate el helado de helardo");
}

else if (dineroRoberto >= 2.9) {
    alert("roberto, comprate helado con confites o el pote de 1/4kg");

} else {
	alert("lo siento roberto, pobre de mierda, no te alcanza para ningun helado");
}




if (dineroPedro >= 0.6 && dineroPedro < 1) {
	alert("pedro; comprate el helado de agua");
}

else if (dineroPedro >= 1 && dineroPedro < 1.6) {
	alert("pedro; comprate el helado de crema");
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
	alert("pedro; comprate el helado de heladix");
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
	alert("pedro; comprate el helado de heladovich");
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
	alert("pedro; comprate el helado de helardo");
}

else if (dineroPedro >= 2.9) {
    alert("pedro, comprate helado con confites o el pote de 1/4kg");

} else {
	alert("lo siento pedro, pobre de mierda, no te alcanza para ningun helado");
}

