---
title: "ShaderSourceBundle"
description: "Reference for ShaderSourceBundle in Inno.Rendering.Assets.Authoring."
uid: api.inno.rendering.assets.authoring.8c0a94ffdd0086d4
kind: api
owners:
  - Inno.Rendering.Assets.Authoring
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets-authoring
---
# `ShaderSourceBundle`

This reference describes `ShaderSourceBundle` in `Inno.Rendering.Assets.Authoring`. Read the [shared contract](../../../projects/inno-rendering-assets-authoring.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`outputName`](#api-ede06f5620752300) | Field |
| [`Decode`](#api-f029eee833e5dfe1) | Method |
| [`Encode`](#api-78bdeb0837db481a) | Method |
| [`Read`](#api-ba4b224e64b18d14) | Method |

## Type declaration

<a id="api-8c0a94ffdd0086d4"></a>
<!-- api: T:Inno.Rendering.Assets.Authoring.ShaderSourceBundle c459e0d692ab8bd71ffb5f288f1385787dd01ecb92c97c7b9df74680a3f33243 -->

```csharp
public static class Inno.Rendering.Assets.Authoring.ShaderSourceBundle
```

Persists only frozen function compilation inputs, never a parser, live asset, resolver or generated main function.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderSourceBundle.cs#L14).

## `outputName`

<a id="api-ede06f5620752300"></a>
<!-- api: F:Inno.Rendering.Assets.Authoring.ShaderSourceBundle.outputName 783d3fddc7a92d046e66076108f20fe79b6c78d1fe64155dd74b79e1fc70623e -->

```csharp
public const string Inno.Rendering.Assets.Authoring.ShaderSourceBundle.outputName = "shader-function"
```

Identifies the authoring-only frozen function module output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderSourceBundle.cs#L19).

## `Decode`

<a id="api-f029eee833e5dfe1"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderSourceBundle.Decode(System.ReadOnlySpan{System.Byte},System.String,Inno.Core.Serialization.SerializationRegistry,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String}) 5138bce385c68e4615d290cd13c9318f3d6dbcc3b32e4e211aa4bb21fd7d7a19 -->

```csharp
public static System.Collections.Generic.IReadOnlyList<Inno.Rendering.Shaders.ShaderSourceImplementationRequest> Inno.Rendering.Assets.Authoring.ShaderSourceBundle.Decode(System.ReadOnlySpan<byte> bytes, string function, Inno.Core.Serialization.SerializationRegistry serialization, System.Collections.Generic.IReadOnlyDictionary<string, string>? defines = null)
```

Restores requests whose resolvers can access only the captured files and edges.

**Parameter `bytes`:** Current native authoring artifact.

**Parameter `function`:** Exact exported function selected by the graph node.

**Parameter `serialization`:** Native converter registry.

**Parameter `defines`:** Additional target/variant definitions; conflicting recorded values are rejected.

**Returns:** Detached requests without filesystem access or old-generation provider references.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderSourceBundle.cs#L100).

## `Encode`

<a id="api-78bdeb0837db481a"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderSourceBundle.Encode(System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Rendering.Shaders.ShaderSourceModuleAnalysis},Inno.Core.Serialization.SerializationRegistry) 6b80892f7948af5f1d93cbe9b4bdd115fc6eca95c9fae9b347c75c90e87480b5 -->

```csharp
public static byte[] Inno.Rendering.Assets.Authoring.ShaderSourceBundle.Encode(System.Collections.Generic.IReadOnlyDictionary<string, Inno.Rendering.Shaders.ShaderSourceModuleAnalysis> functions, Inno.Core.Serialization.SerializationRegistry serialization)
```

Captures every exported function, implementation and include resolution from a successful source import.

**Parameter `functions`:** Complete source analyses keyed by explicit exported function name.

**Parameter `serialization`:** Native converter registry; this bundle contains pure values only.

**Returns:** Deterministic native authoring artifact bytes, not Player content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderSourceBundle.cs#L55).

## `Read`

<a id="api-ba4b224e64b18d14"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderSourceBundle.Read(Inno.Rendering.Assets.Authoring.ShaderFunctionAsset,Inno.Assets.IAssetArtifactLookup) 3e9f40489eeab7649ebb0682283461c55a56fd00841569d684de875f0dcc9509 -->

```csharp
public static byte[] Inno.Rendering.Assets.Authoring.ShaderSourceBundle.Read(Inno.Rendering.Assets.Authoring.ShaderFunctionAsset function, Inno.Assets.IAssetArtifactLookup artifacts)
```

Reads an immutable function snapshot through its explicit artifact owner.

**Parameter `function`:** Stable function asset identity.

**Parameter `artifacts`:** Current authoring artifact lookup.

**Returns:** Detached module bytes retained for the duration of reading.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderSourceBundle.cs#L33).
