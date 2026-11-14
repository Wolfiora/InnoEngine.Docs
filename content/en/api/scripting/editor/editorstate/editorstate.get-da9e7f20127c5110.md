---
uid: api.da9e7f20127c5110e64d81f4728cdc71fbf5c4ba3957a6105b947e6acb887ceb
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorState.Get\u0060\u00601(System.String,\u0060\u00600)"
source: xml
reviewed: b5d7eaecd0ac91f6ddc344b89c57f79b9ef4e1c277f5bf84e76ad6c9c10cbf90
title: "EditorState.Get"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Reads a compatible value or returns the caller-provided fallback.

## Type parameters

**Type parameter `T`:** The neutral value type expected by the caller.

## Parameters

**Parameter `key`:** The stable key local to the owning module or panel.

**Parameter `fallback`:** The value returned when the key is absent, malformed, or incompatible with `T`.

## Returns

The stored compatible value, or `fallback`.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `key` is empty.
