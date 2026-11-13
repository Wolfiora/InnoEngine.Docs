---
title: Inno.Input
description: Backend-neutral keyboard, pointer and committed-text snapshots at runtime frame boundaries.
uid: project.inno-input
kind: project
owners:
  - Inno.Input
---
# Inno.Input

This project defines physical input independently of SDL, windows, the Editor and action-mapping systems. It uses Core key/button values and mathematics types. Runtime sessions own input state; the static `Input` facade only reads the service bound to the active execution context.

## Start with a task

[Read keyboard, pointer and text input](../../manual/input/read-input.md) explains which state to query and when. Host composition uses [Inno.Input.Runtime](inno-input-runtime.md), while [Inno.Adapter.Input](inno-adapter-input.md) supplies a common event implementation.

## Frame snapshots

`IInputBackend.Capture(frameIndex)` produces a complete immutable `InputSnapshot` and consumes transient presses, releases, movement, wheel deltas and text commits. Held state and pointer position persist according to the backend contract. A caller reads `IInputService.snapshot` throughout the frame instead of capturing again for each consumer.

Snapshots copy their supplied collections. Query order does not consume a key press or change another reader's result. The snapshot carries its frame index, modifiers and ordered Unicode text commits in addition to keyboard and pointer state. The constructor rejects a negative frame index and omits null/empty text commits. `InputSnapshot.empty` represents empty state rather than a live backend connection.

## Execution and ownership contract

`InputExecutionContext` uses the shared Core execution-slot mechanism to isolate asynchronous contexts. `EnterScope` borrows a service and returns a strict last-in-first-out scope. Disposing the scope removes that binding; it does not dispose the borrowed service. Hosts normally let the runtime subsystem own this scope and the backend.

`current` and the facade fail explicitly when no input scope is active. `TryGet` can inspect availability without pretending that an unavailable service is an empty frame. Retaining a snapshot preserves its captured values but does not keep it current. An asynchronous context binding is not permission to use platform objects from arbitrary threads.

The current contract includes keyboard, pointer buttons/motion/wheel and committed text. IME pre-edit/candidate UI, gamepad and touch are not part of this stable contract. Do not infer an Input Action system from the physical-key facade.

## API reference

The host declarations below are a source CLR surface. Script names and selected members come from the real script projection, not a namespace rewrite.

[Browse input types](../../api/engine/input/index.md).

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Runtime script API](../../api/scripting/index.md)
