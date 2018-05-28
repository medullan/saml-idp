const mongoose = require('mongoose');
const config = require('../../config');
mongoose.connect(config.database.connectionUrl);

const { Schema } = mongoose;

const unique = true;
const required = true;

const UserSchema = new Schema({
    name: String,
    userName: { type: String, unique },
    nameIdFormat: {
        type: String,
        default: 'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress'
    },
    firstName: { type: String },
    lastName: { type: String },
    // displayName: { type: String },
    email: { type: String, unique, required },
    mobilePhone: { type: String, default: '+1-415-555-5141' },
    groups: {
        type: String,
        default: 'Simple IdP Users, West Coast Users, Cloud Users'
    },
    userType: {
        type: String,
        enum: ['Admin', 'Editor', 'Commenter'],
        default: 'Commenter'
    },
    sessionIndex: {
        type: String,
    },
}, {
        timestamps: true,
        toObject: {
            virtuals: true
        },
        toJSON: {
            virtuals: true
        }
    });

UserSchema.plugin(require('mongoose-bcrypt'));

UserSchema
    .virtual('displayName')
    .get(function () {
        return this.firstName + ' ' + this.lastName;
    });

const User = mongoose.model('User', UserSchema);

User.encryptPassword(config.user.password)
    .then(function (encryptedValue) {
        // Do something with encrypted data
        config.user.password = encryptedValue;
        User.update({ email: config.user.email }, config.user, { upsert: true }, function (err, raw) {
            if (err) return console.log(err);
        });
    })
    .catch(function (err) {
        console.log(err);
    });





module.exports = mongoose;