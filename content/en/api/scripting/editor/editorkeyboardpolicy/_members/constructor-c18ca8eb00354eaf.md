---
uid: api.c18ca8eb00354eafaec56b931da17d3222e2d5a0d95bd43638298b3c03a0249d
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorKeyboardPolicy.#ctor(InnoEngine.Input.KeyModifier,System.String)"
source: xml
reviewed: 14db54e80501f10182f38033e976ff780701962a4e9b25706aacc3cf0024e5ba
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
