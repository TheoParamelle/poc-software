import express from 'express'
import { isParameter } from 'typescript';
var server = express();

server.get('/hello', function(request, response) {
    response.send("world");
});