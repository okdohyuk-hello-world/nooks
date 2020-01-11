export const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = evant => {
        const {target: {
                value
            }} = evant;
        let willUpdate = true;
        if (typeof validator === "function") {
            willUpdate = validator(value);
        }
        if (willUpdate) {
            setValue(value);
        }
    };
    return {value, onChange};
};