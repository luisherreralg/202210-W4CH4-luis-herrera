import { useEffect, useState } from 'react';
import { getStore, setStore } from '../../features/robotList/services/storage';
import { data, IRobot } from '../../features/robotList/models/data';
import { RobotContext } from './context';

export function RobotContextProvider({ children }: { children: JSX.Element }) {
    const initialRobots = getStore().length === 0 ? data : getStore();
    const [robots, setRobots] = useState(initialRobots);

    useEffect(() => {
        setStore(robots);
    }, [robots]);

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
