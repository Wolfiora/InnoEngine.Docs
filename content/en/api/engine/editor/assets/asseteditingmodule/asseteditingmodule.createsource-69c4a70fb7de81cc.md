---
uid: api.69c4a70fb7de81cce74f2f2a25998e63e58a236310d5f834c19e04553f8cb692
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditingModule.CreateSource(Inno.Assets.AssetPath,System.ReadOnlySpan{System.Byte})"
source: xml
reviewed: 0363ffa65e29b7af73851a3307d8e3d5acfeab9c96a188f00cd2025fc442b786
title: "AssetEditingModule.CreateSource"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Creates a native or ordinary-text asset source as one recoverable shared-history operation.

**Parameter `path`:** A new file in an existing writable asset directory.

**Parameter `bytes`:** Complete source bytes supplied by the feature's native writer.

**Returns:** The indexed source identity, even when its first import reports a source error.

**Exception `T:System.IO.IOException`:** The source already exists, has no existing parent, or cannot be installed.

**Exception `T:System.InvalidOperationException`:** The source mount is unavailable/read-only or history cannot retain the change.
