"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// GET /api/activities/ - Get all activities
router.get('/', (req, res) => {
    res.json({ message: 'Get all activities', data: [] });
});
// POST /api/activities/ - Log a new activity
router.post('/', (req, res) => {
    const { userId, type, duration, distance, calories } = req.body;
    res.status(201).json({
        message: 'Activity logged',
        data: { id: 1, userId, type, duration, distance, calories, timestamp: new Date() }
    });
});
// GET /api/activities/:id - Get activity by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: `Get activity ${id}`,
        data: { id, userId: 1, type: 'run', duration: 30, distance: 5, calories: 300 }
    });
});
// PUT /api/activities/:id - Update activity
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Activity ${id} updated`, data: { id, ...req.body } });
});
// DELETE /api/activities/:id - Delete activity
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Activity ${id} deleted` });
});
// GET /api/activities/user/:userId - Get activities for a user
router.get('/user/:userId', (req, res) => {
    const { userId } = req.params;
    res.json({ message: `Get activities for user ${userId}`, data: [] });
});
exports.default = router;
//# sourceMappingURL=activities.js.map