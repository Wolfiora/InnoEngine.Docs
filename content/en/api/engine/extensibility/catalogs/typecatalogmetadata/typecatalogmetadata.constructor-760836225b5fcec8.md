---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.760836225b5fcec82448dd34677ee1cc7072e708f31ba5e43ef77c1c48efcac1
symbol: engine:Inno.Extensibility.Catalogs:M:Inno.Extensibility.Catalogs.TypeCatalogMetadata.#ctor(System.Type,System.Collections.Generic.IReadOnlyList{System.Type},System.Collections.Generic.IReadOnlyList{System.Type},System.Collections.Generic.IReadOnlyList{System.Attribute},System.Collections.Generic.IReadOnlyList{System.Attribute},System.Collections.Generic.IReadOnlyList{System.ValueTuple{System.String,System.Type}})
title: TypeCatalogMetadata.Constructor
kind: api
owners:
- Inno.Extensibility.Catalogs
apiSurface: source-clr
reviewed: 6d62af7dded50d2ddbcfdc498c877a026d014a31dbf1dd1ec6c8def8eeb920b5
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `type`:** The declared type belonging to the contributing assembly.

**Parameter `baseTypes`:** Ordered base types, starting with the immediate base and excluding System.Object.

**Parameter `interfaces`:** All implemented interfaces, including inherited interfaces.

**Parameter `declaredAttributes`:** Attributes declared directly on this type.

**Parameter `inheritedAttributes`:** The effective attributes after applying inheritance and multiplicity rules.

**Parameter `parameterlessOverrides`:** Effective parameterless instance overrides, paired with the declaration owning their virtual slot.

## Exceptions

**Exception `T:System.ArgumentNullException`:** A required declaration or collection is null.
