---
title: "NativeBindingGenerationRequest"
description: "Reference for NativeBindingGenerationRequest in Inno.Build.Toolchains."
uid: api.inno.build.toolchains.bcd0488cf71ef0c8
kind: api
owners:
  - Inno.Build.Toolchains
apiSurface: source-clr
contracts:
  - project.inno-build-toolchains
---
# `NativeBindingGenerationRequest`

This reference describes `NativeBindingGenerationRequest` in `Inno.Build.Toolchains`. Read the [shared contract](../../../projects/inno-build-toolchains.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-69c7bd4b55d6a434) | Method |
| [`checkOnly`](#api-88135c96cb6f1a38) | Property |
| [`componentOptions`](#api-f4410b1f2aa4e8ea) | Property |
| [`components`](#api-f30f6eb3b2154598) | Property |
| [`expectedFingerprints`](#api-328d080c773078f4) | Property |
| [`outputMode`](#api-be0d91d9dabade31) | Property |
| [`targetId`](#api-d1e8bf7ebd334de4) | Property |

## Type declaration

<a id="api-bcd0488cf71ef0c8"></a>
<!-- api: T:Inno.Build.Toolchains.NativeBindingGenerationRequest 9da8b9869c16fddcae8e41f3c56d71c82e128105ff356e94ba601f6dda8186c1 -->

```csharp
public sealed class Inno.Build.Toolchains.NativeBindingGenerationRequest
```

Freezes the complete binding request before ownership waits or candidate creation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationRequest.cs#L26).

## `#ctor`

<a id="api-69c7bd4b55d6a434"></a>
<!-- api: M:Inno.Build.Toolchains.NativeBindingGenerationRequest.#ctor(System.Collections.Generic.IEnumerable{Inno.Build.Toolchains.NativeComponentDescriptor},System.String,Inno.Build.Toolchains.NativeBindingOutputMode,System.Boolean,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Build.Toolchains.NativeComponentBuildOptions}) 498fa9c818c9ea652480813388c1604f98d4e0d84c5c457c7265af1026f1de67 -->

```csharp
public Inno.Build.Toolchains.NativeBindingGenerationRequest.NativeBindingGenerationRequest(System.Collections.Generic.IEnumerable<Inno.Build.Toolchains.NativeComponentDescriptor> components, string targetId, Inno.Build.Toolchains.NativeBindingOutputMode outputMode, bool checkOnly = false, System.Collections.Generic.IReadOnlyDictionary<string, string>? expectedFingerprints = null, System.Collections.Generic.IReadOnlyDictionary<string, Inno.Build.Toolchains.NativeComponentBuildOptions>? componentOptions = null)
```

Captures explicit owners and a target without discovering components or parsing a build project.

**Parameter `components`:** The component owners, each declaring one binding definition.

**Parameter `targetId`:** The target identity selecting a declared configuration; host output uses the host definition.

**Parameter `outputMode`:** Whether to write authored host sources or isolated target artifacts.

**Parameter `checkOnly`:** Whether to compare complete output without publishing a candidate.

**Parameter `expectedFingerprints`:** Optional expected identities indexed by Native project; mismatches reject the request.

**Parameter `componentOptions`:** Explicit component configurations keyed by native owner project, or null for component defaults.

**Throws `System.ArgumentException`:** A target, owner, output mode or expected identity is invalid or duplicated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationRequest.cs#L52).

## `checkOnly`

<a id="api-88135c96cb6f1a38"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingGenerationRequest.checkOnly 645baff6578294cd9386485e5cd9d707756f78419a308f48f78be6dac3b64629 -->

```csharp
public bool Inno.Build.Toolchains.NativeBindingGenerationRequest.checkOnly { get; }
```

Gets whether publication is forbidden and current output must match fresh generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationRequest.cs#L98).

## `componentOptions`

<a id="api-f4410b1f2aa4e8ea"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingGenerationRequest.componentOptions 92ef279eb26244bafc5abea72bf41b59400d214783fbdbaaee4ea356790cbe86 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, Inno.Build.Toolchains.NativeComponentBuildOptions> Inno.Build.Toolchains.NativeBindingGenerationRequest.componentOptions { get; }
```

Gets explicit component binding and linkage choices.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationRequest.cs#L107).

## `components`

<a id="api-f30f6eb3b2154598"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingGenerationRequest.components c616623e523bd0030d936d7b3d733a0d9ff7cd48f11e6ade82815ef993cd3c87 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Build.Toolchains.NativeComponentDescriptor> Inno.Build.Toolchains.NativeBindingGenerationRequest.components { get; }
```

Gets the immutable component closure owned by this request.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationRequest.cs#L86).

## `expectedFingerprints`

<a id="api-328d080c773078f4"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingGenerationRequest.expectedFingerprints 642f6b207fa448d1d3da5f72ac55d27b15e6805e428b70c3cfa50e6b926d81a4 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, string> Inno.Build.Toolchains.NativeBindingGenerationRequest.expectedFingerprints { get; }
```

Gets the expected identities which must match before any candidate is generated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationRequest.cs#L102).

## `outputMode`

<a id="api-be0d91d9dabade31"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingGenerationRequest.outputMode 70d4d55f063f2de978cc9f46554ab5a9c50bb52ecc92acd0320d77dcfaa12fdb -->

```csharp
public Inno.Build.Toolchains.NativeBindingOutputMode Inno.Build.Toolchains.NativeBindingGenerationRequest.outputMode { get; }
```

Gets the selected output ownership policy.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationRequest.cs#L94).

## `targetId`

<a id="api-d1e8bf7ebd334de4"></a>
<!-- api: P:Inno.Build.Toolchains.NativeBindingGenerationRequest.targetId 9001d7303fceb591ccb0092ca6a5214ba893999bcb64a65376938899ab02405d -->

```csharp
public string Inno.Build.Toolchains.NativeBindingGenerationRequest.targetId { get; }
```

Gets the explicit configuration target, independent of the build execution host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/build/toolchains/Inno.Build.Toolchains/Native/NativeBindingGenerationRequest.cs#L90).
