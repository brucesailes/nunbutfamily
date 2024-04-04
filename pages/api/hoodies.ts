import data from '../../data/hoodies.json'; // Adjust path as necessary

export default function handler(req: any, res: any) {
  res.status(200).json(data);
}