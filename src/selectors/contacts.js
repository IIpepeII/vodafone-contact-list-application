/*
* Filter function for testing matches in the last name. I use it in components/Dashboard.js
*/
export default (contacts, text) => contacts.filter((contact) => {
  const regex = new RegExp(`^${text}`, 'i');
  return contact.lastName.match(regex);
});
