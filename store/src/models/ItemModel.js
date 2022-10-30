class ItemModel {
  constructor(brand, title, description, descriptionFull, price, currency) {
    this.brand = brand;
    this.title = title;
    this.description = description;
    this.descriptionFull = descriptionFull;
    this.price = price;
    // this.currency = currency;
    // this.brand = 'Tiger of Sweden';
    // this.title = 'Leonard coat';
    // this.description = 'Minimalistic coat in cotton-blend';
    // this.descriptionFull = 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.';
    // this.price = 399;
    // this.currency = '£';
  }
}

// export const item = new ItemModel('Tiger of Sweden', 'Leonard coat', 'Minimalistic coat in cotton-blend', 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.', 399, '£')
export default ItemModel;