export default function httpHelpers(url, options){
    return fetch(url, options).then(data => data.json()).then(data => data)
}