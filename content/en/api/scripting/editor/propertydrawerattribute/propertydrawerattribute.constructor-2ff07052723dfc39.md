---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2ff07052723dfc3918c4d4b051992bdae6b78a387e8379efd8c2c1e92e25b95e
symbol: scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.PropertyDrawerAttribute.#ctor(System.Type,System.Boolean,System.Int32)
title: PropertyDrawerAttribute.Constructor
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: editor-script
sourceFingerprint: 65adfae3806c5cb9023706e3f229e15e2aab8d41036ceffd0f823b2dca911417
apiScope: Editor
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
