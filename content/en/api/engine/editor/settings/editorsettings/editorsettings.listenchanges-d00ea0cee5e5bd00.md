---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d00ea0cee5e5bd00839166dbca15fddc1f9d691646dc99b432ece29c6983f29d
symbol: engine:Inno.Editor.Settings:M:Inno.Editor.Settings.EditorSettings.ListenChanges(System.Action{Inno.Editor.Settings.EditorSettings})
title: EditorSettings.ListenChanges
kind: api
owners:
- Inno.Editor.Settings
apiSurface: source-clr
sourceFingerprint: 411a51cb1fc027ded8399b6ab912c139513db6b8a3d359140200d12aa7797206
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
