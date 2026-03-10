import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'

function CartSidebar() {
  const { 
    cartItems, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity,
    cartTotal,
    addToCart 
  } = useCart()

  // Get 3 products for "Frequently Bought Together"
  const frequentlyBoughtTogether = products
    .filter(p => !cartItems.find(item => item.id === p.id))
    .slice(0, 3)

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/70 z-40"
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-[85%] w-full max-w-md bg-[#0d0d0d] border-l border-[#d4af37]/30 z-[1001] flex flex-col mt-[7.5%]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#d4af37]/20 bg-[#111111]">
              <div>
                <h2 className="text-2xl font-serif text-[#d4af37]">Your Cart</h2>
                <p className="text-gray-500 text-sm mt-1">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                </p>
              </div>
              <button
                onClick={closeCart}
                className="p-2 text-gray-400 hover:text-[#d4af37] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                  {/* Empty Cart Icon */}
                  <div className="w-32 h-32 mb-6 relative">
                    <div className="absolute inset-0 border-2 border-[#d4af37]/20 rounded-full"></div>
                    <div className="absolute inset-4 border border-[#d4af37]/10 rounded-full"></div>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="64" 
                      height="64" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#d4af37" 
                      strokeWidth="1"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-serif text-white mb-2">
                    Your Professional Kit is Empty
                  </h3>
                  <p className="text-gray-500 mb-8 max-w-xs">
                    Discover our premium scissors crafted for professional stylists
                  </p>
                  <Link
                    to="/"
                    onClick={closeCart}
                    className="px-8 py-3 bg-gradient-to-r from-[#d4af37] to-[#c9a227] text-black font-semibold rounded hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all"
                  >
                    Shop Now
                  </Link>
                </div>
              ) : (
                <div className="p-6 space-y-4">
                  {cartItems.map(item => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      className="flex gap-4 bg-[#151515] p-4 rounded-lg border border-[#d4af37]/10 hover:border-[#d4af37]/30 transition-colors"
                    >
                      {/* Product Image - Left Side */}
                      <div className="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden bg-[#1a1a1a] border border-[#d4af37]/10">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      {/* Product Info - Right Side */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <h3 className="text-white font-medium text-sm truncate leading-tight">
                            {item.name}
                          </h3>
                          <p className="text-[#d4af37] mt-1 text-sm">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>

                        {/* Premium Metallic Quantity Controls */}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-1 bg-[#0d0d0d] rounded-md p-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              className="w-8 h-8 flex items-center justify-center bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-[#d4af37]/30 text-[#d4af37] rounded hover:from-[#d4af37] hover:to-[#c9a227] hover:text-black hover:shadow-[0_0_10px_rgba(212,175,55,0.4)] transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:from-[#2a2a2a] disabled:hover:to-[#1a1a1a] disabled:hover:text-[#d4af37] disabled:hover:shadow-none"
                            >
                              −
                            </button>
                            <span className="text-white w-10 text-center font-semibold text-sm">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-[#d4af37]/30 text-[#d4af37] rounded hover:from-[#d4af37] hover:to-[#c9a227] hover:text-black hover:shadow-[0_0_10px_rgba(212,175,55,0.4)] transition-all"
                            >
                              +
                            </button>
                          </div>

                          {/* Dynamic Price */}
                          <p className="text-[#d4af37] font-bold text-lg">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-600 hover:text-red-500 transition-colors self-start"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                      </button>
                    </motion.div>
                  ))}

                  {/* Frequently Bought Together Section */}
                  {frequentlyBoughtTogether.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-[#d4af37]/20">
                      <h4 className="text-[#d4af37] font-semibold mb-4 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        Frequently Bought Together
                      </h4>
                      <div className="space-y-3">
                        {frequentlyBoughtTogether.map(product => (
                          <div 
                            key={product.id}
                            className="flex items-center gap-3 p-2 rounded hover:bg-[#151515] transition-colors cursor-pointer group"
                            onClick={() => addToCart(product, 1)}
                          >
                            <div className="w-12 h-12 rounded overflow-hidden bg-[#1a1a1a] flex-shrink-0">
                              <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-white text-xs truncate">{product.name}</p>
                              <p className="text-[#d4af37] text-sm">${product.price.toFixed(2)}</p>
                            </div>
                            <button className="text-xs text-[#d4af37] hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                              + Add
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-[#d4af37]/20 bg-[#0f0f0f]">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="text-white font-semibold">
                      ${cartTotal().toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Shipping</span>
                    <span className="text-[#22c55e]">Free</span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-[#d4af37]/10">
                    <span className="text-white font-semibold">Total</span>
                    <span className="text-2xl font-bold text-[#d4af37]">
                      ${cartTotal().toFixed(2)}
                    </span>
                  </div>
                </div>
                <button className="w-full py-4 bg-gradient-to-r from-[#d4af37] to-[#c9a227] text-black font-bold rounded hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all transform hover:scale-[1.02]">
                  Proceed to Checkout
                </button>
                <div className="flex items-center justify-center gap-4 mt-4 text-gray-500 text-xs">
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="1" y="3" width="15" height="13"></rect>
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                      <circle cx="5.5" cy="18.5" r="2.5"></circle>
                      <circle cx="18.5" cy="18.5" r="2.5"></circle>
                    </svg>
                    Free Shipping
                  </span>
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    Secure Checkout
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CartSidebar

