---
uid: api.b6d9abe1d6ed6fc6551b02f862bf126b4eb1b166d452772580c29a1ea2c9d8e5
symbol: "engine:Inno.Editor.Assets.ImGui:M:Inno.Editor.Assets.ImGui.AssetBrowserModule.GetIcon(Inno.Assets.Pipeline.AssetFileEntry)"
source: xml
reviewed: 49a14714c8a13b8c815c202c809edc8511f13ef5b882327e6516bf8914e7b0e4
title: "AssetBrowserModule.GetIcon"
kind: api
owners: [Inno.Editor.Assets.ImGui]
apiSurface: source-clr
---

Resolves the presentation icon registered for an asset type or source extension.

**Parameter `entry`:** The source entry whose presentation icon should be resolved.

**Returns:** The most specific registered icon, or the built-in directory or file icon when no registration matches the entry.

**Exception `T:System.ArgumentNullException`:** Thrown when `entry` is `null`.
