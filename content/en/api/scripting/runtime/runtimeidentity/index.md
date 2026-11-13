---
uid: api.inno.core.identity.runtime-script.dda2e1617223b79d
symbol: "scripting:Inno.Core.Identity:T:InnoEngine.Core.RuntimeIdentity"
source: xml
reviewed: a271d6c0f9e8c9c2bcc7b333b139e678436601ada8b86ea680b61b0b99ebc992
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
