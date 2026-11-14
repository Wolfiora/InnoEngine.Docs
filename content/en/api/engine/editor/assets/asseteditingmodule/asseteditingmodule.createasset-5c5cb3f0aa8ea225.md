---
uid: api.5c5cb3f0aa8ea2253a882e6ed6e542e23ff18bcb71bd25037e7093e6c4c3fb78
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditingModule.CreateAsset(System.String,System.String)"
source: xml
reviewed: 7091440aea438925532c5c1d0726b46501933eccb2bb5c3e3240af7559cca539
title: "AssetEditingModule.CreateAsset"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Creates and imports a source using a discovered template and records the committed change.

## Parameters

**Parameter `directory`:** The source-relative writable destination directory.

**Parameter `templateId`:** The stable identity of a discovered creation template.

## Returns

The committed source identity, or a validation result describing why the operation is unavailable.
