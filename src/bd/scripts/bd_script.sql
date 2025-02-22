CREATE TABLE tipo_documento (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    sigla VARCHAR(10) NOT NULL
);

INSERT INTO tipo_documento (nombre, sigla) VALUES
    ('Cedula', 'CC'),
    ('Cedula extranjeria', 'CE'),
    ('NIT', 'NIT');

CREATE TABLE pais (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

INSERT INTO pais (nombre) VALUES ('Colombia');

CREATE TABLE ciudad (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    id_pais INT REFERENCES pais(id)
);

INSERT INTO ciudad (nombre, id_pais) VALUES
    ('Bogotá', 1),
    ('Medellín', 1),
    ('Cali', 1),
    ('Barranquilla', 1),
    ('Cartagena', 1);

CREATE TABLE tipo_usuario (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    descripcion TEXT NOT NULL
);

INSERT INTO tipo_usuario (nombre, descripcion) VALUES
    ('cliente', 'comensal del restaurante'),
    ('restaurante', 'el que prepara la comida'),
    ('repartidor', 'El que lleva la comida al cliente');

CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    nombre1 VARCHAR(50) NOT NULL,
    nombre2 VARCHAR(50),
    apellido1 VARCHAR(50) NOT NULL,
    apellido2 VARCHAR(50),
    username VARCHAR(50) UNIQUE NOT NULL,
    numero_identificacion VARCHAR(20) NOT NULL,
    id_tipo_identificacion INT REFERENCES tipo_documento(id),
    id_tipo_usuario INT REFERENCES tipo_usuario(id),
    correo_electronico VARCHAR(100) UNIQUE NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    password VARCHAR(255) NOT NULL,
    estado_usuario VARCHAR(20) NOT NULL CHECK (estado_usuario IN ('activo', 'inactivo'))
);

INSERT INTO usuario (nombre1, nombre2, apellido1, apellido2, username, numero_identificacion, id_tipo_identificacion, id_tipo_usuario, correo_electronico, password, estado_usuario) VALUES
    ('Juan', 'Carlos', 'Pérez', 'Gómez', 'juanperez', '12345678', 1, 1, 'juanperez@email.com', 'hashedpassword1', 'activo'),
    ('María', 'Isabel', 'Rodríguez', 'López', 'mariarodriguez', '87654321', 1, 1, 'mariarodriguez@email.com', 'hashedpassword2', 'activo'),
    ('Restaurante', NULL, 'Sabor', 'Criollo', 'saborescolombia', '900000001', 3, 2, 'contacto@saborescolombia.com', 'hashedpassword3', 'activo'),
    ('Restaurante', NULL, 'Delicias', 'Express', 'deliciasexpress', '900000002', 3, 2, 'contacto@deliciasexpress.com', 'hashedpassword4', 'activo'),
    ('Carlos', 'Andrés', 'Gutiérrez', 'Mejía', 'carlosrepartidor', '11122333', 1, 3, 'carlosgutierrez@email.com', 'hashedpassword5', 'activo'),
    ('Ana', 'Lucía', 'Martínez', 'Ruiz', 'anamartinez', '22233444', 1, 3, 'anamartinez@email.com', 'hashedpassword6', 'activo'),
    ('Luis', 'Fernando', 'Hernández', 'Castro', 'luishernandez', '33344555', 1, 3, 'luishernandez@email.com', 'hashedpassword7', 'activo'),
    ('Pedro', 'José', 'Ramírez', 'Pérez', 'pedroramirez', '44455666', 1, 3, 'pedroramirez@email.com', 'hashedpassword8', 'activo'),
    ('Sofía', 'Mariana', 'López', 'González', 'sofialopez', '55566777', 1, 3, 'sofialopez@email.com', 'hashedpassword9', 'activo');

CREATE TABLE direccion_usuario (
    id SERIAL PRIMARY KEY,
    nomenclatura VARCHAR(255) NOT NULL,
    id_ciudad INT REFERENCES ciudad(id),
    id_usuario INT REFERENCES usuario(id)
);

INSERT INTO direccion_usuario (nomenclatura, id_ciudad, id_usuario) VALUES
    ('Calle 123 #45-67, Bogotá', 1, 1),
    ('Carrera 50 #10-20, Medellín', 2, 2),
    ('Avenida Siempre Viva #742, Cali', 3, 3),
    ('Calle 80 #20-15, Barranquilla', 4, 4),
    ('Carrera 30 #5-90, Cartagena', 5, 5),
    ('Calle 60 #15-30, Bogotá', 1, 6),
    ('Carrera 25 #40-22, Medellín', 2, 7),
    ('Avenida El Dorado #100-50, Cali', 3, 8),
    ('Calle 95 #12-14, Barranquilla', 4, 9);
