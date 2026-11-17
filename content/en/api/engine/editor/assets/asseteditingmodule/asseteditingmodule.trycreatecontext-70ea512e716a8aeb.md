---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.70ea512e716a8aeb0b31dde92fe5652d084e7763d2a2c6e32ad27f758ddd1b87
symbol: engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditingModule.TryCreateContext(Inno.Editor.Core.EditorContext,System.String,Inno.Editor.Assets.AssetEditorContext@)
title: AssetEditingModule.TryCreateContext
kind: api
owners:
- Inno.Editor.Assets
apiSurface: source-clr
reviewed: 17b12cc08aef1f36f4c1b621f00679c030e5d9ed954b3f2a33cd2597971987e9
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `editor`:** The current editor context used only during this invocation.

**Parameter `relativePath`:** The isolated source-relative path to resolve.

**Parameter `context`:** Receives the current source snapshot, or null when the source is unavailable.

## Returns

True when the request is accepted; otherwise false.
