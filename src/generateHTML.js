// const { default: generate } = require("@babel/generator");

// Generates the Manager Card
const createManager = function (manager) {
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${manager.name}</h3>
            <h4>Manager</h4><i class="material-icons">content_paste</i>
        </div>

        <div class="card-body">
            <p class="id">ID: 1</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.officeNumber}</p>
        </div>

    </div>
</div>`
};
// -------------------------------------------------------------------------------------------------


// Generates the Engineer Card
const createEngineer = function(engineer) {
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${engineer.name}</h3>
            <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
        </div>

        <div class="card-body">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
            </p>
            <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a>
            </p>
        </div>

    </div>
</div> `;
};
// -------------------------------------------------------------------------------------------------


// Generate Intern Card
const createIntern = function(intern) {
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${intern.name}</h3>
            <h4>Intern</h4><i class="material-icons">assignment_ind</i>
        </div>

        <div class="card-body">
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="school">School: ${intern.school}</p>
        </div>
    </div>
</div>
    `
};

createHTML = (data) => {

    cardArray = [];

    for(let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();


        // Push's Manager Card
        if (role === 'Manager') {
            const managerCard = createManager(employee);
            cardArray.push(managerCard);
        }

        // Push's Engineer Card
        if (role === 'Engineer') {
            const engineerCard = createEngineer(employee);
            cardArray.push(engineerCard);
        }

        // Push's Intern Card
        if (role === 'Intern') {
            const internCard = createIntern(employee);
            cardArray.push(internCard);
        }
    }

    // Combines Strings
    const employeeCards = cardArray.join('');
    const createTeam = createTeamPage(employeeCards);
    return createTeam;
}


// Generates HTML Page
const createTeamPage = function (employeeCards) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" 
        rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <header>
        <nav class="navbar bg-dark" id="navbar">
            <span class="navbar-brand mb-0 h1 w-100 text-center text-white" id="navbar-text">Team Profile</span>
        </nav>
    </header>

    <main>
        <div class="container">
            <div class="row justify-content-center" id="team-cards">
<!--------------------------------Team Cards------------------------------------------------>
            ${employeeCards}
            </div>
        </div>
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.1.slim.js" integrity="sha256-tXm+sa1uzsbFnbXt8GJqsgi2Tw+m4BLGDof6eUPjbtk=" crossorigin="anonymous"></script>

</body>

</html>
    `
};

// Export
module.exports = createHTML