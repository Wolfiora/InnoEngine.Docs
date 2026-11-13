---
uid: api.eccafb35c2eb1d27f03a945b8636a9364466ec8e9a3f852af7f3c9bea2467fc2
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.EditorMenuRenderer.DrawSearchItems(Inno.Editor.Interactions.EditorInteraction,System.Collections.Generic.IReadOnlyList{Inno.Editor.Interactions.EditorMenuItem},System.String)"
source: xml
reviewed: 471a318ab2f5a62f4244e5273d47dafb89a28ea285c387f5bdd67fb90f176089
title: "DrawSearchItems"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws matching leaf commands as a flat searchable list.

**Parameter `interaction`:** The interaction used to enqueue selected actions.

**Parameter `items`:** The immutable menu tree whose leaves should be searched.

**Parameter `search`:** The case-insensitive text matched against each slash-delimited leaf path.

**Returns:** `true` when a command was selected.
