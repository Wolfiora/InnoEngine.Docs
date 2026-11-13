---
uid: api.2cc2ef8e95bcab8bb2370c12668ddc3144c95fc99f301f8d8ab4e11a511e9000
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationTypeMetadata.#ctor(System.Type,System.Collections.Generic.IReadOnlyList{Inno.Core.Serialization.SerializationMemberMetadata},System.Func{System.Object},System.Action{System.Object,Inno.Core.Serialization.SerializationContext},Inno.Core.Serialization.SerializationCollectionMetadata,System.Boolean,Inno.Core.Serialization.SerializationTypeMetadata)"
source: xml
reviewed: 87392d04fa15f4dd525d35533a70088b2e5eaeb37a050e216133d8c1c808dc05
title: "Constructor"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Copies complete declaration metadata before it participates in a serialization generation.

**Parameter `type`:** The exact closed declaration.

**Parameter `members`:** Ordered persistent and runtime members, without duplicate keys.

**Parameter `factory`:** A parameterless constructor, or null when an explicit converter owns construction.

**Parameter `restored`:** An ordered restoration callback, or null when the type declares no hooks.

**Parameter `collection`:** Optional sequence or map construction and enumeration metadata.

**Parameter `requiresConverter`:** Whether default object serialization must be rejected.

**Parameter `inherited`:** Optional metadata contributed by the owner of a base declaration.

**Exception `T:System.ArgumentException`:** A member is null or a persistent key is duplicated.
