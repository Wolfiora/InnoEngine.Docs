---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.afcbc731fa11fcec2fec39fb71e8c1c1f7cfb0e20f2ed5e363546f5525d8b983
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializedIdentityRemapper.Rewrite(System.ReadOnlySpan{System.Byte},System.Collections.Generic.IReadOnlyDictionary{System.Guid,System.Guid},System.Collections.Generic.IReadOnlyDictionary{System.String,System.String})
title: SerializedIdentityRemapper.Rewrite
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
sourceFingerprint: 5fb39443fc4b3ae4d1c694818db9eb4bfd1d17196526a0b5fd60b034b39b32d5
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `source`:** A complete serialized value or property snapshot.

**Parameter `identities`:** Old to new Guid values.

**Parameter `paths`:** Optional exact old to new string values.

## Returns

A detached rewritten payload; unknown binary subvalues remain unchanged.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** The recognized serialized format is malformed.
