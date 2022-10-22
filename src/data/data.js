import lona from "../SVGs/specials/lona.svg";
import loga from "../SVGs/specials/loga.svg";
import ansgar from "../SVGs/specials/ansgar.svg";

import river from "../SVGs/recommended/river.svg";
import mountain from "../SVGs/recommended/mountain.svg";
import plage from "../SVGs/recommended/plage.svg";
import tree from "../SVGs/recommended/tree.svg";

import vand from "../SVGs/comments/vand.svg";
import tru from "../SVGs/comments/tru.svg";

export const specialsUpcomingOffers = [
    {
        img: lona,
        title: "Lona X",
        forRelaxing: true,
        days: 7,
        nights: 6,
        date: "22 DEC 2022",
        price: 340
    },
    {
        img: ansgar,
        title: "Ansgar Scheffold",
        forRelaxing: false,
        days: 4,
        nights: 3,
        date: "18 JUN 2022",
        price: 400,
    },
    {
        img: loga,
        title: "Loga Sea",
        forRelaxing: true,
        days: 3,
        nights: 3,
        date: "14 FEB 2022",
        price: 700,
    }
]

export const recommendedDestination = [
    {
        img: river,
        star: 3.4,
        title: "Kina Mountain",
        place: "Cambodia",
    },
    {
        img: mountain,
        star: 4.5,
        title: "Kina Mountain",
        place: "Cambodia",
    },
    {
        img: plage,
        star: 4.2,
        title: "Kina Mountain",
        place: "Cambodia",
    },
    {
        img: tree,
        star: 3.5,
        title: "Kina Mountain",
        place: "Cambodia",
    },
]

export const comments = [
    {
        img: vand,
        author: "-Vand D",
        title: "Happy Treloo",
        desc: "Our trip to Morocco was truly a onece in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel planner, Jaouad, was increadible.",
        star: 3.5,
    },
    {
        img: tru,
        author: "-Tru Vio",
        title: "Happy Treloo",
        desc: "Our trip to Morocco was truly a onece in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel planner, Jaouad, was increadible.",
        star: 4.9,
    },
]

export const travel = [
    {
        num: 300,
        type: "Destinations",
    },
    {
        num: 5000,
        type: "Tourists",
    },
    {
        num: 150,
        type: "Hotels",
    },
]