import { data, IRobot } from '../robots/models/data';
import { Form } from './components/form/form';

export function RobotList() {
    const dataArray: Array<IRobot> = data;

    return (
        <>
            {dataArray.map((item) => (
                <li>
                    <div>
                        {' '}
                        <img src={item.img} alt="" />
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
