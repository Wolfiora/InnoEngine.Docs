---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8f448c91d35ddde4879035ffe8c965f87012fc31a17404ae128d91934f3e8e68
symbol: scripting:Inno.Editor.Settings:M:InnoEditor.Settings.EditorSettings.ListenChanges(System.Action{InnoEditor.Settings.EditorSettings})
title: EditorSettings.ListenChanges
kind: api
owners:
- Inno.Editor.Settings
apiSurface: editor-script
reviewed: 60f225c49b2286a9ee235589f00d5cd344e821d6b49dfdef5f9edb8f08a7d140
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
