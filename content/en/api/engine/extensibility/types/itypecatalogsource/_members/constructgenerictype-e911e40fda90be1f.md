---
uid: api.e911e40fda90be1f680cae79bfe05ebb9f4c6bab3e38236e4cea8d7f5964634d
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.ITypeCatalogSource.ConstructGenericType(System.Type,System.Collections.Generic.IReadOnlyList{System.Type})"
source: xml
reviewed: 2ab0d8d81dcbaa0b1ba456aac3574325c4abae2339bea2bb41a39bfaaf281934
title: "ConstructGenericType"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Resolves a generic construction through the deployment's linked or dynamic type mechanism.

**Parameter `definition`:** A generic declaration owned by the candidate generation.

**Parameter `arguments`:** The complete ordered set of closed type arguments.

**Returns:** The closed type, or null when its generic constraints reject these arguments.

**Exception `T:System.NotSupportedException`:** A static deployment did not link the requested construction.

**Exception `T:System.ArgumentException`:** The declaration is not generic, or the argument count or closedness is invalid.
