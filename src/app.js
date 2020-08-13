import './styles.css';
import UI from './UI';
const ui = new UI();
import Services from './Services';
const services = new Services();

document.getElementById('btn-sentence').addEventListener('click', async (event) => {
    event.preventDefault();
    const user = await document.getElementById('user').value;
    const city = await document.getElementById('city').value;
    const image = await document.getElementById('image').files;
    
    const formData = new FormData();
    formData.append("name", user);
    formData.append("city", city);
    formData.append('image',image[0]);

    for (var value of formData.values()) {
        console.log(value); 
     }

    const response = await fetch('http://localhost:3100/addCovid', {
        method: 'POST',
        body: formData
    });

    const data = await response.json();
    console.log(data);
});

