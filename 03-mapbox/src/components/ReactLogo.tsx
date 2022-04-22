import reactLogo from '../logo.svg';

export const ReactLogo = () => {
    return (
        <img
            src={reactLogo}
            alt="React logo"
            className="fixed bottom-2 right-1"
            style={{
                width: '80px'
            }}
        />
    )
}
