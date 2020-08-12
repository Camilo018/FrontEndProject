import './styles.css';
import UI from './UI';
const ui = new UI();
import Services from './Services';
const services = new Services();

document.getElementById('btn-sentence').addEventListener('click', async (event) => {
    event.preventDefault();
    const user = await document.getElementById('user').value;
    const formData = new FormData();
    formData.append('user', user);
    console.log(formData.values);

    //    const sentence = await services.addUser(formData);
    const response = await fetch('http://localhost:9100/test', {
        method: 'POST',
        body: formData
    });

    const data = await response.json();
    console.log(data);
});

