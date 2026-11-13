---
uid: api.b6d9abe1d6ed6fc6551b02f862bf126b4eb1b166d452772580c29a1ea2c9d8e5
symbol: "engine:Inno.Editor.Assets.ImGui:M:Inno.Editor.Assets.ImGui.AssetBrowserModule.GetIcon(Inno.Assets.Pipeline.AssetFileEntry)"
source: xml
reviewed: d4cbea0cb734b881a5778ff8a52c16a6a28b14ee50402be374cfbb3d6e4fffdb
title: "GetIcon"
kind: api
owners: [Inno.Editor.Assets.ImGui]
apiSurface: source-clr
---

Resolves the presentation icon registered for an asset type or source extension.

**Parameter `entry`:** The source entry whose presentation icon should be resolved.

**Returns:** The most specific registered icon, or the built-in directory or file icon when no registration matches the entry.

**Exception `T:System.ArgumentNullException`:** Thrown when `entry` is `null`.
