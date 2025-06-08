let products = [
  {
    title: "Fridge",
    description: "Double Door",
    price: 10000,
    imageUrl: "https://i.imgur.com/UZzKTj4.jpg", // Sample image URL
    postedBy: "Thiru"
  },
  {
    title: "Fridge",
    description: "Single Door",
    price: 7000,
    imageUrl: "https://i.imgur.com/8zVyT8J.jpg",
    postedBy: "Thiru"
  },
  {
    title: "Scooter",
    description: "Scooty",
    price: 15000,
    imageUrl: "https://i.imgur.com/hL0GQ2b.jpg",
    postedBy: "Thiru"
  },
  {
    title: "Mixie",
    description: "Butterfly",
    price: 2000,
    imageUrl: "https://i.imgur.com/3UeG3wL.jpg",
    postedBy: "Thiru"
  }
];

// Show default products on page load
window.onload = () => {
  displayProducts(products);
};

function showForm() {
  const form = document.getElementById("productForm");
  form.style.display = form.style.display === "none" ? "block" : "none";
}

function addProduct() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const price = document.getElementById("price").value;
  const imageInput = document.getElementById("image");
  const imageFile = imageInput.files[0];
  const reader = new FileReader();

  reader.onload = function () {
    const product = {
      title,
      description,
      price,
      imageUrl: reader.result,
      postedBy: "You"
    };
    products.push(product);
    displayProducts(products);
    clearForm();
  };

  if (imageFile) {
    reader.readAsDataURL(imageFile);
  } else {
    alert("Please choose an image.");
  }
}

function displayProducts(list) {
  const container = document.getElementById("productList");
  container.innerHTML = "";
  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${product.imageUrl}" alt="${product.title}">
      <h4>${product.title}</h4>
      <p>${product.description}</p>
      <p>Rs.${product.price}</p>
      <p>Posted by: ${product.postedBy}</p>
      <button onclick="buyProduct('${product.title}')">Buy</button>
    `;
    container.appendChild(card);
  });
}

function buyProduct(name) {
  alert(`You have selected to buy: ${name}`);
}

function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("price").value = "";
  document.getElementById("image").value = "";
  document.getElementById("productForm").style.display = "none";
}

function searchProducts() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query) ||
    p.price.toString().includes(query)
  );
  displayProducts(filtered);
}
