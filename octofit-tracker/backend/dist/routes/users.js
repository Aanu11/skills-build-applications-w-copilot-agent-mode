"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// GET /api/users/ - Get all users
router.get('/', (req, res) => {
    res.json({ message: 'Get all users', data: [] });
});
// POST /api/users/ - Create a new user
router.post('/', (req, res) => {
    const { name, email } = req.body;
    res.status(201).json({ message: 'User created', data: { id: 1, name, email } });
});
// GET /api/users/:id - Get user by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Get user ${id}`, data: { id, name: 'User Name', email: 'user@example.com' } });
});
// PUT /api/users/:id - Update user
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `User ${id} updated`, data: { id, ...req.body } });
});
// DELETE /api/users/:id - Delete user
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `User ${id} deleted` });
});
exports.default = router;
//# sourceMappingURL=users.js.map