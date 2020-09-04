import express from "express";
import path from "path";

import * as site from "./site.json";

const app = express();
const port = 8080;

app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "pug" );

for(const pagename in site){
    app.get( `${pagename}`, ( req, res ) => {
        res.render('generic', site[pagename]);
    } );
}

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );