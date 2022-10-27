export interface IRobot {
    name: string;
    img: string;
    speed: number;
    resistance: number;
    creationDate: number;
}

export const data = [
    {
        name: 'Arturito',
        img: 'https://c.tenor.com/o61mm19BwboAAAAC/r2d2-arturito.gif',
        speed: 4,
        resistance: 8,
        creationDate: 1977,
    },
    {
        name: 'Roomba de Getafe',
        img: 'https://i.pinimg.com/originals/33/f8/55/33f855ebe3cd614eb552b0c7d8dafb28.jpg',
        speed: 2,
        resistance: 5,
        creationDate: 2002,
    },
    {
        name: 'Baymax',
        img: 'https://lumiere-a.akamaihd.net/v1/images/pp_baymax_herobanner_mobile_22586_56a97a34.jpeg?region=0,0,640,480',
        speed: -2,
        resistance: 10,
        creationDate: 2014,
    },
];
