"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const users_1 = __importDefault(require("./routes/users"));
const teams_1 = __importDefault(require("./routes/teams"));
const activities_1 = __importDefault(require("./routes/activities"));
const leaderboard_1 = __importDefault(require("./routes/leaderboard"));
const workouts_1 = __importDefault(require("./routes/workouts"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit';
// Get API base URL with Codespaces support
const getApiBaseUrl = () => {
    const codespaceName = process.env.CODESPACE_NAME;
    if (codespaceName) {
        return `https://${codespaceName}-8000.preview.app.github.dev`;
    }
    return `http://localhost:${PORT}`;
};
const API_BASE_URL = getApiBaseUrl();
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// MongoDB Connection
mongoose_1.default
    .connect(MONGODB_URI)
    .then(() => {
    console.log('✓ Connected to MongoDB');
})
    .catch((error) => {
    console.error('✗ MongoDB connection error:', error);
    process.exit(1);
});
// Health Check Route
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'OctoFit Tracker API is running',
        apiUrl: API_BASE_URL
    });
});
// API Routes
app.use('/api/users', users_1.default);
app.use('/api/teams', teams_1.default);
app.use('/api/activities', activities_1.default);
app.use('/api/leaderboard', leaderboard_1.default);
app.use('/api/workouts', workouts_1.default);
// 404 Handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});
// Start Server
app.listen(PORT, () => {
    console.log(`✓ Server is running on http://localhost:${PORT}`);
    console.log(`✓ API Base URL: ${API_BASE_URL}`);
    console.log(`✓ MongoDB connection: ${MONGODB_URI}`);
    console.log('\n✓ Available routes:');
    console.log('  - GET  /api/health');
    console.log('  - GET  /api/users/');
    console.log('  - GET  /api/teams/');
    console.log('  - GET  /api/activities/');
    console.log('  - GET  /api/leaderboard/');
    console.log('  - GET  /api/workouts/');
});
//# sourceMappingURL=server.js.map