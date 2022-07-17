import { Request, Response } from 'express';

class HealthController {
  public checkHealth = async (req: Request, res: Response) => {
    res.status(200).json({ data: {}, message: 'service is up !' });
  };
}
export default HealthController;
