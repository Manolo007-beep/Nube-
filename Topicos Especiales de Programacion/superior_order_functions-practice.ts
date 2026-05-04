class Team {
    name: string;
    country: string;
    ucl: number;
    cryLevel: number;
    lastTitle: number;

    constructor(name: string, country: string, ucl: number, cryLevel: number, lastTitle: number) {
        this.name = name;
        this.country = country = country;
        this.ucl = ucl;
        this.cryLevel = cryLevel;
        this.lastTitle = lastTitle
    }
}

const teams : Team[] = [
    {
        name: "Real Madrid",
        country: "Spain",
        ucl: 15,
        cryLevel: 6,
        lastTitle: 2024
    },
    {
        name: "FC Barcelona",
        country: "Spain",
        ucl: 5,
        cryLevel: 9999,
        lastTitle: 2015
    },
    {
        name: "Atletico de Madrid",
        country: "Spain",
        ucl: 0,
        cryLevel: 999999,
        lastTitle: 0
    },
    {
        name: "Bayern Munich",
        country: "Germany",
        ucl: 6,
        cryLevel: 3,
        lastTitle: 2020
    },
    {
        name: "Borussia Dortmund",
        country: "Gemany",
        ucl: 1,
        cryLevel: 0,
        lastTitle: 1997
    },
    {
        name: "Liverpool",
        country: "England",
        ucl: 6,
        cryLevel: 7,
        lastTitle: 2019
    },
    {
        name: "Inter Milan",
        country: "Italy",
        ucl: 3,
        cryLevel: 3,
        lastTitle: 2010
    },
    {
        name: "AC Milan",
        country: "Italy",
        ucl: 7,
        cryLevel: 2,
        lastTitle: 2007
    },
];
