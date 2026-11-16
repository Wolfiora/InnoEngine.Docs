---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4b660cef6077e9b05dbc849da889ac3e062eafe710808144045e762c69fe582e
symbol: scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.InspectionDrawerAttribute.#ctor(System.Type,System.Boolean,System.Int32,System.Boolean)
title: InspectionDrawerAttribute.Constructor
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: editor-script
reviewed: f9eec0aff4970fd73a6d059d4a47fb8cc1e03218b231cada11c1e8edd1b0fa8b
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
