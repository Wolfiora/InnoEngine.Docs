---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.da9e7f20127c5110e64d81f4728cdc71fbf5c4ba3957a6105b947e6acb887ceb
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorState.Get``1(System.String,``0)
title: EditorState.Get
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
reviewed: 510034c2caf25e4c456c5173db658b84c5f9fadbcbe78b78ad660c38ff66e122
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `T`:** The neutral value type expected by the caller.

## Parameters

**Parameter `key`:** The stable key local to the owning module or panel.

**Parameter `fallback`:** The value returned when the key is absent, malformed, or incompatible with `T`.

## Returns

The stored compatible value, or `fallback`.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `key` is empty.
