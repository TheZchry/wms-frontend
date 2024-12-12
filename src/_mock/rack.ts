export interface RackPosition {
    id: string;
    level: string;
    column: string;
    itemCount: number;
    capacity: number;
    items: Array<{ name: string; quantity: number }>; // Array to hold multiple items
}

export const RACK_DATA: Record<string, RackPosition[]> = {
    'Rack 1': [
        // Level 1
        {
            id: 'A1',
            level: 'Level 1',
            column: 'A',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'B1',
            level: 'Level 1',
            column: 'B',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'C1',
            level: 'Level 1',
            column: 'C',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'D1',
            level: 'Level 1',
            column: 'D',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'E1',
            level: 'Level 1',
            column: 'E',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'F1',
            level: 'Level 1',
            column: 'F',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'G1',
            level: 'Level 1',
            column: 'G',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'H1',
            level: 'Level 1',
            column: 'H',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'I1',
            level: 'Level 1',
            column: 'I',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },

        // Level 2
        {
            id: 'A2',
            level: 'Level 2',
            column: 'A',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'B2',
            level: 'Level 2',
            column: 'B',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'C2',
            level: 'Level 2',
            column: 'C',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'D2',
            level: 'Level 2',
            column: 'D',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'E2',
            level: 'Level 2',
            column: 'E',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'F2',
            level: 'Level 2',
            column: 'F',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'G2',
            level: 'Level 2',
            column: 'G',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'H2',
            level: 'Level 2',
            column: 'H',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'I2',
            level: 'Level 2',
            column: 'I',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },

        // Level 3
        {
            id: 'A3',
            level: 'Level 3',
            column: 'A',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'B3',
            level: 'Level 3',
            column: 'B',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'C3',
            level: 'Level 3',
            column: 'C',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'D3',
            level: 'Level 3',
            column: 'D',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'E3',
            level: 'Level 3',
            column: 'E',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'F3',
            level: 'Level 3',
            column: 'F',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'G3',
            level: 'Level 3',
            column: 'G',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'H3',
            level: 'Level 3',
            column: 'H',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'I3',
            level: 'Level 3',
            column: 'I',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },

        // Level 4
        {
            id: 'A4',
            level: 'Level 4',
            column: 'A',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'B4',
            level: 'Level 4',
            column: 'B',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'C4',
            level: 'Level 4',
            column: 'C',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'D4',
            level: 'Level 4',
            column: 'D',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'E4',
            level: 'Level 4',
            column: 'E',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'F4',
            level: 'Level 4',
            column: 'F',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'G4',
            level: 'Level 4',
            column: 'G',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'H4',
            level: 'Level 4',
            column: 'H',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'I4',
            level: 'Level 4',
            column: 'I',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
    ],
    'Rack 2': [
        // Similar structure for Rack 2...
        // Level 1
        {
            id: 'A1',
            level: 'Level 1',
            column: 'A',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'B1',
            level: 'Level 1',
            column: 'B',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'C1',
            level: 'Level 1',
            column: 'C',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'D1',
            level: 'Level 1',
            column: 'D',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'E1',
            level: 'Level 1',
            column: 'E',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'F1',
            level: 'Level 1',
            column: 'F',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'G1',
            level: 'Level 1',
            column: 'G',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'H1',
            level: 'Level 1',
            column: 'H',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'I1',
            level: 'Level 1',
            column: 'I',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },

        // Level 2
        {
            id: 'A2',
            level: 'Level 2',
            column: 'A',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'B2',
            level: 'Level 2',
            column: 'B',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'C2',
            level: 'Level 2',
            column: 'C',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'D2',
            level: 'Level 2',
            column: 'D',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'E2',
            level: 'Level 2',
            column: 'E',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'F2',
            level: 'Level 2',
            column: 'F',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'G2',
            level: 'Level 2',
            column: 'G',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'H2',
            level: 'Level 2',
            column: 'H',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'I2',
            level: 'Level 2',
            column: 'I',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },

        // Level 3
        {
            id: 'A3',
            level: 'Level 3',
            column: 'A',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'B3',
            level: 'Level 3',
            column: 'B',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'C3',
            level: 'Level 3',
            column: 'C',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'D3',
            level: 'Level 3',
            column: 'D',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'E3',
            level: 'Level 3',
            column: 'E',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'F3',
            level: 'Level 3',
            column: 'F',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'G3',
            level: 'Level 3',
            column: 'G',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'H3',
            level: 'Level 3',
            column: 'H',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'I3',
            level: 'Level 3',
            column: 'I',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },

        // Level 4
        {
            id: 'A4',
            level: 'Level 4',
            column: 'A',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'B4',
            level: 'Level 4',
            column: 'B',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'C4',
            level: 'Level 4',
            column: 'C',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'D4',
            level: 'Level 4',
            column: 'D',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'E4',
            level: 'Level 4',
            column: 'E',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'F4',
            level: 'Level 4',
            column: 'F',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'G4',
            level: 'Level 4',
            column: 'G',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'H4',
            level: 'Level 4',
            column: 'H',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
        {
            id: 'I4',
            level: 'Level 4',
            column: 'I',
            itemCount: Math.floor(Math.random() * 100),
            capacity: 100,
            items: [
                { name: 'Bawang', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Lada', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Cabai', quantity: Math.floor(Math.random() * 100) + 1 },
                { name: 'Ketumbar', quantity: Math.floor(Math.random() * 100) + 1 },
            ]
        },
    ]
};

export default RACK_DATA;