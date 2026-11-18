---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.8f448c91d35ddde4879035ffe8c965f87012fc31a17404ae128d91934f3e8e68
symbol: scripting:Inno.Editor.Settings:M:InnoEditor.Settings.EditorSettings.ListenChanges(System.Action{InnoEditor.Settings.EditorSettings})
title: EditorSettings.ListenChanges
kind: api
owners:
- Inno.Editor.Settings
apiSurface: editor-script
sourceFingerprint: 4a047d1a2fbec44ed687e3270b9d9b8d56297c1f860394dd05f5d72f741ebec8
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `observer`:** Synchronous callback reading the current committed settings; observer failures are logged and isolated.

## Returns

A subscription owner that must be disposed before its feature or extension generation retires.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The observer is null.
