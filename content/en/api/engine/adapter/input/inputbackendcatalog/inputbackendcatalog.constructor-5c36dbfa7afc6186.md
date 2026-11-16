---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.5c36dbfa7afc618688684057eae96346d6cafa9173cf6bec033319a2699706aa
symbol: engine:Inno.Adapter.Input:M:Inno.Adapter.Input.InputBackendCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.Adapter.Input.InputBackendProvider})
title: InputBackendCatalog.Constructor
kind: api
owners:
- Inno.Adapter.Input
apiSurface: source-clr
reviewed: 12ccb6b623ae718a85ab5fb988ee04edbb1288ceaeb383dc60d8901f31bc76c3
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `providers`:** Providers whose lifetime remains with the composition owner.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The provider sequence is null.

**Exception `T:System.ArgumentException`:** A provider is null, unassigned, or duplicates a registration identity.
