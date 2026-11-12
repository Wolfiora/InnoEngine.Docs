---
title: "ImGuiWidget"
description: "Reference for ImGuiWidget in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.7b683e110163fdd5
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGuiWidget`

This reference describes `ImGuiWidget` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Method: #ctor`](member-method---ctor-1957554673e700a1.md) | 1 declarations |
| [`Method: AddGlyphCentered`](member-method--addglyphcentered-23ac89ee89c50ac0.md) | 1 declarations |
| [`Method: AxisDragFloat`](member-method--axisdragfloat-c9999249b6c12e1b.md) | 1 declarations |
| [`Method: AxisDragInt`](member-method--axisdragint-4ff9e51656c976c3.md) | 1 declarations |
| [`Method: BeginBoundedCombo`](member-method--beginboundedcombo-1f96070e06601357.md) | 1 declarations |
| [`Method: BeginContextMenu`](member-method--begincontextmenu-788d28f7e3ccb9d9.md) | 1 declarations |
| [`Method: BeginEdit`](member-method--beginedit-e3361db169ab7cd0.md) | 1 declarations |
| [`Method: BeginMenuPopup`](member-method--beginmenupopup-adeabf5753ed152d.md) | 1 declarations |
| [`Method: BeginMenuSelector`](member-method--beginmenuselector-5b3b61fac9c5f99c.md) | 1 declarations |
| [`Method: BeginMenuTooltip`](member-method--beginmenutooltip-1306264b92c8c25e.md) | 1 declarations |
| [`Method: BeginPropertyEdit`](member-method--beginpropertyedit-286fcea11faed085.md) | 1 declarations |
| [`Method: BeginSearchPopup`](member-method--beginsearchpopup-70fe311c2ab1626a.md) | 1 declarations |
| [`Method: BeginWindowContextMenu`](member-method--beginwindowcontextmenu-9e9b4f74383b8a03.md) | 1 declarations |
| [`Method: CancelEdits`](member-method--canceledits-857b029159ca3007.md) | 1 declarations |
| [`Method: CardBody`](member-method--cardbody-923743f92da29a97.md) | 1 declarations |
| [`Method: CenteredButton`](member-method--centeredbutton-8e383bc92ab5136f.md) | 1 declarations |
| [`Method: CenteredProgressBar`](member-method--centeredprogressbar-1d3f272fe8f6612e.md) | 1 declarations |
| [`Method: CenteredText`](member-method--centeredtext-45c37069a75cdb89.md) | 1 declarations |
| [`Method: CenteredWrappedText`](member-method--centeredwrappedtext-f79ea545708c8e7a.md) | 1 declarations |
| [`Method: Checkbox`](member-method--checkbox-3f3b59e9f7d5c11e.md) | 1 declarations |
| [`Method: ClickableIcon`](member-method--clickableicon-188e8bf99dda545c.md) | 1 declarations |
| [`Method: ClickableText`](member-method--clickabletext-9ac9b4709bd17cb2.md) | 2 declarations |
| [```Method: ClippedRows``1```](member-method--clippedrows--1-784bf7a1fcf6a585.md) | 1 declarations |
| [`Method: CollapsingCard`](member-method--collapsingcard-b7dfc7f4687b812e.md) | 1 declarations |
| [`Method: CollectionSectionHeader`](member-method--collectionsectionheader-e8e67831ae5bc5ad.md) | 1 declarations |
| [`Method: ColoredText`](member-method--coloredtext-d5fa8913401fa110.md) | 1 declarations |
| [`Method: CommitEdits`](member-method--commitedits-8bee5b09f5009f6d.md) | 1 declarations |
| [`Method: CompactCheckbox`](member-method--compactcheckbox-28dbaa681e45de79.md) | 1 declarations |
| [`Method: CompactDragFloat`](member-method--compactdragfloat-58945256cbf3e8f1.md) | 1 declarations |
| [`Method: CompactSliderFloat`](member-method--compactsliderfloat-eece75adb45fc177.md) | 1 declarations |
| [`Method: CompletePropertyEdit`](member-method--completepropertyedit-254066b6963a3055.md) | 1 declarations |
| [`Method: ConstrainedContent`](member-method--constrainedcontent-b486c4a1c83e7dcd.md) | 1 declarations |
| [`Method: Disabled`](member-method--disabled-7056c5a09612e9c7.md) | 1 declarations |
| [```Method: DragDropSource``1```](member-method--dragdropsource--1-52d09030f3fa976f.md) | 2 declarations |
| [```Method: DragDropTarget``1```](member-method--dragdroptarget--1-05d771b044a305f9.md) | 4 declarations |
| [`Method: DrawDialog`](member-method--drawdialog-61a702a7fd648611.md) | 1 declarations |
| [`Method: DrawDisclosureIndicator`](member-method--drawdisclosureindicator-ea719fa7d5251132.md) | 1 declarations |
| [`Method: DrawItemTooltip`](member-method--drawitemtooltip-64abd7ffaa374cb2.md) | 1 declarations |
| [`Method: DrawTooltip`](member-method--drawtooltip-961e39b9de78a2c2.md) | 1 declarations |
| [`Method: DropTargetHighlight`](member-method--droptargethighlight-afcdc1797c0e97f5.md) | 1 declarations |
| [`Method: EndBoundedCombo`](member-method--endboundedcombo-d0905baca2788b58.md) | 1 declarations |
| [`Method: EndContextMenu`](member-method--endcontextmenu-a44066f6ee5e3d4a.md) | 1 declarations |
| [`Method: EndMenuPopup`](member-method--endmenupopup-6b42c1ccaf858ab5.md) | 1 declarations |
| [`Method: EndMenuSelector`](member-method--endmenuselector-b372d057c4dc52e2.md) | 1 declarations |
| [`Method: EndMenuTooltip`](member-method--endmenutooltip-de25595beb9f8c50.md) | 1 declarations |
| [`Method: EndSearchPopup`](member-method--endsearchpopup-12c7077a4f598edf.md) | 1 declarations |
| [`Method: EnsureSection`](member-method--ensuresection-f94c871ed661ef2e.md) | 1 declarations |
| [`Method: GetClickableTextSize`](member-method--getclickabletextsize-87c5276301f17284.md) | 1 declarations |
| [`Method: GetCompactClickableTextSize`](member-method--getcompactclickabletextsize-dbbb85072c9f0b8f.md) | 1 declarations |
| [`Method: GetCompactIconSize`](member-method--getcompacticonsize-30fcc470b1870c86.md) | 1 declarations |
| [`Method: GetGlyphVisualBounds`](member-method--getglyphvisualbounds-912b9d72a49291dc.md) | 1 declarations |
| [`Method: GetIconCatalogWidth`](member-method--geticoncatalogwidth-6525b327f0e61210.md) | 1 declarations |
| [`Method: GetLabelChipSize`](member-method--getlabelchipsize-14e2e09892556516.md) | 1 declarations |
| [`Method: GetTypeBadgeSize`](member-method--gettypebadgesize-929e0d06e0c2eabf.md) | 1 declarations |
| [`Method: HeaderSurface`](member-method--headersurface-531c6ec4cce9d54f.md) | 1 declarations |
| [`Method: HelpBox`](member-method--helpbox-3b93a98453073461.md) | 1 declarations |
| [`Method: Hint`](member-method--hint-153c8d71e0eea74f.md) | 1 declarations |
| [`Method: HoverText`](member-method--hovertext-40cea23486de4449.md) | 1 declarations |
| [`Method: IconText`](member-method--icontext-f58a13d5fed6db56.md) | 1 declarations |
| [`Method: InlineRename`](member-method--inlinerename-cd46e6cb77fe53d8.md) | 1 declarations |
| [`Method: InsertionLine`](member-method--insertionline-ebedf8659d20c8c5.md) | 1 declarations |
| [`Method: IsEditing`](member-method--isediting-2d4673f269a994e3.md) | 1 declarations |
| [`Method: IsTreeNodeOpen`](member-method--istreenodeopen-5f3e5d1f3cd93792.md) | 1 declarations |
| [`Method: LabelChip`](member-method--labelchip-2a328e1f6c25ca38.md) | 1 declarations |
| [`Method: MeasureDialog`](member-method--measuredialog-462ed383ff347359.md) | 1 declarations |
| [`Method: MetadataValue`](member-method--metadatavalue-2c97c9cdf93b2ad2.md) | 2 declarations |
| [`Method: MixedValue`](member-method--mixedvalue-f53a310c2798d6f4.md) | 1 declarations |
| [`Method: NavigateList`](member-method--navigatelist-136d2715eb7aabe5.md) | 1 declarations |
| [`Method: PanelWindow`](member-method--panelwindow-0e25851bfc69c89b.md) | 1 declarations |
| [`Method: PropertyLabel`](member-method--propertylabel-e93cd412bdbb9e80.md) | 1 declarations |
| [`Method: PropertyRow`](member-method--propertyrow-58c49de2830c658e.md) | 2 declarations |
| [`Method: SearchInput`](member-method--searchinput-c56023f6c0159da1.md) | 1 declarations |
| [`Method: SectionHeader`](member-method--sectionheader-d8fba56669ca6f7e.md) | 1 declarations |
| [`Method: SectionLayout`](member-method--sectionlayout-56e43b8a520d91b9.md) | 1 declarations |
| [`Method: SelectTarget`](member-method--selecttarget-d88e110bc67d0472.md) | 1 declarations |
| [`Method: SetNextTreeNodeOpen`](member-method--setnexttreenodeopen-df0328a9e86d62c5.md) | 1 declarations |
| [`Method: SetTreeNodeOpen`](member-method--settreenodeopen-78d28f42fd358b2b.md) | 1 declarations |
| [`Method: SetupPropertyColumns`](member-method--setuppropertycolumns-4b272a88eff99d8c.md) | 1 declarations |
| [`Method: SetupStyle`](member-method--setupstyle-39c07ce4b4cb31ec.md) | 1 declarations |
| [`Method: TransformGizmo`](member-method--transformgizmo-f6b4050d01417d82.md) | 1 declarations |
| [`Method: TreeNode`](member-method--treenode-a13c99d5d042092d.md) | 1 declarations |
| [`Method: Trend`](member-method--trend-449732752c8979ca.md) | 1 declarations |
| [`Method: TypeBadge`](member-method--typebadge-b3d09bb74710dfef.md) | 1 declarations |
| [`Method: WrappedText`](member-method--wrappedtext-6aca5a8e06101962.md) | 2 declarations |
| [`Property: editMergeKey`](member-property--editmergekey-fd2d14806a5dff57.md) | 1 declarations |
| [`Property: isMixedValue`](member-property--ismixedvalue-c2afaf3fa8bbbc52.md) | 1 declarations |
| [`Property: isSectionContentVisible`](member-property--issectioncontentvisible-e972acbf76c8c4ed.md) | 1 declarations |
| [`Property: style`](member-property--style-7b5c6fcdcb96ab6a.md) | 1 declarations |
| [`Property: treeExpansionRevision`](member-property--treeexpansionrevision-8ccafd302ecad56f.md) | 1 declarations |

## Type declaration

<a id="api-7b683e110163fdd5"></a>
<!-- api: T:InnoEditor.ImGui.ImGuiWidget da6537b364d1bc8c8e8298a2d4c9f65adb38cfaf688b9275ee0960057f43ea24 -->

```csharp
public sealed class InnoEditor.ImGui.ImGuiWidget
```

Provides reusable editor controls and rendering helpers built on the native ImGui API.

Submits fixed-height content through the native clipper while retaining explicitly active rows.

Provides reusable editor controls and rendering helpers built on the native ImGui API.

Provides reusable editor controls and rendering helpers built on the native ImGui API.

Presents measured message dialogs through the owning editor UI session.

Provides reusable editor controls and rendering helpers built on the native ImGui API.

Owns session-local controls, native adaptation and reversible edit gestures.

Owns session-local controls, native adaptation and reversible edit gestures.

Provides standard help box presentation in the Editor UI.

Provides reusable editor controls and rendering helpers built on the native ImGui API.

Owns and retires transient controls by session and stable presentation owner.

Presents mixed values using the same controls and shared History.

Reusable editor widgets built on top of `InnoEditor.ImGui.ImGui`.

Provides reusable editor controls and rendering helpers built on the native ImGui API.

Provides reusable editor controls and rendering helpers built on the native ImGui API.

Applies ordered selection gestures through the authoritative interaction owner.

Provides reusable editor controls and rendering helpers built on the native ImGui API.

Provides reusable editor controls and rendering helpers built on the native ImGui API.

Provides reusable editor controls and rendering helpers built on the native ImGui API.

Provides reusable editor controls and rendering helpers built on the native ImGui API.

Provides session-owned numeric trend presentation over borrowed sample buffers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Card.cs#L10).
