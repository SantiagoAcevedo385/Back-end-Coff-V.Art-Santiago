const express = require('express');

const dbConnection = require('../database/config');

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT || 3000;
		this.insumosPath = '/api/insumo';
		this.usersPath = '/api/user';
		this.productsPath = '/api/product';
		this.contractsPath = '/api/contract';
		this.paysPath = '/api/pay';
		this.empaquetadosPath = '/api/empaquetado';
		this.categorysPath = '/api/categoria';
        this.rolesPath = '/api/roles';
		this.shopPath = '/api/shop'
		this.authPath = '/api/auth'

		// middleware
		this.middlewares();

		// Rutas
		this.routes();

		// Conección
		this.conectarDb();
	}

	middlewares() {
		this.app.use((req, res, next) => {
			res.setHeader('Access-Control-Allow-Origin', '*'); // Cambia '*' por el dominio permitido si es necesario
			res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
			res.setHeader(
				'Access-Control-Allow-Headers',
				'Content-Type, Authorization'
			);
			next();
			this.app.use(cookieParser()); 
			this.app.use(express.static(__dirname + "/public"));
			this.app.use(cors());
			this.app.use(bodyParser.json());
		});

		this.app.use(express.json());
		// this.app.use(bodyParser.json());
		// this.app.use(bodyParser.urlencoded({ extended: true }));
	}

	routes() {
		this.app.use(this.usersPath, require('../routes/UserRoute'));
		this.app.use(this.productsPath, require('../routes/ProductRoute'));
		this.app.use(this.contractsPath, require('../routes/contractRoute'));
		this.app.use(this.paysPath, require('../routes/payRoute'));
		this.app.use(this.empaquetadosPath, require('../routes/EmpaquetadoRoute'));
        this.app.use(this.rolesPath, require('../routes/RolesRoute'));
		this.app.use(this.insumosPath, require('../routes/InsumoRoute'));
		this.app.use(this.categorysPath, require('../routes/CategoryRoute'));
		this.app.use(this.shopPath, require('../routes/ShopRoute'));
		this.app.use(this.authPath, require('../routes/auth'))
	}

	async conectarDb() {
		await dbConnection();
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log('Servidor corriendo en puerto', this.port);
		});
	}
}

module.exports = Server;
