---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.df28436d06e190d00d8be0952f2c7dbd1eaa34f7c82dee5b1c78ce68778b0cf7
symbol: engine:Inno.Adapter.Text:M:Inno.Adapter.Text.TextBackendCatalog.#ctor(System.Collections.Generic.IEnumerable{Inno.Adapter.Text.TextBackendProvider})
title: TextBackendCatalog.Constructor
kind: api
owners:
- Inno.Adapter.Text
apiSurface: source-clr
sourceFingerprint: 3ef2a2a246316d57a929bcb28a3a9ace41ba4d1abcf8adb796c0e454b0a5168c
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
