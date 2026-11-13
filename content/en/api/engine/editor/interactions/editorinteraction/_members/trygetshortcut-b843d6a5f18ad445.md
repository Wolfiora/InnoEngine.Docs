---
uid: api.b843d6a5f18ad4451c82650585c9474a2f2f6881bec1d79643a2876430979722
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorInteraction.TryGetShortcut(System.String,Inno.Editor.Interactions.HotKeyGesture@)"
source: xml
reviewed: 09387cab79e90d81a07a61ace4bdc53a3259ad9ad766f5b2cd4596276307cafe
title: "TryGetShortcut"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Resolves the shortcut displayed for an action in this area.

**Parameter `action`:** The stable action name.

**Parameter `gesture`:** The resolved gesture when successful.

**Returns:** `true` when a compatible shortcut exists; otherwise, `false`.

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
