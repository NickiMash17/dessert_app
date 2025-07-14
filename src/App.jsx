import React, { useState, useEffect, createContext, useContext } from 'react';
import { Search, Heart, Star, Clock, Users, ChefHat, Sparkles, Moon, Sun, X } from 'lucide-react';

// Theme Context
const ThemeContext = createContext();

const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    // Check system preference
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme') || (systemPrefersDark ? 'dark' : 'light');
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Sample dessert data
const dessertData = [
  {
    id: 1,
    name: "Chocolate Lava Cake",
    author: "Chef Marie",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=300&fit=crop",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b9e63041?w=50&h=50&fit=crop&crop=face",
    cookTime: 25,
    servings: 4,
    difficulty: "Medium",
    rating: 4.8,
    category: "Chocolate",
    tags: ["Rich", "Warm", "Decadent"],
    ingredients: [
      "200g dark chocolate",
      "100g butter",
      "2 eggs",
      "50g sugar",
      "30g flour"
    ],
    instructions: [
      "Melt chocolate and butter together",
      "Whisk eggs and sugar until pale",
      "Combine mixtures and fold in flour",
      "Bake at 200°C for 12-15 minutes"
    ]
  },
  {
    id: 2,
    name: "Strawberry Cheesecake",
    author: "Baker Sarah",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
    cookTime: 180,
    servings: 8,
    difficulty: "Hard",
    rating: 4.9,
    category: "Cheesecake",
    tags: ["Creamy", "Fresh", "Classic"],
    ingredients: [
      "500g cream cheese",
      "200g digestive biscuits",
      "100g butter",
      "300g strawberries",
      "150g sugar"
    ],
    instructions: [
      "Crush biscuits and mix with melted butter",
      "Press into pan base and chill",
      "Beat cream cheese with sugar until smooth",
      "Add strawberries and pour over base",
      "Chill for 4 hours"
    ]
  },
  {
    id: 3,
    name: "Tiramisu",
    author: "Chef Antonio",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
    cookTime: 30,
    servings: 6,
    difficulty: "Medium",
    rating: 4.7,
    category: "Italian",
    tags: ["Coffee", "Elegant", "Traditional"],
    ingredients: [
      "6 egg yolks",
      "500g mascarpone",
      "400ml strong coffee",
      "24 ladyfinger cookies",
      "Cocoa powder"
    ],
    instructions: [
      "Whisk egg yolks with sugar until thick",
      "Fold in mascarpone gently",
      "Dip ladyfingers in coffee quickly",
      "Layer cookies and cream mixture",
      "Dust with cocoa and chill overnight"
    ]
  },
  {
    id: 4,
    name: "Crème Brûlée",
    author: "Chef François",
    image: "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=400&h=300&fit=crop",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
    cookTime: 45,
    servings: 4,
    difficulty: "Hard",
    rating: 4.6,
    category: "French",
    tags: ["Creamy", "Torched", "Luxurious"],
    ingredients: [
      "500ml heavy cream",
      "6 egg yolks",
      "100g sugar",
      "1 vanilla pod",
      "Extra sugar for caramelizing"
    ],
    instructions: [
      "Heat cream with vanilla",
      "Whisk egg yolks with sugar",
      "Combine mixtures and strain",
      "Bake in water bath at 160°C",
      "Torch sugar on top before serving"
    ]
  },
  {
    id: 5,
    name: "Macarons",
    author: "Patissier Claire",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&crop=face",
    cookTime: 90,
    servings: 20,
    difficulty: "Hard",
    rating: 4.5,
    category: "French",
    tags: ["Delicate", "Colorful", "Precise"],
    ingredients: [
      "125g almond flour",
      "200g powdered sugar",
      "75g egg whites",
      "Food coloring",
      "Buttercream filling"
    ],
    instructions: [
      "Sift almond flour and powdered sugar",
      "Whip egg whites to soft peaks",
      "Fold dry ingredients into meringue",
      "Pipe onto baking sheets",
      "Rest 30 minutes then bake"
    ]
  },
  {
    id: 6,
    name: "Chocolate Soufflé",
    author: "Chef Isabella",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=50&h=50&fit=crop&crop=face",
    cookTime: 40,
    servings: 4,
    difficulty: "Hard",
    rating: 4.4,
    category: "Chocolate",
    tags: ["Airy", "Impressive", "Warm"],
    ingredients: [
      "200g dark chocolate",
      "6 eggs (separated)",
      "50g butter",
      "30g flour",
      "250ml milk"
    ],
    instructions: [
      "Make chocolate pastry cream base",
      "Whip egg whites to stiff peaks",
      "Fold whites into chocolate base",
      "Fill ramekins and bake immediately",
      "Serve straight from oven"
    ]
  }
];

const reviews = [
  {
    id: 1,
    name: "Emma Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b9e63041?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    text: "The chocolate lava cake recipe is absolutely divine! My family loved it and it's become our go-to dessert."
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    text: "Amazing collection of recipes! The instructions are clear and the results are restaurant-quality."
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    rating: 4,
    text: "Love the variety of desserts here. The tiramisu turned out perfect on my first try!"
  }
];

// Components
const AnimatedBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full opacity-20 animate-pulse"></div>
    <div className="absolute top-60 right-32 w-24 h-24 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-25 animate-bounce" style={{animationDelay: '1s'}}></div>
    <div className="absolute bottom-40 left-16 w-28 h-28 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
    <div className="absolute bottom-20 right-20 w-20 h-20 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-30 animate-bounce" style={{animationDelay: '3s'}}></div>
  </div>
);

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  );
};

const RecipeCard = ({ recipe, onView, onLike, liked }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className={`w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 animate-pulse"></div>
        )}
        <div className="absolute top-3 right-3 flex gap-2">
          <span className="px-2 py-1 text-xs font-semibold bg-pink-500 text-white rounded-full">
            {recipe.category}
          </span>
          <button
            onClick={() => onLike(recipe.id)}
            className={`p-2 rounded-full transition-all duration-300 ${
              liked ? 'bg-red-500 text-white scale-110' : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
            }`}
          >
            <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <img
            src={recipe.avatar}
            alt={recipe.author}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm text-gray-600 dark:text-gray-400">{recipe.author}</span>
        </div>
        
        <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
          {recipe.name}
        </h3>
        
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {recipe.cookTime}m
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {recipe.servings}
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            {recipe.rating}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {recipe.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <button
          onClick={() => onView(recipe)}
          className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          View Recipe
        </button>
      </div>
    </div>
  );
};

const RecipeModal = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="relative">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
          >
            <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={recipe.avatar}
              alt={recipe.author}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{recipe.name}</h2>
              <p className="text-gray-600 dark:text-gray-400">by {recipe.author}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 mb-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {recipe.cookTime} minutes
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              Serves {recipe.servings}
            </div>
            <div className="flex items-center gap-1">
              <ChefHat className="w-4 h-4" />
              {recipe.difficulty}
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              {recipe.rating}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3 text-gray-800 dark:text-white">Ingredients</h3>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3 text-gray-800 dark:text-white">Instructions</h3>
              <ol className="space-y-3">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-3 text-gray-600 dark:text-gray-400">
                    <span className="flex-shrink-0 w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    {instruction}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewCard = ({ review }) => (
  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
    <div className="flex items-center gap-4 mb-4">
      <img
        src={review.avatar}
        alt={review.name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h3 className="font-semibold text-gray-800 dark:text-white">{review.name}</h3>
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{review.text}</p>
  </div>
);

const DessertApp = () => {
  const [recipes, setRecipes] = useState(dessertData);
  const [filteredRecipes, setFilteredRecipes] = useState(dessertData);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [likedRecipes, setLikedRecipes] = useState(new Set());

  const categories = ['All', 'Chocolate', 'Cheesecake', 'Italian', 'French'];

  useEffect(() => {
    let filtered = recipes;

    if (searchTerm) {
      filtered = filtered.filter(recipe =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(recipe => recipe.category === selectedCategory);
    }

    setFilteredRecipes(filtered);
  }, [searchTerm, selectedCategory, recipes]);

  const handleLike = (recipeId) => {
    setLikedRecipes(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(recipeId)) {
        newLiked.delete(recipeId);
      } else {
        newLiked.add(recipeId);
      }
      return newLiked;
    });
  };

  const getRandomRecipe = () => {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    setSelectedRecipe(recipes[randomIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-300">
      <AnimatedBackground />
      <ThemeToggle />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <Sparkles className="w-16 h-16 text-pink-500 mx-auto mb-4 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-4">
              Dessert Delights
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover the world's most exquisite dessert recipes, crafted with love and perfection
            </p>
          </div>
          
          <button
            onClick={getRandomRecipe}
            className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
          >
            <Sparkles className="w-5 h-5" />
            Surprise Me!
          </button>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
            />
          </div>
          
          <div className="flex justify-center gap-2 flex-wrap">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-pink-500 text-white shadow-lg'
                    : 'bg-white/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredRecipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onView={setSelectedRecipe}
              onLike={handleLike}
              liked={likedRecipes.has(recipe.id)}
            />
          ))}
        </div>

        {/* Reviews Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            What Our Bakers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Dessert Delights. Made with ❤️ for dessert lovers everywhere.
          </p>
        </footer>
      </div>

      {/* Recipe Modal */}
      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <DessertApp />
  </ThemeProvider>
);

export default App;