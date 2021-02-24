// import router from './router'
// import router from './routes'

const router = new Router(routes);

const home = document.getElementById("home")
const contact = document.getElementById("contact")
const about = document.getElementById("about")

home.addEventListener('click', () => router.loadRoute('projects/cursoSPA/index.html'))
contact.addEventListener('click', () => router.loadRoute('projects/cursoSPA/contact'))
about.addEventListener('click', () => router.loadRoute('about'))