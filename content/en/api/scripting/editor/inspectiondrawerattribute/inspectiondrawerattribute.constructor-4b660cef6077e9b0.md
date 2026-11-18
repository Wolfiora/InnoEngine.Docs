---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.4b660cef6077e9b05dbc849da889ac3e062eafe710808144045e762c69fe582e
symbol: scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.InspectionDrawerAttribute.#ctor(System.Type,System.Boolean,System.Int32,System.Boolean)
title: InspectionDrawerAttribute.Constructor
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: editor-script
sourceFingerprint: 5cc58ac94c6cbb3da0362c0362d7d6ef1fb5c1f05b89f43a3fb241e0ccfd2c5e
apiScope: Editor
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
