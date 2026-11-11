---
title: "AssetBrowserStyle"
description: "Reference for AssetBrowserStyle in Inno.Editor.Assets.ImGui."
uid: api.inno.editor.assets.imgui.7c2c97482f9d641d
kind: api
owners:
  - Inno.Editor.Assets.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-assets-imgui
---
# `AssetBrowserStyle`

This reference describes `AssetBrowserStyle` in `Inno.Editor.Assets.ImGui`. Read the [shared contract](../../../projects/inno-editor-assets-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4b45cd9e30a1b949) | Method |
| [`breadcrumbHeight`](#api-e17c1f1a647b86b8) | Property |
| [`breadcrumbSpacing`](#api-82f070daf8ed4fe2) | Property |
| [`cellPadding`](#api-a8997555e27c1570) | Property |
| [`frameRounding`](#api-da3bdd57282cde47) | Property |
| [`gridCellPadding`](#api-9dc97a7db078f5e0) | Property |
| [`gridDefaultScale`](#api-be2bae0d68dae772) | Property |
| [`gridFixedCellPadding`](#api-28abd781b2787173) | Property |
| [`gridIconHorizontalPadding`](#api-d65142fc81ddf8b1) | Property |
| [`gridIconLabelSpacing`](#api-d312e513a6725382) | Property |
| [`gridIconTopPadding`](#api-07fa7acba1dd0727) | Property |
| [`gridLabelBottomPadding`](#api-eae95d079958c257) | Property |
| [`gridLabelHorizontalPadding`](#api-ed5336845fa404df) | Property |
| [`gridLabelLineSpacing`](#api-914d7f1ae2c3de9a) | Property |
| [`gridMaximumScale`](#api-ca9048cb7b470b24) | Property |
| [`gridMinimumCellSize`](#api-45ba9450ad9beff8) | Property |
| [`gridMinimumScale`](#api-b94d6096c5a72a37) | Property |
| [`gridScaleBias`](#api-a92b0cc639d93763) | Property |
| [`itemSpacing`](#api-b15eca00e4b4cba1) | Property |
| [`listContentHorizontalPadding`](#api-c6844b83c01b9213) | Property |
| [`listMinimumColumnRatio`](#api-cc2c6ad68f40d08a) | Property |
| [`listNameSeparatorPosition`](#api-3f9832ce53d89a36) | Property |
| [`listRowSpacing`](#api-bd655abef53aa1e1) | Property |
| [`listSeparatorHitWidth`](#api-ea34de16ea901e26) | Property |
| [`listTypeSeparatorPosition`](#api-7a9c3e8b6a3e5795) | Property |
| [`windowPadding`](#api-c83dd929ea4e1f6c) | Property |

## Type declaration

<a id="api-7c2c97482f9d641d"></a>
<!-- api: T:Inno.Editor.Assets.ImGui.AssetBrowserStyle ad35c1deec2700fa10b3e8cafa9afd9cd297547b8fa88cabea5cfe11a201535c -->

```csharp
public readonly struct Inno.Editor.Assets.ImGui.AssetBrowserStyle
```

Freezes Browser-specific layout values from the shared UI scale without retaining a session.
The default value uses the standard 100 percent scale.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L11).

## `#ctor`

<a id="api-4b45cd9e30a1b949"></a>
<!-- api: M:Inno.Editor.Assets.ImGui.AssetBrowserStyle.#ctor(Inno.Editor.ImGui.EditorStyleMetrics) 18183ecaef92497ebd74e2ac4e31ad44e664ce84e3ca9a2578bc2630fbc4d529 -->

```csharp
public Inno.Editor.Assets.ImGui.AssetBrowserStyle.AssetBrowserStyle(Inno.Editor.ImGui.EditorStyleMetrics metrics)
```

Captures the current shared scale for one Browser presentation pass.

**Parameter `metrics`:** The existing session metrics; later mutations do not change this value.

**Throws `System.ArgumentNullException`:** The metrics are null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L24).

## `breadcrumbHeight`

<a id="api-e17c1f1a647b86b8"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserStyle.breadcrumbHeight cccb7f2cf62d7071d6914744b783389528d810f2fb70c68fea75e0f4d8d01931 -->

```csharp
public float Inno.Editor.Assets.ImGui.AssetBrowserStyle.breadcrumbHeight { get; }
```

Gets asset breadcrumb bar height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L53).

## `breadcrumbSpacing`

<a id="api-82f070daf8ed4fe2"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserStyle.breadcrumbSpacing 6e0e2dc6c18c33a081c3c615480d7f512072d999d4101216a74c36d070cfca9e -->

```csharp
public float Inno.Editor.Assets.ImGui.AssetBrowserStyle.breadcrumbSpacing { get; }
```

Gets spacing around breadcrumb separators.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L153).

## `cellPadding`

<a id="api-a8997555e27c1570"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserStyle.cellPadding 69f76c0d77c8ba95c993aa05110b249021752d11732eabf6ae2133d495ce2801 -->

```csharp
public System.Numerics.Vector2 Inno.Editor.Assets.ImGui.AssetBrowserStyle.cellPadding { get; }
```

Gets asset browser cell padding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L38).

## `frameRounding`

<a id="api-da3bdd57282cde47"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserStyle.frameRounding 0e9373d34401d94d885b833df43b6f4905340476324834399921c9e9a14f3ee4 -->

```csharp
public float Inno.Editor.Assets.ImGui.AssetBrowserStyle.frameRounding { get; }
```

Gets asset browser frame rounding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L48).

## `gridCellPadding`

<a id="api-9dc97a7db078f5e0"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserStyle.gridCellPadding 339f6d829d645475913e9a9625ffa5300707c9a6199304fe540d22bfc8b6d317 -->

```csharp
public float Inno.Editor.Assets.ImGui.AssetBrowserStyle.gridCellPadding { get; }
```

Gets asset grid cell padding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L63).

## `gridDefaultScale`

<a id="api-be2bae0d68dae772"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserStyle.gridDefaultScale 03f6620ac7ed31869db169526c373fc4a23a3092748b1ab5cb34a3ebd25063bc -->

```csharp
public float Inno.Editor.Assets.ImGui.AssetBrowserStyle.gridDefaultScale { get; }
```

Gets default asset grid scale.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L68).

## `gridFixedCellPadding`

<a id="api-28abd781b2787173"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserStyle.gridFixedCellPadding 829046eb03c9721e5033480ba850eac37c82c227367e884cd4e68b542ad43fc1 -->

```csharp
public float Inno.Editor.Assets.ImGui.AssetBrowserStyle.gridFixedCellPadding { get; }
```

Gets fixed padding added to calculated asset grid cells.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L128).

## `gridIconHorizontalPadding`

<a id="api-d65142fc81ddf8b1"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserStyle.gridIconHorizontalPadding a00b73aba21f45cfd1d92e14c7bcb4ec781f9252fbbc19c8c8829fad9889be6a -->

```csharp
public float Inno.Editor.Assets.ImGui.AssetBrowserStyle.gridIconHorizontalPadding { get; }
```

Gets the horizontal inset that constrains an asset grid icon inside its card.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L143).

## `gridIconLabelSpacing`

<a id="api-d312e513a6725382"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserStyle.gridIconLabelSpacing 64d4b63243a541ac9263a304ea877d29bf6d9c47e6505ed5a0210fe970ea53ac -->

```csharp
public float Inno.Editor.Assets.ImGui.AssetBrowserStyle.gridIconLabelSpacing { get; }
```

Gets the vertical spacing between an asset grid icon and its label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L148).

## `gridIconTopPadding`

<a id="api-07fa7acba1dd0727"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserStyle.gridIconTopPadding b26135d2706c6ae465b9549fb5d46047d928126d546df1874c5bffd88b8a850e -->

```csharp
public float Inno.Editor.Assets.ImGui.AssetBrowserStyle.gridIconTopPadding { get; }
```

Gets the top inset reserved above an asset grid icon.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L138).

## `gridLabelBottomPadding`

<a id="api-eae95d079958c257"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserStyle.gridLabelBottomPadding d1d3d5a23fd3f98e54cc0f07be61340ba9a4b13fff413730af5bfd7ec8310eb9 -->

```csharp
public float Inno.Editor.Assets.ImGui.AssetBrowserStyle.gridLabelBottomPadding { get; }
```

Gets bottom padding for asset grid labels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L118).

## `gridLabelHorizontalPadding`

<a id="api-ed5336845fa404df"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserStyle.gridLabelHorizontalPadding 3e3e3a7ec54db54e963ab590ecd337a4069027b2ef36b452fd217ff07da7331f -->

```csharp
public float Inno.Editor.Assets.ImGui.AssetBrowserStyle.gridLabelHorizontalPadding { get; }
```

Gets horizontal padding for asset grid labels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L113).

## `gridLabelLineSpacing`

<a id="api-914d7f1ae2c3de9a"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserStyle.gridLabelLineSpacing 49243f4b97a5a98e0a50bb16c461ece97e31896b1e2865df37e6c8830a92c8c6 -->

```csharp
public float Inno.Editor.Assets.ImGui.AssetBrowserStyle.gridLabelLineSpacing { get; }
```

Gets the additional vertical spacing between asset grid label lines.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L123).

## `gridMaximumScale`

<a id="api-ca9048cb7b470b24"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserStyle.gridMaximumScale 9bc49e7142d9584bc515e2f4485e5a21ea67a76242fa038c0aa64bc5d4b2ce5d -->

```csharp
public float Inno.Editor.Assets.ImGui.AssetBrowserStyle.gridMaximumScale { get; }
```

Gets maximum asset grid scale.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L78).

## `gridMinimumCellSize`

<a id="api-45ba9450ad9beff8"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserStyle.gridMinimumCellSize e7c11984710ff279827869aa54ccdab1e46be040e7837ae0894e6da49519e862 -->

```csharp
public float Inno.Editor.Assets.ImGui.AssetBrowserStyle.gridMinimumCellSize { get; }
```

Gets minimum asset grid cell size.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L58).

## `gridMinimumScale`

<a id="api-b94d6096c5a72a37"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserStyle.gridMinimumScale b92c5339fe877a9e3bc76aca2363a68151ae8c18340978f4d9eec0ed38ab4c82 -->

```csharp
public float Inno.Editor.Assets.ImGui.AssetBrowserStyle.gridMinimumScale { get; }
```

Gets minimum asset grid scale.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L73).

## `gridScaleBias`

<a id="api-a92b0cc639d93763"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserStyle.gridScaleBias 4068bfeb70877a20f64a6ffb4b89a3227f7186edc5173e55149f7e95296f3609 -->

```csharp
public float Inno.Editor.Assets.ImGui.AssetBrowserStyle.gridScaleBias { get; }
```

Gets the scale bias added to asset grid icons.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L133).

## `itemSpacing`

<a id="api-b15eca00e4b4cba1"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserStyle.itemSpacing 040d68d12f944ce3f52198652cc254120cf6eb9c2b1b5d940ede6698e52a1dec -->

```csharp
public System.Numerics.Vector2 Inno.Editor.Assets.ImGui.AssetBrowserStyle.itemSpacing { get; }
```

Gets asset browser item spacing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L43).

## `listContentHorizontalPadding`

<a id="api-c6844b83c01b9213"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserStyle.listContentHorizontalPadding 57ea8ab3e8e4f37bea62e5bd81fbf6cbf40012f42da3be441e815c5c97494de6 -->

```csharp
public float Inno.Editor.Assets.ImGui.AssetBrowserStyle.listContentHorizontalPadding { get; }
```

Gets the horizontal inset between an asset list separator and column content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L108).

## `listMinimumColumnRatio`

<a id="api-cc2c6ad68f40d08a"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserStyle.listMinimumColumnRatio 11f783c33a5a3dd246d14bc16449606d573cdedca58c1a4503f405c69fac38b2 -->

```csharp
public float Inno.Editor.Assets.ImGui.AssetBrowserStyle.listMinimumColumnRatio { get; }
```

Gets the minimum normalized width reserved for each asset list column.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L98).

## `listNameSeparatorPosition`

<a id="api-3f9832ce53d89a36"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserStyle.listNameSeparatorPosition 85eb8bbcd41d202116923860f6773307194ab71b89a9996e652c935c143ca56c -->

```csharp
public float Inno.Editor.Assets.ImGui.AssetBrowserStyle.listNameSeparatorPosition { get; }
```

Gets the default normalized position of the asset list name/type separator.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L88).

## `listRowSpacing`

<a id="api-bd655abef53aa1e1"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserStyle.listRowSpacing 0cfd5ba9f76ffad163b38ef0c2093b6611bdc9404c839dc0d257bb17603dc95e -->

```csharp
public float Inno.Editor.Assets.ImGui.AssetBrowserStyle.listRowSpacing { get; }
```

Gets spacing between asset list rows.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L83).

## `listSeparatorHitWidth`

<a id="api-ea34de16ea901e26"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserStyle.listSeparatorHitWidth c88aa4c2f3c50040ec87604a749dd77eff4c88bae5e1db540059cd06d7dae9f7 -->

```csharp
public float Inno.Editor.Assets.ImGui.AssetBrowserStyle.listSeparatorHitWidth { get; }
```

Gets the horizontal hit width of an asset list column separator.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L103).

## `listTypeSeparatorPosition`

<a id="api-7a9c3e8b6a3e5795"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserStyle.listTypeSeparatorPosition 66e94bde6c7ff8449a0ecd835ae85e81344260c1da40524c0aaf97eddfcc4193 -->

```csharp
public float Inno.Editor.Assets.ImGui.AssetBrowserStyle.listTypeSeparatorPosition { get; }
```

Gets the default normalized position of the asset list type/source separator.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L93).

## `windowPadding`

<a id="api-c83dd929ea4e1f6c"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetBrowserStyle.windowPadding 2411320024008f91de6c1f7cb60a7cfe4ec1dadbe6fb0dade37dc31fd567c1d1 -->

```csharp
public System.Numerics.Vector2 Inno.Editor.Assets.ImGui.AssetBrowserStyle.windowPadding { get; }
```

Gets asset browser window padding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L33).
