window.filter= filter;

function filter(data, condition, key) {
    return data.filter(newarray => (newarray[key].includes(condition))
}