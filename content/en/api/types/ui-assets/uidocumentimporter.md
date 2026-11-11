---
title: "UiDocumentImporter"
description: "Reference for UiDocumentImporter in Inno.UI.Assets."
uid: api.inno.ui.assets.d08fee80d090d174
kind: api
owners:
  - Inno.UI.Assets
apiSurface: source-clr
contracts:
  - project.inno-ui-assets#import-and-generation-contract
---
# `UiDocumentImporter`

This reference describes `UiDocumentImporter` in `Inno.UI.Assets`. Read the [shared contract](../../projects/inno-ui-assets.md#import-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Assets.Pipeline.AssetImporter<Inno.UI.UiDocumentAsset>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-fd639e810be0a7ad) | Method |
| [`CreateImportSettings`](#api-8cf4930cb5890e17) | Method |
| [`ImportAsync`](#api-fc6b6f4c52e02ff8) | Method |
| [`supportedExtensions`](#api-fc5663a9bed23676) | Property |

## Type declaration

<a id="api-d08fee80d090d174"></a>
<!-- api: T:Inno.UI.Assets.UiDocumentImporter cefca682fad62c767002e3388366d34bf71aa29e315a6f92c8f6d79d0a22041a -->

```csharp
public sealed class Inno.UI.Assets.UiDocumentImporter : Inno.Assets.Pipeline.AssetImporter<Inno.UI.UiDocumentAsset>
```

Imports implementation-neutral UTF-8 UI source using explicit sidecar settings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentImporter.cs#L19).

## `#ctor`

<a id="api-fd639e810be0a7ad"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentImporter.#ctor c80179a0e2cda589a11352d1d4a3e3ca119de1590f93042cae15991d94856819 -->

```csharp
public Inno.UI.Assets.UiDocumentImporter.UiDocumentImporter()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentImporter.cs#L19).

## `CreateImportSettings`

<a id="api-8cf4930cb5890e17"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentImporter.CreateImportSettings 112aab4824f117a6210f725aa750acb618cfa289872d2fdf4e3e5bb2fc4a7942 -->

```csharp
public override Inno.Core.Serialization.ISerializable Inno.UI.Assets.UiDocumentImporter.CreateImportSettings()
```

Creates an import settings using this implementation's validated inputs.

**Returns:** The validated iserializable that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentImporter.cs#L32).

## `ImportAsync`

<a id="api-fc6b6f4c52e02ff8"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentImporter.ImportAsync(Inno.Assets.Pipeline.AssetImportContext,Inno.Assets.Pipeline.AssetImportWriter{Inno.UI.UiDocumentAsset},System.Threading.CancellationToken) 86cff9ce29dde70151fe7f2c178a9856edf36e93746c3833516b22451f72e6a5 -->

```csharp
protected override System.Threading.Tasks.ValueTask Inno.UI.Assets.UiDocumentImporter.ImportAsync(Inno.Assets.Pipeline.AssetImportContext context, Inno.Assets.Pipeline.AssetImportWriter<Inno.UI.UiDocumentAsset> output, System.Threading.CancellationToken cancellationToken)
```

Imports source content into a validated runtime asset and artifact set.

**Parameter `context`:** The context that supplies state and services for this operation.

**Parameter `output`:** The import output writer that receives runtime data and dependency declarations.

**Parameter `cancellationToken`:** The token that cancels the operation before it commits.

**Returns:** An asynchronous operation that completes after all requested work has finished.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentImporter.cs#L49).

## `supportedExtensions`

<a id="api-fc5663a9bed23676"></a>
<!-- api: P:Inno.UI.Assets.UiDocumentImporter.supportedExtensions e9700a28d6b7dd43d7d0a9dea10bf71234801a95d40be78724ff4d2bf51a057d -->

```csharp
public override System.Collections.Generic.IReadOnlyList<string> Inno.UI.Assets.UiDocumentImporter.supportedExtensions { get; }
```

Gets the normalized source extensions accepted by this importer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentImporter.cs#L24).
