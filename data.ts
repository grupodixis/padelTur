export interface Circuito{
  idCircuito: Number;  //Identificador unico del circuto 
  nombreCircuito: String;  // Nombre del Circuito  Ej: Menorca padel tour

}
export interface Temporada{
  idTemporada: Number;  // Identificador de temporada
  NombreTemporada: String; // Nombre de la temporada Ej: Temporada 2018/2019
  idCircuito: Number;   //Identifica a que circuito pertenece
}

export interface Ranking{
  nombre: String;  // Por ejemplo: Categoria 4º
  idRanking: Number; // Identificador unico de Ranking
  idTemporada: Number;  //Identificador  
}

export interface Torneo{
  idTorneo: Number;  // Identificador del torneo
  nombreTorneo: String;  // Nombre del torneo
  idRanking: Number;  //Identifico en que ranking puntua

}

export interface Grupo {
  idGrupo: Number;  // id : 1 // Identificador unico del grupo
  nombreGrupo: String; // Nombre del grupo Ej: Grupo A, Grupo B etc.
  idTorneo:Number;  // Identificador del torneo al que pertenece el grupo.
  puntos: Number; // Cantidad de puntos que suma un jugador por estar aqui
  
}

export interface Playoff {
  idPlayoff: Number; // id: 1
  idTorneo: Number;  // Asociacion al torneo qe
  partida: Number; //  32 u 16 o 8  -> Si se parte de Octavos o cuartos
  Equipos: Number [];  // array de ids de equipos en orden de triunfo
  puntos: Number; // Cantidad de puntos que gana el jugador hasta aqui.
}

export interface Partido {
  private idPartido: number; // Identificador unico del partido
  infoPartido: {nombre:String,Fecha:Date}; // Ejemplo Nombre: 1º Partido Fecha: 12/12/2019 20:30 hs
  idGrupo: number; // grupo id 4 Indentificamos a que grupo pertenece este partido
  resultado: [{ idEquipo1: Number, sets: Number [] }];  //  Resultados [{ idEquipo1: 2, sets: Number [6,4,3] },{ idEquipo1: 3, sets: Number [4,6,6] }]
  resuelve: function () { return; }; 
}


export interface Equipo {
  idEquipo: Number;  // id : 1 Identificador unico del Equipo
  nombre: String; // Equipo "la ostia en vinagre"
  idJugadores: Number [];  // [45,32] Asociacion de ids de jugadores
  puntos?: Number;  // Opcional suma de puntos en el ranking actual
}

export interface Jugador {
  idJugador: Number; // id: 45
  Nombre: String;  // Jaume Llopis
  NivelPermitido: Number []; // [4,3,2,1]
  PuntosRanking: Number []; // [4,100] [3,300] -> Suma de puntos ranking por nivel
}


export interface Nivel {
  idNivel: Number; // identificador unico del nivel que se juega en ese torneo ej 32.
  idTorneo: Number; // Asociacion al torneo en juego
  nivel: Number;  // Nivel real en cuestion que permitira a los jugadores entrar ej 4
}





/*
Dado el siguiente ranking de jugadores:
Ranking =[{
  
}]
J1 : 300
eq 1  [3,6,2]   [4,6,6] -2,6,-1  3

eq 2  [6,4,6]   [6,0,7] 2,-6,1   -3



RAnking > Torneo > Nivel > Grupo | Playoff > Partido > Equipo > Jugador


Logica de armado de playoff:
lista de id equipos ganadores de grupos:
[12,32,15,20,14,6,8,26]
Organizacion de playoff segun suma de puntos en tabla de ranking y clasificación de grupo.
Segun la clasificacion salen 4 primeros y 4 segundos:
Primeros de grupo: [12,15,32,26]
Segundos de grupo: [20,14,6,8]
Ahora los organizo segun su posicion en el ranking:
[32,12,15,26] + [8,6,14,20]

Logica de partidos playoff:
Ej 4tos:
[32,12,15,26,8,6,14,20]

A 32 vs 20
B 12 vs 14
C 15 vs 6
D 26 vs 8
Logica de semis:
Semi 1: Ganador A vs Ganador C
Semi 2: Ganador B vs Ganador D
Logica de final:
Ganador semi 1 vs Ganador semi 2


equipos: [{nombre:'Equipo1', index:0 },{nombre:'Equipo2', index:1 }];
resultado(Equipo1) = 
(resultado[0][0] + resultado[1][0] + resultado[2][0]) - (resultado[0][1] + resultado[1][1] + resultado[2][1])

resultar(Equipo1,)


*/