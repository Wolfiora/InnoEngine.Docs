---
uid: api.ada9bc60c3e57f8177fff2bf5e56d3730688c560fef8b090e446d2c707957082
symbol: "scripting:Inno.Editor.Settings:M:InnoEditor.Settings.EditorSettingPathAttribute.#ctor(System.String,System.Int32)"
source: xml
reviewed: a7b966d68db3d377230bbd335f233ea86ecaa01c32352a521dd355fdb0609e70
title: "Constructor"
kind: api
owners: [Inno.Editor.Settings]
apiSurface: editor-script
apiScope: Editor
---

Creates a path placement. A definition that overrides its drawing method becomes a field; a definition that keeps the default drawing method describes the page at the complete path.

**Parameter `path`:** The slash-delimited page and field path.

**Parameter `order`:** The stable order among fields with the same section and label.

**Exception `T:System.ArgumentException`:** Thrown when `path` contains an empty segment or is outside the `Editor` root.
