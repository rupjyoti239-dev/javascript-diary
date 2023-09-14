const user = {
  name: "Rupjyoti",
  email: "rup.gmail.com",
  age: 23,
  isLoggedIn: false
}


// TO PRINT THE ALL KEYS
console.log(Object.keys(user));

// TO PRINT THE ALL VALUES
console.log(Object.values(user));



// entries
console.log(Object.entries(user));



// hasOwnProperty   to check a key is present or not
console.log(user.hasOwnProperty('name'));
