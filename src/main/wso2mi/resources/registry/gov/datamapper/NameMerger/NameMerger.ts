import * as dmUtils from "./dm-utils";

/*
* title : "root",
* inputType : "JSON",
*/
interface Root {
    "First name": string
    "Last name": string
    Email: string
    Id: number
}

/*
* title : "root",
* outputType : "JSON",
*/
interface OutputRoot {
    Name: string
    Email: string
    Id: number
}



/**
 * functionName : map_S_root_S_root
 * inputVariable : inputroot
*/
export function mapFunction(input: Root): OutputRoot {
    return {
        Email: input.Email,
        Id: input.Id,
        Name: input["First name"] + " " + input["Last name"]
    };
}

