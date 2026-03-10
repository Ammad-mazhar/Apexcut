# ApexCut Implementation TODO

## Phase 1: Setup & Dependencies
- [x] 1. Install Tailwind CSS and Framer Motion
- [x] 2. Configure Tailwind CSS
- [x] 3. Update index.css with Tailwind directives

## Phase 2: Cart Context
- [x] 4. Create CartContext.jsx with:
  - Cart items state
  - addToCart function (with imageURL)
  - removeFromCart function
  - updateQuantity function
  - cartTotal calculation
  - isCartOpen / setIsCartOpen state

## Phase 3: Cart Sidebar Component
- [x] 5. Create CartSidebar.jsx with:
  - Product image, name, price display
  - Quantity +/- buttons (min 1)
  - Dynamic pricing (Quantity × Price)
  - Gold border buttons with hover glow
  - Framer Motion slide-in animation
  - Dark & Gold luxury theme

## Phase 4: Product Detail Updates
- [x] 6. Update ProductDetail.jsx:
  - Fetch product by ID from products array
  - Add to cart button with imageURL
  - Related Products section (3 items same category, exclude current)

## Phase 5: Integration
- [x] 7. Update Navbar.jsx with cart icon and count
- [x] 8. Update App.jsx with CartProvider
- [x] 9. Test the implementation (Build successful ✓)

