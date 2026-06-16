"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// GET /api/teams/ - Get all teams
router.get('/', (req, res) => {
    res.json({ message: 'Get all teams', data: [] });
});
// POST /api/teams/ - Create a new team
router.post('/', (req, res) => {
    const { name, description } = req.body;
    res.status(201).json({ message: 'Team created', data: { id: 1, name, description } });
});
// GET /api/teams/:id - Get team by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Get team ${id}`, data: { id, name: 'Team Name', description: 'Team Description' } });
});
// PUT /api/teams/:id - Update team
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Team ${id} updated`, data: { id, ...req.body } });
});
// DELETE /api/teams/:id - Delete team
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Team ${id} deleted` });
});
// POST /api/teams/:id/members - Add member to team
router.post('/:id/members', (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;
    res.json({ message: `User ${userId} added to team ${id}` });
});
exports.default = router;
//# sourceMappingURL=teams.js.map