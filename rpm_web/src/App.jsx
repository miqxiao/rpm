import React from 'react'
import Header from './Header'
import './App.css'
import CategoriesCarousel from './components/CategoriesCarousel'
import FAQ from './components/FAQ';
import Plans from './components/Plans';
import AdBanner from "./components/AdBanner";
import Footer from "./components/Footer.jsx";


const App = () => {
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/'
    const isHome = currentPath === '/'

    return (
        <main>
            <Header />

            {isHome && (
                <section className="home-hero" aria-hidden="true">
                    {/* изображение как элемент — object-fit: cover — заполнит область без "серых краёв" */}
                    <img src="/Home.png" alt="" className="hero-img" />
                </section>
            )}

            <div className={`page-content ${isHome ? 'with-hero' : 'no-hero'}`}>
                <div className="TextContainer">
                    <h1>Лучшее приложение для фильмов</h1>
                    <h2>
                        MovieMash - это лучшее приложение для потокового просмотра ваших любимых фильмов и шоу по запросу, в любое
                        время и в любом месте. С помощью MovieMash Вы можете наслаждаться широким спектром контента, включая новейшие
                        блокбастеры, классические фильмы, популярные телешоу и многое другое. Вы также можете создавать свои собственные
                        списки просмотра, чтобы легко находить контент, который хотите посмотреть.
                    </h2>
                </div>

                <div className="cta-wrapper">
                    <button className="cta-button" aria-label="Начать просмотр">
                        <img src="/Play.svg" alt="" aria-hidden="true" className="cta-icon" />
                        <span className="cta-text">Начать просмотр</span>
                    </button>
                </div>

                {/* --- Вот здесь вставлена карусель категорий (показывается только на главной) --- */}
                {isHome && <CategoriesCarousel />}
                {isHome && <FAQ />}
                {isHome && <Plans />}
                <AdBanner />
                {/* Остальной контент страницы — ниже */}
            </div>
            <Footer />
        </main>
    )
}

export default App
