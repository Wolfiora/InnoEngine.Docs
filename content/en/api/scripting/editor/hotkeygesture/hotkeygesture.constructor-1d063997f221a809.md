---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.1d063997f221a8090e3c8bb7b71a6f8c7d310f455d53a837dbdada74fe909949
symbol: scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.HotKeyGesture.#ctor(InnoEngine.Input.KeyCode,InnoEngine.Input.KeyModifier,System.String)
title: HotKeyGesture.Constructor
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: editor-script
reviewed: 63ad82552c99984a568921df22c154543042b83ac50cee0df3536b6522a5041b
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `key`:** The non-modifier key in the gesture.

**Parameter `modifiers`:** The modifier keys required by the gesture.

**Parameter `superModifierLabel`:** The display name of the Super modifier; the neutral name is used for explicitly constructed gestures.

## Exceptions

**Exception `T:System.ArgumentException`:** The modifier label is empty.
