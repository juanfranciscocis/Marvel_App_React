import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const GetLogin = async (email, password,navigate) =>  {
    console.log(email);
    console.log(password);
    const apiOptions = {
        server:'https://wiki-marvel-git-2a04b3464a8d.herokuapp.com' // server local - desarrollo
    };
    if (process.env.NODE_ENV === 'production') {
        apiOptions.server ='https://wiki-marvel-git-2a04b3464a8d.herokuapp.com' // server heroku - producción
    }
    try {
        const path = '/api/login';
        const user = await axios.post(`${apiOptions.server}${path}`, {
                correo: email,
                contrasena: password,
        })
        console.log(user.data.user._id);
        await window.open(`https://wiki-marvel-git-2a04b3464a8d.herokuapp.com/cuenta/${user.data.user._id}`, '_self');
        console.log("enviado");

        
    }catch (error) {
        console.log(error);
    }
}