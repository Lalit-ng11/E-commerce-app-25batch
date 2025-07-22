Description:
 A full-featured e-commerce web application where users can register, browse products, manage carts and wishlists, place orders, and where admins can manage the entire product catalog, orders, and users.

🎯 Goals:
1.Allow customers to browse and search products.
2.Provide secure user authentication and authorization.
3.Enable customers to add products to cart and wishlist.
4.Provide seamless checkout and order tracking.
5.Allow admins to manage products, orders, and users.

🧩 Key Features (Stories):
🔐 Authentication & Authorization
1.As a user, I want to register and log in securely.
2.As a user, I want to manage my profile and password.
3.As an admin, I want role-based access to dashboards.

🛍️ Product Catalog
1.As a user, I want to view all products with categories/filters.
2.As a user, I want to search for products by name or category.
3.As an admin, I want to add, update, and delete products.

🛒 Cart & Wishlist
1.As a user, I want to add/remove items to/from my cart.
2.As a user, I want to update item quantity in my cart.
3.As a user, I want to save items for later in a wishlist.

📦 Orders & Checkout
1.As a user, I want to place an order and pay (COD or online).
2.As a user, I want to view order history and order details.
3.As an admin, I want to view and manage all orders.

🧑‍💼 Admin Dashboard
1.As an admin, I want to manage users (ban, promote).
2.As an admin, I want to get insights (total orders, sales).
2.As an admin, I want to filter/search orders and products.

🔧 Technical Tasks
1.Set up MongoDB database and schemas (Users, Products, Orders).
2.Implement REST APIs with Express.js.
3.Use React.js for frontend (with Redux/Context for state).
4.Handle authentication with JWT and secure middleware.
5.Integrate Stripe/PayPal or simulate payment for checkout.
