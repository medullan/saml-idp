
/**
 * User Profile
 */
var profile = {
  userName: 'saml.jackson@example.com',
  password: 'p@ssw0rd',
  nameIdFormat: 'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress',
  firstName: 'Saml',
  lastName: 'Jackson',
  displayName: 'saml jackson',
  email: 'saml.jackson@example.com',
  mobilePhone: '+1-415-555-5141',
  groups: 'Simple IdP Users, West Coast Users, Cloud Users',
  userType: 'Admin'
}

/**
 * SAML Attribute Metadata
 */
var metadata = [
  {
    id: "_id",
    optional: false,
    displayName: 'id',
    description: 'The id of the user',
    multiValue: false
  }, 
  {
    id: "firstName",
    optional: false,
    displayName: 'First Name',
    description: 'The given name of the user',
    multiValue: false
  }, {
    id: "lastName",
    optional: false,
    displayName: 'Last Name',
    description: 'The surname of the user',
    multiValue: false
  }, {
    id: "displayName",
    optional: true,
    displayName: 'Display Name',
    description: 'The display name of the user',
    multiValue: false
  }, {
    id: "email",
    optional: false,
    displayName: 'E-Mail Address',
    description: 'The e-mail address of the user',
    multiValue: false
  }, {
    id: "mobilePhone",
    optional: true,
    displayName: 'Mobile Phone',
    description: 'The mobile phone of the user',
    multiValue: false
  }, {
    id: "groups",
    optional: true,
    displayName: 'Groups',
    description: 'Group memberships of the user',
    multiValue: true
  }, {
    id: "userType",
    optional: true,
    displayName: 'User Type',
    description: 'The type of user',
    options: ['Admin', 'Editor', 'Commenter']
  }
];

module.exports = {
  user: profile,
  metadata: metadata,
  database: {
    connectionUrl: process.env.MONGO_URL || 'mongodb://localhost/saml-idp'
  }
}
