---
uid: api.03cdb4fd155f44de4a009e9dfc4d87ade86cd4380e1ddbb215b62c1dd491c26d
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorMenuBuilder.Add(System.String,System.String,System.Int32,System.Boolean,System.Object)"
source: xml
reviewed: 84753f73ebcf3a8d292ccb871f6990a4dd6c35da492574b22fb9189ec722d645
title: "Add"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Adds a dynamic action placement to the menu currently being constructed.

**Parameter `path`:** The slash-delimited path used to create parent menus and the leaf label.

**Parameter `actionId`:** The stable action identifier invoked by the leaf.

**Parameter `order`:** The stable ordering value among sibling placements.

**Parameter `separatorBefore`:** Whether a visual separator should precede the leaf placement.

**Parameter `argument`:** An optional argument captured for this menu generation.

**Exception `T:System.ArgumentException`:** Thrown when `path` or `actionId` is empty.
