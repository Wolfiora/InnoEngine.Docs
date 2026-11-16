---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.bd74b7e2b3e23616e72c4264903058a4e7650e8509f4bbbd55fd81b646f3f153
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationCollectionMetadata.#ctor(System.Type,System.Type,System.Func{System.Collections.Generic.IReadOnlyList{System.Object},System.Object},System.Func{System.Collections.Generic.IReadOnlyList{System.Collections.Generic.KeyValuePair{System.Object,System.Object}},System.Object},System.Func{System.Object,System.Collections.Generic.IReadOnlyList{System.Collections.Generic.KeyValuePair{System.Object,System.Object}}})
title: SerializationCollectionMetadata.Constructor
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
reviewed: 7934848996b6fbd142f62b8fe96678c37bdcbab4dfb4af231c154da16a656552
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `elementType`:** The sequence element or map value type.

**Parameter `keyType`:** The map key type, or null for a sequence.

**Parameter `buildSequence`:** A sequence factory, or null for a map.

**Parameter `buildMap`:** A map factory, or null for a sequence.

**Parameter `enumerateMap`:** Typed map enumeration, or null for a sequence.

## Exceptions

**Exception `T:System.ArgumentException`:** The operations do not describe exactly one complete collection shape.
