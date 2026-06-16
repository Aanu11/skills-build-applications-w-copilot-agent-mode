import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import usersRouter from './routes/users';
import teamsRouter from './routes/teams';
import activitiesRouter from './routes/activities';
import leaderboardRouter from './routes/leaderboard';
import workoutsRouter from './routes/workouts';

const app: Express = express();
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit';

// Get API base URL with Codespaces support
const getApiBaseUrl = (): string => {
  const codespaceName = process.env.CODESPACE_NAME;
  if (codespaceName) {
    return `https://${codespaceName}-8000.preview.app.github.dev`;
  }
  return `http://localhost:${PORT}`;
};

const API_BASE_URL = getApiBaseUrl();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('✓ Connected to MongoDB');
  })
  .catch((error) => {
    console.error('✗ MongoDB connection error:', error);
    process.exit(1);
  });

// Health Check Route
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ 
    status: 'OK', 
    message: 'OctoFit Tracker API is running',
    apiUrl: API_BASE_URL
  });
});

// API Routes
app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);

// 404 Handler
app.use((req: Request, res: Response) => {
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
