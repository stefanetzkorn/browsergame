import {Request, Response} from "express";


export const getPlayerTower = async (req: Request, res: Response) => {
    const mockdata: Tower[] = [
        {health: 100, towerType: TowerTypes.Standard},
        {health: 158, towerType: TowerTypes.Freeze},
        {health: 56, towerType: TowerTypes.Sniper},
    ];
    res.json(mockdata);
}