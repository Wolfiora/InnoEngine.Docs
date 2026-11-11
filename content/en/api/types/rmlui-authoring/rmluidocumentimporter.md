---
title: "RmlUiDocumentImporter"
description: "Reference for RmlUiDocumentImporter in Inno.Adapter.UI.RmlUi.Authoring."
uid: api.inno.adapter.ui.rmlui.authoring.f2dcb3cd00496c25
kind: api
owners:
  - Inno.Adapter.UI.RmlUi.Authoring
apiSurface: source-clr
contracts:
  - project.inno-adapter-ui-rmlui-authoring#source-analysis-contract
---
# `RmlUiDocumentImporter`

This reference describes `RmlUiDocumentImporter` in `Inno.Adapter.UI.RmlUi.Authoring`. Read the [shared contract](../../projects/inno-adapter-ui-rmlui-authoring.md#source-analysis-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Assets.Pipeline.AssetImporter<Inno.UI.UiDocumentAsset>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a12cab916d465e7c) | Method |
| [`ImportAsync`](#api-2a3b11632adc0373) | Method |
| [`supportedExtensions`](#api-68da99369a801b4d) | Property |

## Type declaration

<a id="api-f2dcb3cd00496c25"></a>
<!-- api: T:Inno.Adapter.UI.RmlUi.Authoring.RmlUiDocumentImporter d5f14ce704b46951a081a87c2b37d3de946c661f125190929dfa88df0c8075a3 -->

```csharp
public sealed class Inno.Adapter.UI.RmlUi.Authoring.RmlUiDocumentImporter : Inno.Assets.Pipeline.AssetImporter<Inno.UI.UiDocumentAsset>
```

Maps the conventional .rml extension to explicit RML and RmlUi identities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi.Authoring/RmlUiDocumentImporter.cs#L15).

## `#ctor`

<a id="api-a12cab916d465e7c"></a>
<!-- api: M:Inno.Adapter.UI.RmlUi.Authoring.RmlUiDocumentImporter.#ctor bf45aa28a62ee98bbc5847b7d48cbe6a990adeef8c1d010d7e7771ec04991b63 -->

```csharp
public Inno.Adapter.UI.RmlUi.Authoring.RmlUiDocumentImporter.RmlUiDocumentImporter()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi.Authoring/RmlUiDocumentImporter.cs#L15).

## `ImportAsync`

<a id="api-2a3b11632adc0373"></a>
<!-- api: M:Inno.Adapter.UI.RmlUi.Authoring.RmlUiDocumentImporter.ImportAsync(Inno.Assets.Pipeline.AssetImportContext,Inno.Assets.Pipeline.AssetImportWriter{Inno.UI.UiDocumentAsset},System.Threading.CancellationToken) 4fa06c6f4e186853d9601f0c4087a63616b7803efe21e743d4882f4763cac14a -->

```csharp
protected override System.Threading.Tasks.ValueTask Inno.Adapter.UI.RmlUi.Authoring.RmlUiDocumentImporter.ImportAsync(Inno.Assets.Pipeline.AssetImportContext context, Inno.Assets.Pipeline.AssetImportWriter<Inno.UI.UiDocumentAsset> output, System.Threading.CancellationToken cancellationToken)
```

Imports source content into a validated runtime asset and artifact set.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `output`:** The import output writer that receives runtime data and dependency declarations.

**Parameter `cancellationToken`:** The token that cancels the operation before it commits.

**Returns:** An asynchronous operation that completes after all requested work has finished.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi.Authoring/RmlUiDocumentImporter.cs#L37).

## `supportedExtensions`

<a id="api-68da99369a801b4d"></a>
<!-- api: P:Inno.Adapter.UI.RmlUi.Authoring.RmlUiDocumentImporter.supportedExtensions db7572c19a55d86c5995fe9feb14c47f9392868d0a5b64b8b6cf0ffe77bb0d09 -->

```csharp
public override System.Collections.Generic.IReadOnlyList<string> Inno.Adapter.UI.RmlUi.Authoring.RmlUiDocumentImporter.supportedExtensions { get; }
```

Gets the normalized source extensions accepted by this importer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/backends/RmlUi/runtime/Inno.Adapter.UI.RmlUi.Authoring/RmlUiDocumentImporter.cs#L20).
