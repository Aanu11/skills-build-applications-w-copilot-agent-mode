"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// GET /api/leaderboard/ - Get global leaderboard
router.get('/', (req, res) => {
    res.json({
        message: 'Get global leaderboard',
        data: [
            { rank: 1, userId: 1, name: 'User 1', score: 1000, activities: 50 },
            { rank: 2, userId: 2, name: 'User 2', score: 950, activities: 48 },
            { rank: 3, userId: 3, name: 'User 3', score: 900, activities: 45 }
        ]
    });
});
// GET /api/leaderboard/teams - Get team leaderboard
router.get('/teams', (req, res) => {
    res.json({
        message: 'Get team leaderboard',
        data: [
            { rank: 1, teamId: 1, name: 'Team Alpha', score: 5000 },
            { rank: 2, teamId: 2, name: 'Team Beta', score: 4800 }
        ]
    });
});
// GET /api/leaderboard/team/:teamId - Get leaderboard for a specific team
router.get('/team/:teamId', (req, res) => {
    const { teamId } = req.params;
    res.json({
        message: `Get leaderboard for team ${teamId}`,
        data: []
    });
});
// GET /api/leaderboard/user/:userId - Get user rank and stats
router.get('/user/:userId', (req, res) => {
    const { userId } = req.params;
    res.json({
        message: `Get rank for user ${userId}`,
        data: { userId, rank: 10, score: 500, activities: 25 }
    });
});
exports.default = router;
//# sourceMappingURL=leaderboard.js.map