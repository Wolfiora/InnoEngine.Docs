---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8f448c91d35ddde4879035ffe8c965f87012fc31a17404ae128d91934f3e8e68
symbol: scripting:Inno.Editor.Settings:M:InnoEditor.Settings.EditorSettings.ListenChanges(System.Action{InnoEditor.Settings.EditorSettings})
title: EditorSettings.ListenChanges
kind: api
owners:
- Inno.Editor.Settings
apiSurface: editor-script
reviewed: 77011eb95d4f0eece44ad71ec05bb4272328127c87ef5434808eba12ee60471b
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Observes committed Apply, Undo and Redo changes through an owned Core Event hub.

## Parameters

**Parameter `observer`:** Synchronous callback reading the current committed settings; observer failures are logged and isolated.

## Returns

A subscription owner that must be disposed before its feature or extension generation retires.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The observer is null.
