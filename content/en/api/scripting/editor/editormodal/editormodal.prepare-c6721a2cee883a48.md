---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.c6721a2cee883a48155364c7ba45325d525d28395df7d047648d474930d6e58f
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorModal.Prepare(InnoEditor.Core.EditorContext,System.Numerics.Vector2)
title: EditorModal.Prepare
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
sourceFingerprint: 0bfccf506432310d0e8a751d85aee939e6748326b6406bc034688b91c1842a8a
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The owner-thread editor context for this frame.

**Parameter `availableContentSize`:** The bounded content area in current presentation coordinates, already scaled.

## Returns

The required content size, or null for an explicitly sized window.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The context is null.

**Exception `T:System.ArgumentOutOfRangeException`:** The available extent is not finite and positive.
