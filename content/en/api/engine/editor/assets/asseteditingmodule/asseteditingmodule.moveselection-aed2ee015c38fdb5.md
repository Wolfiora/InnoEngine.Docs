---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.aed2ee015c38fdb59062778d851f1b362d4c33e70f4f2f596fe9a50a87b200fc
symbol: engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditingModule.MoveSelection(System.Collections.Generic.IReadOnlyList{Inno.Assets.Pipeline.AssetFileEntry},System.String)
title: AssetEditingModule.MoveSelection
kind: api
owners:
- Inno.Editor.Assets
apiSurface: source-clr
reviewed: f81be52d1304dcb829efac8bd266ea5771a67a2625314df3efb765e27e0d707b

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Moves selected source roots in one transaction; a later failure restores earlier moves.

## Parameters

**Parameter `targets`:** Live entries, including descendants covered by a selected directory.

**Parameter `targetDirectory`:** The writable project destination.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Any source or destination rejects the operation.
