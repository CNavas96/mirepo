import "./style.css";
import {  } from "./modelo";
import {  } from "./motor";
import { empezarPartida } from "./ui";

/*
1 Le damos al botón de Empezar partida.
2 Le doy click a cualquier div del grid.
3 mirar si es volteable la carta o no.
4 si no se peude dar la vuelta, poner mensaje "No se puede voltear la carta"
 si se puede voltear, tendremos que mirar con los estados a que indiceCartaVolteadaA o B tendrés que asignarle el indice
el flag de false a true de esVolteable de la carta elegida y cambiar el estado de la partida.
6 Clico sobre el segundo div y repetimos pasos anteriores.
7 Una vez dado la vuelta a la segunda carta, tendremos que mirar si son pareja. TIP: indiceCartaVolteadaA o B son undefined, tendremos que, mirar si los dos valores
tienen valor, para poder comprobar si son pareja.
8 Si son pareja, los flag de entrocada y sonPareja pasan a ser true, el indice a y b vuelven a ser undefined y el estado de la partida, pasa a ser
cero cartas levantadas.
9 si no son pareja, pues los flag de entrocada y sonPareja pasan a ser false, el indice a y b vuelven a ser undefined y el estado de la partida, pasa a ser
cero cartas levantadas.
10 Y cuando encontremos la pareja, tendremos que tener en cuenta si la partida a terminado o no (every)
*/



document.addEventListener("DOMContentLoaded", () => empezarPartida);




