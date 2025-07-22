import express from 'express';
import Order from '../models/Order.js';
import {auth} from '../middleware/auth.js';

const router = express.Router();

// Place order
router.post('/', auth, async (req, res) => {
  try {
    const { products, totalAmount, shippingAddress } = req.body;
    const order = new Order({
      userId: req.user.id,
      products,
      totalAmount,
      shippingAddress
    });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update order status (admin only)
router.put('/:id/status', auth, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Access denied' });
  try {
    const { orderStatus, paymentStatus } = req.body;
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { orderStatus, paymentStatus },
      { new: true }
    );
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get user's orders
router.get('/my', auth, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all orders (admin only)
router.get('/', auth, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Access denied' });
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router; 