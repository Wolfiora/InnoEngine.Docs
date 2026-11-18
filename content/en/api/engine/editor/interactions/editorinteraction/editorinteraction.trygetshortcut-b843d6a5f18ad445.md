---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b843d6a5f18ad4451c82650585c9474a2f2f6881bec1d79643a2876430979722
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteraction.TryGetShortcut(System.String,Inno.Editor.Interactions.HotKeyGesture@)
title: EditorInteraction.TryGetShortcut
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
sourceFingerprint: 6f56e6b96e69b998b57274dbd053782a6ca83a4faee9d2dc79576bf9ef2450f4
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
