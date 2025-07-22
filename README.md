Description:
Build a full-featured e-commerce web application where users can register, browse products, manage carts and wishlists, place orders, and where admins can manage the entire product catalog, orders, and users.

🎯 Goals:
Allow customers to browse and search products.
Provide secure user authentication and authorization.
Enable customers to add products to cart and wishlist.
Provide seamless checkout and order tracking.
Allow admins to manage products, orders, and users.

🧩 Key Features (Stories):
🔐 Authentication & Authorization
As a user, I want to register and log in securely.
As a user, I want to manage my profile and password.
As an admin, I want role-based access to dashboards.

🛍️ Product Catalog
As a user, I want to view all products with categories/filters.
As a user, I want to search for products by name or category.
As an admin, I want to add, update, and delete products.

🛒 Cart & Wishlist
As a user, I want to add/remove items to/from my cart.
As a user, I want to update item quantity in my cart.
As a user, I want to save items for later in a wishlist.

📦 Orders & Checkout
As a user, I want to place an order and pay (COD or online).
As a user, I want to view order history and order details.
As an admin, I want to view and manage all orders.

🧑‍💼 Admin Dashboard
As an admin, I want to manage users (ban, promote).
As an admin, I want to get insights (total orders, sales).
As an admin, I want to filter/search orders and products.

🔧 Technical Tasks
Set up MongoDB database and schemas (Users, Products, Orders).
Implement REST APIs with Express.js.
Use React.js for frontend (with Redux/Context for state).
Handle authentication with JWT and secure middleware.
Integrate Stripe/PayPal or simulate payment for checkout.
