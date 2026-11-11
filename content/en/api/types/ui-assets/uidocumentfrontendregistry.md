---
title: "UiDocumentFrontendRegistry"
description: "Reference for UiDocumentFrontendRegistry in Inno.UI.Assets."
uid: api.inno.ui.assets.aea441748cd94f69
kind: api
owners:
  - Inno.UI.Assets
apiSurface: source-clr
contracts:
  - project.inno-ui-assets#import-and-generation-contract
---
# `UiDocumentFrontendRegistry`

This reference describes `UiDocumentFrontendRegistry` in `Inno.UI.Assets`. Read the [shared contract](../../projects/inno-ui-assets.md#import-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Extensibility.Types.TypeRegistry<Inno.UI.Assets.UiDocumentFrontendCatalog>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-15ceccad4e314c88) | Method |
| [`Analyze`](#api-2333aad5e95f4932) | Method |
| [`Build`](#api-c6a9659692bd1a9b) | Method |
| [`DisposeSnapshot`](#api-c8b509adceebfd7d) | Method |

## Type declaration

<a id="api-aea441748cd94f69"></a>
<!-- api: T:Inno.UI.Assets.UiDocumentFrontendRegistry 10a320522e3b77d652b8bbba93fd7a04e2576f8a4714995000b42e2c6d6837c4 -->

```csharp
public sealed class Inno.UI.Assets.UiDocumentFrontendRegistry : Inno.Extensibility.Types.TypeRegistry<Inno.UI.Assets.UiDocumentFrontendCatalog>
```

Discovers UI language frontends through the shared type-generation transaction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L187).

## `#ctor`

<a id="api-15ceccad4e314c88"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentFrontendRegistry.#ctor(Inno.Extensibility.Types.TypeCatalog) 7fcbb7239c126d12913a69613ef0c708bdc4dc1bf92b65a86e726602271f10e2 -->

```csharp
public Inno.UI.Assets.UiDocumentFrontendRegistry.UiDocumentFrontendRegistry(Inno.Extensibility.Types.TypeCatalog types)
```

Registers with the owner type catalog.

**Parameter `types`:** Catalog that outlives this registry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L196).

## `Analyze`

<a id="api-2333aad5e95f4932"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentFrontendRegistry.Analyze(Inno.UI.UiDocumentLanguageId,Inno.UI.Assets.UiDocumentSourceFile) 4639a22687e7aec9590a91b20b8b231c2d50ec7a40f78caed61ed68f6883de25 -->

```csharp
public Inno.UI.Assets.UiDocumentAnalysis Inno.UI.Assets.UiDocumentFrontendRegistry.Analyze(Inno.UI.UiDocumentLanguageId language, Inno.UI.Assets.UiDocumentSourceFile source)
```

Analyzes source while preventing provider retirement.

**Parameter `language`:** Exact language identity.

**Parameter `source`:** Immutable source snapshot.

**Returns:** Detached neutral analysis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L209).

## `Build`

<a id="api-c6a9659692bd1a9b"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentFrontendRegistry.Build(Inno.Extensibility.Types.TypeCacheSnapshot) 93caa7eaab6d2d5c484e382ca5de77b4ef2eb749b02eb6a86847c820b769114b -->

```csharp
protected override Inno.UI.Assets.UiDocumentFrontendCatalog Inno.UI.Assets.UiDocumentFrontendRegistry.Build(Inno.Extensibility.Types.TypeCacheSnapshot types)
```

Builds a validated result from the current immutable input snapshot.

**Parameter `types`:** The active type catalog generation used for extension resolution.

**Returns:** The validated ui document frontend catalog that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L225).

## `DisposeSnapshot`

<a id="api-c8b509adceebfd7d"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentFrontendRegistry.DisposeSnapshot(Inno.UI.Assets.UiDocumentFrontendCatalog) 3ab7b1e3f62053f1335bd08aba51402072f6fc04b2f87d7f0e69664f5784153b -->

```csharp
protected override void Inno.UI.Assets.UiDocumentFrontendRegistry.DisposeSnapshot(Inno.UI.Assets.UiDocumentFrontendCatalog snapshot)
```

Releases the generation lease retained by an immutable registry snapshot.

**Parameter `snapshot`:** The immutable state snapshot consumed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentFrontend.cs#L240).
