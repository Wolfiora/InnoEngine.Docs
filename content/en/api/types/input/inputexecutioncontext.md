---
title: "InputExecutionContext"
description: "Reference for InputExecutionContext in Inno.Input."
uid: api.inno.input.626f3678b873994f
kind: api
owners:
  - Inno.Input
apiSurface: source-clr
contracts:
  - project.inno-input#execution-and-ownership-contract
---
# `InputExecutionContext`

This reference describes `InputExecutionContext` in `Inno.Input`. Read the [shared contract](../../projects/inno-input.md#execution-and-ownership-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`EnterScope`](#api-1951673d9de5925d) | Method |
| [`TryGet`](#api-ca5afd1c01ee0194) | Method |
| [`current`](#api-31b6aa69f06eca5c) | Property |

## Type declaration

<a id="api-626f3678b873994f"></a>
<!-- api: T:Inno.Input.InputExecutionContext 76f0d1a7520d2b9c4aa9d31e9c38180aaa27651cd964d16226b483ae3a84836a -->

```csharp
public static class Inno.Input.InputExecutionContext
```

Binds one input service to the current asynchronous execution context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/Input.cs#L13).

## `EnterScope`

<a id="api-1951673d9de5925d"></a>
<!-- api: M:Inno.Input.InputExecutionContext.EnterScope(Inno.Input.IInputService) 2365f5b098710f3e56639c267b82f3370261355334396de02c2edbfc972489fb -->

```csharp
public static System.IDisposable Inno.Input.InputExecutionContext.EnterScope(Inno.Input.IInputService input)
```

Binds an input service until the returned strict last-in-first-out scope is disposed.

**Parameter `input`:** The host-owned input service.

**Returns:** A strict last-in-first-out execution scope.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/Input.cs#L45).

## `TryGet`

<a id="api-ca5afd1c01ee0194"></a>
<!-- api: M:Inno.Input.InputExecutionContext.TryGet(Inno.Input.IInputService@) 1f76ef4b4f9de4a53b0a50d02d9ef79a8987735a5249c91c43148fa4d60d2d38 -->

```csharp
public static bool Inno.Input.InputExecutionContext.TryGet(out Inno.Input.IInputService? input)
```

Tries to read input when a host has installed an input subsystem for this frame.

**Parameter `input`:** Bound service, or null when unavailable.

**Returns:** Whether a live input service is bound.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/Input.cs#L34).

## `current`

<a id="api-31b6aa69f06eca5c"></a>
<!-- api: P:Inno.Input.InputExecutionContext.current 418ed6b958d95472009d390e8f163cd45d66d11160ea38ba68683355464c867e -->

```csharp
public static Inno.Input.IInputService Inno.Input.InputExecutionContext.current { get; }
```

Gets the input service bound to the current execution context.

**Throws `System.InvalidOperationException`:** Thrown when no input scope is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/services/input/Inno.Input/Input.cs#L23).
