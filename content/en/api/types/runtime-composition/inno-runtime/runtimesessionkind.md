---
title: "RuntimeSessionKind"
description: "Reference for RuntimeSessionKind in Inno.Runtime."
uid: api.inno.runtime.2d0639efb337203c
kind: api
owners:
  - Inno.Runtime
apiSurface: source-clr
contracts:
  - project.inno-runtime
---
# `RuntimeSessionKind`

This reference describes `RuntimeSessionKind` in `Inno.Runtime`. Read the [shared contract](../../../projects/inno-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Edit`](#api-3656152e6bf46334) | Field |
| [`Play`](#api-e575e4e562ce8a76) | Field |
| [`Player`](#api-8b49b0273aeae0e5) | Field |

## Type declaration

<a id="api-2d0639efb337203c"></a>
<!-- api: T:Inno.Runtime.RuntimeSessionKind 823cd51ac54ad8da8065b938a67fa4c8235aa66bfe43077e95c151a111d52e1c -->

```csharp
public enum Inno.Runtime.RuntimeSessionKind : int
```

Identifies the ownership and lifecycle semantics of an isolated runtime session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSessionKind.cs#L6).

## `Edit`

<a id="api-3656152e6bf46334"></a>
<!-- api: F:Inno.Runtime.RuntimeSessionKind.Edit 69531f77588c58dd133e2f37454f877af9121fea0ab2ac7d952de507436c631c -->

```csharp
Inno.Runtime.RuntimeSessionKind.Edit = 0
```

An authoring session whose scene world remains editable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSessionKind.cs#L11).

## `Play`

<a id="api-e575e4e562ce8a76"></a>
<!-- api: F:Inno.Runtime.RuntimeSessionKind.Play cfcb4380cb7246ad15f13bfe1278f044167e78fbda1328bd8385e957e0e211ef -->

```csharp
Inno.Runtime.RuntimeSessionKind.Play = 1
```

A disposable Editor play-test session created from an immutable start snapshot.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSessionKind.cs#L16).

## `Player`

<a id="api-8b49b0273aeae0e5"></a>
<!-- api: F:Inno.Runtime.RuntimeSessionKind.Player 58683a1d779712e7e5995f7d3415f16404212e77aa7af486f2e4880fff27e165 -->

```csharp
Inno.Runtime.RuntimeSessionKind.Player = 2
```

A deployed standalone game session backed only by runtime artifacts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Hosting/RuntimeSessionKind.cs#L21).
