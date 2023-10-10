function flatten(arr)
{
    if(!arr.length) return [];
    if(typeof(arr[0]) === "object") 
    return [...flatten(arr[0])];
    return [arr[0], ...flatten(arr.slice(1))];
}

console.log(flatten([[1],[2],[3]]))