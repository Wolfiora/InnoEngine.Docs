---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.38054458d08498c63efa79c965d5ffcebbdebcf36bd459c1d16d9dc41b70c781
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorState.Set``1(System.String,``0)
title: EditorState.Set
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
reviewed: b4f9cee0d07bd95717f6f1f386bf4df610ba8a8f5b93d19b1a7fc16e61dddf39
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `T`:** The neutral value type supplied by the caller.

## Parameters

**Parameter `key`:** The stable key local to the owning module or panel.

**Parameter `value`:** The value to persist.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `key` is empty.

**Exception `T:System.InvalidOperationException`:** Thrown when the state parameter was supplied for restoration and is therefore read-only.

**Exception `T:System.NotSupportedException`:** Thrown when `value` cannot be represented by the runtime state serializer.
