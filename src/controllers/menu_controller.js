const Menu = require('../modelo/menu'); // Asegúrate de importar el modelo Menu

// Crear un nuevo ítem en el menú
exports.create = async (req, res) => {
  const { nombre, descripcion, precio, imagen_url } = req.body;
  try {
    const menu = await Menu.create({
      nombre,
      descripcion,
      precio,
      imagen_url,
    });
    res.status(201).json(menu);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los ítems del menú
exports.findAll = async (req, res) => {
  try {
    const menus = await Menu.findAll();
    res.status(200).json(menus);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener un ítem del menú por ID
exports.findOne = async (req, res) => {
  try {
    const menu = await Menu.findByPk(req.params.id);
    if (menu) {
      res.status(200).json(menu);
    } else {
      res.status(404).json({ error: 'Ítem del menú no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar un ítem del menú por ID
exports.update = async (req, res) => {
  const { nombre, descripcion, precio, imagen_url } = req.body;
  try {
    const [updated] = await Menu.update(
      {
        nombre,
        descripcion,
        precio,
        imagen_url,
      },
      {
        where: { id: req.params.id },
      }
    );
    if (updated) {
      const updatedMenu = await Menu.findByPk(req.params.id);
      res.status(200).json(updatedMenu);
    } else {
      res.status(404).json({ error: 'Ítem del menú no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un ítem del menú por ID
exports.delete = async (req, res) => {
  try {
    const deleted = await Menu.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Ítem del menú no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};