export const convertObjectArray = (data, mapConfig) => {
    const converted = [];
    data.forEach((data) => {
        let object = {}
        for (let i = 0; i < mapConfig.length; i++){
            const config = mapConfig[i];
            object[config.label] = deepFind(data, config.key)
        }
        converted.push(object);
    })

    return converted;
}

function deepFind(obj, path) {
    var paths = path.split('.')
        , current = obj
        , i;

    for (i = 0; i < paths.length; ++i) {
        if (current[paths[i]] == undefined) {
            return undefined;
        } else {
            current = current[paths[i]];
        }
    }
    return current;
}
