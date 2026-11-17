---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.df28436d06e190d00d8be0952f2c7dbd1eaa34f7c82dee5b1c78ce68778b0cf7
symbol: engine:Inno.Adapter.Text:M:Inno.Adapter.Text.TextBackendCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.Adapter.Text.TextBackendProvider})
title: TextBackendCatalog.Constructor
kind: api
owners:
- Inno.Adapter.Text
apiSurface: source-clr
reviewed: 3f0f72f43527e12356b94860f8099ce997f29a9ff31db0842c8e7e9dee4b0e70
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
