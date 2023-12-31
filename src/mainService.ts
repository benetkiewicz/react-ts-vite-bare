export function getName() : string {
    const name = import.meta.env.VITE_MESSAGE;
    return name;
}