---
title: "TextRuntime"
description: "Reference for TextRuntime in Inno.Text.Runtime."
uid: api.inno.text.runtime.665a1b10f0fa3c62
kind: api
owners:
  - Inno.Text.Runtime
apiSurface: source-clr
contracts:
  - project.inno-text-runtime#font-lifetime-contract
---
# `TextRuntime`

This reference describes `TextRuntime` in `Inno.Text.Runtime`. Read the [shared contract](../../projects/inno-text-runtime.md#font-lifetime-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Runtime.Contracts.RuntimeSubsystem`.

**Direct interfaces:** `Inno.Text.ITextService`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-67b7b5a8096d1e62) | Method |
| [`EnterExecutionScope`](#api-c43a8bad0766707a) | Method |
| [`OnBeginFrame`](#api-e48c4d33df96a84b) | Method |
| [`OnStop`](#api-0659c12945c75932) | Method |
| [`Rasterize`](#api-2eb50ce3869f089a) | Method |
| [`Shape`](#api-a01403bd1171a22c) | Method |

## Type declaration

<a id="api-665a1b10f0fa3c62"></a>
<!-- api: T:Inno.Text.Runtime.TextRuntime 7ca11833379bf54547276794e7b614a404a9f1a214f3e286232426078579c6dc -->

```csharp
public sealed class Inno.Text.Runtime.TextRuntime : Inno.Runtime.Contracts.RuntimeSubsystem, Inno.Text.ITextService
```

Owns imported font leases and a replaceable Unicode shaping backend for one runtime session.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text.Runtime/TextRuntime.cs#L14).

## `#ctor`

<a id="api-67b7b5a8096d1e62"></a>
<!-- api: M:Inno.Text.Runtime.TextRuntime.#ctor(Inno.Text.ITextBackend,Inno.Assets.IAssetArtifactLookup) e352a3074abd28611379c7205c4598689274ad388a23454bcc9c95c312babb6a -->

```csharp
public Inno.Text.Runtime.TextRuntime.TextRuntime(Inno.Text.ITextBackend backend, Inno.Assets.IAssetArtifactLookup artifacts)
```

Creates a text runtime and assumes ownership of its backend.

**Parameter `backend`:** The native shaping backend.

**Parameter `artifacts`:** The immutable asset artifact lookup.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text.Runtime/TextRuntime.cs#L30).

## `EnterExecutionScope`

<a id="api-c43a8bad0766707a"></a>
<!-- api: M:Inno.Text.Runtime.TextRuntime.EnterExecutionScope 35d6962ba7fe225cc253040bc91dcf052a4b14ece8ef8dbcfac464224d01da5e -->

```csharp
public System.IDisposable Inno.Text.Runtime.TextRuntime.EnterExecutionScope()
```

Binds this runtime to the current asynchronous execution context.

**Returns:** The caller-owned binding scope.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text.Runtime/TextRuntime.cs#L52).

## `OnBeginFrame`

<a id="api-e48c4d33df96a84b"></a>
<!-- api: M:Inno.Text.Runtime.TextRuntime.OnBeginFrame(Inno.Runtime.Contracts.RuntimeFrame) 234c88b4819c2f5c21e1ee1b93aec28e786ae33b9b61b95c1ea5e72b661344f9 -->

```csharp
protected override void Inno.Text.Runtime.TextRuntime.OnBeginFrame(Inno.Runtime.Contracts.RuntimeFrame frame)
```

Binds the script-facing text facade for the complete runtime frame.

**Parameter `frame`:** The current runtime frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text.Runtime/TextRuntime.cs#L44).

## `OnStop`

<a id="api-0659c12945c75932"></a>
<!-- api: M:Inno.Text.Runtime.TextRuntime.OnStop c6374443b97785a52787768b84c6c6ea7b8ca2b824750ce9db52a7e5253c23e8 -->

```csharp
protected override void Inno.Text.Runtime.TextRuntime.OnStop()
```

Releases every native face and retained immutable artifact before the backend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text.Runtime/TextRuntime.cs#L123).

## `Rasterize`

<a id="api-2eb50ce3869f089a"></a>
<!-- api: M:Inno.Text.Runtime.TextRuntime.Rasterize(Inno.Text.FontAsset,System.Int32,System.UInt32,System.Single) 8d24a3f7734153097399d6cbdb99d273701bb1c9208b2f3bb9e66b430b0e3ee2 -->

```csharp
public Inno.Text.GlyphBitmap Inno.Text.Runtime.TextRuntime.Rasterize(Inno.Text.FontAsset font, int faceIndex, uint glyphId, float fontSize)
```

Rasterizes one glyph from an imported font.

**Parameter `font`:** The imported font source.

**Parameter `faceIndex`:** The zero-based collection face index.

**Parameter `glyphId`:** The font-specific glyph identifier.

**Parameter `fontSize`:** The positive logical pixel size.

**Returns:** The immutable glyph bitmap.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text.Runtime/TextRuntime.cs#L107).

## `Shape`

<a id="api-a01403bd1171a22c"></a>
<!-- api: M:Inno.Text.Runtime.TextRuntime.Shape(Inno.Text.FontAsset,System.String,Inno.Text.TextStyle,Inno.Text.TextShapingOptions) bafcc4038782a9516f6d1bdc6f7c25b6567a9e31b9b7161d66abdaa3bf1a17b2 -->

```csharp
public Inno.Text.TextLayout Inno.Text.Runtime.TextRuntime.Shape(Inno.Text.FontAsset font, string text, Inno.Text.TextStyle style, Inno.Text.TextShapingOptions options)
```

Shapes one Unicode string with an imported font.

**Parameter `font`:** The imported font source.

**Parameter `text`:** The Unicode source text.

**Parameter `style`:** Font selection and sizing.

**Parameter `options`:** Language, script, and direction hints.

**Returns:** The immutable shaped layout.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/4a9edbac3553302acd80228d4aa855bef5825045/src/services/text/Inno.Text.Runtime/TextRuntime.cs#L76).
