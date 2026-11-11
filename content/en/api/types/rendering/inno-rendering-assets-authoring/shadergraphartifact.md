---
title: "ShaderGraphArtifact"
description: "Reference for ShaderGraphArtifact in Inno.Rendering.Assets.Authoring."
uid: api.inno.rendering.assets.authoring.07f6335aff00435c
kind: api
owners:
  - Inno.Rendering.Assets.Authoring
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets-authoring
---
# `ShaderGraphArtifact`

This reference describes `ShaderGraphArtifact` in `Inno.Rendering.Assets.Authoring`. Read the [shared contract](../../../projects/inno-rendering-assets-authoring.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`outputName`](#api-543be724a161e85a) | Field |
| [`Capture`](#api-38ce2d51d686be0d) | Method |
| [`Encode`](#api-149a343c0f43c5ed) | Method |
| [`GetSemanticHash`](#api-47c2635a3d9cd244) | Method |
| [`Lower`](#api-3bb4cb6ab9645df6) | Method |
| [`Read`](#api-a6b20875cecae602) | Method |
| [`ReadDefinition`](#api-6ef8c3bc8147a33f) | Method |
| [`ReadDocument`](#api-1f7e5be5c8e11f72) | Method |

## Type declaration

<a id="api-07f6335aff00435c"></a>
<!-- api: T:Inno.Rendering.Assets.Authoring.ShaderGraphArtifact f935ed6b0b30e00b1d8ee6b35502499daae13fe3adf623d09cd2cc3c7783858b -->

```csharp
public static class Inno.Rendering.Assets.Authoring.ShaderGraphArtifact
```

Persists graph and frozen function inputs as an authoring artifact; Player export removes this payload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderGraphArtifact.cs#L19).

## `outputName`

<a id="api-543be724a161e85a"></a>
<!-- api: F:Inno.Rendering.Assets.Authoring.ShaderGraphArtifact.outputName b710c9ac58601f086d56ccb0d6f45d18622b62378ea36fa0bdb0216a5f56fdde -->

```csharp
public const string Inno.Rendering.Assets.Authoring.ShaderGraphArtifact.outputName = "shader-graph"
```

Identifies the authoring-only graph and frozen source output.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderGraphArtifact.cs#L24).

## `Capture`

<a id="api-38ce2d51d686be0d"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderGraphArtifact.Capture(Inno.Core.Graphs.GraphDocument,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,System.Func{System.Guid,System.String,System.Byte[]},System.Threading.CancellationToken,System.Func{System.Guid,System.String,Inno.Core.Graphs.GraphDocument}) 028adffa43221d620990ec135ab938b5d823271260d2d60ef67e631dd474a0fd -->

```csharp
public static byte[] Inno.Rendering.Assets.Authoring.ShaderGraphArtifact.Capture(Inno.Core.Graphs.GraphDocument graph, Inno.Extensibility.Types.TypeCatalog types, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context, System.Func<System.Guid, string, byte[]> readSource, System.Threading.CancellationToken cancellationToken = default(System.Threading.CancellationToken), System.Func<System.Guid, string, Inno.Core.Graphs.GraphDocument>? readGraph = null)
```

Freezes an authored graph and its target-expanded function dependencies without publishing an asset.

**Parameter `graph`:** Detached authoring document, including incomplete source records.

**Parameter `types`:** Current leased authoring generation.

**Parameter `serialization`:** Owner converters.

**Parameter `context`:** Complete owner reference and dependency context.

**Parameter `readSource`:** Reads an immutable function bundle by stable identity and diagnostic last-known path.

**Parameter `cancellationToken`:** Cancellation before node expansion, target expansion and dependency reads.

**Parameter `readGraph`:** Reads an authored Shader graph used as a reusable node, when the graph contains one.

**Returns:** Native immutable authoring artifact bytes usable by import or isolated preview compilation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderGraphArtifact.cs#L53).

## `Encode`

<a id="api-149a343c0f43c5ed"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderGraphArtifact.Encode(Inno.Core.Graphs.GraphDocument,System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Graphs.GraphNodeId,System.Byte[]},Inno.Core.Serialization.SerializationRegistry,Inno.Core.Graphs.GraphDocument) e255e81bce9177c0f00e8c6678a7600f21d218dbac9c286ad1da4aa92cdcdce6 -->

```csharp
public static byte[] Inno.Rendering.Assets.Authoring.ShaderGraphArtifact.Encode(Inno.Core.Graphs.GraphDocument graph, System.Collections.Generic.IReadOnlyDictionary<Inno.Core.Graphs.GraphNodeId, byte[]> sources, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Graphs.GraphDocument? program = null)
```

Captures one native immutable graph import candidate.

**Parameter `graph`:** Authored graph with original node and port identities.

**Parameter `sources`:** Frozen function bundles keyed by source node identity.

**Parameter `serialization`:** Owner native converter registry.

**Parameter `program`:** Target-expanded explicit stages, or null when the authored graph already contains them.

**Returns:** Deterministic authoring artifact bytes without live objects.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderGraphArtifact.cs#L182).

## `GetSemanticHash`

<a id="api-47c2635a3d9cd244"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderGraphArtifact.GetSemanticHash(System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationRegistry) f7682a0218f6064695e6ae143f45ec56ad0318d71eb322236f027791440fa8f8 -->

```csharp
public static string Inno.Rendering.Assets.Authoring.ShaderGraphArtifact.GetSemanticHash(System.ReadOnlySpan<byte> bytes, Inno.Core.Serialization.SerializationRegistry serialization)
```

Fingerprints semantic graph records and every frozen source dependency, excluding node positions and reserved Editor metadata.

**Parameter `bytes`:** Committed graph authoring artifact.

**Parameter `serialization`:** Owner native converter registry.

**Returns:** A stable semantic identity; target, variant and extension generation remain separate compiler cache inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderGraphArtifact.cs#L145).

## `Lower`

<a id="api-3bb4cb6ab9645df6"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderGraphArtifact.Lower(System.ReadOnlySpan{System.Byte},System.String,Inno.Rendering.Shaders.ShaderNodeCompilerRegistry,Inno.Rendering.Shaders.ShaderSourceFrontendRegistry,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String}) 652d4cc4f7fa7a99669e3970587aa64ba7cef995946f501b21f009ce03bd57ed -->

```csharp
public static Inno.Rendering.Shaders.ShaderGraphProgramResult Inno.Rendering.Assets.Authoring.ShaderGraphArtifact.Lower(System.ReadOnlySpan<byte> bytes, string implementationId, Inno.Rendering.Shaders.ShaderNodeCompilerRegistry nodes, Inno.Rendering.Shaders.ShaderSourceFrontendRegistry frontends, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context, System.Collections.Generic.IReadOnlyDictionary<string, string>? defines = null)
```

Analyzes frozen functions and lowers the graph in the owner's active generation.

**Parameter `bytes`:** Committed authoring artifact bytes.

**Parameter `implementationId`:** Selected adapter implementation identity.

**Parameter `nodes`:** Shared node compiler registry.

**Parameter `frontends`:** Shared language frontend registry.

**Parameter `serialization`:** Owner native converter registry.

**Parameter `context`:** Complete owner asset/reference context.

**Parameter `defines`:** Exact target/variant preprocessing inputs.

**Returns:** Complete typed stages or graph diagnostics, never a partial candidate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderGraphArtifact.cs#L241).

## `Read`

<a id="api-a6b20875cecae602"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderGraphArtifact.Read(Inno.Rendering.Assets.ShaderAsset,Inno.Assets.IAssetArtifactLookup) 25d4572125b65f3f21e866c68ff75095635ea35b19e5c016629f2d3bf87c898f -->

```csharp
public static byte[] Inno.Rendering.Assets.Authoring.ShaderGraphArtifact.Read(Inno.Rendering.Assets.ShaderAsset shader, Inno.Assets.IAssetArtifactLookup artifacts)
```

Reads a retained immutable authoring snapshot through its explicit artifact owner.

**Parameter `shader`:** Stable Shader asset identity.

**Parameter `artifacts`:** Current authoring artifact lookup.

**Returns:** Detached graph bytes; absent authoring data is an error, never a runtime fallback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderGraphArtifact.cs#L123).

## `ReadDefinition`

<a id="api-6ef8c3bc8147a33f"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderGraphArtifact.ReadDefinition(System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext) 644d00d6ad3b4fe314a79181c7c57a7ee459227f1c743be49e55c0cd014f8b64 -->

```csharp
public static Inno.Rendering.Assets.ShaderDefinition Inno.Rendering.Assets.Authoring.ShaderGraphArtifact.ReadDefinition(System.ReadOnlySpan<byte> bytes, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context)
```

Reads the target-expanded runtime interface from the same frozen candidate as its computations.

**Parameter `bytes`:** Immutable captured authoring artifact.

**Parameter `serialization`:** Owner converters.

**Parameter `context`:** Complete owner asset references.

**Returns:** Detached definition paired with these exact graph programs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderGraphArtifact.cs#L104).

## `ReadDocument`

<a id="api-1f7e5be5c8e11f72"></a>
<!-- api: M:Inno.Rendering.Assets.Authoring.ShaderGraphArtifact.ReadDocument(System.ReadOnlySpan{System.Byte},Inno.Core.Serialization.SerializationRegistry) aa864f894ef5b73e8dee8c2604f7e86adebfb053b73c8aad04fe4c3ae23798b5 -->

```csharp
public static Inno.Core.Graphs.GraphDocument Inno.Rendering.Assets.Authoring.ShaderGraphArtifact.ReadDocument(System.ReadOnlySpan<byte> bytes, Inno.Core.Serialization.SerializationRegistry serialization)
```

Restores the imported graph for authoring or source export.

**Parameter `bytes`:** Current authoring artifact bytes.

**Parameter `serialization`:** Owner native converter registry.

**Returns:** A detached graph retaining all authored records.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets.Authoring/Compilation/ShaderGraphArtifact.cs#L208).
