---
uid: api.36c4f94677aef81b886b21b0d77fd93b8dac3f1d9bf950fc50d95bf1ad7f598a
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorMenuAttribute.#ctor(System.String,System.String,System.Int32,System.Boolean)"
source: xml
reviewed: 5bfb99c4d273e9e6fe57ea6b5c1ca959bcb5a6e4cd2774720c42a5966d5afd1c
title: "Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Creates a static placement for the annotated action on an exact menu surface.

**Parameter `area`:** The exact interaction area whose menu receives the action.

**Parameter `path`:** The slash-delimited path used to create parent menus and the leaf label.

**Parameter `order`:** The stable ordering value among sibling placements.

**Parameter `separatorBefore`:** Whether a visual separator should precede the leaf placement.

**Exception `T:System.ArgumentException`:** Thrown when `area` or `path` is empty.
