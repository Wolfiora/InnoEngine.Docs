---
uid: api.afcbc731fa11fcec2fec39fb71e8c1c1f7cfb0e20f2ed5e363546f5525d8b983
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializedIdentityRemapper.Rewrite(System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyDictionary{System.Guid,System.Guid},System.Collections.Generic.IReadOnlyDictionary{System.String,System.String})"
source: xml
reviewed: ba1a8f4932ced686d2bdd246ea29f290ee84caa88dd2ed46ad815bc42cdb3ac6
title: "SerializedIdentityRemapper.Rewrite"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Replaces exact Guid and string values while retaining the binary serialization structure.

**Parameter `source`:** A complete serialized value or property snapshot.

**Parameter `identities`:** Old to new Guid values.

**Parameter `paths`:** Optional exact old to new string values.

**Returns:** A detached rewritten payload; unknown binary subvalues remain unchanged.

**Exception `T:System.IO.InvalidDataException`:** The recognized serialized format is malformed.
