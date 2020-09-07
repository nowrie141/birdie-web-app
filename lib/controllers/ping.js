"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pingController = void 0;
const express = require("express");
exports.pingController = express.Router();
exports.pingController.get('/hello', (_, res) => {
    res.status(200).json({
        greetings: 'Thank you for spending some time on this test. All the best 🙌'
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9waW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFrQztBQUVyQixRQUFBLGNBQWMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUE7QUFFOUMsc0JBQWMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3RDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ25CLFNBQVMsRUFBRSxnRUFBZ0U7S0FDNUUsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnXHJcblxyXG5leHBvcnQgY29uc3QgcGluZ0NvbnRyb2xsZXIgPSBleHByZXNzLlJvdXRlcigpXHJcblxyXG5waW5nQ29udHJvbGxlci5nZXQoJy9oZWxsbycsIChfLCByZXMpID0+IHtcclxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICBncmVldGluZ3M6ICdUaGFuayB5b3UgZm9yIHNwZW5kaW5nIHNvbWUgdGltZSBvbiB0aGlzIHRlc3QuIEFsbCB0aGUgYmVzdCDwn5mMJ1xyXG4gIH0pXHJcbn0pXHJcbiJdfQ==