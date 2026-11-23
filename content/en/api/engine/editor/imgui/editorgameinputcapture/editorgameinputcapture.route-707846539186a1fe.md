---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.707846539186a1fe95f8f50709f4f26739a72215fc1ee50e6b08aa3c72850629
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.EditorGameInputCapture.Route(Inno.Core.Events.Event)
title: EditorGameInputCapture.Route
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
sourceFingerprint: 049b209bb35b521f5f3ef2ffadf3f4b26cb405ea9e7b510e1d03041585340a7a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `evnt`:** The original backend-neutral platform event.

## Returns

A routed event or a synthetic focus reset, or null when the Game View must not receive input.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when the event is null.

## Remarks

A globally consumed key, button, focus or close release is not replayed to the game. It returns a new focus-reset event so previously held input is released before simulation. Consumed pointer movement still updates hit-test bounds without reaching the game backend.
