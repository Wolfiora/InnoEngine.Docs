---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.1a9ec3f3532206e6ff58ca560fac7fd894f34cd0b9aea49a5df98052a5d545ec
symbol: engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.InspectionDrawerAttribute.#ctor(System.Type,System.Boolean,System.Int32,System.Boolean)
title: InspectionDrawerAttribute.Constructor
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: source-clr
reviewed: 8c9e64d53cb51c05129fb14663c685bd4be546e06b17609da7f27a0d8d70ed37
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `targetType`:** The selected object type handled by the drawer.

**Parameter `useForChildren`:** Whether the drawer may handle assignable derived target types.

**Parameter `priority`:** The tie-breaking priority after exactness and inheritance distance.

**Parameter `conditional`:** Whether CanInspect is a target-dependent predicate. Equally specific accepted peers remain an explicit ambiguity error.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `targetType` is `null`.
