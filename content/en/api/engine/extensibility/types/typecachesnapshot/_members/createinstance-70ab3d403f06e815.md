---
uid: api.70ab3d403f06e8151b8d19ea39b2220bcc9bb7fc8b5c76fe622a6b080e650c54
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeCacheSnapshot.CreateInstance(System.Type)"
source: xml
reviewed: bc35fb9752f2330bfa22e26d386928eb0a6533122a3868749043d3792175c040
title: "CreateInstance"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Constructs a declared type through this generation's selected metadata source.

**Parameter `type`:** A declaration in this snapshot, or a closed construction of its registered generic declaration.

**Returns:** The new instance owned by the caller.

**Exception `T:System.InvalidOperationException`:** The reference does not resolve or its deployment does not provide a factory.
