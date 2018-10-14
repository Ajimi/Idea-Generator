if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: 'mongodb://ajimi:ajimi123@ds131983.mlab.com:31983/vidjot-prod'
    }
} else {
    module.exports = {
        mongoURI : 'mongodb://localhost/vidjet-dev'
    };
}