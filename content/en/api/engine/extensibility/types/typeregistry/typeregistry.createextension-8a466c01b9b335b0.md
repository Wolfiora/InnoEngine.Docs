---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8a466c01b9b335b072d3fc3db4ac5a89c4ede1169701d0e15f145b488b37f1d1
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry`1.CreateExtension``1(System.Type)
title: TypeRegistry<TSnapshot>.CreateExtension
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
sourceFingerprint: 8a9245e5da401c136fbc69905e92a5722e7ab991da673f9f7f31f3cf285d47ee
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TExtension`:** The required extension contract.

## Parameters

**Parameter `type`:** The concrete implementation type.

## Returns

A newly created extension, retained for rollback until the complete candidate snapshot takes ownership.
