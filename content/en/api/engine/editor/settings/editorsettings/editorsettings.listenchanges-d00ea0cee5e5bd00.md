---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d00ea0cee5e5bd00839166dbca15fddc1f9d691646dc99b432ece29c6983f29d
symbol: engine:Inno.Editor.Settings:M:Inno.Editor.Settings.EditorSettings.ListenChanges(System.Action{Inno.Editor.Settings.EditorSettings})
title: EditorSettings.ListenChanges
kind: api
owners:
- Inno.Editor.Settings
apiSurface: source-clr
reviewed: 7bd3be1894f37d0b867b5a30de2e612ef9a115752c345a6fd17593127cef7d8b
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
