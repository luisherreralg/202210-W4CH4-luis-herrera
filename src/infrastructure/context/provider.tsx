import { useState } from 'react';
import { data, IRobot } from '../../features/robots/models/data';
import { RobotContext } from './context';

export function RobotContextProvider({ children }: { children: JSX.Element }) {
    const initialRobots = data;
    const [robots, setRobots] = useState(initialRobots);

    const handleAdd = (obj: IRobot) => {
        setRobots([...robots, obj]);
    };

    const handlerEraser = (deletedName: string) => {
        setRobots(robots.filter((item) => item.name !== deletedName));
    };

    const context = {
        robots,
        handleAdd,
        handlerEraser,
    };

    return (
        <RobotContext.Provider value={context}>
            {children}
        </RobotContext.Provider>
    );
}
