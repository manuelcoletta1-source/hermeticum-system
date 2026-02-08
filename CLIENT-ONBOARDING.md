# Client Onboarding — IPR (Identity Primary Record)

Questa pagina descrive l’ingresso operativo per clienti (B2B/B2G) nello standard IPR.

Principio: nessuna esecuzione senza identità verificata ex-ante.  
Modalità: fail-closed (in assenza di prove → BLOCCO).

---

## 1) Cosa ottieni

- Identità operativa verificabile (IPR)
- Regole di esecuzione ex-ante (precheck)
- Traccia verificabile nel tempo
- Compatibilità con AI / robot / workflow digitali

---

## 2) Requisiti minimi (per partire)

- Un payload/azione da proteggere (anche solo un JSON)
- Un manifest con sha256 del payload
- Un precheck che blocca se mismatch

Reference prototype:
- prototype/ipr-precheck/RUN.md

---

## 3) Flusso operativo (minimo)

1. Definisci l’azione (payload)
2. Calcola sha256(payload)
3. Inserisci sha256 nel manifest
4. Precheck: se match → ALLOW, altrimenti → BLOCK
5. Registra la traccia (hash + timestamp + esito)

---

## 4) Output verificabile

Un onboarding è “valido” quando puoi dimostrare:

- payload immutato → ALLOW
- payload manomesso → BLOCK

Questo è il criterio tecnico di base.

---

## 5) Estensioni (quando serve)

- Policy di conformità (Comply)
- Gate ex-ante centralizzato (Gate)
- Exchange controllato (Exchange)
- Registry pubblico sperimentale (UE IPR Registry)

---

## Stato

Onboarding attivo (documentazione).  
Standard aperto.  
Implementazione replicabile.
