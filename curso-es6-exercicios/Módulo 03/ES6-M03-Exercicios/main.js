// A
const delay = () => new Promise(resolve => setTimeout(resolve, 1000))

async function umPorSegundo() {
    await delay()
    console.log('1s');
    
    await delay()
    console.log('2s');
    
    await delay()
    console.log('3s');
}
umPorSegundo()

// B
import axios from 'axios';
async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)

        console.log(response.data);
    } catch (err) {
        console.log('Usuário não existe');
    }
}
getUserFromGithub('WesGtoX');
getUserFromGithub('WesGtoX-error');

// C
class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
            
            console.log(response.data);
        } catch (err) {
            console.log('Repositório não existe');
        }
    }
}
Github.getRepositories('WesGtoX/goweek02');
Github.getRepositories('WesGtoX/goweek02-error');

// D
const buscaUsuario = async user => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)

        console.log(response.data);
    } catch (err) {
        console.log('Usuário não existe');
    }
}
buscaUsuario('WesGtoX');
