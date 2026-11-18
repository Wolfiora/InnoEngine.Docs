---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.58f8b52e3e3f67c557b0574201703ec2b5cc37a2c6918e73bdda073fa1161c95
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorDropContext.#ctor(InnoEditor.Core.EditorContext,InnoEditor.Interactions.EditorInteractions,System.String,InnoEditor.Interactions.EditorDragData,InnoEngine.Core.IdentityObject,System.Object,InnoEditor.Interactions.EditorDropPlacement)
title: EditorDropContext.Constructor
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
sourceFingerprint: 19a34e2bdccd4c6a4575be456510ac27e7da002942807c4f1c11ddb2246da574
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `editor`:** The shared passive editor context.

**Parameter `interactions`:** The active interaction entry point.

**Parameter `area`:** The target interaction area.

**Parameter `data`:** The active identity-based drag data.

**Parameter `source`:** The live source resolved from `data` for this operation only.

**Parameter `target`:** The managed target object exposed to typed handlers.

**Parameter `placement`:** The requested position relative to the target.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `editor`, `interactions`, `data`, `source`, or `target` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `area` is empty.
