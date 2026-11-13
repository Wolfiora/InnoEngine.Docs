---
uid: api.c18ca8eb00354eafaec56b931da17d3222e2d5a0d95bd43638298b3c03a0249d
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorKeyboardPolicy.#ctor(InnoEngine.Input.KeyModifier,System.String)"
source: xml
reviewed: 21a35c223177ed94de1457ff61bc24086e8f25ec78aebb84baaa826e3bdef2d4
title: "Constructor"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Defines the primary shortcut modifier and the display name of the Super modifier.

**Parameter `primaryModifier`:** One Control, Super or Alt modifier used by symbolic primary shortcuts.

**Parameter `superModifierLabel`:** The nonempty product-specific name displayed for the Super modifier.

**Exception `T:System.ArgumentException`:** The modifier is not one supported modifier or the label is empty.
