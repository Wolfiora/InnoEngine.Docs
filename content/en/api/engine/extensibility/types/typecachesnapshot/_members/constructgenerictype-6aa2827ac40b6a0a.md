---
uid: api.6aa2827ac40b6a0af50305ac3a2d5c374626e83536eb445533addea6993698d9
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeCacheSnapshot.ConstructGenericType(System.Type,System.Collections.Generic.IReadOnlyList{System.Type})"
source: xml
reviewed: df1bd72899965b58e83ec45ca04b31ad27b8f3df391eadaf18e90fb0939cd170
title: "ConstructGenericType"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Resolves a generic construction belonging to this exact generation.

**Parameter `definition`:** A registered generic declaration.

**Parameter `arguments`:** Ordered closed type arguments.

**Returns:** The resolved closed type, or null when generic constraints reject the arguments.

**Exception `T:System.InvalidOperationException`:** The declaration does not belong to this generation.

**Exception `T:System.NotSupportedException`:** This deployment has not linked the requested construction.
