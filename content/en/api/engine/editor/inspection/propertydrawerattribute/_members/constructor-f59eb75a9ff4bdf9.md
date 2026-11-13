---
uid: api.f59eb75a9ff4bdf94c391e7055be2a4144a61e2cf8067a85354f0b963be2f3f9
symbol: "engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.PropertyDrawerAttribute.#ctor(System.Type,System.Boolean,System.Int32)"
source: xml
reviewed: 3fb11de295aa1b0cd7b4113100ae6203af69b9658fee92a75dcb7e3f50f62f30
title: "Constructor"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: source-clr
---

Creates a property drawer registration.

**Parameter `targetType`:** The declared serialized property type handled by the drawer.

**Parameter `useForChildren`:** Whether the drawer may handle assignable derived property types.

**Parameter `priority`:** The tie-breaking priority after exactness and inheritance distance.

**Exception `T:System.ArgumentNullException`:** Thrown when `targetType` is `null`.
