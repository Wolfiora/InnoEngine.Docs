---
title: Inno.Editor.Assets.ImGui
description: "Reusable asset browsing state, icon discovery, styles and inspection presentation."
uid: project.inno-editor-assets-imgui
kind: project
owners: [Inno.Editor.Assets.ImGui]
---
# Inno.Editor.Assets.ImGui

Reusable asset browsing state, icon discovery, styles and inspection presentation.

## Present asset-owned behavior

[Extend browsing](../../extending/asset-browser.md) explains type/extension icon resolution, Settings-backed glyphs, declared asset behavior and neutral presentation state. File Browser consumes this module; source editing, archiving and History remain in Assets. No Inspector-panel dependency is needed.

Product composition explicitly deploys the assembly. Current TypeRegistry/Editor Registry generations discover declarations and publish complete candidates; no directory scan or global parallel registry is used. Embedded hosts must contribute required appearance settings instead of borrowing another owner's defaults.

AssetBrowserStyle captures current Zoom once without retaining a session or applying DPI twice. Draw controls only in the current owner-thread UI scope. Across frames retain stable IDs/neutral values, not plugin instances, types or delegates. Missing, read-only and unassigned states retain different meaning.

## Source boundary

[Source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Inno.Editor.Assets.ImGui.csproj). Declarations, script selection and runtime behavior require separate matching evidence.

## API reference

[Types and exact member contracts](../../api/engine/editor/assets/imgui/index.md) retain the engine-owned declarations and captured XML.

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Editor script API](../../api/scripting/index.md)
