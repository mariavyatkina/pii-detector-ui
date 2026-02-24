# LIVE @ https://pii-detector-ui.vercel.app/
# PII Detector UI

A lightweight React frontend for the PII Detector API.

This UI provides a simple interface for submitting text to the backend API, viewing detected entities, and optionally redacting sensitive information.

The frontend is intentionally minimal, stateless, and privacy-conscious.

---

## Purpose

This project demonstrates:

- Typed API integration using TypeScript
- Clean component structure
- Separation of concerns (UI vs API service)
- Privacy-forward UX design
- Deterministic backend integration

The UI does not store user input, use analytics, or persist any data.

---

## Features

- Text input area for analysis
- Optional redaction toggle
- Displays:
  - Redacted output
  - Detected PII entities
  - Raw JSON response
- Fully typed API contract
- Minimal dependency footprint

---

## Tech Stack

- React
- TypeScript
- Vite
- Native Fetch API

---
