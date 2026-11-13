---
uid: api.inno.core.identity.runtime-script.dda2e1617223b79d
symbol: "scripting:Inno.Core.Identity:T:InnoEngine.Core.RuntimeIdentity"
source: xml
reviewed: a6ed435eb35c77039aa7a906fce93566012615a74706018baee85eb8e07cdb74
title: "RuntimeIdentity"
kind: api
owners: [Inno.Core.Identity]
apiSurface: editor-script
apiScope: Runtime
contracts:
- api.projects.inno-core-identity#lifecycle-and-failure-contracts
- manual.scripting.use-script-api
aliases: []
---

Addresses a live identity object within one explicitly identified runtime domain.

## Remarks

This value is suitable for transient interaction payloads only and must never be persisted. Equality compares the stored domain and runtime identifier; it does not verify that an object is still live.
