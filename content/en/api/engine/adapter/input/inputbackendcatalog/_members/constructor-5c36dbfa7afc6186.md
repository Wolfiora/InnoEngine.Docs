---
uid: api.5c36dbfa7afc618688684057eae96346d6cafa9173cf6bec033319a2699706aa
symbol: "engine:Inno.Adapter.Input:M:Inno.Adapter.Input.InputBackendCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.Adapter.Input.InputBackendProvider})"
source: xml
reviewed: 19dcc5cfad83472e4fcd520a090eff0125b7709b6a0b7a93f236d8c25637b935
title: "Constructor"
kind: api
owners: [Inno.Adapter.Input]
apiSurface: source-clr
---

Validates and captures a complete provider set without creating any service.

**Parameter `providers`:** Providers whose lifetime remains with the composition owner.

**Exception `T:System.ArgumentNullException`:** The provider sequence is null.

**Exception `T:System.ArgumentException`:** A provider is null, unassigned, or duplicates a registration identity.
