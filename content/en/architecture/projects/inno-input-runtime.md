---
title: Inno.Input.Runtime
description: Session ownership and frame-scoped access for a selected input backend.
uid: project.inno-input-runtime
kind: project
owners:
  - Inno.Input.Runtime
---
# Inno.Input.Runtime

This project integrates physical input with the runtime subsystem lifecycle. Each session gets its own `IInputBackend`, immutable current snapshot and frame scope. The implementation does not depend on SDL or a real input device.

## Compose a session

Add an `InputRuntimeFactory` to the composition root's `RuntimeSessionOptions.subsystemFactories`. Its callback receives the actual session context and must create a distinct, exclusively owned backend. A reusable factory can participate in Edit, Play and Player composition without sharing transient state between sessions.

The factory's stable subsystem identity is `inno.runtime.input`, with order `-1000`. A null callback is rejected; a callback returning null fails session creation. Construction failure follows the runtime's compensation protocol for already-created subsystems.

## Frame and lifetime contract

`InputRuntime` takes ownership of the backend. At `OnBeginFrame`, it captures the frame-indexed snapshot once and registers an `InputExecutionContext` scope through `OwnFrameScope`. Runtime frame teardown closes scopes in reverse order, including incomplete-frame compensation.

The subsystem releases its backend in `OnStop` after its frame scope and owned work have quiesced. The host drives this lifecycle. Do not dispose the transferred backend independently or share one backend instance across sessions.

The current snapshot is initially empty. Capturing a new frame replaces the service's snapshot; previously returned immutable snapshots retain their old values. Callers must use the session's current frame rather than interpreting an old retained snapshot as fresh input.

## Boundary and validation

The domain can be tested with synthetic backends without Native preparation. Real platform event translation, window focus and Editor GameView filtering have separate integration requirements. Passing the domain suite does not validate a physical device or a native window.

Read [the input task](../../manual/input/read-input.md) for consumption and [event backend composition](inno-adapter-input.md) for the shared platform-event path.

## API reference

Exact constructor, factory and protected lifecycle declarations are captured from the selected engine source.

[Browse input runtime types](../../api/engine/input/runtime/index.md).
