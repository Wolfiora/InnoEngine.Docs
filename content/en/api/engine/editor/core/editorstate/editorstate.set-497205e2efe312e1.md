---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.497205e2efe312e1ee5a405401e1b19f5e81ea30f4bbc77a6813eaecb902ea4b
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorState.Set``1(System.String,``0)
title: EditorState.Set
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
sourceFingerprint: d3c5552a8086f959e1468a9363494da1a73fa7b58e23bb93e2f45061a671ad49
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
