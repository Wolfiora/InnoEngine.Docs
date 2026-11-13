---
title: Inno.Core.Input
description: Cross-platform key, modifier, mouse-button and cursor values without polling or frame-state ownership.
uid: project.inno-core-input
kind: project
owners:
  - Inno.Core.Input
---
# Inno.Core.Input

This project defines input values shared by runtime services and host event boundaries. It does not poll devices, own key state, dispatch events or choose a platform backend. Start with [reading keyboard, pointer and text input](../../manual/input/read-input.md) for actual runtime use.

## Input value contract

`KeyCode` names physical key identities, including letters, main-row digits, control/navigation keys, left/right modifiers, numpad digits, locks, F1–F12 and punctuation. Compare semantic enum values rather than assuming every platform supplies the same raw integer. `Unknown` represents an unmapped key; the set is not a promise that all possible hardware keys are represented.

`KeyModifier` is a flags value containing Alt, Control, Shift and Super, with None for no flags. It describes combined modifier state, unlike a left/right physical modifier key. Super can represent a platform's Command/Windows key, but selecting the user's primary shortcut convention belongs to the host.

`MouseButton` names left, right, middle and two extra buttons. `MouseCursor` selects a host cursor shape, including arrow, text, move/resize, hand and unavailable-operation shapes. None does not itself hide a cursor or invoke a window API; the consuming host defines that behavior.

KeyCode, KeyModifier and MouseButton are explicitly exported to Runtime scripts under `InnoEngine.Input`. MouseCursor remains outside that export list. This CLR reference does not imply script visibility for every public type. Text entry uses committed Unicode text from the input service, not conversion of a KeyCode into a character.

## API reference

Browse the [exact types and member contracts](../../api/engine/core/input/index.md) in the selected CLR surface. Each declaration links to its captured source and preserves its shared constraints.

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Runtime script API](../../api/scripting/index.md)
