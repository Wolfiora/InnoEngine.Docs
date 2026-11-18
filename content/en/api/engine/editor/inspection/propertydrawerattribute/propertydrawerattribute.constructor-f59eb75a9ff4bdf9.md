---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f59eb75a9ff4bdf94c391e7055be2a4144a61e2cf8067a85354f0b963be2f3f9
symbol: engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.PropertyDrawerAttribute.#ctor(System.Type,System.Boolean,System.Int32)
title: PropertyDrawerAttribute.Constructor
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: source-clr
sourceFingerprint: feb9302cb60a8750477d1d82df43a20ca333ecdf1891b1f9ece1d9adfc1dcad4
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
