import { Playoff } from './data';
export interface modeloMixto{
    circuito: String;
    temporadas:[{
        nombre: String;
        rankings:[{
            nombre: String;
            torneos:[{
                nombre: String;
                grupos:[{
                    nombre: String,
                    puntos: Number,
                    partidos:[{
                        infoPartido:{nombre:String, fecha:Date},
                        resultado:[{
                            equipos:[{
                                jugadores:[{
                                    nombre:String,
                                    nivelPermitido: Number[],
                                    puntosRanking: Number
                                }],
                                sets: Number[]
                            }]
                        }]
                    }]
                }],
                playoff:[{
                    nombre: String,
                    puntos: Number,
                    partidos:[{
                        infoPartido:{nombre:String, fecha:Date},
                        resultado:[{
                            equipos:[{
                                jugadores:[{
                                    nombre:String,
                                    nivelPermitido: Number[],
                                    puntosRanking: Number
                                }],
                                sets: Number[]
                            }]
                        }]
                    }]
                }]
            }]
        }]
    }]
}