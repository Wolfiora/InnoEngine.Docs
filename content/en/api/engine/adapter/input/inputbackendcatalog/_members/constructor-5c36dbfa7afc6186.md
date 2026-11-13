---
uid: api.5c36dbfa7afc618688684057eae96346d6cafa9173cf6bec033319a2699706aa
symbol: "engine:Inno.Adapter.Input:M:Inno.Adapter.Input.InputBackendCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.Adapter.Input.InputBackendProvider})"
source: xml
reviewed: ac67257085ed29880b7a6067d3d62130102a8f3b57e2cf1b292cb74eaad6670f
title: "Constructor"
kind: api
owners: [Inno.Adapter.Input]
apiSurface: source-clr
---

Validates and captures a complete provider set without creating any service.

**Parameter `providers`:** Providers whose lifetime remains with the composition owner.

**Exception `T:System.ArgumentNullException`:** The provider sequence is null.

**Exception `T:System.ArgumentException`:** A provider is null, unassigned, or duplicates a registration identity.
