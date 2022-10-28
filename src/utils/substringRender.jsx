export const substringRender = (string, number) => {
    return string.length > number ? string.substring(0, number) + "..." : string;
}