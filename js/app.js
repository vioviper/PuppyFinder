// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'App Framework7',
	panel: {
		swipe: true,
	},
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
		{
		path: '/preguntas/',
    	url: 'preguntas.html',
    	name: 'preguntas',
  		},
		{
		path: '/sobrenosotros/',
    	url: 'sobrenosotros.html',
    	name: 'sobrenosotros',
  		},
		{
		path: '/informacion/',
    	url: 'informacion.html',
    	name: 'informacion',
  		},
		{
		path: '/detalles/',
    	url: 'detalles.html',
    	name: 'detalles',
  		},
		{
		path: '/detalles/',
    	url: 'guardados.html',
    	name: 'guardados',
  		},
		{
		path: '/preguntas/',
    	url: 'preguntas.html',
    	name: 'preguntas',
  		},{
		path: '/explora/',
    	url: 'explora.html',
    	name: 'explora',
  		},
	],
	dialog: {
		title: 'Puppy Finder',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#modal-login');
		
		app.dialog.alert('¡ Bienvenido a la APP !');
    }
	
});



$$(document).on('click', '#btnAddToCart', function (e) {
	e.preventDefault();

	
	app.dialog.confirm('¿Seguro desea agregar este producto?', function () {
		
		//app.dialog.alert('Great!');
		
		var notification = app.notification.create({
		  icon: '<i class="material-icons">check</i>',
		  title: 'Order',
		  titleRightText: '',
		  subtitle: '',
		  text: "Su producto ha sido agregado al carrito correctamente",
		  closeTimeout: 3000,
		});
		notification.open();
		
		//redirect
		app.views.main.router.navigate('/categories/');
		
	});
	
	

	
});

var app = new Framework7({
	root: '#app',
	name: 'Puppy Finder',
	id: 'com.puppy.finder',
	routes: [],
  });
  
  // Inicializar todos los swipers con soporte nested
  app.swiper.create('.swiper', {
	nested: true,
  });



