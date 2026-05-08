# Memory Card

A Pokémon-themed memory card game built with React. Test your memory by clicking cards — but never click the same Pokémon twice.

**[Live Demo](https://memorycard-dun.vercel.app/) · [Source Code](https://github.com/jormaedes/memorycard)**

---

## How to Play

Each round presents 16 Pokémon cards drawn randomly from Generation I. Click a card to score a point — the deck reshuffles after every click. Click the same Pokémon twice and the round resets. Your goal: click all 16 without repeating.

The scoreboard tracks your **current score** and your **best score** across rounds.

---

## Features

- 16 Pokémon fetched from the [PokéAPI](https://pokeapi.co/) on each session
- Cards shuffle on every click using the Fisher-Yates algorithm
- Score tracking with persistent best score within the session
- Win and game-over states
- Pokémon-themed UI with official artwork sprites

---

## Implementation Notes

**State management** is handled exclusively with `useState` and `useEffect` — no external state library.

**Data fetching** uses `useEffect` with `Promise.all` to fire 16 parallel requests to the PokéAPI on mount, extracting official artwork from `sprites.other['official-artwork'].front_default`.

**Shuffle** uses the [Fisher-Yates algorithm](https://www.geeksforgeeks.org/dsa/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/) — runs in O(n) and guarantees a uniformly random permutation, unlike the common `.sort(() => Math.random() - 0.5)` anti-pattern.

---

## Tech Stack

| | |
|---|---|
| Framework | React 18 |
| Build tool | Vite |
| Data source | PokéAPI (no auth required) |
| Deployment | Vercel |

---

## Run Locally

```bash
git clone https://github.com/jormaedes/memorycard.git
cd memorycard
npm install
npm run dev
```

---

## What I Learned

- Managing side effects with `useEffect` — dependency arrays, cleanup, and avoiding stale state
- Fetching multiple resources in parallel with `Promise.all`
- Deriving UI state from a single source of truth instead of duplicating state
- Why Fisher-Yates produces a correct shuffle where sort-based approaches are biased

---

## Part of

[The Odin Project — React Course](https://www.theodinproject.com/lessons/node-path-react-new-memory-card)