---
title: "GameCodeDeployment"
description: "Reference for GameCodeDeployment in Inno.Runtime."
uid: api.inno.runtime.707ec0b2cbae55b5
kind: api
owners:
  - Inno.Runtime
apiSurface: source-clr
contracts:
  - project.inno-runtime
---
# `GameCodeDeployment`

This reference describes `GameCodeDeployment` in `Inno.Runtime`. Read the [shared contract](../../../projects/inno-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-90f055bfa1288241) | Method |
| [`FromManifest`](#api-5a5c17c6f19e7d62) | Method |
| [`ValidateMatches`](#api-c32544cc2708e388) | Method |
| [`modules`](#api-0a60e88148613896) | Property |

## Type declaration

<a id="api-707ec0b2cbae55b5"></a>
<!-- api: T:Inno.Runtime.GameCodeDeployment 2b6718ff4c71247306783f619811c5670408d35252b184f3e1e383b5d22f6ca4 -->

```csharp
public sealed class Inno.Runtime.GameCodeDeployment
```

Owns a validated, immutable and dependency-ordered logical game code closure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameCodeDeployment.cs#L11).

## `#ctor`

<a id="api-90f055bfa1288241"></a>
<!-- api: M:Inno.Runtime.GameCodeDeployment.#ctor(System.Collections.Generic.IReadOnlyList{Inno.Runtime.GameCodeModule}) 7ea0b4cbe5d0abd6a6a1c0167de76acabada6c54d6324a482d505ccab058bdb9 -->

```csharp
public Inno.Runtime.GameCodeDeployment.GameCodeDeployment(System.Collections.Generic.IReadOnlyList<Inno.Runtime.GameCodeModule> modules)
```

Copies an explicit code closure and verifies unique ownership and dependency ordering.

**Parameter `modules`:** Ordered immutable module contributions; an empty closure describes an engine-only composition.

**Throws `System.IO.InvalidDataException`:** A module is null or duplicated, an assembly has multiple owners, or an upstream module is absent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameCodeDeployment.cs#L22).

## `FromManifest`

<a id="api-5a5c17c6f19e7d62"></a>
<!-- api: M:Inno.Runtime.GameCodeDeployment.FromManifest(System.Collections.Generic.IReadOnlyList{Inno.Runtime.GameRuntimeModule}) b20bb456f22bd8fc89e0fb6ec3605167fbfe2416b36687e814ce614d171c25aa -->

```csharp
public static Inno.Runtime.GameCodeDeployment Inno.Runtime.GameCodeDeployment.FromManifest(System.Collections.Generic.IReadOnlyList<Inno.Runtime.GameRuntimeModule> modules)
```

Freezes validated manifest declarations without retaining their mutable arrays or entries.

**Parameter `modules`:** Current-format runtime manifest declarations.

**Returns:** An immutable logical deployment; invalid declarations fail before activation.

**Throws `System.IO.InvalidDataException`:** A declaration or its ownership and dependencies are invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameCodeDeployment.cs#L58).

## `ValidateMatches`

<a id="api-c32544cc2708e388"></a>
<!-- api: M:Inno.Runtime.GameCodeDeployment.ValidateMatches(Inno.Runtime.GameCodeDeployment) 2710f2da5f32975b15b79af928dd1e78e5ab701a45ca284159feffd2084acfaf -->

```csharp
public void Inno.Runtime.GameCodeDeployment.ValidateMatches(Inno.Runtime.GameCodeDeployment expected)
```

Rejects a manifest that differs from the code closure linked by the build.

**Parameter `expected`:** The independently frozen deployment to compare with this closure.

**Throws `System.IO.InvalidDataException`:** Module ordering, ownership, dependencies, code names or fingerprints differ.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameCodeDeployment.cs#L81).

## `modules`

<a id="api-0a60e88148613896"></a>
<!-- api: P:Inno.Runtime.GameCodeDeployment.modules c21cf68c79497fa5f1423ebe2061964490be4600bfd30b6823e6886d30419e47 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Runtime.GameCodeModule> Inno.Runtime.GameCodeDeployment.modules { get; }
```

Gets the immutable dependency-ordered code closure.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Deployment/GameCodeDeployment.cs#L44).
