---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9c28bc8a9014b92cb0c3456b6fc3d54d5b9884c5a487d565ea4c74ec44198b55
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorActionAttribute.#ctor(System.String,System.String,System.Int32)
title: EditorActionAttribute.Constructor
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
sourceFingerprint: 0ebcc9cd342f5f065a5fb5d6e4fbc296ecab4d104646be8be352a76f329da92a
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `action`:** The stable semantic action name.

**Parameter `area`:** The exact area, or an empty string for every area.

**Parameter `priority`:** The tie-breaking priority.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
