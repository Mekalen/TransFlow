// Activate Mobile Menu
const menuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  menuBtn.innerHTML = mobileMenu.classList.contains("hidden")
    ? '<i data-lucide="menu"></i>'
    : '<i data-lucide="x"></i>';

  lucide.createIcons();
});

// Smooth Scroll for Buttons
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

document.querySelectorAll("[data-target]").forEach((btn) => {
  btn.addEventListener("click", () => scrollToSection(btn.dataset.target));
});

// Highlight active section on scroll
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNav() {
  let scrollPos = window.scrollY + 150;

  document.querySelectorAll("section[id]").forEach((section) => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos <= section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach((nav) => nav.classList.remove("active"));
      const current = document.querySelector(
        `.nav-link[data-target="${section.id}"]`
      );
      if (current) current.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNav);

// SERVICES DATA
const services = [
  {
    icon: "truck",
    title: "Full Truckload (FTL)",
    description:
      "Dedicated trucks for large shipments, direct delivery with no stops."
  },
  {
    icon: "package",
    title: "Less Than Truckload (LTL)",
    description:
      "Cost-effective solution for smaller shipments consolidated with others."
  },
  {
    icon: "clock",
    title: "Expedited Shipping",
    description:
      "Time-critical deliveries with guaranteed arrival and real-time tracking coming soon."
  },
  {
    icon: "navigation",
    title: "Intermodal Transport",
    description:
      "Seamless multi-modal transportation for optimal efficiency."
  },
  {
    icon: "shield",
    title: "Temperature Controlled",
    description:
      "Refrigerated transport for perishables and sensitive cargo."
  },
  {
    icon: "dollar-sign",
    title: "Freight Brokerage",
    description:
      "Expert freight matching with best rates and reliable carriers."
  }
];

const servicesGrid = document.getElementById("servicesGrid");

services.forEach((s) => {
  servicesGrid.innerHTML += `
    <div class="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
      <i data-lucide="${s.icon}" class="w-12 h-12 text-blue-600 mb-4"></i>
      <h3 class="text-xl font-bold text-gray-900 mb-3">${s.title}</h3>
      <p class="text-gray-600">${s.description}</p>
    </div>
  `;
});

lucide.createIcons();

/* TRACKING
document.getElementById("trackBtn").addEventListener("click", () => {
  const input = document.getElementById("trackingInput").value.trim();
  if (!input) return;

  const mockData = {
    status: "In Transit",
    location: "Memphis, TN",
    lastUpdate: "2 hours ago",
    estimatedDelivery: "Dec 12, 2025",
    progress: 65
  };

  const result = document.getElementById("trackingResult");
  result.classList.remove("hidden");

  result.innerHTML = `
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-xl font-bold">Shipment Status</h3>
      <span class="px-4 py-1 bg-green-100 text-green-800 rounded-full">
        ${mockData.status}
      </span>
    </div>

    <p class="text-gray-700 flex items-center mb-2">
      <i data-lucide="map-pin" class="mr-2 text-blue-600"></i>
      Current Location: ${mockData.location}
    </p>

    <p class="text-gray-700 flex items-center mb-2">
      <i data-lucide="clock" class="mr-2 text-blue-600"></i>
      Last Update: ${mockData.lastUpdate}
    </p>

    <p class="text-gray-700 flex items-center mb-4">
      <i data-lucide="check-circle" class="mr-2 text-blue-600"></i>
      Estimated Delivery: ${mockData.estimatedDelivery}
    </p>

    <div>
      <div class="flex justify-between mb-2 text-sm text-gray-600">
        <span>Progress</span>
        <span>${mockData.progress}%</span>
      </div>

      <div class="w-full bg-gray-200 h-2 rounded-full">
        <div class="bg-blue-600 h-2 rounded-full" 
          style="width:${mockData.progress}%"></div>
      </div>
    </div>
  `;

  lucide.createIcons();
});*/

// QUOTE FORM
const quoteFormContainer = document.getElementById("quoteFormContainer");

quoteFormContainer.innerHTML = `
  <div id="quoteForm">
    <div class="grid md:grid-cols-2 gap-6">
      <input id="pickup" class="input" placeholder="Pickup Location" />
      <input id="delivery" class="input" placeholder="Delivery Location" />
    </div>
    <div class="grid md:grid-cols-2 gap-6 mt-6">
      <input id="weight" class="input" placeholder="Weight (lbs)" type="number" />
      <select id="cargo" class="input">
        <option value="">Cargo Type</option>
        <option value="general">General Freight</option>
        <option value="perishable">Perishable Goods</option>
        <option value="hazmat">Hazardous Materials</option>
        <option value="oversized">Oversized Load</option>
      </select>
    </div>
    <input id="dimensions" class="input mt-6" placeholder="Dimensions (L x W x H)" />
    <div class="grid md:grid-cols-2 gap-6 mt-6">
      <input id="phone" class="input" placeholder="Phone Number" />
      <input id="email" class="input" placeholder="Email Address" />
    </div>
    <button id="quoteBtn"
      class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 mt-6">
      Submit Quote Request
    </button>
  </div>
`;

document.getElementById("quoteBtn").addEventListener("click", () => {
  const fields = ["pickup", "delivery", "weight", "cargo", "dimensions", "phone", "email"];
  for (let f of fields) {
    if (!document.getElementById(f).value.trim()) return;
  }

  quoteFormContainer.innerHTML = `
    <div class="text-center py-12">
      <i data-lucide="check-circle" class="w-16 h-16 text-green-500 mx-auto mb-4"></i>
      <h3 class="text-2xl font-bold mb-2">Quote Request Submitted!</h3>
      <p class="text-gray-600">We'll contact you within 24 hours.</p>
    </div>
  `;
  lucide.createIcons();
});

// Testimonials
const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Retail Solutions Inc.",
    text: "TransFlow has transformed our supply chain.",
    rating: 5
  },
  {
    name: "Michael Chen",
    company: "Manufacturing Co.",
    text: "Outstanding service! Highly recommended.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    company: "E-Commerce Ventures",
    text: "Best logistics partner we've ever had.",
    rating: 5
  }
];

const testimonialsDiv = document.getElementById("testimonials");

testimonials.forEach((t) => {
  testimonialsDiv.innerHTML += `
    <div class="bg-white p-6 rounded-lg shadow-sm mb-6">
      <div class="flex mb-2">
        ${"<i data-lucide='star' class='w-5 h-5 text-yellow-400 fill-current'></i>".repeat(
          t.rating
        )}
      </div>
      <p class="italic text-gray-700 mb-3">"${t.text}"</p>
      <p class="font-semibold text-gray-900">${t.name}</p>
      <p class="text-sm text-gray-600">${t.company}</p>
    </div>
  `;
});

lucide.createIcons();
