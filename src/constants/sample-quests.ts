import type { Quest } from '@/types/quest';
import {
    armyStats,
    asteroidSizes,
    asteroidTypes,
    asteroidValues,
    questTypes,
    unitToId,
} from './quest-types';

const quests: Quest[] = [
    {
        id: 1,
        name: 'Produce a Capital Ship',
        points: 3,
        active: true,
        condition: {
            type: questTypes.unitProduction,
            unit: unitToId.ColonyShip,
        },
        createdAt: new Date('2024-07-01T07:46:54.829Z'),
    },
    {
        id: 2,
        name: 'Capture a Wormhole',
        points: 15,
        active: false,
        condition: {
            type: questTypes.conquerAsteroid,
            asteroidType: asteroidTypes.wormhole,
        },
        createdAt: new Date('2024-07-01T07:46:54.829Z'),
    },
    {
        id: 3,
        name: 'Reach Max Base Expansion',
        points: 30,
        active: true,
        condition: {
            type: questTypes.maxBaseExpansion,
            asteroid: asteroidValues.home,
        },
        createdAt: new Date('2024-07-01T07:46:54.829Z'),
    },
    {
        id: 4,
        name: 'Conquer a Small Elite Resource Asteroid',
        points: 30,
        active: true,
        condition: {
            type: questTypes.conquerAsteroid,
            asteroidType: asteroidTypes.elite,
            size: asteroidSizes.small,
        },
        createdAt: new Date('2024-07-01T07:46:54.829Z'),
    },
    {
        id: 5,
        name: 'Reach Max Base Level',
        points: 90,
        active: true,
        condition: {
            type: questTypes.maxBaseLevel,
            asteroid: asteroidValues.home,
        },
        createdAt: new Date('2024-07-01T07:46:54.829Z'),
    },
    {
        id: 6,
        name: 'Conquer a Medium Elite Resource Asteroid',
        points: 90,
        active: true,
        condition: {
            type: questTypes.conquerAsteroid,
            asteroidType: asteroidTypes.elite,
            size: asteroidSizes.medium,
        },
        createdAt: new Date('2024-07-01T07:46:54.829Z'),
    },
    {
        id: 7,
        name: 'Conquer a Large Elite Resource Asteroid',
        points: 270,
        active: true,
        condition: {
            type: questTypes.conquerAsteroid,
            asteroidType: asteroidTypes.elite,
            size: asteroidSizes.large,
        },
        createdAt: new Date('2024-07-01T07:46:54.829Z'),
    },
    {
        id: 8,
        name: 'Produce an Army of 100k ATK',
        points: 30,
        active: true,
        condition: {
            type: questTypes.armyProduction,
            stat: armyStats.ATK,
            quantity: 100000,
        },
        createdAt: new Date('2024-07-12T07:46:54.829Z'),
    },
    {
        id: 9,
        name: 'Produce an Army of 100k CTR',
        points: 30,
        active: true,
        condition: {
            type: questTypes.armyProduction,
            stat: armyStats.CTR,
            quantity: 100000,
        },
        createdAt: new Date('2024-07-12T07:46:54.829Z'),
    },
];

export { quests };
