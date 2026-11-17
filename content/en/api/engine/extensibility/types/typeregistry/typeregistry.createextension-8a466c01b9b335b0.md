---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8a466c01b9b335b072d3fc3db4ac5a89c4ede1169701d0e15f145b488b37f1d1
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry`1.CreateExtension``1(System.Type)
title: TypeRegistry<TSnapshot>.CreateExtension
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
reviewed: 81bde8ec091a7206bea739f17e34efe81a257add3dc4d8fcadbabac4c6f8d116
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
