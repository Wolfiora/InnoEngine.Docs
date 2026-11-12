---
title: "AssetBrowserStyle"
description: "Reference for AssetBrowserStyle in Inno.Editor.Assets.ImGui."
uid: api.inno.editor.assets.imgui.editor-script.255226e2cf3cf187
kind: api
owners:
  - Inno.Editor.Assets.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-assets-imgui
  - manual.scripting.use-script-api
---
# `AssetBrowserStyle`

This reference describes `AssetBrowserStyle` in `Inno.Editor.Assets.ImGui`. Read the [shared contract](../../projects/inno-editor-assets-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9165d644f9b1a6d1) | Method |
| [`breadcrumbHeight`](#api-0fc320d92b7ea06d) | Property |
| [`breadcrumbSpacing`](#api-2910b3ecc390690d) | Property |
| [`cellPadding`](#api-5e55ec9528fa36a9) | Property |
| [`frameRounding`](#api-23361172750bd91a) | Property |
| [`gridCellPadding`](#api-dac2d52326096655) | Property |
| [`gridDefaultScale`](#api-9943ca6d0ab54a27) | Property |
| [`gridFixedCellPadding`](#api-2058ae374f95426c) | Property |
| [`gridIconHorizontalPadding`](#api-aa75f8a730b32213) | Property |
| [`gridIconLabelSpacing`](#api-2a837cbe0b651a01) | Property |
| [`gridIconTopPadding`](#api-24de052a260051da) | Property |
| [`gridLabelBottomPadding`](#api-a3c468c1489c3413) | Property |
| [`gridLabelHorizontalPadding`](#api-cddecd8903a0eda8) | Property |
| [`gridLabelLineSpacing`](#api-804f64277f96acd4) | Property |
| [`gridMaximumScale`](#api-84f1fadb50f8776d) | Property |
| [`gridMinimumCellSize`](#api-f584f2e5d0f884d3) | Property |
| [`gridMinimumScale`](#api-6adcbff45a6ce236) | Property |
| [`gridScaleBias`](#api-83b4dabde135323c) | Property |
| [`itemSpacing`](#api-5bdce22df74e9eef) | Property |
| [`listContentHorizontalPadding`](#api-113f5e6f8c121915) | Property |
| [`listMinimumColumnRatio`](#api-8df52dde64068fc1) | Property |
| [`listNameSeparatorPosition`](#api-47256441ffdd3808) | Property |
| [`listRowSpacing`](#api-bc55340655973548) | Property |
| [`listSeparatorHitWidth`](#api-432e95917562e27d) | Property |
| [`listTypeSeparatorPosition`](#api-9a00bd5252ac3153) | Property |
| [`windowPadding`](#api-2e00345a614079bc) | Property |

## Type declaration

<a id="api-255226e2cf3cf187"></a>
<!-- api: T:InnoEditor.Assets.AssetBrowserStyle 321e1e7dd93dfae3faec533a66e90dedccee710fbb28259021d8ff6fa3df46c6 -->

```csharp
public readonly struct InnoEditor.Assets.AssetBrowserStyle
```

Freezes Browser-specific layout values from the shared UI scale without retaining a session.
The default value uses the standard 100 percent scale.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L11).

## `#ctor`

<a id="api-9165d644f9b1a6d1"></a>
<!-- api: M:InnoEditor.Assets.AssetBrowserStyle.#ctor(InnoEditor.ImGui.EditorStyleMetrics) 8fe19d3b7dbe2378fec14f7584d2804ddcff54a98ffdfe65e293d067fe48d169 -->

```csharp
public InnoEditor.Assets.AssetBrowserStyle.AssetBrowserStyle(InnoEditor.ImGui.EditorStyleMetrics metrics)
```

Captures the current shared scale for one Browser presentation pass.

**Parameter `metrics`:** The existing session metrics; later mutations do not change this value.

**Throws `System.ArgumentNullException`:** The metrics are null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L24).

## `breadcrumbHeight`

<a id="api-0fc320d92b7ea06d"></a>
<!-- api: P:InnoEditor.Assets.AssetBrowserStyle.breadcrumbHeight 0ac3a6d32a2cb970c9f40f428a10322106edf27ae3cf4cfbb0d7d0c2cd55b9d8 -->

```csharp
public float InnoEditor.Assets.AssetBrowserStyle.breadcrumbHeight { get; }
```

Gets asset breadcrumb bar height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L53).

## `breadcrumbSpacing`

<a id="api-2910b3ecc390690d"></a>
<!-- api: P:InnoEditor.Assets.AssetBrowserStyle.breadcrumbSpacing 2a32d6e257e7c2ff59c903ed11657b2ad0c2a5732998d02764e147dc54a3fd63 -->

```csharp
public float InnoEditor.Assets.AssetBrowserStyle.breadcrumbSpacing { get; }
```

Gets spacing around breadcrumb separators.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L153).

## `cellPadding`

<a id="api-5e55ec9528fa36a9"></a>
<!-- api: P:InnoEditor.Assets.AssetBrowserStyle.cellPadding dfc6640c3cc3bd22272da73e72aa9b69403a5bb915305e9778750685d229592b -->

```csharp
public System.Numerics.Vector2 InnoEditor.Assets.AssetBrowserStyle.cellPadding { get; }
```

Gets asset browser cell padding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L38).

## `frameRounding`

<a id="api-23361172750bd91a"></a>
<!-- api: P:InnoEditor.Assets.AssetBrowserStyle.frameRounding 6c6d5e5f24a02dc22bc5b8620bc5d10096ab0043484ce595e5fbaf132a8d4c95 -->

```csharp
public float InnoEditor.Assets.AssetBrowserStyle.frameRounding { get; }
```

Gets asset browser frame rounding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L48).

## `gridCellPadding`

<a id="api-dac2d52326096655"></a>
<!-- api: P:InnoEditor.Assets.AssetBrowserStyle.gridCellPadding cfa16c7d6cec621bd3ccd8b09767de34142b255ff4874ce976caf2a4379f4831 -->

```csharp
public float InnoEditor.Assets.AssetBrowserStyle.gridCellPadding { get; }
```

Gets asset grid cell padding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L63).

## `gridDefaultScale`

<a id="api-9943ca6d0ab54a27"></a>
<!-- api: P:InnoEditor.Assets.AssetBrowserStyle.gridDefaultScale ec4117db6744775ff73b4c334ab8f95b1face2b0e9614061afb149e25c203656 -->

```csharp
public float InnoEditor.Assets.AssetBrowserStyle.gridDefaultScale { get; }
```

Gets default asset grid scale.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L68).

## `gridFixedCellPadding`

<a id="api-2058ae374f95426c"></a>
<!-- api: P:InnoEditor.Assets.AssetBrowserStyle.gridFixedCellPadding abdeef522784fa1c8c95660d0c25b39447b40d06f61561d8958afd343ca01ad6 -->

```csharp
public float InnoEditor.Assets.AssetBrowserStyle.gridFixedCellPadding { get; }
```

Gets fixed padding added to calculated asset grid cells.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L128).

## `gridIconHorizontalPadding`

<a id="api-aa75f8a730b32213"></a>
<!-- api: P:InnoEditor.Assets.AssetBrowserStyle.gridIconHorizontalPadding 226753cd16c05e7892a012ad7587e0fe2e6608bf801009c6efbf0c7746eaf001 -->

```csharp
public float InnoEditor.Assets.AssetBrowserStyle.gridIconHorizontalPadding { get; }
```

Gets the horizontal inset that constrains an asset grid icon inside its card.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L143).

## `gridIconLabelSpacing`

<a id="api-2a837cbe0b651a01"></a>
<!-- api: P:InnoEditor.Assets.AssetBrowserStyle.gridIconLabelSpacing 86f8cd6802c01ec4c7dd2eabe34052eeca5b9e697d50dfec6e8693dd7819d161 -->

```csharp
public float InnoEditor.Assets.AssetBrowserStyle.gridIconLabelSpacing { get; }
```

Gets the vertical spacing between an asset grid icon and its label.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L148).

## `gridIconTopPadding`

<a id="api-24de052a260051da"></a>
<!-- api: P:InnoEditor.Assets.AssetBrowserStyle.gridIconTopPadding d58e856502072efce64bf97cd73833e4c2434cf039642aac3718903872b0f7f9 -->

```csharp
public float InnoEditor.Assets.AssetBrowserStyle.gridIconTopPadding { get; }
```

Gets the top inset reserved above an asset grid icon.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L138).

## `gridLabelBottomPadding`

<a id="api-a3c468c1489c3413"></a>
<!-- api: P:InnoEditor.Assets.AssetBrowserStyle.gridLabelBottomPadding 31924d30f65d8e0c0f2da3348be0a380789e62965a9ada498f012caca6341a2a -->

```csharp
public float InnoEditor.Assets.AssetBrowserStyle.gridLabelBottomPadding { get; }
```

Gets bottom padding for asset grid labels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L118).

## `gridLabelHorizontalPadding`

<a id="api-cddecd8903a0eda8"></a>
<!-- api: P:InnoEditor.Assets.AssetBrowserStyle.gridLabelHorizontalPadding bca3fb692c6df17e6d9d7e87548ebcef7f002ab618b62bde47d003e3e9f05d63 -->

```csharp
public float InnoEditor.Assets.AssetBrowserStyle.gridLabelHorizontalPadding { get; }
```

Gets horizontal padding for asset grid labels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L113).

## `gridLabelLineSpacing`

<a id="api-804f64277f96acd4"></a>
<!-- api: P:InnoEditor.Assets.AssetBrowserStyle.gridLabelLineSpacing f7fee4191a25c6038cc0cd5053f62df7e30af8bf0b6d8c0f4a2c9a65cffcf954 -->

```csharp
public float InnoEditor.Assets.AssetBrowserStyle.gridLabelLineSpacing { get; }
```

Gets the additional vertical spacing between asset grid label lines.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L123).

## `gridMaximumScale`

<a id="api-84f1fadb50f8776d"></a>
<!-- api: P:InnoEditor.Assets.AssetBrowserStyle.gridMaximumScale 932950a41d651b6bd45ecffa3f31891e8e63990eb4c8b6a5c7dd864b644ccf1c -->

```csharp
public float InnoEditor.Assets.AssetBrowserStyle.gridMaximumScale { get; }
```

Gets maximum asset grid scale.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L78).

## `gridMinimumCellSize`

<a id="api-f584f2e5d0f884d3"></a>
<!-- api: P:InnoEditor.Assets.AssetBrowserStyle.gridMinimumCellSize 5159ac6655f7a41b87a37938246011eaebb15889d40a2da70c0946c73056dcfd -->

```csharp
public float InnoEditor.Assets.AssetBrowserStyle.gridMinimumCellSize { get; }
```

Gets minimum asset grid cell size.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L58).

## `gridMinimumScale`

<a id="api-6adcbff45a6ce236"></a>
<!-- api: P:InnoEditor.Assets.AssetBrowserStyle.gridMinimumScale b362c28930bdc831a9b7f3f47b575170c296df69160665fd4861798a3c119358 -->

```csharp
public float InnoEditor.Assets.AssetBrowserStyle.gridMinimumScale { get; }
```

Gets minimum asset grid scale.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L73).

## `gridScaleBias`

<a id="api-83b4dabde135323c"></a>
<!-- api: P:InnoEditor.Assets.AssetBrowserStyle.gridScaleBias bc0c923cd6c50eebaadcb7352369cf300bd44c59b52d0cb6895e7a414dc70525 -->

```csharp
public float InnoEditor.Assets.AssetBrowserStyle.gridScaleBias { get; }
```

Gets the scale bias added to asset grid icons.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L133).

## `itemSpacing`

<a id="api-5bdce22df74e9eef"></a>
<!-- api: P:InnoEditor.Assets.AssetBrowserStyle.itemSpacing 4529ce1c602855e2b7654ca3d9ca29cb5c179b0af7ac7e18aeb850e9710222ee -->

```csharp
public System.Numerics.Vector2 InnoEditor.Assets.AssetBrowserStyle.itemSpacing { get; }
```

Gets asset browser item spacing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L43).

## `listContentHorizontalPadding`

<a id="api-113f5e6f8c121915"></a>
<!-- api: P:InnoEditor.Assets.AssetBrowserStyle.listContentHorizontalPadding f10ec39afbccb49968f1ce9882e046553af8fe996264c7b6f7247449d6d7aa3b -->

```csharp
public float InnoEditor.Assets.AssetBrowserStyle.listContentHorizontalPadding { get; }
```

Gets the horizontal inset between an asset list separator and column content.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L108).

## `listMinimumColumnRatio`

<a id="api-8df52dde64068fc1"></a>
<!-- api: P:InnoEditor.Assets.AssetBrowserStyle.listMinimumColumnRatio 8cbe282836d88a9002644034f38a90766f27f2ec718500a0eb37aac7482389f1 -->

```csharp
public float InnoEditor.Assets.AssetBrowserStyle.listMinimumColumnRatio { get; }
```

Gets the minimum normalized width reserved for each asset list column.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L98).

## `listNameSeparatorPosition`

<a id="api-47256441ffdd3808"></a>
<!-- api: P:InnoEditor.Assets.AssetBrowserStyle.listNameSeparatorPosition 396a08313c25e367e036421fed29ad371290633e9cdedba062cf043a8052c268 -->

```csharp
public float InnoEditor.Assets.AssetBrowserStyle.listNameSeparatorPosition { get; }
```

Gets the default normalized position of the asset list name/type separator.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L88).

## `listRowSpacing`

<a id="api-bc55340655973548"></a>
<!-- api: P:InnoEditor.Assets.AssetBrowserStyle.listRowSpacing f24ac4a62b00fb85b0ac5625928a3ae83b08a4947c851212c24b7bf71342dded -->

```csharp
public float InnoEditor.Assets.AssetBrowserStyle.listRowSpacing { get; }
```

Gets spacing between asset list rows.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L83).

## `listSeparatorHitWidth`

<a id="api-432e95917562e27d"></a>
<!-- api: P:InnoEditor.Assets.AssetBrowserStyle.listSeparatorHitWidth 809b84a047f47411ab0ce23f8b3c997969871771d067f43cf88a9e17e416e6f0 -->

```csharp
public float InnoEditor.Assets.AssetBrowserStyle.listSeparatorHitWidth { get; }
```

Gets the horizontal hit width of an asset list column separator.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L103).

## `listTypeSeparatorPosition`

<a id="api-9a00bd5252ac3153"></a>
<!-- api: P:InnoEditor.Assets.AssetBrowserStyle.listTypeSeparatorPosition d594ff2f54430d9d995065d9dda9d1d3d578ecae196819d931a2c99a19c95700 -->

```csharp
public float InnoEditor.Assets.AssetBrowserStyle.listTypeSeparatorPosition { get; }
```

Gets the default normalized position of the asset list type/source separator.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L93).

## `windowPadding`

<a id="api-2e00345a614079bc"></a>
<!-- api: P:InnoEditor.Assets.AssetBrowserStyle.windowPadding b1c9669f8dfe4c7cff7a3fd79bf8f94f0b6d81251e0d443732834efbd6242157 -->

```csharp
public System.Numerics.Vector2 InnoEditor.Assets.AssetBrowserStyle.windowPadding { get; }
```

Gets asset browser window padding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Styling/AssetBrowserStyle.cs#L33).
