import express from 'express';
import Wishlist from '../models/Wishlist.js';
import {auth} from '../middleware/auth.js';

const router = express.Router();

// Get wishlist
router.get('/', auth, async (req, res) => {
  try {
    let wishlist = await Wishlist.findOne({ userId: req.user.id });
    if (!wishlist) wishlist = new Wishlist({ userId: req.user.id, productIds: [] });
    res.json(wishlist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add product to wishlist
router.post('/', auth, async (req, res) => {
  try {
    const { productId } = req.body;
    let wishlist = await Wishlist.findOne({ userId: req.user.id });
    if (!wishlist) wishlist = new Wishlist({ userId: req.user.id, productIds: [] });
    if (!wishlist.productIds.includes(productId)) {
      wishlist.productIds.push(productId);
    }
    await wishlist.save();
    res.json(wishlist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Remove product from wishlist
router.delete('/:productId', auth, async (req, res) => {
  try {
    let wishlist = await Wishlist.findOne({ userId: req.user.id });
    if (!wishlist) return res.status(404).json({ message: 'Wishlist not found' });
    wishlist.productIds = wishlist.productIds.filter(
      id => id.toString() !== req.params.productId
    );
    await wishlist.save();
    res.json(wishlist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router; 