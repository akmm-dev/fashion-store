function search() {
       
    let search = document.querySelector('#search-bar').value.toUpperCase();
    
    let searchResult = search.replace(/-|_|=|%/, '');
    
    


    let product = document.querySelectorAll('.product');

    for (let i = 0; i < product.length; i++) { 

        let match = product[i].querySelector('#product-name');
        

        // console.log(match.textContent);

        if (match) {
            
            let match1=match.textContent.replace(/-|_|=|%/, '').toUpperCase();

            let matchValue = match1;
            if (matchValue.indexOf(searchResult) > -1) {
                product[i].style.display = '';
            } else { 
                product[i].style.display = 'none';
            }
        }


    }
}
