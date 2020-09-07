"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
class Server {
    constructor(app) {
        this.app = app;
        this.app.get('/data', (_req, res) => {
            res.send('API REACHED');
        });
    }
    start(port) {
        this.app.listen(port, () => console.log(`Server listening on port ${port}`));
    }
}
exports.Server = Server;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxNQUFhLE1BQU07SUFFZixZQUFZLEdBQVk7UUFDcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFhLEVBQUUsR0FBYSxFQUFRLEVBQUU7WUFDekQsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDTSxLQUFLLENBQUMsSUFBWTtRQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ2hGLENBQUM7Q0FDSjtBQVhELHdCQVdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXhwcmVzcywgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlcnZlciB7XHJcbiAgICBwcml2YXRlIGFwcDogRXhwcmVzcztcclxuICAgIGNvbnN0cnVjdG9yKGFwcDogRXhwcmVzcykge1xyXG4gICAgICAgIHRoaXMuYXBwID0gYXBwO1xyXG4gICAgICAgIHRoaXMuYXBwLmdldCgnL2RhdGEnLCAoX3JlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICByZXMuc2VuZCgnQVBJIFJFQUNIRUQnKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXJ0KHBvcnQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiBjb25zb2xlLmxvZyhgU2VydmVyIGxpc3RlbmluZyBvbiBwb3J0ICR7cG9ydH1gKSlcclxuICAgIH1cclxufVxyXG4iXX0=