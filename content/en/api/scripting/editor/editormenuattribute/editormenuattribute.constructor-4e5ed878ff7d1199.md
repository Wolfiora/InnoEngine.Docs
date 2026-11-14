---
uid: api.4e5ed878ff7d1199f7ef0c6fbe0a6d240d984f4fd9326c878ebc856f12c3f1da
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorMenuAttribute.#ctor(System.String,System.String,System.Int32,System.Boolean)"
source: xml
reviewed: 5b8bc61be60e2d4e4e49393a108d4d08b5ab06ca304a9a80c01d8535c669a5c4
title: "EditorMenuAttribute.Constructor"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Creates a static placement for the annotated action on an exact menu surface.

## Parameters

**Parameter `area`:** The exact interaction area whose menu receives the action.

**Parameter `path`:** The slash-delimited path used to create parent menus and the leaf label.

**Parameter `order`:** The stable ordering value among sibling placements.

**Parameter `separatorBefore`:** Whether a visual separator should precede the leaf placement.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `area` or `path` is empty.
