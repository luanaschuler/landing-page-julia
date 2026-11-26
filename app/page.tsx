"use client";

import Image from "next/image";
import {
  
  Music2,
  ArrowUpRight,
  Heart,
  Sparkles,
  Camera,
  SquarePlay,
  Mail,
  Plus,
} from "lucide-react";

import { motion } from "framer-motion";

const photos = [
  {
    id: 1,
    src: "/mosaico2.JPG",
    rotate: "-8deg",
  },
  {
    id: 2,
    src: "/mosaico1.JPG",
    rotate: "5deg",
  },
  {
    id: 3,
    src: "/mosaico4.JPG",
    rotate: "-4deg",
  },
  {
    id: 4,
    src: "/mosaico3.JPG",
    rotate: "8deg",
  },
];

const projects = [
  {
    number: "01",
    title: "Identidade visual",
    category: "Branding & Design",
    description: "Construindo identidades que contam histórias.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900",
  },
  {
    number: "02",
    title: "Diário visual",
    category: "Fotografia & Conteúdo",
    description: "Memórias transformadas em experiências visuais.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900",
  },
  {
    number: "02",
    title: "Diário visual",
    category: "Fotografia & Conteúdo",
    description: "Memórias transformadas em experiências visuais.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900",
  },
  {
    number: "02",
    title: "Diário visual",
    category: "Fotografia & Conteúdo",
    description: "Memórias transformadas em experiências visuais.",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900",
  },
];


const feedbacks = [
  {
    author: "Bárbara Cardoso",
    photo: "/barbara.png",
    text: "Quando comecei com a Ju meu feed era uma catastrofe, engajamento, e imagem pessoal que eu trazia no perfil era tudo puro suco do caos. Depois que deixei nas mãos dela tudo flui lindamente, as artes são belissimas, conforme fomos criando mais intimidade a Ju pegou muito a ideia do negocio e hoje pessoal nem se acredita que não sou eu que crio tudo pq ela faz parecer bem do meu jeitinho, personalizado, meus pacientes relatam que gostam muito dos conteudos que são relevantes, que encaixa com as prioridades que tenho como marca no mercado. O impacto que eles tem pela arte e criação de conteudo da Ju realmente tornou relevante e me alivou uma carga ENORME de responsabilidade sobre fazer essa função, pra que eu pudesse destinar esse tempo que sobra pra ser uma profissional melhor e criar conteúdos mais proximos com eles de maneira mais espontânea. Sem duvida recomendo pra TODO mundo e insisto sempre na Ju pq é o melhor investimento que fiz nos ultimos 2 anos 💙",
    color: "bg-[#E8B99D] text-[#3B4A3A]",
    size: "md:col-span-2",
  },
  {
    author: "Pamela Beatriz",
    photo: "/beatriz.png",
    text: "Eu AMEI a paleta!! Sério, você conseguiu traduzir muito bem tudo o que conversamos no briefing. 🥹 As cores têm exatamente essa sensação que eu quero transmitir na minha marca: sofisticada, leve, natural, acolhedora e ao mesmo tempo com personalidade. Achei uma paleta muito elegante e que combina demais com a fase que estou vivendo profissionalmente e com o posicionamento que quero construir. Achei muito autêntico amei o símbolo, acho que super combina com a proposta da marca!  😍",
    color: "bg-[#3B4A3A] text-[#FDEBE1]",
    size: "",
  },
  {
    author: "Luana Schüler",
    photo: "/luana.JPEG",
    text: "A Júlia é incrível! Ela entendeu muito a visão e a essência da minha futura marca. Dá pra ver que ela trabalha com o coração e alma. É lindo acompanhar isso. Super recomendo o trabalho dela.",
    color: "bg-[#B4552D] text-[#FDEBE1]",
    size: "",
  },
];


const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* HEADER */}

      <header className="absolute top-0 z-50 w-full px-5 md:px-12 py-5">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#inicio" className="flex items-center">
            <Image
              src="/logo-julia.png"
              alt="Logo Júlia"
              width={400}
              height={100}
              priority
              className="h-32 w-auto object-contain"
            />
          </a>

          <div className="hidden items-center gap-8 rounded-full border border-white/20 bg-[#1C1E1A]/70 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#FDEBE1] backdrop-blur-md md:flex">
            <a href="#sobre" className="hover:text-[#B4552D]">
              Sobre
            </a>
            <a href="#portfolio" className="hover:text-[#B4552D]">
              Portfólio
            </a>
            <a href="#feedbacks" className="hover:text-[#B4552D]">
              Feedbacks
            </a>
            <a href="#apoie" className="hover:text-[#B4552D]">
              Apoia-se
            </a>
          </div>

          <a
            href="#contato"
            className="flex items-center gap-2 rounded-full bg-[#FDEBE1] px-4 py-3 text-xs font-bold uppercase"
          >
            Vamos conversar <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      {/* HERO / SOBRE */}

      <section
        id="inicio"
        className="relative min-h-[900px] overflow-hidden bg-[#B4552D] px-5 pt-32 md:px-12"
      >
        {/* Decorative shapes */}

        <div className="absolute -right-32 top-24 h-[550px] w-[550px] rounded-full border-[80px] border-[#FDEBE1]/15" />

        <div className="absolute left-[-100px] top-[480px] h-72 w-72 rotate-45 bg-[#3B4A3A]" />

        <div className="absolute right-[10%] top-[180px]">
          <Image
            src="/bussulaverde.png"
            alt="Elemento decorativo"
            width={150}
            height={150}
            className="h-32 w-32 object-contain"
          />
        </div>

        <div className="absolute bottom-10 right-10 hidden text-8xl text-[#FDEBE1] md:block">
          <Image
            src="/terraverde.png"
            alt="Elemento decorativo"
            width={100}
            height={100}
            className="h-54 w-54 object-contain"
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          {/* Portrait */}

          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1 }}
            className="relative mx-auto w-full max-w-[480px]"
          >
            <div className="absolute -left-8 top-16 z-0 h-[470px] w-[90%] rotate-[-8deg] bg-[#3B4A3A]" />

            <div className="relative z-10 h-[520px] overflow-hidden rounded-t-full border-[12px] border-[#FDEBE1]">
              <Image
                src="/juliacapa.JPG"
                alt="Retrato da Júlia"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 480px"
              />
            </div>

            <div className="absolute -bottom-5 -right-5 z-20 rotate-[-8deg] bg-[#FDEBE1] px-5 py-3 shadow-xl">
              <span className="hand-font text-lg text-[#3B4A3A]">
                vivendo a vida!
              </span>
            </div>
          </motion.div>

          {/* Intro */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative z-10 pb-20 text-[#FDEBE1]"
          >
            <p className="section-label mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#FDEBE1]" />
              Viajante • Designer • Criadora
            </p>

            <h1 className="display-font text-[clamp(5rem,12vw,10rem)] font-black leading-[.78] tracking-[-.07em]">
              Oiiieee
              <span className="block text-[#3B4A3A]">galerinhaa!</span>
            </h1>

            <div className="mt-10 max-w-md border-l-4 border-[#3B4A3A] pl-6">
              <h2 className="display-font text-2xl font-bold md:text-3xl">
                Prazer, eu sou a Júlia da Silva Silva. 🙂
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#FDEBE1]/90">
                Levo a vida como um sonho, onde cada um é o protagonista da sua
                própria história.
                <span className="block mt-2">
                  Nasci e cresci em Blumenau, Santa Catarina, mas desde cedo
                  sabia que o mundo era grande demais para ficar parada em um só
                  lugar. Aos vinte e poucos anos, decidi construir minha
                  carreira sem abrir mão da liberdade meu objetivo sempre foi
                  viver em movimento por esse ponto azul chamado Terra 🌍
                </span>
                <span className="block mt-2">
                  Eu não fazia ideia de como isso aconteceria, só tinha uma
                  certeza: eu viveria viajando. E, como o universo sempre dá uma
                  forcinha para quem tem coragem, me joguei nessa sem rota
                  definida e sem data de volta.
                </span>
                <span className="block mt-2">
                  O que torna essa jornada possível é a minha paixão por criar.
                  Há 5 anos trabalho desenvolvendo marcas pessoais, artes
                  digitais e conteúdos estratégicos. Depois de muito estudo e
                  planejamento, em 2027 finalmente tirei o meu maior sonho do
                  papel e parti sem data para voltar. Hoje, compartilho essa
                  aventura libertadora no YouTube e no TikTok, mostrando na
                  prática os bastidores da minha rotina como criadora de
                  conteúdo e nômade digital. 🙂
                </span>
              </p>
            </div>

            <a
              href="#portfolio"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#1C1E1A] px-7 py-4 text-sm font-bold text-[#FDEBE1] transition hover:bg-[#3B4A3A]"
            >
              Dá uma olhadinha no meu trabalho <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>

        {/* POLAROID MOSAIC */}

        <div className="relative z-20 mx-auto mt-16 grid w-full max-w-6xl grid-cols-1 gap-10 px-6 pb-24 sm:grid-cols-2 sm:gap-8 md:gap-10 lg:grid-cols-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 60, rotate: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: photo.rotate,
              }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              whileHover={{
                scale: 1.06,
                rotate: 0,
                zIndex: 30,
              }}
              className="polaroid relative mx-auto w-full max-w-85 sm:max-w-none"
            >
              <div className="relative aspect-4/5 w-full overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.src}
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 42vw, 280px"
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 h-5 w-full bg-[#FDEBE1]" />
      </section>

      {/* PORTFOLIO / BOOK */}

      <section
        id="portfolio"
        className="relative bg-[#3B4A3A] px-5 py-28 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 text-[#FDEBE1] md:flex-row md:items-end">
            <div>
              <p className="section-label mb-4 text-[#B4552D]">
                02 / Um pouco do que faço
              </p>

              <h2 className="display-font text-6xl font-black leading-none md:text-8xl">
                Meu
                <span className="block text-[#B4552D]">portfólio.</span>
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-7 text-[#FDEBE1]/75">
              Além de criadora de conteúdo e nômade, eu faço algumas artes e
              desenvolvo identidade visual
            </p>
          </div>

          {/* VIDEO DO YOUTUBE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-20 w-full max-w-5xl px-6"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3B4A3A]">
                Um pouco do meu trabalho
              </span>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-2xl border-[6px] border-[#B4552D] bg-[#1C1E1A] shadow-xl">
              <iframe
                src="https://www.youtube.com/embed/--5vgDfwZiw"
                title="Vídeo do portfólio"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            <p className="mt-4 text-center text-sm italic text-[#3B4A3A]/80">
              Histórias, experiências e momentos que merecem ser compartilhados.
            </p>
          </motion.div>

          {/* Book */}

          <div className="relative mx-auto max-w-6xl">
            <div className="absolute -left-5 top-8 hidden h-[95%] w-full rotate-[-2deg] bg-[#B4552D] md:block" />

            <div className="relative grid overflow-hidden rounded-sm shadow-2xl md:grid-cols-2">
              {projects.map((project, index) => (
                <div
                  key={project.number}
                  className={`book-page relative flex min-h-[530px] flex-col p-7 md:p-12 ${
                    index === 0 ? "md:border-r border-[#B4552D]/20" : ""
                  }`}
                >
                  <div className="mb-8 flex justify-between">
                    <span className="section-label text-[#B4552D]">
                      PROJETO / {project.number}
                    </span>
                    <Sparkles className="text-[#B4552D]" />
                  </div>

                  <h3 className="display-font max-w-sm text-4xl font-black leading-tight md:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-xs font-bold uppercase tracking-widest text-[#B4552D]">
                    {project.category}
                  </p>

                  <p className="mt-5 max-w-xs text-sm leading-6 text-[#1C1E1A]/70">
                    {project.description}
                  </p>

                  <div className="relative mt-8 min-h-[220px] flex-1 overflow-hidden border-[8px] border-white shadow-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 90vw, 500px"
                      className="object-cover transition duration-700 hover:scale-110"
                    />
                  </div>

                  <span className="mt-5 text-right font-serif text-xs italic text-[#3B4A3A]">
                    Júlia — creative archive
                  </span>
                </div>
              ))}
            </div>

            {/* Book spine */}

            <div className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 bg-[#B4552D]/30 md:block" />
          </div>

          <div className="mt-14 flex justify-center">
            <a
              href="#contato"
              className="group flex items-center gap-4 rounded-full bg-[#B4552D] px-9 py-5 text-sm font-bold uppercase tracking-wider text-[#FDEBE1] transition hover:bg-[#FDEBE1] hover:text-[#1C1E1A]"
            >
              Vamos criar juntos?
              <ArrowUpRight className="transition group-hover:rotate-45" />
            </a>
          </div>
        </div>

        <div className="absolute right-10 top-12 hidden text-8xl text-[#B4552D] md:block">
          <Image
            src="/pinglocalizacao.png"
            alt="Elemento decorativo"
            width={100}
            height={100}
            className="h-32 w-32 object-contain"
          />
        </div>
        <div className="absolute bottom-0 left-0 h-5 w-full bg-[#B4552D]" />
      </section>

      {/* FEEDBACKS */}

      <section
        id="feedbacks"
        className="relative bg-[#FDEBE1] px-5 py-28 md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="section-label mb-4 text-[#B4552D]">
              03 / Palavras que ficam
            </p>

            <h2 className="display-font text-6xl font-black leading-[.9] md:text-8xl">
              Feedbacks
              <span className="text-[#B4552D]">.</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#3B4A3A]">
              Cada projeto deixa uma história. E essas são algumas das palavras
              de quem fez parte delas.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            {feedbacks.map((feedback, index) => (
              <motion.div
                key={feedback.author}
                initial={{ opacity: 0, y: 35, rotate: -1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                className={`
        ${feedback.color}
        ${index === 2 ? "md:col-start-2" : ""}
        relative flex min-h-[280px] h-full flex-col justify-between
        p-6 md:p-8
      `}
              >
                <div>
                  <span className="display-font text-5xl leading-none opacity-50">
                    “
                  </span>

                  <p className="display-font mt-4 text-lg font-bold leading-snug md:text-xl lg:text-2xl">
                    {feedback.text}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3 border-t border-current/25 pt-5">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-current/30">
                    <Image
                      src={feedback.photo}
                      alt={feedback.author}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wider">
                      {feedback.author}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-widest opacity-60">
                      Depoimento
                    </p>
                  </div>

                  <div className="ml-auto shrink-0">
                    <Plus size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex justify-end">
            <span className="hand-font rotate-[-5deg] text-xl text-[#B4552D]">
              obrigada pelo carinho! ♡
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-5 w-full bg-[#3B4A3A]" />
      </section>

      {/* APOIA-SE */}

      <section
        id="apoie"
        className="relative overflow-hidden bg-[#B4552D] px-5 py-28 text-[#FDEBE1] md:px-12"
      >
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full border-[70px] border-[#FDEBE1]/10" />

        <div className="absolute bottom-[-100px] left-[-100px] h-[350px] w-[350px] rotate-45 bg-[#3B4A3A]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="section-label mb-5 text-[#1C1E1A]">
              04 / Faça parte da jornada
            </p>

            <h2 className="display-font text-7xl font-black leading-[.85] md:text-9xl">
              Apoia
              <span className="block text-[#3B4A3A]">-se!</span>
            </h2>

            <p className="mt-8 max-w-md text-base leading-8 text-[#FDEBE1]/90">
              Viajar, criar e compartilhar histórias também depende de pessoas
              que acreditam nesse caminho. Se você gosta do meu trabalho, pode
              apoiar minhas próximas aventuras.
            </p>

            <a
              href="https://apoia.se/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#1C1E1A] px-8 py-5 text-sm font-bold text-[#FDEBE1] transition hover:bg-[#3B4A3A]"
            >
              <Heart size={18} />
              Quero apoiar
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="relative flex min-h-[350px] items-center justify-center">
            <div className="absolute h-72 w-72 rounded-full border-[2px] border-[#FDEBE1]/50 md:h-96 md:w-96" />

            <div className="absolute h-60 w-60 rotate-12 rounded-full md:h-80 md:w-80" />

            {/* <Globe2
              className="relative z-10 h-48 w-48 text-[#FDEBE1] md:h-64 md:w-64"
              strokeWidth={0.8}
            /> */}

            <Image
              src="/terraverde.png"
              alt="Elemento decorativo"
              width={100}
              height={100}
              className="h-54 w-54 object-contain"
            />

            <span className="absolute right-5 top-0 rotate-12 text-7xl text-[#1C1E1A]">
              ✳
            </span>

            <span className="hand-font absolute bottom-4 left-0 z-20 -rotate-12 text-2xl">
              o mundo é nosso!
            </span>
          </div>
        </div>
      </section>

      {/* FOOTER / PARCERIAS */}

      <footer
        id="contato"
        className="relative overflow-hidden bg-[#1C1E1A] px-5 pt-20 text-[#FDEBE1] md:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-b border-[#FDEBE1]/20 pb-16 md:grid-cols-2">
            <div>
              <p className="section-label mb-5 text-[#B4552D]">
                05 / Vamos nos conectar?
              </p>

              <h2 className="display-font text-5xl font-black leading-tight md:text-7xl">
                Boas ideias
                <span className="block text-[#B4552D]">viajam longe.</span>
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-[#FDEBE1]/65">
                Aberta a parcerias, projetos criativos e novas experiências.
                Vamos criar alguma coisa juntos?
              </p>

              <a
                href="mailto:contato@julia.com"
                className="mt-8 inline-flex items-center gap-3 border-b border-[#B4552D] pb-2 text-sm font-bold"
              >
                <Mail size={17} />
                Entre em contato
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <span className="section-label text-[#B4552D]">
                  Parcerias & colaborações
                </span>

                <span className="mt-5 block max-w-sm text-sm leading-7 text-[#FDEBE1]/65">
                  Vem levar sua marca comigo pelo mundo
                </span>
              </div>

              <div className="mt-12">
                <span className="section-label text-[#B4552D]">
                  Me acompanhe
                </span>

                <div className="mt-5 flex gap-4">
                  <a
                    href="https://www.instagram.com/juliadobranding/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="rounded-full border border-[#FDEBE1]/30 p-4 transition hover:bg-[#B4552D]"
                  >
                    <Camera />
                  </a>

                  <a
                    href="https://www.youtube.com/@eujuliadasilvasilva"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="rounded-full border border-[#FDEBE1]/30 p-4 transition hover:bg-[#B4552D]"
                  >
                    <SquarePlay />
                  </a>

                  <a
                    href="https://www.tiktok.com/@eujuliadasilvaasilva?is_from_webapp=1&sender_device=pc"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="rounded-full border border-[#FDEBE1]/30 p-4 transition hover:bg-[#B4552D]"
                  >
                    <Music2 />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FINAL MESSAGE */}

          <div className="relative flex min-h-[250px] flex-col items-center justify-center py-16 text-center">
            <span className="absolute left-0 top-10 text-6xl text-[#B4552D]">
              ✳
            </span>

            <p className="hand-font text-2xl leading-relaxed text-[#FDEBE1] md:text-4xl">
              A pergunta que mudou o meu jogo foi:
              <br />é melhor encarar o medo de tentar e errar, ou a frustração
              de nunca ter saído do lugar? ♡
            </p>

            <p className="mt-6 text-xs font-bold uppercase tracking-[.3em] text-[#B4552D]">
              Com carinho, Júlia.
            </p>

            <span className="absolute bottom-10 right-0 text-6xl text-[#3B4A3A]">
              +
            </span>
          </div>

          <div className="flex flex-col justify-between gap-3 border-t border-[#FDEBE1]/15 py-6 text-[10px] uppercase tracking-widest text-[#FDEBE1]/40 md:flex-row">
            <span>
              © 2026 Júlia da Silva Silva — Todos os direitos reservados
            </span>
            <span>
              Feito com criatividade e vontade de explorar por Luana Schüler.
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
