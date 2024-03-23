const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

// Admin Schema
const AdminSchema = new mongoose.Schema({
  admin_id: { type: String, default: uuidv4, required: true, unique: true },
  password: { type: String, required: true }
});

// User Schema
const UserSchema = new mongoose.Schema({
  user_email: { type: String, required: true, unique: true },
  user_id: { type: String, default: uuidv4 },
  user_location: String,
  user_info: mongoose.Schema.Types.Mixed,
  password: { type: String, required: true },
  vehicle_info: [String]
});

// Dealership Schema
const DealershipSchema = new mongoose.Schema({
  dealership_email: { type: String, required: true, unique: true },
  dealership_id: { type: String, default: uuidv4 },
  dealership_name: String,
  dealership_location: String,
  password: { type: String, required: true },
  dealership_info: mongoose.Schema.Types.Mixed,
  cars: [String],
  deals: [String],
  sold_vehicles: [String]
});

// Deal Schema
const DealSchema = new mongoose.Schema({
  deal_id: { type: String, default: uuidv4, unique: true },
  car_id: String,
  deal_info: mongoose.Schema.Types.Mixed
});

// Car Schema
const CarSchema = new mongoose.Schema({
  car_id: { type: String, default: uuidv4, unique: true },
  type: String,
  name: String,
  model: String,
  car_info: mongoose.Schema.Types.Mixed
});

// Sold Vehicle Schema
const SoldVehicleSchema = new mongoose.Schema({
  vehicle_id: { type: String, default: uuidv4, unique: true },
  car_id: String,
  vehicle_info: mongoose.Schema.Types.Mixed
});

// Create models
const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Dealership = mongoose.model('Dealership', DealershipSchema);
const Deal = mongoose.model('Deal', DealSchema);
const Car = mongoose.model('Car', CarSchema);
const SoldVehicle = mongoose.model('SoldVehicle', SoldVehicleSchema);
