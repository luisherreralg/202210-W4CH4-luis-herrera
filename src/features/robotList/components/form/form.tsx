export function Form() {
    return (
        <>
            <h2>Create your own robot</h2>
            <form>
                <div>
                    <input type="text" placeholder="URL Image" />
                </div>
                <div>
                    <input type="text" placeholder="Name" />
                </div>
                <div>
                    <input type="number" placeholder="Speed" />
                </div>
                <div>
                    <input type="number" placeholder="Resistance" />
                </div>
                <div>
                    <label htmlFor="creationDate">Creation date:</label>
                    <input type="date" name="creationDate" id="creationDate" />
                </div>
                <div>
                    <button type="submit">CREAR</button>
                </div>
            </form>
        </>
    );
}
