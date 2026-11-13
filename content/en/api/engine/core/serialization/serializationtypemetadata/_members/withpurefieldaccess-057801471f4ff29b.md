---
uid: api.057801471f4ff29be957fa3737e27de5d009944878535326a122ef35a3423b44
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationTypeMetadata.WithPureFieldAccess"
source: xml
reviewed: ccd5a1e129a8ddd9613d141334b85dcd8de8dbb901509fbfc85efe38419bae7f
title: "WithPureFieldAccess"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Declares that every serialized member of this value type reads a direct primitive field.

**Returns:** An immutable declaration with pure field access; the original declaration remains unchanged.

**Exception `T:System.InvalidOperationException`:** The declaration is not a default value type with primitive serialized members.
