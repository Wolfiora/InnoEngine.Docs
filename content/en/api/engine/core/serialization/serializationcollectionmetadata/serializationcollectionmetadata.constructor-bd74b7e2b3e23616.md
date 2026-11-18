---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.bd74b7e2b3e23616e72c4264903058a4e7650e8509f4bbbd55fd81b646f3f153
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationCollectionMetadata.#ctor(System.Type,System.Type,System.Func{System.Collections.Generic.IReadOnlyList{System.Object},System.Object},System.Func{System.Collections.Generic.IReadOnlyList{System.Collections.Generic.KeyValuePair{System.Object,System.Object}},System.Object},System.Func{System.Object,System.Collections.Generic.IReadOnlyList{System.Collections.Generic.KeyValuePair{System.Object,System.Object}}})
title: SerializationCollectionMetadata.Constructor
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
sourceFingerprint: 6ecf8674a983d6deda048493439c3020a51aee248e34a9564fc92f0abe729035
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
