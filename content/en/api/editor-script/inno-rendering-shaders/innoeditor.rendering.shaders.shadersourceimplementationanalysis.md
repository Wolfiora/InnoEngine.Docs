---
title: "ShaderSourceImplementationAnalysis"
description: "Reference for ShaderSourceImplementationAnalysis in Inno.Rendering.Shaders."
uid: api.inno.rendering.shaders.editor-script.f1faa07161fc3eea
kind: api
owners:
  - Inno.Rendering.Shaders
apiSurface: editor-script
contracts:
  - project.inno-rendering-shaders
  - manual.scripting.use-script-api
---
# `ShaderSourceImplementationAnalysis`

This reference describes `ShaderSourceImplementationAnalysis` in `Inno.Rendering.Shaders`. Read the [shared contract](../../projects/inno-rendering-shaders.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0fb0de5618706580) | Method |
| [`CreateSourceRequest`](#api-92a0c88e514d3c96) | Method |
| [`analysis`](#api-70ec9fe48c6d786c) | Property |
| [`contentHash`](#api-075c245ba444c482) | Property |
| [`defines`](#api-680647d251d2d31f) | Property |
| [`entryPoint`](#api-cbd21ea5a91e5fb6) | Property |
| [`implementationId`](#api-183d887363d57522) | Property |
| [`includes`](#api-f5a27205f69fe230) | Property |
| [`languageId`](#api-0c562a1971e9a1ae) | Property |
| [`sourcePath`](#api-0b603ced881ab803) | Property |
| [`sources`](#api-5772bc592a22e7ed) | Property |

## Type declaration

<a id="api-f1faa07161fc3eea"></a>
<!-- api: T:InnoEditor.Rendering.Shaders.ShaderSourceImplementationAnalysis 527dee7ce2b39a613a8aa71aa12b63a8248bf1d0bd8a500b28eedf18fcb12b04 -->

```csharp
public sealed class InnoEditor.Rendering.Shaders.ShaderSourceImplementationAnalysis
```

Freezes a parsed implementation and its complete source inputs without retaining a frontend or resolver.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L75).

## `#ctor`

<a id="api-0fb0de5618706580"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceImplementationAnalysis.#ctor db712d89a6701be1d222fee27c512fd4d1e2b30ae48e306c4e79cc3aeaca24db -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceImplementationAnalysis.ShaderSourceImplementationAnalysis()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L75).

## `CreateSourceRequest`

<a id="api-92a0c88e514d3c96"></a>
<!-- api: M:InnoEditor.Rendering.Shaders.ShaderSourceImplementationAnalysis.CreateSourceRequest 3010e6e958110055335bc50b44a72fe67d36fa4ae5b5f586ee637908f1a0ed18 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceRequest InnoEditor.Rendering.Shaders.ShaderSourceImplementationAnalysis.CreateSourceRequest()
```

Recreates a compiler input backed only by immutable captured sources and resolution edges.

**Returns:** A request with no filesystem access or reference to the original frontend, resolver or generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L139).

## `analysis`

<a id="api-70ec9fe48c6d786c"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceImplementationAnalysis.analysis 5f29744e5164f73dddb45392099347017939f62671824d3bf93e192e1bbb2362 -->

```csharp
public InnoEditor.Rendering.Shaders.ShaderSourceAnalysis InnoEditor.Rendering.Shaders.ShaderSourceImplementationAnalysis.analysis { get; }
```

Gets the parsed interface and implementation-local diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L126).

## `contentHash`

<a id="api-075c245ba444c482"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceImplementationAnalysis.contentHash 7c35ad3eaa16d1ba12605a0447576457c958378c4dafab94e44318a1d48ecfe5 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderSourceImplementationAnalysis.contentHash { get; }
```

Gets a deterministic source-input hash. A compiler cache must additionally include its toolchain,
target, graph semantics and binding layout; this hash alone is not a compiled artifact key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L131).

## `defines`

<a id="api-680647d251d2d31f"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceImplementationAnalysis.defines 6562d27629161461c850dcd4ad90e6bc9b213805bef81653e377ff9731f8d525 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, string> InnoEditor.Rendering.Shaders.ShaderSourceImplementationAnalysis.defines { get; }
```

Gets the immutable preprocessing inputs used for this implementation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L114).

## `entryPoint`

<a id="api-cbd21ea5a91e5fb6"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceImplementationAnalysis.entryPoint 7da28553ff7d091a25e2212b7b0d590777d62c8e27117f3a590988724063b907 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderSourceImplementationAnalysis.entryPoint { get; }
```

Gets the implementation's selected callable function name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L110).

## `implementationId`

<a id="api-183d887363d57522"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceImplementationAnalysis.implementationId 56822d687b97222b28349674e0417095a1ebcdc6d42c93a6cd8d22b9886bbb1b -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderSourceImplementationAnalysis.implementationId { get; }
```

Gets the stable implementation/configuration key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L98).

## `includes`

<a id="api-f5a27205f69fe230"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceImplementationAnalysis.includes 8e24e792da517b1c8138b312d6abc744727a29f6e194048b13e6537e1b9b84e0 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEditor.Rendering.Shaders.ShaderSourceInclude> InnoEditor.Rendering.Shaders.ShaderSourceImplementationAnalysis.includes { get; }
```

Gets the original resolver's frozen include edges, including aliases and mounted source paths.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L122).

## `languageId`

<a id="api-0c562a1971e9a1ae"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceImplementationAnalysis.languageId e35b105e318f97f9c5adbe20474e213062b4b6f41433357e85abb17eef0646f7 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderSourceImplementationAnalysis.languageId { get; }
```

Gets the selected source language.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L102).

## `sourcePath`

<a id="api-0b603ced881ab803"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceImplementationAnalysis.sourcePath 4330b11be4767387237207d03b41b215a21d4fafe3cff88a78c7dd7a3f7dc567 -->

```csharp
public string InnoEditor.Rendering.Shaders.ShaderSourceImplementationAnalysis.sourcePath { get; }
```

Gets the root source path in the frozen source set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L106).

## `sources`

<a id="api-5772bc592a22e7ed"></a>
<!-- api: P:InnoEditor.Rendering.Shaders.ShaderSourceImplementationAnalysis.sources 6d0766a5601567ceebfd59ff8683be096ef52ad10e32eb5c6a0cf366d9fe2bee -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEditor.Rendering.Shaders.ShaderSourceFile> InnoEditor.Rendering.Shaders.ShaderSourceImplementationAnalysis.sources { get; }
```

Gets every successfully read source, including the root, ordered by path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Shaders/Sources/ShaderSourceModuleAnalysis.cs#L118).
