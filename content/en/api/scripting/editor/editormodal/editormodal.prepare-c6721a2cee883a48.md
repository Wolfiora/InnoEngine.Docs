---
uid: api.c6721a2cee883a48155364c7ba45325d525d28395df7d047648d474930d6e58f
symbol: "scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorModal.Prepare(InnoEditor.Core.EditorContext,System.Numerics.Vector2)"
source: xml
reviewed: 35f27696bc9788fcc2f4a2cbecbe20490237779ded5a97b719543f49793840bb
title: "EditorModal.Prepare"
kind: api
owners: [Inno.Editor.Core]
apiSurface: editor-script
apiScope: Editor
---

Captures presentation state before submitting content. Content-sized windows prepare before opening; explicitly sized resizable windows prepare after current input establishes their content bounds.

## Parameters

**Parameter `context`:** The owner-thread editor context for this frame.

**Parameter `availableContentSize`:** The bounded content area in current presentation coordinates, already scaled.

## Returns

The required content size, or null for an explicitly sized window.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The context is null.

**Exception `T:System.ArgumentOutOfRangeException`:** The available extent is not finite and positive.
