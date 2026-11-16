---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f59eb75a9ff4bdf94c391e7055be2a4144a61e2cf8067a85354f0b963be2f3f9
symbol: engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.PropertyDrawerAttribute.#ctor(System.Type,System.Boolean,System.Int32)
title: PropertyDrawerAttribute.Constructor
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: source-clr
reviewed: e352b0f8424622c53ba4fca87d09476d0c6e1c08814ce3015f2504c30c85297f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `targetType`:** The declared serialized property type handled by the drawer.

**Parameter `useForChildren`:** Whether the drawer may handle assignable derived property types.

**Parameter `priority`:** The tie-breaking priority after exactness and inheritance distance.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `targetType` is `null`.
