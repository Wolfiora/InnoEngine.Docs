---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d00ea0cee5e5bd00839166dbca15fddc1f9d691646dc99b432ece29c6983f29d
symbol: engine:Inno.Editor.Settings:M:Inno.Editor.Settings.EditorSettings.ListenChanges(System.Action{Inno.Editor.Settings.EditorSettings})
title: EditorSettings.ListenChanges
kind: api
owners:
- Inno.Editor.Settings
apiSurface: source-clr
reviewed: 05e70ec5b1c028c9bf195b901009ab6d38808a139e50c561e6784c18e2843fbc
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
