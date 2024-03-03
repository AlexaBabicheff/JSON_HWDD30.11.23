const rootContainer = document.querySelector('#root');

const fetchUsers = (callback) =>
    fetch('https://dummyjson.com/users')
        .then((response) => response.json())
        .then((data) => 
        {console.log("data JSON", data)
        callback(data)})
        .catch((error) => console.error('Error:', error));

const showUsers = (users) => {
    const userContainer = document.createElement('div');
    userContainer.classList.add('user-container');
    rootContainer.append(userContainer);

    if (typeof users === 'object') {
        const usersArray = Object.values(users.users);
        console.log(usersArray);
        for(let i = 0; i < 15; i++){
            
        let user = usersArray[i];
        console.log(user);
                     
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');

       const { firstName, lastName, age, email, phone, image } = user;
       console.log(user.firstName);
        const firstNameElem = document.createElement('h1');
        firstNameElem.innerText = user.firstName;

        const lastNameElem = document.createElement('h1');
        lastNameElem.innerText = lastName;

        const ageElem = document.createElement('p');
        ageElem.innerText = 'Age: ' + age;

        const emailElem = document.createElement('p');
        emailElem.innerText = 'Email: ' + email;

        const phoneElem = document.createElement('p');
        phoneElem.innerText = 'Phone: ' + phone;

        const imageElem = document.createElement('img');
        imageElem.src = image;

        userCard.append(firstNameElem, lastNameElem, ageElem, emailElem, phoneElem, imageElem);
        userContainer.append(userCard);
    }}};

fetchUsers((data) => showUsers(data));