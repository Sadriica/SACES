//Rutas
const bcryptjs = require('bcryptjs');
const connection = require('../../config/db');


module.exports = app => {
    app.get('/', (req, res) => {
        if (req.session.loggedin) {

            res.render('../views/loginn.ejs', {
                login: true,
                id: req.session.id
            });
        } else {
            res.render('../views/loginn.ejs', {
                login: false,
                id: 'Inicie sesión'
            });
        }
    })

    app.get('/index', (req, res) => {
        res.render('../views/index.ejs');
    })

    app.get('/loginn', (req, res) => {
        res.render('../views/loginn.ejs');
    })

    app.get('/main', (req, res) => {
        res.render('../views/main.ejs');
    })

    app.get('/engineering', (req, res) => {
        res.render('../views/engineering.ejs');
    })

    app.get('/systems', (req, res) => {
        res.render('../views/systems.ejs');
    })

    app.get('/electronic', (req, res) => {
        res.render('../views/electronic.ejs');
    })

    app.get('/industrial', (req, res) => {
        res.render('../views/industrial.ejs');
    })

    app.get('/administration', (req, res) => {
        res.render('../views/administration.ejs');
    })

    app.get('/register', (req, res) => {
        res.render('../views/register.ejs');
    })


    app.get('/administrador', (req, res) => {
        connection.query('SELECT * FROM usuarios', (err, results) => {
            if (err) {
                console.log(err)
            } else {
                res.send(results)
            }
        })
    })


    /* app.get('/perfil', (req,res) => {
        let correo = global.correo;
        console.log('Este es el correo: ' + correo);
        connection.query ('SELECT * FROM users WHERE correo = ? ', [correo], (error, resultados) => {
            if (error) {
                console.log (error)
            } else {
                res.render ('../views/perfil.ejs', {
                    //login correcto sw2
                    alert : true,
                    alertTitle : 'Conexión exitosa',
                    alertMessage : 'Login Correcto',
                    alertIcon : 'success',
                    showConfirmButton : false,
                    timer : 1500,
                    ruta : '',
                    perfil : resultados[0]
                });
                console.log(resultados);
            }
        });
        res.render('../views/perfil.ejs');
    })*/

    app.get('/logout', (req, res) => {
        req.session.destroy(() => {
            res.redirect('/');
        })
    })

    /* //Solicitudes POST en el registro
     app.post("/register", async (req, res) => {
         const { correo,nombre,celular,comuna,direccion,nacimiento,pass} = req.body;
         console.log(req.body);
         let passwordHaash = await bcryptjs.hash(pass, 8);
         connection.query("INSERT INTO users SET ?", {
             correo: correo,
             nombre:nombre,
             celular: celular,
             comuna: comuna,
             direccion: direccion,
             nacimiento:nacimiento,
             pass:passwordHaash,
         }, async(error, results) => {
             if(error){
                 console.log(error);
             } else {
                 console.log(results)
                 res.render('../views/register.ejs', {
                     alert:true,
                     alertTitle:'Registration',
                     alertMessage:'Successful Registration',
                     alertIcon:'success',
                     showConfirmButton:false,
                     timer:1500,
                     ruta:''

                 })
             }
         })
     }) */


     // Solicitud POST en Formulario de contacto
     app.post('/formulario_sistemas', (req,res) =>{
         const {uno,unos_archivo,dos,dos_archivo,tres,tres_archivo,cuatro,cuatro_archivo,cinco,cinco_archivo,seis,seis_archivo,siete,siete_archivo,ocho,ocho_archivo,nueve,nueve_archivo,diez,diez_archivo,once,once_archivo,doce,doce_archivo} = req.body
         console.log(req.body)
         connection.query('INSERT INTO formulario SET ?' , {
             informacion_general : uno,
             informacion_general_archivo : unos_archivo,
             informacion_tramite : dos,
             informacion_tramite_archivo : dos_archivo,
             nivel_formacion : tres,
             nivel_formacion_archivo : tres_archivo,
             solicitud_registro : cuatro,
             solicitud_registro_archivo : cuatro_archivo,
             informacion_especif : cinco,
             informacion_especif_archivo : cinco_archivo,
             creditos_programa : seis,
             creditos_programa_archivo : seis_archivo,
             escenarios_practica : siete,
             escenarios_practica_archivo : siete_archivo,
             ciclos_propedeuticos : ocho,
             ciclos_propedeuticos_archivo : ocho_archivo,
             cubrimiento_programa : nueve,
             cubrimiento_programa_archivo : nueve_archivo,
             idiomas : diez,
             idiomas_archivo : diez_archivo,
             creacion_programas : once,
             creacion_programas_archivo : once_archivo,
             contacto_programa : doce,
             contacto_programa_archivo: doce_archivo
         }, (error,result) => {
             if(error){
                 console.log(error);
             } else {
                 res.redirect('/')
                 console.log(result);

             }
         })
     } )


    //Solicitud POST de login
    app.post('/auth', async (req, res) => {
        const {id, nombre} = req.body;
        if (id === process.env.NOMBRE_ADMIN && nombre === process.env.PASS_ADMIN) {
            connection.query('SELECT * FROM usuarios', (err, results) => {
                if (err) {
                    console.log(err)
                } else {
                    res.render('../views/engineering.ejs', {
                        con: results
                    })
                }
            })
        }


         let passwordHaash = await bcryptjs.hash(nombre, 8);

        if (id && nombre) {
            connection.query('SELECT * FROM usuarios WHERE id_usuario = ?', [id], async (err, results) => {
                console.log( results);
                if (results.length === 0 || !(await bcryptjs.compare(nombre, results[0].nombre))) {
                    console.log(err)
                    res.render('../views/loginn.ejs', {
                        //login incorrecto sw2
                        alert: true,
                        alertTitle: 'Error',
                        alertMessage: 'id y/o contraseña incorrectas',
                        alertIcon: 'error',
                        showConfirmButton: true,
                        timer: 6000,
                        ruta: 'loginn'
                    });
                } else {
                    req.session.loggedin = true;
                    req.session.id = results[0].id;
                    res.render('../views/engineering.ejs', {
                        //login correcto sw2
                        alert: true,
                        alertTitle: 'Conexión exitosa',
                        alertMessage: 'Login Correcto',
                        alertIcon: 'success',
                        showConfirmButton: false,
                        timer: 1500,
                        ruta: ''
                    });
                }
            })
        }
    })
}

