export function get() {
    return new Promise((resolve, reject) => {
        fetch(`https://mfwkweb-api.clarovideo.net//services/content/list?api_version=v5.82&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=1984vfe76gj12uopfv5tse9h31&quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=9869`)
            .then(response => {
                return response.json();
            }).then((response) => {
                resolve(response);
                //return responseApi;
            })
            .catch((error) => reject(error));
    })
}




