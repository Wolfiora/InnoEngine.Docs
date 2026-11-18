---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.da9e7f20127c5110e64d81f4728cdc71fbf5c4ba3957a6105b947e6acb887ceb
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorState.Get``1(System.String,``0)
title: EditorState.Get
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
sourceFingerprint: 4d5d8327a8124555232fc0228ffa1d461692cdbba808510bf7cc7ae4673d2e07
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
