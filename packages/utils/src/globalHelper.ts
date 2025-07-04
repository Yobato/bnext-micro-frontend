//String Capitalize Utils
export const capitalizeFirstLetter = (str : string) => {
    if (!str) return str; // Check for empty string
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const capitalizeFirstLetterOfEachWord = (str : string) => {
    return str.split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
    };
//String Capitalize Utils