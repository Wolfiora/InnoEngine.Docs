---
uid: api.b60563971a133fe430c62bb4b79d9478fe4c9cef0bb96e889b8d11e8ea796570
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorActionAttribute.#ctor(System.String,System.String,System.Int32)"
source: xml
reviewed: e0b7356c05911710fc0f58d2aeb084b9292340dc023630a33d28ed83d80ddcbd
title: "Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Creates an action registration restricted to one exact area.

**Parameter `action`:** The stable semantic action name.

**Parameter `area`:** The exact area, or an empty string for every area.

**Parameter `priority`:** The tie-breaking priority.

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
