---
title: "UiDocumentImportPipeline"
description: "Reference for UiDocumentImportPipeline in Inno.UI.Assets."
uid: api.inno.ui.assets.f4582246ee8e0fa7
kind: api
owners:
  - Inno.UI.Assets
apiSurface: source-clr
contracts:
  - project.inno-ui-assets#import-and-generation-contract
---
# `UiDocumentImportPipeline`

This reference describes `UiDocumentImportPipeline` in `Inno.UI.Assets`. Read the [shared contract](../../projects/inno-ui-assets.md#import-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`ImportAsync`](#api-f2f120176788671a) | Method |

## Type declaration

<a id="api-f4582246ee8e0fa7"></a>
<!-- api: T:Inno.UI.Assets.UiDocumentImportPipeline ac837855b49bbc902efe465290b352c52f9de9e35f963f0796187a598ac9deec -->

```csharp
public static class Inno.UI.Assets.UiDocumentImportPipeline
```

Coordinates source analysis, font dependencies, and runtime UI asset emission.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentImporter.cs#L70).

## `ImportAsync`

<a id="api-f2f120176788671a"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentImportPipeline.ImportAsync(Inno.Assets.Pipeline.AssetImportContext,Inno.Assets.Pipeline.AssetImportWriter{Inno.UI.UiDocumentAsset},Inno.UI.UiDocumentLanguageId,System.String,System.Threading.CancellationToken) 56dfdc2d80cd412274ebf0a135c3ec962b2a211941740f3a666f4421824c06bc -->

```csharp
public static System.Threading.Tasks.ValueTask Inno.UI.Assets.UiDocumentImportPipeline.ImportAsync(Inno.Assets.Pipeline.AssetImportContext context, Inno.Assets.Pipeline.AssetImportWriter<Inno.UI.UiDocumentAsset> output, Inno.UI.UiDocumentLanguageId language, string implementationId, System.Threading.CancellationToken cancellationToken)
```

Validates and emits a deterministic runtime payload.

**Parameter `context`:** Source import context.

**Parameter `output`:** Candidate writer.

**Parameter `language`:** Explicit source language.

**Parameter `implementationId`:** Explicit runtime implementation.

**Parameter `cancellationToken`:** Cancellation observed by artifact writes.

**Returns:** An operation completing after the payload is staged.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentImporter.cs#L93).
