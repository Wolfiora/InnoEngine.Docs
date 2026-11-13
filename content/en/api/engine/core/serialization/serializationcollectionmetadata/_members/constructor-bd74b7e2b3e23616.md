---
uid: api.bd74b7e2b3e23616e72c4264903058a4e7650e8509f4bbbd55fd81b646f3f153
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationCollectionMetadata.#ctor(System.Type,System.Type,System.Func{System.Collections.Generic.IReadOnlyList{System.Object},System.Object},System.Func{System.Collections.Generic.IReadOnlyList{System.Collections.Generic.KeyValuePair{System.Object,System.Object}},System.Object},System.Func{System.Object,System.Collections.Generic.IReadOnlyList{System.Collections.Generic.KeyValuePair{System.Object,System.Object}}})"
source: xml
reviewed: 8d17c9bf8ac4cfa0aa476d9ffbcc4549e24774ee8d9a6b01cffda492d82819af
title: "Constructor"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Defines the shape and typed operations of a sequence or map.

**Parameter `elementType`:** The sequence element or map value type.

**Parameter `keyType`:** The map key type, or null for a sequence.

**Parameter `buildSequence`:** A sequence factory, or null for a map.

**Parameter `buildMap`:** A map factory, or null for a sequence.

**Parameter `enumerateMap`:** Typed map enumeration, or null for a sequence.

**Exception `T:System.ArgumentException`:** The operations do not describe exactly one complete collection shape.
