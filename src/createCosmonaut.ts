import { Country } from "./types";
import { Cosmonaut } from "./types";
import { Mission } from "./types";

function createCosmonaut (name:string, country:Country, mission:Mission) {
    const cosmonaut:Cosmonaut = {name, mission, country};
    cosmonaut.country = country;
    cosmonaut.mission = mission;
    cosmonaut.name = name;
    return cosmonaut;
}

createCosmonaut("Hero", Country.FR, Mission.ISS);