# 🇺🇸 ENGLISH

> 📘 **This README is available in English and Portuguese.** > Scroll down for the [Portuguese version](#-português).

# 🏦 Banking Dashboard (Frontend)

Frontend application developed in **Angular 18** to interact with the Banking System API. The project focuses on a reactive user experience, robust error handling, and clean component architecture.

---

## 📚 Table of Contents

1. [📦 Overview](#-overview)
2. [🧩 Project Structure](#-project-structure)
3. [🚀 Running the Project](#-running-the-project)
4. [📄 Technical Decisions](#-technical-decisions)
5. [🌍 Live Demo](#-live-demo)
6. [🧾 Final Considerations](#-final-considerations)

---

## 📦 Overview

The dashboard provides a modern interface for financial management, allowing users to track balances and execute transactions (Deposit, Withdraw, and Transfer) with real-time feedback.

### Main Features
- ✅ **Reactive Dashboard:** Real-time balance and state updates using Angular's reactivity model.
- ✅ **Dumb Component Pattern:** Decoupled UI components (Modals/Forms) using `@Input` and `@Output` for better maintainability.
- ✅ **Advanced Error Mapping:** Specific logic to handle **Status 0** (CORS/Network issues) and API validation errors.
- ✅ **Optimized Change Detection:** Manual UI synchronization to ensure the interface reflects API responses instantly.

---

## 🧩 Project Structure

```text
BankingFront/
├── src/app/
│   ├── core/
│   │   ├── services/      → API communication logic (BankingService)
│   │   └── domain/        → TypeScript interfaces and DTOs
│   ├── pages/
│   │   └── dashboard/     → Smart component managing transaction logic
│   └── shared/
│       └── components/    → Dumb components (Modal, Toast, Balance display)
```

---

## 🚀 Running the Project

### 1️⃣ Installation

```bash
npm install
```

### 2️⃣ Start Development Server

Run the following command to start the application locally:

```bash
ng serve
```
📍 Local URL: http://localhost:4200

---

## 📄 Technical Decisions

- **Manual Change Detection:** Leveraged `ChangeDetectorRef` to fix UI "freezing" issues during rapid network state transitions (e.g., ensuring modals close and the balance refreshes instantly after a successful **201 Created** response).
- **Network Resilience:** Implemented a specific handler for **Status 0** errors. This provides clear "Connection Failed" feedback to the user when the API is unreachable or requests are blocked by CORS policies.
- **Environment Decoupling:** API endpoints and base URLs are managed strictly via Angular environment files, allowing seamless transitions between Local development and Vercel deployments without code changes.

---

## 🌍 Live Demo

The application is deployed and available at the following link:

📍 **Production URL:** [[https://banking-front-lime.vercel.app](https://banking-front-nix06h3od-theonicolelis-projects.vercel.app/)]

---

## 🧾 Final Considerations

This frontend was built to demonstrate proficiency in **Angular 18**, focusing on state management and robust communication with a **.NET 9** backend.

I appreciate the opportunity to participate in this technical challenge and to demonstrate my skills in building reactive and resilient interfaces.

---

# 🇧🇷 PORTUGUÊS

> 📘 **Este README está disponível em Inglês e Português.** > Suba a página para a [versão em Inglês](#-english).

# 🏦 Banking Dashboard (Frontend)

Aplicação frontend desenvolvida em **Angular 18** para interagir com a API do Banking System. O projeto foca em uma experiência de usuário reativa, tratamento de erros robusto e uma arquitetura de componentes limpa.

---

## 📚 Sumário

1. [📦 Visão Geral](#-visão-geral)
2. [🧩 Estrutura do Projeto](#-estrutura-do-projeto)
3. [🚀 Executando o Projeto](#-executando-o-projeto)
4. [📄 Decisões Técnicas](#-decisões-técnicas)
5. [🌍 Demonstração ao Vivo](#-demonstração-ao-vivo)
6. [🧾 Considerações Finais](#-considerações-finais)

---

## 📦 Visão Geral

O dashboard oferece uma interface moderna para gestão financeira, permitindo que os usuários acompanhem saldos e executem transações (Depósito, Saque e Transferência) com feedback em tempo real.

### Funcionalidades Principais
- ✅ **Dashboard Reativo:** Atualizações de saldo e estado em tempo real utilizando o modelo de reatividade do Angular.
- ✅ **Dumb Component Pattern:** Componentes de UI desacoplados (Modais/Formulários) usando `@Input` e `@Output` para melhor manutenibilidade.
- ✅ **Mapeamento de Erros Avançado:** Lógica específica para lidar com **Status 0** (erros de CORS/Rede) e erros de validação da API.
- ✅ **Detecção de Mudanças Otimizada:** Sincronização manual da UI para garantir que a interface reflita as respostas da API instantaneamente.

---

## 🧩 Estrutura do Projeto

```text
BankingFront/
├── src/app/
│   ├── core/
│   │   ├── services/      → Lógica de comunicação com a API (BankingService)
│   │   └── domain/        → Interfaces TypeScript e DTOs
│   ├── pages/
│   │   └── dashboard/     → Componente "Smart" gerenciando a lógica de transações
│   └── shared/
│       └── components/    → Componentes "Dumb" (Modal, Toast, Exibição de Saldo)
```

---

## 🚀 Executando o Projeto

### 1️⃣ Instalação

```bash
npm install
```

### 2️⃣ Iniciar Servidor de Desenvolvimento

Execute o seguinte comando para iniciar a aplicação localmente:

```bash
ng serve
```
📍 URL Local: http://localhost:4200

---

## 📄 Decisões Técnicas

- **Detecção de Mudanças Manual:** Utilização do `ChangeDetectorRef` para corrigir problemas de "congelamento" da UI durante transições rápidas de estado de rede (ex: garantir que os modais fechem e o saldo atualize instantaneamente após uma resposta de sucesso **201 Created**).
- **Resiliência de Rede:** Implementação de um handler específico para erros de **Status 0**. Isso fornece um feedback claro de "Falha na Conexão" ao usuário quando a API está inacessível ou as requisições são bloqueadas por políticas de CORS.
- **Desacoplamento de Ambiente:** Endpoints e URLs base da API são gerenciados estritamente via arquivos de `environment` do Angular, permitindo transições suaves entre o desenvolvimento local e o deploy na Vercel sem alterações no código.

---

## 🌍 Demonstração ao Vivo

A aplicação está publicada e disponível no link abaixo:

📍 **URL de Produção:** [[https://banking-front-lime.vercel.app](https://banking-front-nix06h3od-theonicolelis-projects.vercel.app/)]

---

## 🧾 Considerações Finais

Este frontend foi construído para demonstrar proficiência em **Angular 18**, com foco em gerenciamento de estado e comunicação robusta com um backend em **.NET 9**.

Agradeço a oportunidade de participar deste desafio técnico e de demonstrar minhas habilidades na construção de interfaces reativas e resilientes.
