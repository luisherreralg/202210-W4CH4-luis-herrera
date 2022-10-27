import { createContext } from 'react';
import { IRobot } from '../../features/robots/models/data';

const initialContext: {
    robots: Array<IRobot>;
    handleAdd: (obj: IRobot) => void;
    handlerEraser: (deletedName: string) => void;
    // handlerComplete: (robot: IRobot) => void;
} = {
    robots: [],
    handleAdd: () => undefined,
    handlerEraser: () => undefined,
    // handlerComplete: () => undefined,
};

export const RobotContext = createContext(initialContext);
