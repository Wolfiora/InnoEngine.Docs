---
uid: api.80a694f75ec4843085765063f2bb4f63ca1bcdddc6172b4b4c3cfb82bfa64caf
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditor.OnRenamed(Inno.Editor.Assets.AssetEditorContext,System.String,System.String)"
source: xml
reviewed: a83a8faefd16331c752397e87228a8c52a3747d8168d08a47e0fd977b6f3ee8d
title: "OnRenamed"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Runs after an asset move transaction commits successfully.

**Parameter `context`:** The immutable snapshot captured before the move.

**Parameter `oldPath`:** The previous source-relative path.

**Parameter `newPath`:** The committed source-relative destination path.
