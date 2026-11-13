---
uid: api.0de4ebb3b9b083d7cb205bc1a060d9e6f5e98f09ca92ce8d4d53bbb2a4f393de
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorPanelAttribute.#ctor(System.String,System.String,System.Int32,System.Boolean,System.String,System.Boolean)"
source: xml
reviewed: e6fcb24c010d5384cfaedbed275d3aae241f8bd7ed013ed2a6fb1ec99211462c
title: "Constructor"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Creates a dockable panel registration with stable identity and presentation metadata.

**Parameter `id`:** The stable identity used for Panel-menu routing and reload-state retention.

**Parameter `title`:** The visible dockable-window title.

**Parameter `order`:** The stable panel and generated Panel-menu ordering value.

**Parameter `defaultOpen`:** Whether a newly discovered panel is visible before retained state is available.

**Parameter `menuPath`:** The optional slash-delimited category path under the generated `Panel` menu.

**Parameter `separatorBefore`:** Whether the generated toggle is preceded by a separator within its final menu category.

**Exception `T:System.ArgumentException`:** Thrown when `id` or `title` is empty, or when `menuPath` contains an empty segment.
