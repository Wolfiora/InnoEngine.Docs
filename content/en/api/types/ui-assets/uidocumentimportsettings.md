---
title: "UiDocumentImportSettings"
description: "Reference for UiDocumentImportSettings in Inno.UI.Assets."
uid: api.inno.ui.assets.8f2ffca915997fe8
kind: api
owners:
  - Inno.UI.Assets
apiSurface: source-clr
contracts:
  - project.inno-ui-assets#import-and-generation-contract
---
# `UiDocumentImportSettings`

This reference describes `UiDocumentImportSettings` in `Inno.UI.Assets`. Read the [shared contract](../../projects/inno-ui-assets.md#import-and-generation-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-70464a8255ac662a) | Method |
| [`implementationId`](#api-8f79c1d8728452cd) | Property |
| [`languageId`](#api-05e974978f040675) | Property |

## Type declaration

<a id="api-8f2ffca915997fe8"></a>
<!-- api: T:Inno.UI.Assets.UiDocumentImportSettings de27a3cd1138d59fb21180497160aa9c6ec07a83cb5b8db41ee9bdaa2a1c9672 -->

```csharp
public sealed class Inno.UI.Assets.UiDocumentImportSettings : Inno.Core.Serialization.ISerializable
```

Explicitly selects language and runtime implementation for neutral UI source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentImportSettings.cs#L10).

## `#ctor`

<a id="api-70464a8255ac662a"></a>
<!-- api: M:Inno.UI.Assets.UiDocumentImportSettings.#ctor f661a30b4d8a0ef2d94c24b17bf66156f9703a00bdee618dc300ee0611640615 -->

```csharp
public Inno.UI.Assets.UiDocumentImportSettings.UiDocumentImportSettings()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentImportSettings.cs#L10).

## `implementationId`

<a id="api-8f79c1d8728452cd"></a>
<!-- api: P:Inno.UI.Assets.UiDocumentImportSettings.implementationId a6cb6e05ba6cb18343f34a2d62c16ccb0d49a469232df78459004541947cf027 -->

```csharp
public string Inno.UI.Assets.UiDocumentImportSettings.implementationId { get; set; }
```

Gets or sets the exact runtime implementation identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentImportSettings.cs#L19).

## `languageId`

<a id="api-05e974978f040675"></a>
<!-- api: P:Inno.UI.Assets.UiDocumentImportSettings.languageId 1b188288b0623c55b71a00983a26880891afa04fca647aeda46ed082de16e2b9 -->

```csharp
public string Inno.UI.Assets.UiDocumentImportSettings.languageId { get; set; }
```

Gets or sets the registered source-language identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI.Assets/UiDocumentImportSettings.cs#L15).
