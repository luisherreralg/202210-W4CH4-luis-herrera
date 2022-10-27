import { SyntheticEvent, useContext } from 'react';
import { RobotContext } from '../../infrastructure/context/context';
import { Form } from './components/form/form';

export function RobotList() {
    // const dataArray: Array<IRobot> = data;
    const { robots, handlerEraser } = useContext(RobotContext);

    const handlerDeleteOnClick = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        console.log(element.alt);
        handlerEraser(element.alt);
    };

    return (
        <>
            {robots.map((item) => (
                <li>
                    <div>
                        {' '}
                        <img
                            src={item.img}
                            alt={item.name}
                            onClick={handlerDeleteOnClick}
                        />
                        <p>Name - {item.name}</p>
                        <p>Resistance - {item.resistance}</p>
                        <p>Speed: {item.speed}</p>
                    </div>
                </li>
            ))}
            <Form></Form>
        </>
    );
}
