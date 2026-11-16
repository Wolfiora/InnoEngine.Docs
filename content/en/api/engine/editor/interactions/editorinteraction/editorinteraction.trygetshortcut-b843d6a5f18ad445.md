---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b843d6a5f18ad4451c82650585c9474a2f2f6881bec1d79643a2876430979722
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteraction.TryGetShortcut(System.String,Inno.Editor.Interactions.HotKeyGesture@)
title: EditorInteraction.TryGetShortcut
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: 84c2833da56047c31ef4005b672a8ac76c4bc8642ca8e0617b11313592d4eeb2
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `action`:** The stable action name.

**Parameter `gesture`:** The resolved gesture when successful.

## Returns

`true` when a compatible shortcut exists; otherwise, `false`.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
