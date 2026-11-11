---
title: "RmlUiDocumentFrontend"
description: "Reference for RmlUiDocumentFrontend in Inno.Adapter.UI.RmlUi.Authoring."
uid: api.inno.adapter.ui.rmlui.authoring.2eab4a2725cc5e3f
kind: api
owners:
  - Inno.Adapter.UI.RmlUi.Authoring
apiSurface: source-clr
contracts:
  - project.inno-adapter-ui-rmlui-authoring#source-analysis-contract
---
# `RmlUiDocumentFrontend`

This reference describes `RmlUiDocumentFrontend` in `Inno.Adapter.UI.RmlUi.Authoring`. Read the [shared contract](../../projects/inno-adapter-ui-rmlui-authoring.md#source-analysis-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.UI.Assets.IUiDocumentFrontend`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-0cec84033786467b) | Method |
| [`Analyze`](#api-7b36357ef46ecef0) | Method |
| [`languageId`](#api-ca9b5b7b698076cf) | Property |

## Type declaration

<a id="api-2eab4a2725cc5e3f"></a>
<!-- api: T:Inno.Adapter.UI.RmlUi.Authoring.RmlUiDocumentFrontend 1029b539cd61ca6c51a5dde1cca657d6b17535294f5474a52455a27032e637c4 -->

```csharp
public sealed class Inno.Adapter.UI.RmlUi.Authoring.RmlUiDocumentFrontend : Inno.UI.Assets.IUiDocumentFrontend
```

Validates RML source for the bundled RmlUi runtime adapter.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi.Authoring/RmlUiDocumentFrontend.cs#L18).

## `#ctor`

<a id="api-0cec84033786467b"></a>
<!-- api: M:Inno.Adapter.UI.RmlUi.Authoring.RmlUiDocumentFrontend.#ctor 02784d64733b1175e31858e4a9dd99ef7788d079023d31a9a5ac552658740889 -->

```csharp
public Inno.Adapter.UI.RmlUi.Authoring.RmlUiDocumentFrontend.RmlUiDocumentFrontend()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi.Authoring/RmlUiDocumentFrontend.cs#L18).

## `Analyze`

<a id="api-7b36357ef46ecef0"></a>
<!-- api: M:Inno.Adapter.UI.RmlUi.Authoring.RmlUiDocumentFrontend.Analyze(Inno.UI.Assets.UiDocumentSourceFile) 1f674408428624ea3de46e3298d8e1207c486e2ed755e37f0f689d990f3c5437 -->

```csharp
public Inno.UI.Assets.UiDocumentAnalysis Inno.Adapter.UI.RmlUi.Authoring.RmlUiDocumentFrontend.Analyze(Inno.UI.Assets.UiDocumentSourceFile source)
```

Analyzes source text and returns validated output with diagnostics.

**Parameter `source`:** The source value or location read by this operation.

**Returns:** The validated ui document analysis that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi.Authoring/RmlUiDocumentFrontend.cs#L51).

## `languageId`

<a id="api-ca9b5b7b698076cf"></a>
<!-- api: P:Inno.Adapter.UI.RmlUi.Authoring.RmlUiDocumentFrontend.languageId fa6f0ad9b56e115afa5083cd12902356e997089d5c7c3bb2505a4edd7aa59c9d -->

```csharp
public Inno.UI.UiDocumentLanguageId Inno.Adapter.UI.RmlUi.Authoring.RmlUiDocumentFrontend.languageId { get; }
```

Gets the RML source language identifier accepted by this frontend.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi.Authoring/RmlUiDocumentFrontend.cs#L40).
