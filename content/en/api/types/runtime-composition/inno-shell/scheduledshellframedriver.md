---
title: "ScheduledShellFrameDriver"
description: "Reference for ScheduledShellFrameDriver in Inno.Shell."
uid: api.inno.shell.fa5fbaa941203d8c
kind: api
owners:
  - Inno.Shell
apiSurface: source-clr
contracts:
  - project.inno-shell
---
# `ScheduledShellFrameDriver`

This reference describes `ScheduledShellFrameDriver` in `Inno.Shell`. Read the [shared contract](../../../projects/inno-shell.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Shell.IShellFrameDriver`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-cbb92cf3ae88ac68) | Method |
| [`RunAsync`](#api-3701ad4c62376278) | Method |
| [`allowsBlockingPacing`](#api-ba81d8afcc5bac6d) | Property |

## Type declaration

<a id="api-fa5fbaa941203d8c"></a>
<!-- api: T:Inno.Shell.ScheduledShellFrameDriver b807de2b2927ba2cbcbd8e4f555c0d650994594992c57210c7fa5d909e99e597 -->

```csharp
public sealed class Inno.Shell.ScheduledShellFrameDriver : Inno.Shell.IShellFrameDriver
```

Runs frames when an external host grants a nonblocking presentation opportunity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ScheduledShellFrameDriver.cs#L10).

## `#ctor`

<a id="api-cbb92cf3ae88ac68"></a>
<!-- api: M:Inno.Shell.ScheduledShellFrameDriver.#ctor(System.Func{System.Threading.CancellationToken,System.Threading.Tasks.ValueTask}) 2889e3aac3edb22c445ab760ca6a7967e99dc1000981f819d657d414be13ab2d -->

```csharp
public Inno.Shell.ScheduledShellFrameDriver.ScheduledShellFrameDriver(System.Func<System.Threading.CancellationToken, System.Threading.Tasks.ValueTask> nextFrame)
```

Creates a driver whose scheduling callback resumes on the frame owner's thread.

**Parameter `nextFrame`:** The callback that waits for a presentation opportunity and observes cancellation.

**Throws `System.ArgumentNullException`:** The callback is null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ScheduledShellFrameDriver.cs#L23).

## `RunAsync`

<a id="api-3701ad4c62376278"></a>
<!-- api: M:Inno.Shell.ScheduledShellFrameDriver.RunAsync(System.Func{System.Boolean},System.Threading.CancellationToken) 7396972093fcd0948e999010916d786b244add17e938555b442d2d9a8227591e -->

```csharp
public System.Threading.Tasks.ValueTask Inno.Shell.ScheduledShellFrameDriver.RunAsync(System.Func<bool> advanceFrame, System.Threading.CancellationToken cancellationToken)
```

Advances frames until the callback stops the loop, cancellation is requested or a callback fails.

**Parameter `advanceFrame`:** The owner-thread frame callback; false terminates the loop.

**Parameter `cancellationToken`:** Cancels before the next frame can execute.

**Returns:** Completion when the callback stops; cancellation and callback failures propagate to the owner.

**Throws `System.ArgumentNullException`:** The frame callback is null.

**Throws `System.OperationCanceledException`:** Cancellation was requested before a frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ScheduledShellFrameDriver.cs#L51).

## `allowsBlockingPacing`

<a id="api-ba81d8afcc5bac6d"></a>
<!-- api: P:Inno.Shell.ScheduledShellFrameDriver.allowsBlockingPacing 32ad9e0951dda110bdd65ca7d7699382a52c4a485bed4386402c17f10fd5e087 -->

```csharp
public bool Inno.Shell.ScheduledShellFrameDriver.allowsBlockingPacing { get; }
```

Gets whether this driver permits blocking frame pacing (false).


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ScheduledShellFrameDriver.cs#L31).
