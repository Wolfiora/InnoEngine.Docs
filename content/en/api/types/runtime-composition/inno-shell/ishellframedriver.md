---
title: "IShellFrameDriver"
description: "Reference for IShellFrameDriver in Inno.Shell."
uid: api.inno.shell.d948dbe8c99e61ba
kind: api
owners:
  - Inno.Shell
apiSurface: source-clr
contracts:
  - project.inno-shell
---
# `IShellFrameDriver`

This reference describes `IShellFrameDriver` in `Inno.Shell`. Read the [shared contract](../../../projects/inno-shell.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`RunAsync`](#api-f37c1b4fcffdda23) | Method |
| [`allowsBlockingPacing`](#api-02830b7d2f6f49c6) | Property |

## Type declaration

<a id="api-d948dbe8c99e61ba"></a>
<!-- api: T:Inno.Shell.IShellFrameDriver 2991c79d8ed45aae5857f47c31019cc543c35cbe01bc687b0e9433d4aa61f938 -->

```csharp
public interface Inno.Shell.IShellFrameDriver
```

Gives a host ownership of frame scheduling while the shell owns frame execution and retirement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/IShellFrameDriver.cs#L10).

## `RunAsync`

<a id="api-f37c1b4fcffdda23"></a>
<!-- api: M:Inno.Shell.IShellFrameDriver.RunAsync(System.Func{System.Boolean},System.Threading.CancellationToken) b5c25d4365b477be661108837878742b5a86ff772e58aed1e269f6941b2eabdf -->

```csharp
System.Threading.Tasks.ValueTask Inno.Shell.IShellFrameDriver.RunAsync(System.Func<bool> advanceFrame, System.Threading.CancellationToken cancellationToken)
```

Schedules frames on the owning thread until a frame callback requests termination.

**Parameter `advanceFrame`:** Executes one frame and returns true when the host should schedule another frame.

**Parameter `cancellationToken`:** Requests termination before the next frame.

**Returns:** Completion after scheduling ends; callback failures must propagate to the shell.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/IShellFrameDriver.cs#L29).

## `allowsBlockingPacing`

<a id="api-02830b7d2f6f49c6"></a>
<!-- api: P:Inno.Shell.IShellFrameDriver.allowsBlockingPacing 049e38e6fb539fc13b7ed0e8061c9f98da35b7c0f5371557dc56dd81bbad04d8 -->

```csharp
bool Inno.Shell.IShellFrameDriver.allowsBlockingPacing { get; }
```

Gets whether the shell may block the calling thread to enforce its frame rate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/IShellFrameDriver.cs#L15).
