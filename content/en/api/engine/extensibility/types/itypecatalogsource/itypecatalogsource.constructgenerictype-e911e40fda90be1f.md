---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.e911e40fda90be1f680cae79bfe05ebb9f4c6bab3e38236e4cea8d7f5964634d
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.ITypeCatalogSource.ConstructGenericType(System.Type,System.Collections.Generic.IReadOnlyList{System.Type})
title: ITypeCatalogSource.ConstructGenericType
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
reviewed: b82e0137eb4e94f29901c117dd033df3d9b6551cc98cd8a77de852ef61ada5c9

# Authoring metadata. Edit these fields and the explanation below.
source: xml
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
