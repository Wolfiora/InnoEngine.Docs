---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.707846539186a1fe95f8f50709f4f26739a72215fc1ee50e6b08aa3c72850629
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.EditorGameInputCapture.Route(Inno.Core.Events.Event)
title: EditorGameInputCapture.Route
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
sourceFingerprint: 091600edcea8115164fe23095b0e706260a9a37322ae206b08ea04fe649105be
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

## Remarks

A globally consumed key, button, focus or close release is not replayed to the game. It returns a new focus-reset event so previously held input is released before simulation. Consumed pointer movement still updates hit-test bounds without reaching the game backend.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when the event is null.
