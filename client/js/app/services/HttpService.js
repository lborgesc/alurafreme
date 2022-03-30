class HttpService{
    get(url){

        return new Promise((resolve, rejact) => {
            const xhr = new XMLHttpRequest();

            xhr.open('GET', url);

            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {
                
                    if (xhr.status == 200) {

                        resolve(JSON.parse(xhr.responseText));        
                    }else{

                        reject(xhr.responseText);
                    }
                }
            };

            xhr.send();
        })
    }
}