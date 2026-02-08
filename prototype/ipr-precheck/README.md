# Prototype — IPR Precheck (ex-ante)

Obiettivo: dimostrare che un’azione è eseguibile solo se preceduta da IPR valido.

## Regola
sha256(action_payload) deve coincidere con manifest.sha256  
Se non coincide → BLOCK

## Requisiti
Node.js 18+

## Come eseguire
1. Vai nella cartella:
prototype/ipr-precheck

2. Esegui:
node precheck.js sample/action.json sample/ipr_manifest.json

## Output atteso
- ALLOW se sha256 coincide
- BLOCK se sha256 non coincide

## Tamper test
Modifica un carattere in sample/action.json e rilancia:
deve uscire BLOCK.
