---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c18ca8eb00354eafaec56b931da17d3222e2d5a0d95bd43638298b3c03a0249d
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorKeyboardPolicy.#ctor(InnoEngine.Input.KeyModifier,System.String)
title: EditorKeyboardPolicy.Constructor
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
reviewed: 15e50f54f8afe0a08d7077055818268ae7de92a648bd8777afd50e892b761244
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `primaryModifier`:** One Control, Super or Alt modifier used by symbolic primary shortcuts.

**Parameter `superModifierLabel`:** The nonempty product-specific name displayed for the Super modifier.

## Exceptions

**Exception `T:System.ArgumentException`:** The modifier is not one supported modifier or the label is empty.
