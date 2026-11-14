---
uid: api.b60563971a133fe430c62bb4b79d9478fe4c9cef0bb96e889b8d11e8ea796570
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorActionAttribute.#ctor(System.String,System.String,System.Int32)"
source: xml
reviewed: 0c9347fc30f0a2db1ac563120b7b93a093c25280cc12de4c51a16f9b5be30f32
title: "EditorActionAttribute.Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Creates an action registration restricted to one exact area.

## Parameters

**Parameter `action`:** The stable semantic action name.

**Parameter `area`:** The exact area, or an empty string for every area.

**Parameter `priority`:** The tie-breaking priority.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `action` is empty.
