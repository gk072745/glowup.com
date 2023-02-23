# admin login 
  - admin@gmail.com
  - 12345678
# user login
  - user@gmail.com
  - 12345678
# products route (/products)
  - "/" - **GET request**
  - queries: 
    - category, brand, product_type, sort ( price or rating ), order( asc or dsc), page , limit (default 10)
    - brand:
      - "almay"
      - "cargo cosmetics"
      - "benefit"
      - "colorpop"
      - e.l.f.
      - nyx
    - category : 
      - "powder"
      - "cream"
      - "pencil"
      - "liquid"
      - "gel"
      - "palette"
      - "concealer"
      - "contour"
      - "bb_cc"
      - "mineral"
      - "highlighter"
      - "lip_gloss"
      - "lip_stain"
    - product_type :
      - "blush"
      - "bronzer"
      - "eyebrow"
      - "eyeliner"
      - "eyeshadow"
      - "foundation"
      - "lip_liner"
      - "lipstick"
      - "mascara"
      - "nail_polish"
  -  "/product/:id" (get the details of a specific product) - **GET request**
  -  "/search" - **GET request** :
        - q = "your search query here" 
        - q is REQUIRED or else it will throw an error
        
        
# cart route "/cart" (must be logged in to access)
  - "/" returns the cart of the logged in user - **GET request**
  - "/add/:product_id" add the item with the given id to the cart, if it already exists its value is increased by 1 - **POST request**
  - "/update/:product_id" updates the quantity of the product in the cart - **PATCH request**
  - "remove/:product_id" removes the product from the cart - **DELETE request**



# wishlist (/wishlist) (must be logged in to access)
  - "/" returns the wishlist of the logged in user - **GET request**
  - "/add/:product_id" add an item to the wishlist of the user, if it already exists then the server responds with 409 - **POST request**
  - "/delete/:product_id" delets an item from the wishlist of the user - **DELETE request**
  
  
# user routes (/user)
  - "/register" for registering a new user. - **POST request**
  - Details required for registering a new user :
      - name (Must be filled)
      - email (must be filled)
      - password (must be filled)
      - phone number( optional )
        
  - "/login" for logging in - **POST request**
      - returns a cookie with the token
  - "/" returns the details of the logged in user - **GET request**
  
# admin routes (/admin)
  - "/products" gets the products from the db. Has the same queries as the products route - **GET request**
  - "/search" - **GET request** :
      - q = "your search query here" 
      - q is REQUIRED or else it will throw an error
  - "/addproduct" to add a new product to the db _ **POST request**
  - "/addmultiple" to add multiple products to the db - **POST request**
  - "/update/:product_id" to update the details of product - **PATH request**
  - "/delete/:id" to delete a product from the db - **DELETE request**
  - "/users" gets the list of all the users listed in the db - **GET request**
  - "/deleteuser/:id" deltes a user from the db - **DELETE request**
