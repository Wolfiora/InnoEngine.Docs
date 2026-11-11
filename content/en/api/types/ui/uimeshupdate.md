---
title: "UiMeshUpdate"
description: "Reference for UiMeshUpdate in Inno.UI."
uid: api.inno.ui.88856152b18fc320
kind: api
owners:
  - Inno.UI
apiSurface: source-clr
contracts:
  - project.inno-ui#document-and-frame-contract
---
# `UiMeshUpdate`

This reference describes `UiMeshUpdate` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`indices`](#api-3410827e0af95452) | Property |
| [`mesh`](#api-28cfbbfa223bc23b) | Property |
| [`revision`](#api-07bb41eb0d7ae767) | Property |
| [`vertices`](#api-afe65db2abdf85ae) | Property |

## Type declaration

<a id="api-88856152b18fc320"></a>
<!-- api: T:Inno.UI.UiMeshUpdate 08340e9b7e7204dea5fd303ba8a9b84aac0013e85743bf2d5f0aa904d4e17a10 -->

```csharp
public sealed class Inno.UI.UiMeshUpdate
```

Publishes one immutable mesh generation to a rendering plugin.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L58).

## `indices`

<a id="api-3410827e0af95452"></a>
<!-- api: P:Inno.UI.UiMeshUpdate.indices 41dd8bc9045d00fba738457d8faa8f5eaa7765da56c2bd97725a56b089a7dd68 -->

```csharp
public System.Collections.Generic.IReadOnlyList<uint> Inno.UI.UiMeshUpdate.indices { get; }
```

Gets immutable triangle indices.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L90).

## `mesh`

<a id="api-28cfbbfa223bc23b"></a>
<!-- api: P:Inno.UI.UiMeshUpdate.mesh ef7ef207c5bcd2278eb1ef1e41b03ad484794c2fe8e3716d3e353a9bf52c1adb -->

```csharp
public Inno.UI.UiMeshHandle Inno.UI.UiMeshUpdate.mesh { get; }
```

Gets the generation-scoped mesh handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L78).

## `revision`

<a id="api-07bb41eb0d7ae767"></a>
<!-- api: P:Inno.UI.UiMeshUpdate.revision 83f18216b40c4dafb7f5b3499d16f58a255dfd01ab2f92cda02ffbc3bf749131 -->

```csharp
public ulong Inno.UI.UiMeshUpdate.revision { get; }
```

Gets the monotonically increasing mesh content revision.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L82).

## `vertices`

<a id="api-afe65db2abdf85ae"></a>
<!-- api: P:Inno.UI.UiMeshUpdate.vertices f921a3438fd12434f4cee42e62a2f5be97ac7294a48802eeec5f1a2c94f9febf -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.UI.UiVertex> Inno.UI.UiMeshUpdate.vertices { get; }
```

Gets immutable local-space vertices.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L86).
