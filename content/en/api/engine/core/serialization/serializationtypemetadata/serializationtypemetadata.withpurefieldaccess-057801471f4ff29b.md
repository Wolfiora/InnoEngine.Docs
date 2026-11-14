---
uid: api.057801471f4ff29be957fa3737e27de5d009944878535326a122ef35a3423b44
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationTypeMetadata.WithPureFieldAccess"
source: xml
reviewed: 09b105d89480f0d2b042c0158f5029048e73e2545c4c06907d3e2e204aac0f0d
title: "SerializationTypeMetadata.WithPureFieldAccess"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Declares that every serialized member of this value type reads a direct primitive field.

**Returns:** An immutable declaration with pure field access; the original declaration remains unchanged.

**Exception `T:System.InvalidOperationException`:** The declaration is not a default value type with primitive serialized members.
