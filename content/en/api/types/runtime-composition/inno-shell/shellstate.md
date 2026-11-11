---
title: "ShellState"
description: "Reference for ShellState in Inno.Shell."
uid: api.inno.shell.a761c86bc837a685
kind: api
owners:
  - Inno.Shell
apiSurface: source-clr
contracts:
  - project.inno-shell
---
# `ShellState`

This reference describes `ShellState` in `Inno.Shell`. Read the [shared contract](../../../projects/inno-shell.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Created`](#api-e01af4c9044f5bc1) | Field |
| [`Disposed`](#api-07d9404a6185f130) | Field |
| [`Faulted`](#api-3af9797c3727452c) | Field |
| [`Ready`](#api-9d85225eaaacfe2c) | Field |
| [`Running`](#api-879f9dedd7965927) | Field |
| [`Stopped`](#api-f69150a7df5342f4) | Field |
| [`Stopping`](#api-b7489c0c7e107c22) | Field |
| [`Suspended`](#api-ca50aef073c3b0bc) | Field |

## Type declaration

<a id="api-a761c86bc837a685"></a>
<!-- api: T:Inno.Shell.ShellState 15fbdece45d4b17ee01994736ddf8a85ea5068cd5d4de4824c1c5f50e4f001b5 -->

```csharp
public enum Inno.Shell.ShellState : int
```

Describes the observable lifetime of one owner-thread composition shell.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ShellState.cs#L6).

## `Created`

<a id="api-e01af4c9044f5bc1"></a>
<!-- api: F:Inno.Shell.ShellState.Created acb509e99ef0cd62aeff553d1d82e2145ec5c6dd63d7f5d9e4a9854bf85fb45d -->

```csharp
Inno.Shell.ShellState.Created = 0
```

Adapter resources have not been initialized.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ShellState.cs#L11).

## `Disposed`

<a id="api-07d9404a6185f130"></a>
<!-- api: F:Inno.Shell.ShellState.Disposed 80b7d16959cb13cca06d7c3f95595d6015187e81179948643b0264e600eca7ce -->

```csharp
Inno.Shell.ShellState.Disposed = 7
```

All owned resources were released successfully.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ShellState.cs#L46).

## `Faulted`

<a id="api-3af9797c3727452c"></a>
<!-- api: F:Inno.Shell.ShellState.Faulted f0a4f68901d8af5e0a5bbef10fbfad28e7404f8e63fbfd3aa2227036876483fb -->

```csharp
Inno.Shell.ShellState.Faulted = 6
```

Initialization, execution, or retirement failed; another run is prohibited.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ShellState.cs#L41).

## `Ready`

<a id="api-9d85225eaaacfe2c"></a>
<!-- api: F:Inno.Shell.ShellState.Ready dc6f6392450b5236ac12c6066a972071568c3cf208effdf83c4bc098cb6c91fc -->

```csharp
Inno.Shell.ShellState.Ready = 1
```

Adapter resources are ready for the single permitted run.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ShellState.cs#L16).

## `Running`

<a id="api-879f9dedd7965927"></a>
<!-- api: F:Inno.Shell.ShellState.Running 1d6b4fea915fbf26fda6fca4d1c1bb9954e463f41ba257851e0663b2c5c6d020 -->

```csharp
Inno.Shell.ShellState.Running = 2
```

Platform events and product frames are advancing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ShellState.cs#L21).

## `Stopped`

<a id="api-f69150a7df5342f4"></a>
<!-- api: F:Inno.Shell.ShellState.Stopped 7936124551c1c5868262f1286bf661be15b86438a91918085b9bb620e0cdd6a8 -->

```csharp
Inno.Shell.ShellState.Stopped = 5
```

The run ended or was canceled and the stopping callback completed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ShellState.cs#L36).

## `Stopping`

<a id="api-b7489c0c7e107c22"></a>
<!-- api: F:Inno.Shell.ShellState.Stopping 4243eaa31e86c9b63d9ad2679c69a5a040fa8c7ee7d2a0062e949b016880c63a -->

```csharp
Inno.Shell.ShellState.Stopping = 4
```

The stopping callback is executing while resources remain alive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ShellState.cs#L31).

## `Suspended`

<a id="api-ca50aef073c3b0bc"></a>
<!-- api: F:Inno.Shell.ShellState.Suspended 554ab66630d007079940330a777311e06173ed2eb78c92ad2400f661c61d94de -->

```csharp
Inno.Shell.ShellState.Suspended = 3
```

Platform events continue while product frames and their clock are suspended.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/shell/Inno.Shell/ShellState.cs#L26).
