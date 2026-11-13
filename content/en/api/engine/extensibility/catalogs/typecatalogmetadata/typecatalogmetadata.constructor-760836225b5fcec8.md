---
uid: api.760836225b5fcec82448dd34677ee1cc7072e708f31ba5e43ef77c1c48efcac1
symbol: "engine:Inno.Extensibility.Catalogs:M:Inno.Extensibility.Catalogs.TypeCatalogMetadata.#ctor(System.Type,System.Collections.Generic.IReadOnlyList{System.Type},System.Collections.Generic.IReadOnlyList{System.Type},System.Collections.Generic.IReadOnlyList{System.Attribute},System.Collections.Generic.IReadOnlyList{System.Attribute},System.Collections.Generic.IReadOnlyList{System.ValueTuple{System.String,System.Type}})"
source: xml
reviewed: f08f20a29b9a94847e06c025083d8209871aba797775e91cbf21aa096d05cb6d
title: "TypeCatalogMetadata.Constructor"
kind: api
owners: [Inno.Extensibility.Catalogs]
apiSurface: source-clr
---

Captures type relationships and attributes for one candidate generation.

**Parameter `type`:** The declared type belonging to the contributing assembly.

**Parameter `baseTypes`:** Ordered base types, starting with the immediate base and excluding System.Object.

**Parameter `interfaces`:** All implemented interfaces, including inherited interfaces.

**Parameter `declaredAttributes`:** Attributes declared directly on this type.

**Parameter `inheritedAttributes`:** The effective attributes after applying inheritance and multiplicity rules.

**Parameter `parameterlessOverrides`:** Effective parameterless instance overrides, paired with the declaration owning their virtual slot.

**Exception `T:System.ArgumentNullException`:** A required declaration or collection is null.
