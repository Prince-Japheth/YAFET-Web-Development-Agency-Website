const Content = () => {
    const nameChange = () => {
        const names = ['Bob', 'Dave', 'Japheth'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    }

    return (
        <main>
            <p>
                Hello {nameChange()}!
            </p>
        </main>
    )
}

export default Content