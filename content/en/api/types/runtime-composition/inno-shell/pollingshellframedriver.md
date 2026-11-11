---
title: "PollingShellFrameDriver"
description: "Reference for PollingShellFrameDriver in Inno.Shell."
uid: api.inno.shell.57edc7000c86a3bb
kind: api
owners:
  - Inno.Shell
apiSurface: source-clr
contracts:
  - project.inno-shell
---
# `PollingShellFrameDriver`

This reference describes `PollingShellFrameDriver` in `Inno.Shell`. Read the [shared contract](../../../projects/inno-shell.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Shell.IShellFrameDriver`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-599a5a3679c40db7) | Method |
| [`RunAsync`](#api-c726fe206414e781) | Method |
| [`allowsBlockingPacing`](#api-a2c06ab51290bac9) | Property |

## Type declaration

<a id="api-57edc7000c86a3bb"></a>
<!-- api: T:Inno.Shell.PollingShellFrameDriver 8e88ae0bd13f1b05d72e4c0898c5b3e1a082cbbfe3577ae642f2150d65634e1a -->

```csharp
public sealed class Inno.Shell.PollingShellFrameDriver : Inno.Shell.IShellFrameDriver
```

Runs an application-owned frame loop synchronously on its calling thread.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/PollingShellFrameDriver.cs#L10).

## `#ctor`

<a id="api-599a5a3679c40db7"></a>
<!-- api: M:Inno.Shell.PollingShellFrameDriver.#ctor a2921d79ec2546ca82fe873004fa8258d7d13c407a5f9d5f9fe5c33bc1a8e6de -->

```csharp
public Inno.Shell.PollingShellFrameDriver.PollingShellFrameDriver()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/PollingShellFrameDriver.cs#L10).

## `RunAsync`

<a id="api-c726fe206414e781"></a>
<!-- api: M:Inno.Shell.PollingShellFrameDriver.RunAsync(System.Func{System.Boolean},System.Threading.CancellationToken) 081d25069e067663bb6fdac22a0ac55e42b8031082c48a729ebdf2e1731446cf -->

```csharp
public System.Threading.Tasks.ValueTask Inno.Shell.PollingShellFrameDriver.RunAsync(System.Func<bool> advanceFrame, System.Threading.CancellationToken cancellationToken)
```

Advances frames until the callback stops the loop, cancellation is requested or a callback fails.

**Parameter `advanceFrame`:** The owner-thread frame callback; false terminates the loop.

**Parameter `cancellationToken`:** Cancels before the next frame can execute.

**Returns:** Completion when the callback stops; cancellation and callback failures propagate to the owner.

**Throws `System.ArgumentNullException`:** The frame callback is null.

**Throws `System.OperationCanceledException`:** Cancellation was requested before a frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/PollingShellFrameDriver.cs#L35).

## `allowsBlockingPacing`

<a id="api-a2c06ab51290bac9"></a>
<!-- api: P:Inno.Shell.PollingShellFrameDriver.allowsBlockingPacing 480d7e37fe8cd7273998fd526d348ce5ac751fe5c665dcef99b9fbcc1630165a -->

```csharp
public bool Inno.Shell.PollingShellFrameDriver.allowsBlockingPacing { get; }
```

Gets whether this driver permits blocking frame pacing (true).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/PollingShellFrameDriver.cs#L15).
