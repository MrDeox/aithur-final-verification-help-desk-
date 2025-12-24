'use client';

import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
            <Head>
                <title>Help Desk Interno para PMEs | Solução SaaS</title>
                <meta name="description" content="Gestão de chamados de TI e suporte interno para empresas de pequeno e médio porte." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Navbar */}
            <nav className="bg-white shadow-lg sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <h1 className="text-xl font-bold text-blue-600">Help Desk PME</h1>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#funcionalidades" className="text-gray-700 hover:text-blue-600 transition-colors">Funcionalidades</a>
                            <a href="#planos" className="text-gray-700 hover:text-blue-600 transition-colors">Planos</a>
                            <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
                            <button
                                onClick={() => window.open('https://test.com/verification-pay', '_blank')}
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                            >
                                Experimente Grátis
                            </button>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-700 hover:text-blue-600"
                            >
                                ☰
                            </button>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="#funcionalidades" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Funcionalidades</a>
                            <a href="#planos" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Planos</a>
                            <a href="#contato" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contato</a>
                            <button
                                onClick={() => window.open('https://test.com/verification-pay', '_blank')}
                                className="w-full text-left bg-blue-600 text-white px-3 py-2 rounded-lg mt-2"
                            >
                                Experimente Grátis
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="py-20 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
                        Simplifique o seu
                        <span className="text-blue-600"> suporte interno</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-10">
                        Gestão de chamados de TI feita para PMEs que buscam eficiência, organização e resultados.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => window.open('https://test.com/verification-pay', '_blank')}
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Comece Agora
                        </button>
                        <button
                            onClick={() => document.getElementById('funcionalidades')?.scrollIntoView({ behavior: 'smooth' })}
                            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                        >
                            Conhecer Mais
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="funcionalidades" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Funcionalidades</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">Abertura de Tickets</h3>
                            <p className="text-gray-700">Usuários podem abrir chamados de forma simples e rápida, com categorização automática.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">Atribuição Inteligente</h3>
                            <p className="text-gray-700">Sistema de distribuição automática de tickets para técnicos, baseado em carga e especialidade.</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">Feedback e Avaliação</h3>
                            <p className="text-gray-700">Os usuários avaliam o atendimento, ajudando a melhorar continuamente a qualidade do suporte.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Plans Section */}
            <section id="planos" className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Planos Simples</h2>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Plano Mensal</h3>
                        <p className="text-4xl font-bold text-blue-600 mb-4">R$ 99/mes</p>
                        <ul className="text-left space-y-2 text-gray-700 mb-6">
                            <li>✓ Até 50 usuários</li>
                            <li>✓ Histórico de chamados</li>
                            <li>✓ Dashboard de monitoramento</li>
                            <li>✓ Integração com Mercado Pago</li>
                        </ul>
                        <button
                            onClick={() => window.open('https://test.com/verification-pay', '_blank')}
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
                        >
                            Assinar Agora
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contato" className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-2xl font-bold mb-4">Pronto para transformar o seu suporte?</h2>
                    <p className="text-gray-400 mb-6">Entre em contato e agende uma demonstração.</p>
                    <div className="space-x-4">
                        <button
                            onClick={() => window.open('https://test.com/verification-pay', '_blank')}
                            className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700"
                        >
                            Experimente Grátis
                        </button>
                        <a href="mailto:contato@helpdeskpme.com.br" className="border border-gray-600 px-6 py-2 rounded-lg hover:bg-gray-800">
                            contato@helpdeskpme.com.br
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
