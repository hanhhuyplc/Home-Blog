function router(app) {
    app.get('/', (req, res) => res.render('home'));

    app.get('/home', (req, res) => res.send('Hello My Family'));
}

module.exports = router;
