---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2a6dc2a62bbcd2d1decaed4a25cbc06c5b52295af60d5b3f5495501cae6620dd
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeCatalog.GetTypeRef(System.Type)
title: TypeCatalog.GetTypeRef
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
sourceFingerprint: fd67f1459a5fcdebcf8b91b8479bacf578987d9f23a117943e6b74da34b7f9a1
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

Its logical and generation-local identity.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `type` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the type does not belong to the active catalog.

## Parameters

**Parameter `type`:** The type consumed by get type ref; ownership remains with the caller unless explicitly stated otherwise.
