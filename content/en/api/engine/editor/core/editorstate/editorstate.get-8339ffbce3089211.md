---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.8339ffbce30892115301deccda9935724dfc0e900b06f4b77f560cba940fd51f
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorState.Get``1(System.String,``0)
title: EditorState.Get
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
reviewed: 44fcbed7e910abd7663169c14277626d33c5a42dde770253ef23db42c73420e8
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
