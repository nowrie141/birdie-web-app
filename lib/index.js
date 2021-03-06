"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./Server");
const express = require("express");
const path = require("path");
const app = express();
const port = parseInt(process.env.PORT, 10) || 8000;
var mysql = require('mysql');
var connection = mysql.createPool({
    host: 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
    port: '3306',
    user: 'test-read',
    password: 'xnxPp6QfZbCYkY8',
    database: 'birdietest'
});
const sql = 'select * from birdietest.events order by str_to_date(timestamp, "%Y-%m-%dT%H:%i:%s") desc;';
app.set('port', port);
app.use(function (_req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header("Access-Control-Allow-Methods", 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});
app.use(express.static(path.join(__dirname, 'build')));
app.get('/data', function (_req, res, _next) {
    connection.query(sql, function (err, result, _fields) {
        if (err)
            throw err;
        console.log("Sending data...");
        res.send({ data: result });
    });
});
const server = new Server_1.Server(app);
server.start(port);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBa0M7QUFDbEMsbUNBQW1DO0FBQ25DLDZCQUE2QjtBQUU3QixNQUFNLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztBQUV0QixNQUFNLElBQUksR0FBVyxRQUFRLENBQVMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFBO0FBRW5FLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUU1QixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO0lBQ2hDLElBQUksRUFBRSxzREFBc0Q7SUFDNUQsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsV0FBVztJQUNqQixRQUFRLEVBQUUsaUJBQWlCO0lBQzNCLFFBQVEsRUFBRSxZQUFZO0NBQ3ZCLENBQUMsQ0FBQTtBQUVGLE1BQU0sR0FBRyxHQUFHLDRGQUE0RixDQUFBO0FBRXhHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO0FBRXJCLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUk7SUFDL0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMvQyxHQUFHLENBQUMsTUFBTSxDQUFDLDhCQUE4QixFQUFFLCtEQUErRCxDQUFDLENBQUM7SUFDNUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsRUFBRSxpQ0FBaUMsQ0FBQyxDQUFDO0lBQzlFLElBQUksRUFBRSxDQUFDO0FBQ1QsQ0FBQyxDQUFDLENBQUE7QUFFRixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBRXRELEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBUyxFQUFFLEdBQVEsRUFBRSxLQUFVO0lBQ3hELFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLFVBQVUsR0FBUSxFQUFFLE1BQVcsRUFBRSxPQUFZO1FBQ2pFLElBQUksR0FBRztZQUFFLE1BQU0sR0FBRyxDQUFBO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUMvQixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUE7SUFDNUIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUdILE1BQU0sTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQy9CLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICcuL1NlcnZlcic7XHJcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcblxyXG5jb25zdCBwb3J0OiBudW1iZXIgPSBwYXJzZUludCg8c3RyaW5nPnByb2Nlc3MuZW52LlBPUlQsIDEwKSB8fCA4MDAwXHJcblxyXG52YXIgbXlzcWwgPSByZXF1aXJlKCdteXNxbCcpXHJcblxyXG52YXIgY29ubmVjdGlvbiA9IG15c3FsLmNyZWF0ZVBvb2woe1xyXG4gIGhvc3Q6ICdiaXJkaWUtdGVzdC5jeW9zaXJlZWFybm8uZXUtd2VzdC0yLnJkcy5hbWF6b25hd3MuY29tJyxcclxuICBwb3J0OiAnMzMwNicsXHJcbiAgdXNlcjogJ3Rlc3QtcmVhZCcsXHJcbiAgcGFzc3dvcmQ6ICd4bnhQcDZRZlpiQ1lrWTgnLFxyXG4gIGRhdGFiYXNlOiAnYmlyZGlldGVzdCdcclxufSlcclxuXHJcbmNvbnN0IHNxbCA9ICdzZWxlY3QgKiBmcm9tIGJpcmRpZXRlc3QuZXZlbnRzIG9yZGVyIGJ5IHN0cl90b19kYXRlKHRpbWVzdGFtcCwgXCIlWS0lbS0lZFQlSDolaTolc1wiKSBkZXNjOydcclxuXHJcbmFwcC5zZXQoJ3BvcnQnLCBwb3J0KVxyXG5cclxuYXBwLnVzZShmdW5jdGlvbiAoX3JlcSwgcmVzLCBuZXh0KSB7XHJcbiAgcmVzLmhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiLCAnKicpO1xyXG4gIHJlcy5oZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzXCIsICdPcmlnaW4sIFgtUmVxdWVzdGVkLVdpdGgsIENvbnRlbnQtVHlwZSwgQWNjZXB0LCBBdXRob3JpemF0aW9uJyk7XHJcbiAgcmVzLmhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHNcIiwgJ1BVVCwgUE9TVCwgR0VULCBERUxFVEUsIE9QVElPTlMnKTtcclxuICBuZXh0KCk7XHJcbn0pXHJcblxyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHBhdGguam9pbihfX2Rpcm5hbWUsICdidWlsZCcpKSlcclxuXHJcbmFwcC5nZXQoJy9kYXRhJywgZnVuY3Rpb24gKF9yZXE6IGFueSwgcmVzOiBhbnksIF9uZXh0OiBhbnkpIHtcclxuICBjb25uZWN0aW9uLnF1ZXJ5KHNxbCwgZnVuY3Rpb24gKGVycjogYW55LCByZXN1bHQ6IGFueSwgX2ZpZWxkczogYW55KSB7XHJcbiAgICBpZiAoZXJyKSB0aHJvdyBlcnJcclxuICAgIGNvbnNvbGUubG9nKFwiU2VuZGluZyBkYXRhLi4uXCIpO1xyXG4gICAgcmVzLnNlbmQoeyBkYXRhOiByZXN1bHQgfSlcclxuICB9KTtcclxufSk7XHJcblxyXG5cclxuY29uc3Qgc2VydmVyID0gbmV3IFNlcnZlcihhcHApO1xyXG5zZXJ2ZXIuc3RhcnQocG9ydClcclxuIl19