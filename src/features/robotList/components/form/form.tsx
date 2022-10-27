import { SyntheticEvent, useContext, useState } from 'react';
import { RobotContext } from '../../../../infrastructure/context/context';
import { IRobot } from '../../../robots/models/data';

export function Form() {
    const { handleAdd } = useContext(RobotContext);

    const initialForm: IRobot = {
        name: '',
        img: '',
        speed: 0,
        resistance: 0,
        creationDate: 0,
    };
    const [form, setform] = useState(initialForm);

    const handleForm = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setform({
            ...form,
            [element.name]: element.value,
        });
    };

    const handleClick = (ev: SyntheticEvent) => {
        ev.preventDefault();
        if (form.img === '' || form.name === '') {
            return;
        }
        handleAdd(form);
    };

    return (
        <>
            <h3>Create your own robot</h3>
            <form>
                <div>
                    <input
                        type="text"
                        placeholder="URL Image"
                        name="img"
                        value={form.img}
                        onInput={handleForm}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={form.name}
                        onInput={handleForm}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        placeholder="Speed"
                        name="speed"
                        value={form.speed}
                        onInput={handleForm}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        placeholder="Resistance"
                        name="resistance"
                        value={form.resistance}
                        onInput={handleForm}
                    />
                </div>
                <div>
                    <label htmlFor="creationDate">Creation date:</label>
                    <input
                        type="date"
                        name="creationDate"
                        id="creationDate"
                        value={form.creationDate}
                        onInput={handleForm}
                    />
                </div>
                <div>
                    <button type="submit" onClick={handleClick}>
                        CREAR
                    </button>
                </div>
            </form>
        </>
    );
}
