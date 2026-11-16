---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.e911e40fda90be1f680cae79bfe05ebb9f4c6bab3e38236e4cea8d7f5964634d
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.ITypeCatalogSource.ConstructGenericType(System.Type,System.Collections.Generic.IReadOnlyList{System.Type})
title: ITypeCatalogSource.ConstructGenericType
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
reviewed: 1a961d6f01ba98587e4dae82147cb931b453da785ef76e4cf1dc61fe9c3e12b1
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `definition`:** A generic declaration owned by the candidate generation.

**Parameter `arguments`:** The complete ordered set of closed type arguments.

## Returns

The closed type, or null when its generic constraints reject these arguments.

## Exceptions

**Exception `T:System.NotSupportedException`:** A static deployment did not link the requested construction.

**Exception `T:System.ArgumentException`:** The declaration is not generic, or the argument count or closedness is invalid.
