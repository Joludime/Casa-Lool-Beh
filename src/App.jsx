import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [fechaEntrada, setFechaEntrada] = useState(null);
  const [fechaSalida, setFechaSalida] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Tu solicitud de reserva fue enviada. Pronto nos pondremos en contacto.");
    setNombre(""); 
    setEmail(""); 
    setFechaEntrada(null); 
    setFechaSalida(null); 
    setMensaje("");
  };

  // Reseñas
  const reviews = [
    { nombre: "Juan P.", comentario: "Excelente estancia, muy limpio y cómodo.", rating: 5 },
    { nombre: "María L.", comentario: "Ubicación perfecta y el personal amable.", rating: 4 },
    { nombre: "Carlos R.", comentario: "La alberca genial, volvería sin duda.", rating: 5 },
    { nombre: "Ana G.", comentario: "Muy tranquilo y cerca del centro. 100% recomendable.", rating: 5 },
    { nombre: "Luis M.", comentario: "El desayuno rico y el lugar muy acogedor.", rating: 4 },
    { nombre: "Sofía T.", comentario: "La atención fue excelente y las habitaciones cómodas.", rating: 5 }
  ];

  // Configuración del carrusel de reseñas
  const reviewSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  // Configuración del carrusel de galería
  const gallerySettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  // Galería dinámica: solo pon tus imágenes aquí (en public/images/)
  const imagenesGaleria = [
    "gallery-1.jpg",
    "gallery-2.jpg",
    "gallery-3.jpg",
    "gallery-4.jpg",
    "gallery-5.jpg",
    "gallery-6.jpg"
  ];

  return (
    <div className="bg-[#0b1020] text-[#f7f8fc] font-sans">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-4 flex items-center justify-between rounded-2xl backdrop-blur bg-white/10 border border-white/20 px-4 py-3">
            <a href="#inicio" className="font-semibold tracking-tight">Casa Lool Beh</a>
            <ul className="hidden gap-6 text-sm sm:flex">
              <li><a href="#habitaciones">Habitaciones</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#galeria">Galería</a></li>
              <li><a href="#reseñas">Reseñas</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
            <a href="#reservar" className="rounded-xl bg-[#70e1c2] px-4 py-2 text-sm font-semibold text-black hover:opacity-90">Reservar</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative isolate pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold sm:text-5xl">Descansa a tu ritmo en Mérida</h1>
            <p className="max-w-xl opacity-90">Hospédate en un espacio tranquilo con alberca y jardín, a pocos minutos de la Plaza Grande. Ideal para viajeros que buscan comodidad y buena vibra.</p>
            <div className="flex gap-3">
              <a href="#contacto" className="rounded-xl bg-[#70e1c2] px-5 py-3 text-sm font-semibold text-black hover:opacity-90">Reservar ahora</a>
              <a href="#galeria" className="rounded-xl border border-white/20 px-5 py-3 text-sm hover:bg-white/5">Ver fotos</a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl shadow-lg overflow-hidden">
              <img src="/images/hero-1.jpg" alt="Alberca y jardín de Casa Lool Beh" className="h-[380px] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Habitaciones */}
      <section id="habitaciones" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-6">Habitaciones</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <img src="/images/loto.jpg" className="h-44 w-full object-cover rounded-xl mb-3" />
              <h3 className="font-semibold">Loto</h3>
              <p className="text-sm opacity-80">1 cama matrimonial · Aire acondicionado · Baño privado · Vista a la alberca</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <img src="/images/dhalia.jpg" className="h-44 w-full object-cover rounded-xl mb-3" />
              <h3 className="font-semibold">Dhalia</h3>
              <p className="text-sm opacity-80">2 camas individuales · Aire acondicionado · Baño privado · Patio interior</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <img src="/images/camelia.jpg" className="h-44 w-full object-cover rounded-xl mb-3" />
              <h3 className="font-semibold">Camelia</h3>
              <p className="text-sm opacity-80">1 cama matrimonial · Balcón · Aire acondicionado · Baño privado</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <img src="/images/magnolia.jpg" className="h-44 w-full object-cover rounded-xl mb-3" />
              <h3 className="font-semibold">Magnolia</h3>
              <p className="text-sm opacity-80">1 cama matrimonial · Aire acondicionado · Baño privado · Vista al jardín</p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-8">Servicios</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold">Alberca & Jardín</h3>
              <p className="text-sm opacity-80">Área fresca para relajarte después de recorrer el centro.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold">Cocina Compartida</h3>
              <p className="text-sm opacity-80">Equipada para comidas sencillas.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold">Wi-Fi Rápido</h3>
              <p className="text-sm opacity-80">Conexión estable en áreas comunes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Galería con carrusel */}
      <section id="galeria" className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-8">Galería</h2>
          <Slider {...gallerySettings}>
            {imagenesGaleria.map((img, i) => (
              <div key={i}>
                <img 
                  src={`/images/${img}`} 
                  alt={`Foto ${i+1}`} 
                  className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Reseñas carousel */}
      <section id="reseñas" className="py-16 sm:py-20 bg-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-6">Reseñas</h2>
          <Slider {...reviewSettings}>
            {reviews.map((r, i) => (
              <div key={i} className="p-4">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-6 h-full">
                  <p className="mb-3">"{r.comentario}"</p>
                  <p className="text-sm font-semibold">- {r.nombre}</p>
                  <p className="text-yellow-400">{"★".repeat(r.rating)}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Contacto / Reserva */}
      <section id="contacto" className="py-16 sm:py-20">
        <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-6 text-center">Reserva tu estancia</h2>
          <form onSubmit={handleSubmit} className="space-y-4 bg-white/10 p-6 rounded-2xl">
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Tu nombre" className="w-full rounded-lg px-3 py-2 text-black" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Tu correo" className="w-full rounded-lg px-3 py-2 text-black" required />
            <label className="block text-sm">Fecha de entrada</label>
            <DatePicker selected={fechaEntrada} onChange={(date) => setFechaEntrada(date)} className="w-full rounded-lg px-3 py-2 text-black" placeholderText="Selecciona fecha" required />
            <label className="block text-sm">Fecha de salida</label>
            <DatePicker selected={fechaSalida} onChange={(date) => setFechaSalida(date)} className="w-full rounded-lg px-3 py-2 text-black" placeholderText="Selecciona fecha" required />
            <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} placeholder="Comentarios" className="w-full rounded-lg px-3 py-2 text-black" rows={3}></textarea>
            <button type="submit" className="w-full rounded-xl bg-[#70e1c2] px-4 py-2 font-semibold text-black hover:opacity-90">Enviar solicitud</button>
          </form>
          <div className="mt-4 text-center">
            <a href="https://www.booking.com/Share-sJ2e9cP" target="_blank" className="inline-block rounded-xl bg-white/10 px-4 py-2 text-sm hover:bg-white/20">Reservar en Booking</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 py-6 text-center text-sm opacity-70">
        © 2025 Casa Lool Beh. Todos los derechos reservados.
      </footer>
    </div>
  );
}





