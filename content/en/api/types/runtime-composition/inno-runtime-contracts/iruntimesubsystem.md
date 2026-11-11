---
title: "IRuntimeSubsystem"
description: "Reference for IRuntimeSubsystem in Inno.Runtime.Contracts."
uid: api.inno.runtime.contracts.65155321de3d06c0
kind: api
owners:
  - Inno.Runtime.Contracts
apiSurface: source-clr
contracts:
  - project.inno-runtime-contracts
---
# `IRuntimeSubsystem`

This reference describes `IRuntimeSubsystem` in `Inno.Runtime.Contracts`. Read the [shared contract](../../../projects/inno-runtime-contracts.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`AfterRender`](#api-adc4365bffa7bf17) | Method |
| [`Attach`](#api-2984536823dc7d73) | Method |
| [`BeforeRender`](#api-ed91f0325b411a34) | Method |
| [`BeginFrame`](#api-bfcbd2e08961e975) | Method |
| [`Detach`](#api-2528e70f5e706dcd) | Method |
| [`EndFrame`](#api-1ac22947b1bf5ad6) | Method |
| [`FixedUpdate`](#api-8114b56b5c6584b5) | Method |
| [`LateUpdate`](#api-856721e3449b61c1) | Method |
| [`Render`](#api-a4d06f0d6cbe6a4d) | Method |
| [`Update`](#api-8f529bf1988012eb) | Method |

## Type declaration

<a id="api-65155321de3d06c0"></a>
<!-- api: T:Inno.Runtime.Contracts.IRuntimeSubsystem 93753e614ee597c8aa2f6d4eb3a3803f639aff99c0125aa802ccc9c02bbda61a -->

```csharp
public interface Inno.Runtime.Contracts.IRuntimeSubsystem : System.IDisposable
```

Participates in the ordered lifecycle of one isolated runtime session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/IRuntimeSubsystem.cs#L8).

## `AfterRender`

<a id="api-adc4365bffa7bf17"></a>
<!-- api: M:Inno.Runtime.Contracts.IRuntimeSubsystem.AfterRender(Inno.Runtime.Contracts.RuntimeFrame) 04e6c087a97736d37600d96af8c83bf0028c271fb9c0a4f4d9c506777d827bf4 -->

```csharp
void Inno.Runtime.Contracts.IRuntimeSubsystem.AfterRender(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Finalizes frame output even when rendering fails.

**Parameter `frame`:** The immutable variable-frame state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/IRuntimeSubsystem.cs#L69).

## `Attach`

<a id="api-2984536823dc7d73"></a>
<!-- api: M:Inno.Runtime.Contracts.IRuntimeSubsystem.Attach 715a21cecd468bac039f2840e37191bcbf59f3194447a5e57f8bf14398d998c2 -->

```csharp
void Inno.Runtime.Contracts.IRuntimeSubsystem.Attach()
```

Acquires session resources after every dependency has attached.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/IRuntimeSubsystem.cs#L13).

## `BeforeRender`

<a id="api-ed91f0325b411a34"></a>
<!-- api: M:Inno.Runtime.Contracts.IRuntimeSubsystem.BeforeRender(Inno.Runtime.Contracts.RuntimeFrame) 32b517b6caf84ff7833b670472e9b3abe2a5134ce2a9f7ab03cde1c2d93a3ef4 -->

```csharp
void Inno.Runtime.Contracts.IRuntimeSubsystem.BeforeRender(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Prepares frame output after simulation has completed.

**Parameter `frame`:** The immutable variable-frame state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/IRuntimeSubsystem.cs#L53).

## `BeginFrame`

<a id="api-bfcbd2e08961e975"></a>
<!-- api: M:Inno.Runtime.Contracts.IRuntimeSubsystem.BeginFrame(Inno.Runtime.Contracts.RuntimeFrame) 89ad63e504a249a8470b5ecaa77d348e628c309f450989a3cb2b9a6c9b000cca -->

```csharp
void Inno.Runtime.Contracts.IRuntimeSubsystem.BeginFrame(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Begins one frame before event dispatch and simulation.

**Parameter `frame`:** The immutable variable-frame state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/IRuntimeSubsystem.cs#L21).

## `Detach`

<a id="api-2528e70f5e706dcd"></a>
<!-- api: M:Inno.Runtime.Contracts.IRuntimeSubsystem.Detach b8728bf1c672a94b19a69fe5b174e68b621770faab2e66161553926fb0377be4 -->

```csharp
void Inno.Runtime.Contracts.IRuntimeSubsystem.Detach()
```

Releases attached session resources before dependencies detach.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/IRuntimeSubsystem.cs#L82).

## `EndFrame`

<a id="api-1ac22947b1bf5ad6"></a>
<!-- api: M:Inno.Runtime.Contracts.IRuntimeSubsystem.EndFrame(Inno.Runtime.Contracts.RuntimeFrame) d6c17ab91017ea509b46e05c3a07bf189c11dde6020a4d29e322b3982b68dc9d -->

```csharp
void Inno.Runtime.Contracts.IRuntimeSubsystem.EndFrame(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Ends one frame and releases frame-scoped state.

**Parameter `frame`:** The immutable variable-frame state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/IRuntimeSubsystem.cs#L77).

## `FixedUpdate`

<a id="api-8114b56b5c6584b5"></a>
<!-- api: M:Inno.Runtime.Contracts.IRuntimeSubsystem.FixedUpdate(Inno.Runtime.Contracts.RuntimeFixedFrame) 48e198d649b26b093b34ac71a1b6c5ccde4979cd2d5e3f46740486c79f43ff86 -->

```csharp
void Inno.Runtime.Contracts.IRuntimeSubsystem.FixedUpdate(Inno.Runtime.Contracts.RuntimeFixedFrame frame)
```

Advances one deterministic simulation step.

**Parameter `frame`:** The immutable fixed-step state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/IRuntimeSubsystem.cs#L29).

## `LateUpdate`

<a id="api-856721e3449b61c1"></a>
<!-- api: M:Inno.Runtime.Contracts.IRuntimeSubsystem.LateUpdate(Inno.Runtime.Contracts.RuntimeFrame) 8947010d54249af687a392ddec3b2b1d32e334e46ec89cbd9b6254bb41c13733 -->

```csharp
void Inno.Runtime.Contracts.IRuntimeSubsystem.LateUpdate(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Advances state that depends on completed variable simulation.

**Parameter `frame`:** The immutable variable-frame state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/IRuntimeSubsystem.cs#L45).

## `Render`

<a id="api-a4d06f0d6cbe6a4d"></a>
<!-- api: M:Inno.Runtime.Contracts.IRuntimeSubsystem.Render(Inno.Runtime.Contracts.RuntimeFrame) 0943e9bcbb198e9e6ab96bc12e606111bd114915c52b56ae7415949c34d624fd -->

```csharp
void Inno.Runtime.Contracts.IRuntimeSubsystem.Render(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Produces frame output owned by this subsystem.

**Parameter `frame`:** The immutable variable-frame state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/IRuntimeSubsystem.cs#L61).

## `Update`

<a id="api-8f529bf1988012eb"></a>
<!-- api: M:Inno.Runtime.Contracts.IRuntimeSubsystem.Update(Inno.Runtime.Contracts.RuntimeFrame) 8d531af1600b5c72c21c9ab9314a050512d02b011e23638084902a3b18edb857 -->

```csharp
void Inno.Runtime.Contracts.IRuntimeSubsystem.Update(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Advances variable simulation state.

**Parameter `frame`:** The immutable variable-frame state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/contracts/Inno.Runtime.Contracts/IRuntimeSubsystem.cs#L37).
