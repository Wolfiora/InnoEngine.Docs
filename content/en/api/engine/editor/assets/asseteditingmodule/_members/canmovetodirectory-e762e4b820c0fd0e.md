---
uid: api.e762e4b820c0fd0e7b7e8718f73f6f787b8c315a6aac57b38e3038c7e36f8d2f
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditingModule.CanMoveToDirectory(System.String,System.String)"
source: xml
reviewed: 88a7138eb608ae5f25719cd62cb3851a9863058c2db084d7c8cbdc0892922b86
title: "CanMoveToDirectory"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Checks whether a source can move into the destination without a cycle or name collision.

**Parameter `sourcePath`:** The current isolated source-relative path.

**Parameter `targetDirectory`:** The isolated destination directory.

**Returns:** True when the request is accepted; otherwise false.
