import { Router, Request, Response } from 'express';

const router = Router();

// GET /api/activities/ - Get all activities
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Get all activities', data: [] });
});

// POST /api/activities/ - Log a new activity
router.post('/', (req: Request, res: Response) => {
  const { userId, type, duration, distance, calories } = req.body;
  res.status(201).json({ 
    message: 'Activity logged', 
    data: { id: 1, userId, type, duration, distance, calories, timestamp: new Date() } 
  });
});

// GET /api/activities/:id - Get activity by ID
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ 
    message: `Get activity ${id}`, 
    data: { id, userId: 1, type: 'run', duration: 30, distance: 5, calories: 300 } 
  });
});

// PUT /api/activities/:id - Update activity
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Activity ${id} updated`, data: { id, ...req.body } });
});

// DELETE /api/activities/:id - Delete activity
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Activity ${id} deleted` });
});

// GET /api/activities/user/:userId - Get activities for a user
router.get('/user/:userId', (req: Request, res: Response) => {
  const { userId } = req.params;
  res.json({ message: `Get activities for user ${userId}`, data: [] });
});

export default router;
