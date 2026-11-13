---
uid: api.8a466c01b9b335b072d3fc3db4ac5a89c4ede1169701d0e15f145b488b37f1d1
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry\u00601.CreateExtension\u0060\u00601(System.Type)"
source: xml
reviewed: 2c4fe497f81813f40780e1b71cfa5c9ac3379ec35c5d3a0f4b2b994600490d81
title: "CreateExtension"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Creates a validated extension instance using a parameterless constructor.

**Type parameter `TExtension`:** The required extension contract.

**Parameter `type`:** The concrete implementation type.

**Returns:** A newly created extension, retained for rollback until the complete candidate snapshot takes ownership.
